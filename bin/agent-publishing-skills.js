#!/usr/bin/env node

const fs = require("fs");
const os = require("os");
const path = require("path");

const PACKAGE_ROOT = path.resolve(__dirname, "..");

const RESOURCE_ENTRIES = [
  "skills",
  "knowledge",
  "templates",
  "schemas",
  "skill-registry.json",
];

const GEMINI_ENTRIES = [...RESOURCE_ENTRIES, "gemini-extension.json"];

function main() {
  const [command, ...rawArgs] = process.argv.slice(2);

  if (!command || command === "help" || command === "--help" || command === "-h") {
    printHelp();
    return;
  }

  if (command === "version" || command === "--version" || command === "-v") {
    const packageJson = readJson(path.join(PACKAGE_ROOT, "package.json"));
    console.log(packageJson.version);
    return;
  }

  if (command !== "install") {
    fail(`Unknown command: ${command}`);
  }

  install(parseArgs(rawArgs));
}

function parseArgs(args) {
  const options = {
    target: null,
    scope: "project",
    dir: process.cwd(),
    dryRun: false,
    force: false,
  };

  for (let index = 0; index < args.length; index += 1) {
    const arg = args[index];

    if (arg === "--dry-run") {
      options.dryRun = true;
    } else if (arg === "--force") {
      options.force = true;
    } else if (arg === "--target" || arg === "-t") {
      options.target = readValue(args, ++index, arg);
    } else if (arg.startsWith("--target=")) {
      options.target = arg.slice("--target=".length);
    } else if (arg === "--scope" || arg === "-s") {
      options.scope = readValue(args, ++index, arg);
    } else if (arg.startsWith("--scope=")) {
      options.scope = arg.slice("--scope=".length);
    } else if (arg === "--dir" || arg === "-d") {
      options.dir = readValue(args, ++index, arg);
    } else if (arg.startsWith("--dir=")) {
      options.dir = arg.slice("--dir=".length);
    } else {
      fail(`Unknown option: ${arg}`);
    }
  }

  if (!options.target) {
    fail("Missing required option: --target");
  }

  options.target = normalizeTarget(options.target);
  options.scope = normalizeScope(options.scope);
  options.dir = path.resolve(expandHome(options.dir));

  return options;
}

function install(options) {
  const destination = resolveDestination(options);
  const entries = options.target === "gemini" ? GEMINI_ENTRIES : RESOURCE_ENTRIES;

  if (options.target === "gemini") {
    console.log("Gemini CLI can also install this repository directly:");
    console.log("  gemini extensions install https://github.com/<owner>/agent-publishing-skills");
    console.log("");
  }

  console.log(`Installing agent-publishing-skills for ${options.target}`);
  console.log(`Destination: ${destination}`);

  for (const entry of entries) {
    const source = path.join(PACKAGE_ROOT, entry);
    const target = path.join(destination, entry);

    if (!fs.existsSync(source)) {
      fail(`Package is missing required resource: ${entry}`);
    }

    copyEntry(source, target, options);
  }

  console.log(options.dryRun ? "Dry run complete." : "Install complete.");
}

function resolveDestination(options) {
  if (options.target === "claude") {
    return options.scope === "user"
      ? path.join(os.homedir(), ".claude")
      : path.join(options.dir, ".claude");
  }

  if (options.target === "opencode") {
    return options.scope === "user"
      ? path.join(os.homedir(), ".config", "opencode")
      : path.join(options.dir, ".opencode");
  }

  if (options.target === "codex") {
    return options.scope === "user"
      ? path.join(os.homedir(), ".codex", "vendor_imports", "agent-publishing-skills")
      : path.join(options.dir, ".codex", "agent-publishing-skills");
  }

  if (options.target === "gemini") {
    return options.scope === "user"
      ? path.join(os.homedir(), ".gemini", "extensions", "agent-publishing-skills")
      : path.join(options.dir, ".gemini", "extensions", "agent-publishing-skills");
  }

  fail(`Unsupported target: ${options.target}`);
}

function copyEntry(source, target, options) {
  if (options.dryRun) {
    dryRunCopy(source, target, options);
    return;
  }

  mergeCopy(source, target, options);
}

function dryRunCopy(source, target, options) {
  const stats = fs.statSync(source);

  if (stats.isDirectory()) {
    for (const entry of fs.readdirSync(source)) {
      dryRunCopy(path.join(source, entry), path.join(target, entry), options);
    }
    return;
  }

  const exists = fs.existsSync(target);
  if (exists && !options.force) {
    console.log(`skip ${relative(target)} (exists; use --force to overwrite)`);
    return;
  }

  console.log(`${exists ? "replace" : "copy"} ${relative(source)} -> ${relative(target)}`);
}

function mergeCopy(source, target, options) {
  const stats = fs.statSync(source);

  if (stats.isDirectory()) {
    fs.mkdirSync(target, { recursive: true });

    for (const entry of fs.readdirSync(source)) {
      mergeCopy(path.join(source, entry), path.join(target, entry), options);
    }
    return;
  }

  const exists = fs.existsSync(target);

  if (exists && !options.force) {
    console.log(`skip ${relative(target)} (exists; use --force to overwrite)`);
    return;
  }

  fs.mkdirSync(path.dirname(target), { recursive: true });

  if (exists) {
    fs.rmSync(target, { force: true });
  }

  fs.copyFileSync(source, target);
  console.log(`${exists ? "replaced" : "copied"} ${relative(target)}`);
}

function normalizeTarget(target) {
  const normalized = target.toLowerCase();
  const aliases = {
    claude: "claude",
    anthropic: "claude",
    opencode: "opencode",
    opencla: "opencode",
    openclaw: "opencode",
    codex: "codex",
    openai: "codex",
    "openai-codex": "codex",
    gemini: "gemini",
    "gemini-cli": "gemini",
  };

  if (!aliases[normalized]) {
    fail(`Unsupported target "${target}". Use claude, opencode, codex, or gemini.`);
  }

  return aliases[normalized];
}

function normalizeScope(scope) {
  const normalized = scope.toLowerCase();

  if (normalized !== "project" && normalized !== "user") {
    fail(`Unsupported scope "${scope}". Use project or user.`);
  }

  return normalized;
}

function readValue(args, index, optionName) {
  const value = args[index];

  if (!value || value.startsWith("-")) {
    fail(`Missing value for ${optionName}`);
  }

  return value;
}

function expandHome(value) {
  if (value === "~") {
    return os.homedir();
  }

  if (value.startsWith(`~${path.sep}`) || value.startsWith("~/")) {
    return path.join(os.homedir(), value.slice(2));
  }

  return value;
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

function relative(filePath) {
  return path.relative(process.cwd(), filePath) || ".";
}

function printHelp() {
  console.log(`agent-publishing-skills

Usage:
  agent-publishing-skills install --target <target> [options]
  agent-publishing-skills version

Targets:
  claude      Install to .claude/ or ~/.claude/
  opencode    Install to .opencode/ or ~/.config/opencode/
  codex       Install to .codex/agent-publishing-skills/ or ~/.codex/vendor_imports/agent-publishing-skills/
  gemini      Install as a Gemini CLI extension directory

Options:
  -t, --target <target>   claude, opencode, codex, or gemini
  -s, --scope <scope>     project or user (default: project)
  -d, --dir <path>        project directory for project installs (default: current directory)
      --force             overwrite existing installed files
      --dry-run           print planned copies without writing files
  -h, --help              show help
  -v, --version           show version

Examples:
  agent-publishing-skills install --target claude --dir ./my-project
  agent-publishing-skills install --target opencode --scope user
  agent-publishing-skills install --target gemini --scope project --force
`);
}

function fail(message) {
  console.error(`Error: ${message}`);
  process.exit(1);
}

main();
