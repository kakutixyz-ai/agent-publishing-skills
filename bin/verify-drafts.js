#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const Ajv = require("ajv/dist/2020");

const PACKAGE_ROOT = path.resolve(__dirname, "..");
const SCHEMAS_DIR = path.join(PACKAGE_ROOT, "schemas");
const PLATFORMS_DIR = path.join(PACKAGE_ROOT, "knowledge/platforms");

// Patterns to detect placeholders
const PLACEHOLDER_PATTERNS = [
  /\[\s*(?:Insert|TODO|待补充|请补充|请填写|你的|您的|your-)[^\]]*\]/i,
  /your-(?:username|repo|github|project|app)/i,
  /\byour_username\b/i,
  /\bexample\.com\b/i,
  /\blokiflow\b/i,
  /\[[^\]]*\]\(\s*\)/,         // Empty markdown links e.g. [text]()
  /\[[^\]]*\]\(\s*#\s*\)/      // Empty hash markdown links e.g. [text](#)
];

// Anti-spam rules and hype words
const HYPE_WORDS = [
  "revolutionary",
  "game-changer",
  "game-changing",
  "the best",
  "颠覆性",
  "最强",
  "完美"
];

const UPVOTE_PATTERNS = [
  /upvote/i,
  /vote/i,
  /like/i,
  /star/i,
  /follow/i,
  /retweet/i,
  /点赞/i,
  /收藏/i,
  /关注/i,
  /投币/i,
  /一键三连/i
];

function main() {
  const args = process.argv.slice(2);
  let briefPath = path.join(PACKAGE_ROOT, "project-brief.json");
  let draftsDir = path.join(PACKAGE_ROOT, "drafts");

  for (let i = 0; i < args.length; i++) {
    if (args[i] === "--brief" || args[i] === "-b") {
      briefPath = path.resolve(args[++i]);
    } else if (args[i] === "--drafts" || args[i] === "-d") {
      draftsDir = path.resolve(args[++i]);
    } else if (args[i] === "--help" || args[i] === "-h") {
      printHelp();
      process.exit(0);
    }
  }

  console.log(`Starting draft verification...`);
  console.log(`Project Brief: ${relative(briefPath)}`);
  console.log(`Drafts Directory: ${relative(draftsDir)}`);

  // 1. Load package.json for default package name & version
  let packageJson = {};
  try {
    packageJson = JSON.parse(fs.readFileSync(path.join(PACKAGE_ROOT, "package.json"), "utf8"));
  } catch (e) {
    console.error("Warning: Failed to load package.json");
  }

  // 2. Load and validate project brief
  let brief;
  try {
    brief = loadProjectBrief(briefPath);
    console.log("✔ Project brief matches schema.");
  } catch (err) {
    console.error(`✖ Error validating project brief: ${err.message}`);
    process.exit(1);
  }

  // 3. Extract allowed URLs
  const allowedUrls = extractAllowedUrls(brief, packageJson.name);

  // 4. Find all draft files
  if (!fs.existsSync(draftsDir)) {
    console.log(`✔ Drafts directory does not exist. Skipping verification.`);
    process.exit(0);
  }

  const files = fs.readdirSync(draftsDir).filter(f => f.endsWith(".md"));
  if (files.length === 0) {
    console.log(`✔ No draft files found in ${relative(draftsDir)}.`);
    process.exit(0);
  }

  let totalIssues = 0;
  let totalFilesChecked = 0;

  for (const file of files) {
    const filePath = path.join(draftsDir, file);
    const content = fs.readFileSync(filePath, "utf8");
    totalFilesChecked++;

    console.log(`\nChecking draft: ${file}...`);
    const issues = verifyDraft(file, content, brief, allowedUrls);

    if (issues.length > 0) {
      console.log(`❌ Found ${issues.length} issue(s) in ${file}:`);
      for (const issue of issues) {
        const severityStr = issue.severity.toUpperCase().padStart(6);
        console.log(`  [${severityStr}] ${issue.message}`);
        if (issue.severity === "high" || issue.severity === "medium") {
          totalIssues++;
        }
      }
    } else {
      console.log(`✔ ${file} passed all programmatic checks.`);
    }
  }

  console.log(`\nVerification Summary:`);
  console.log(`Checked ${totalFilesChecked} files.`);
  if (totalIssues > 0) {
    console.error(`✖ Failed. Found ${totalIssues} medium/high severity issue(s).`);
    process.exit(1);
  } else {
    console.log(`✔ Success. All drafts passed validation.`);
    process.exit(0);
  }
}

function loadProjectBrief(briefPath) {
  if (!fs.existsSync(briefPath)) {
    throw new Error(`Brief file not found: ${briefPath}`);
  }
  const content = fs.readFileSync(briefPath, "utf8");
  const brief = JSON.parse(content);

  const schemaPath = path.join(SCHEMAS_DIR, "project-brief.schema.json");
  const schema = JSON.parse(fs.readFileSync(schemaPath, "utf8"));

  const ajv = new Ajv({ allErrors: true, strict: false });
  const validate = ajv.compile(schema);
  const isValid = validate(brief);
  if (!isValid) {
    throw new Error(`JSON Schema mismatch:\n${JSON.stringify(validate.errors, null, 2)}`);
  }

  return brief;
}

function extractAllowedUrls(brief, packageName) {
  const exactUrls = new Set();
  
  function collect(obj) {
    if (typeof obj === "string") {
      if (obj.startsWith("http://") || obj.startsWith("https://")) {
        exactUrls.add(obj.trim());
      }
    } else if (typeof obj === "object" && obj !== null) {
      for (const val of Object.values(obj)) {
        collect(val);
      }
    }
  }
  collect(brief);

  const allowedRepos = [];
  const allowedWebsites = [];

  if (brief.links) {
    if (brief.links.repository) {
      allowedRepos.push(normalizeRepoUrl(brief.links.repository));
    }
    if (brief.links.website) {
      allowedWebsites.push(brief.links.website);
    }
  }

  if (packageName) {
    const npmUrl = `https://www.npmjs.com/package/${packageName}`;
    exactUrls.add(npmUrl);
    allowedWebsites.push(npmUrl);
  }

  return {
    exactUrls,
    allowedRepos,
    allowedWebsites
  };
}

function normalizeRepoUrl(url) {
  return url.replace(/^git\+/, "").replace(/\.git$/, "").replace(/\/$/, "").toLowerCase();
}

function getPlatformMarkdownPath(slug) {
  const specialCases = {
    juejin: "掘金",
    zhihu: "知乎",
    sspai: "少数派",
    oschina: "开源中国"
  };
  const targetBase = (specialCases[slug] || slug).toLowerCase();
  
  const files = fs.readdirSync(PLATFORMS_DIR).filter(f => f.endsWith(".md"));
  for (const file of files) {
    const base = path.basename(file, ".md").toLowerCase();
    if (base === targetBase) {
      return path.join(PLATFORMS_DIR, file);
    }
  }
  const targetBaseNoHyphens = targetBase.replace(/-/g, "");
  for (const file of files) {
    const base = path.basename(file, ".md").toLowerCase().replace(/-/g, "");
    if (base === targetBaseNoHyphens) {
      return path.join(PLATFORMS_DIR, file);
    }
  }
  return null;
}

function loadPlatformMetadata(platformSlug) {
  const meta = {
    platformUrls: [],
    platformDomains: []
  };

  const mdPath = getPlatformMarkdownPath(platformSlug);
  if (mdPath && fs.existsSync(mdPath)) {
    const content = fs.readFileSync(mdPath, "utf8");
    const urlLine = content.match(/^URL:\s*(https?:\/\/\S+)/im);
    if (urlLine) {
      const uStr = urlLine[1].trim();
      meta.platformUrls.push(uStr);
      try {
        const u = new URL(uStr);
        meta.platformDomains.push(u.hostname.toLowerCase());
      } catch (e) {}
    }

    // Extract other URLs mentioned in markdown profile
    const mdUrls = content.match(/https?:\/\/[^\s\)\],`"<>]+/g);
    if (mdUrls) {
      for (const u of mdUrls) {
        meta.platformUrls.push(u);
      }
    }
  }

  return meta;
}

function parseYamlMetadata(body) {
  const yamlRegex = /```yaml\s*\n([\s\S]*?)\n```/;
  const match = body.match(yamlRegex);
  if (!match) return null;

  const yamlStr = match[1];
  const obj = {};
  const lines = yamlStr.split("\n");
  for (const line of lines) {
    const colonIndex = line.indexOf(":");
    if (colonIndex !== -1) {
      const key = line.slice(0, colonIndex).trim();
      let val = line.slice(colonIndex + 1).trim();
      if (val.startsWith("[") && val.endsWith("]")) {
        try {
          val = JSON.parse(val);
        } catch (e) {
          val = val.slice(1, -1).split(",").map(s => s.trim().replace(/^["']|["']$/g, ""));
        }
      } else {
        val = val.replace(/^["']|["']$/g, "");
      }
      obj[key] = val;
    }
  }
  return obj;
}

function verifyDraft(filename, content, brief, allowedUrls) {
  const issues = [];

  // 1. Scan for placeholders in the draft content
  for (const pattern of PLACEHOLDER_PATTERNS) {
    if (pattern.test(content)) {
      const match = content.match(pattern);
      issues.push({
        severity: "high",
        message: `Placeholder detected: "${match[0]}"`
      });
    }
  }

  // 2. Scan for anti-spam rules (vote requesting)
  for (const pattern of UPVOTE_PATTERNS) {
    const regex = new RegExp(`\\b${pattern.source}\\b`, "i");
    if (regex.test(content)) {
      issues.push({
        severity: "medium",
        message: `Potential vote/like request detected matching: "${pattern.source}"`
      });
    }
  }

  // 3. Scan for hype words
  for (const hypeWord of HYPE_WORDS) {
    const regex = new RegExp(`\\b${hypeWord}\\b`, "i");
    if (regex.test(content)) {
      issues.push({
        severity: "low",
        message: `Hype word detected: "${hypeWord}"`
      });
    }
  }

  // 4. Parse YAML metadata to identify the target platform
  const meta = parseYamlMetadata(content);
  let targetPlatform = path.basename(filename, ".md").toLowerCase();
  if (meta && meta.platform) {
    targetPlatform = meta.platform.toLowerCase();
  }

  const platformMetadata = loadPlatformMetadata(targetPlatform);

  // 5. Extract all URLs from markdown links or raw URLs
  const urlRegex = /https?:\/\/[^\s\)\],`"<>]+/g;
  const urls = content.match(urlRegex) || [];

  for (const urlStr of urls) {
    try {
      const parsedUrl = new URL(urlStr);
      const hostname = parsedUrl.hostname.toLowerCase();
      const pathname = parsedUrl.pathname;

      // Check if it's exact match
      if (allowedUrls.exactUrls.has(urlStr) || allowedUrls.exactUrls.has(urlStr + "/")) {
        continue;
      }

      // Check GitHub URL specifically
      if (hostname === "github.com") {
        let isAllowedGit = false;
        
        // Allowed repository prefix check
        for (const allowedRepo of allowedUrls.allowedRepos) {
          const normalized = normalizeRepoUrl(urlStr);
          if (normalized.startsWith(allowedRepo)) {
            isAllowedGit = true;
            break;
          }
        }

        // Generic allowed paths on GitHub
        const allowedGitPaths = ["/topics/awesome-list", "/discussions"];
        if (allowedGitPaths.some(p => pathname.startsWith(p))) {
          isAllowedGit = true;
        }

        // Allowed platform examples
        if (platformMetadata.platformUrls.some(pu => pu.toLowerCase().includes(urlStr.toLowerCase()))) {
          isAllowedGit = true;
        }

        if (!isAllowedGit) {
          issues.push({
            severity: "high",
            message: `Hallucinated GitHub URL: "${urlStr}". Expected repository is "${brief.links.repository || "not specified"}"`
          });
        }
        continue;
      }

      // Check NPM URL specifically
      if (hostname === "www.npmjs.com" || hostname === "npmjs.com") {
        let isAllowedNpm = false;
        for (const allowedWebsite of allowedUrls.allowedWebsites) {
          if (urlStr.toLowerCase().startsWith(allowedWebsite.toLowerCase())) {
            isAllowedNpm = true;
            break;
          }
        }

        if (!isAllowedNpm && pathname.startsWith("/package/")) {
          issues.push({
            severity: "high",
            message: `Hallucinated npm package URL: "${urlStr}".`
          });
        }
        continue;
      }

      // Check platform domains/urls
      const isPlatformUrl = platformMetadata.platformDomains.some(d => hostname.endsWith(d)) ||
                            platformMetadata.platformUrls.some(pu => urlStr.toLowerCase().startsWith(pu.toLowerCase()));
      if (isPlatformUrl) {
        continue;
      }

      // Allowed common domains
      const COMMON_DOMAINS = [
        "npmjs.com",
        "www.npmjs.com",
        "github.com",
        "nodejs.org",
        "node.js",
        "json-schema.org",
        "wikipedia.org",
        "w3.org"
      ];
      if (COMMON_DOMAINS.some(d => hostname === d || hostname.endsWith("." + d))) {
        continue;
      }

      // Allowed by other website domain from the brief
      let isAllowedHost = false;
      for (const exactUrl of allowedUrls.exactUrls) {
        try {
          const allowedHost = new URL(exactUrl).hostname.toLowerCase();
          if (hostname === allowedHost || hostname.endsWith("." + allowedHost)) {
            isAllowedHost = true;
            break;
          }
        } catch (e) {}
      }

      if (!isAllowedHost) {
        issues.push({
          severity: "medium",
          message: `Unrecognized / potential hallucinated URL: "${urlStr}". Not found in project-brief.json links.`
        });
      }

    } catch (e) {
      if (!urlStr.startsWith("/") && !urlStr.startsWith("#")) {
        issues.push({
          severity: "medium",
          message: `Invalid URL format: "${urlStr}"`
        });
      }
    }
  }

  return issues;
}

function relative(filePath) {
  return path.relative(PACKAGE_ROOT, filePath) || ".";
}

function printHelp() {
  console.log(`verify-drafts

Usage:
  node bin/verify-drafts.js [options]

Options:
  -b, --brief <path>      Path to the project brief JSON file (default: project-brief.json)
  -d, --drafts <path>     Path to the drafts directory to verify (default: drafts/)
  -h, --help              Show help information
`);
}

if (require.main === module) {
  main();
}

module.exports = {
  verifyDraft,
  loadProjectBrief,
  extractAllowedUrls
};
