const fs = require('fs');
const path = require('path');

const PACKAGE_ROOT = path.resolve(__dirname, '..');
const platformsDir = path.join(PACKAGE_ROOT, 'knowledge/platforms');
const files = fs.readdirSync(platformsDir).filter(f => f.endsWith('.md') && f !== 'index.json');

function parseMarkdown(content, slug) {
  const result = {
    slug,
    title: '',
    url: '',
    description: '',
    language: '',
    good_fit: [],
    poor_fit: [],
    style_points: [],
    tone: '',
    source: `legacy-skills/${slug}/SKILL.md` // Default source structure
  };

  // Title (First H1)
  const titleMatch = content.match(/^#\s+(.+)$/m);
  if (titleMatch) {
    result.title = titleMatch[1].trim();
  }

  // URL
  const urlMatch = content.match(/^URL:\s*(.+)$/m);
  if (urlMatch) {
    result.url = urlMatch[1].trim();
  }

  // Source if explicitly specified in MD
  const sourceMatch = content.match(/^Source:\s*`?([^`\n]+)`?/m);
  if (sourceMatch) {
    result.source = sourceMatch[1].trim();
  }

  // Parse Sections
  const sections = {};
  const sectionHeaders = [
    'Trigger Context',
    'Language',
    'Good Fit',
    'Poor Fit',
    'Format And Style Notes',
    'Tone',
    'Adapter Guidance'
  ];

  let currentSection = null;
  let currentLines = [];

  const lines = content.split('\n');
  for (const line of lines) {
    const headerMatch = line.match(/^##\s+(.+)$/);
    if (headerMatch) {
      if (currentSection) {
        sections[currentSection] = currentLines.join('\n').trim();
      }
      currentSection = headerMatch[1].trim();
      currentLines = [];
    } else {
      if (currentSection) {
        currentLines.push(line);
      }
    }
  }
  if (currentSection) {
    sections[currentSection] = currentLines.join('\n').trim();
  }

  // Map to fields
  if (sections['Trigger Context']) {
    result.description = sections['Trigger Context'];
  }
  if (sections['Language']) {
    result.language = sections['Language'];
  }
  if (sections['Tone']) {
    result.tone = sections['Tone'];
  }

  // Helper to parse list items
  const parseList = (text) => {
    if (!text) return [];
    return text
      .split('\n')
      .map(line => line.trim())
      .filter(line => line.startsWith('-') || line.startsWith('*') || /^\d+\./.test(line))
      .map(line => line.replace(/^([-*]|\d+\.)\s+/, '').trim());
  };

  result.good_fit = parseList(sections['Good Fit']);
  result.poor_fit = parseList(sections['Poor Fit']);
  result.style_points = parseList(sections['Format And Style Notes']);

  return result;
}

// Load skill-registry.json to fetch classifications
const registryPath = path.join(PACKAGE_ROOT, 'skill-registry.json');
const registry = JSON.parse(fs.readFileSync(registryPath, 'utf8'));
const platformMetaMap = {};
for (const item of registry.platform_knowledge) {
  platformMetaMap[item.slug] = {
    primary_language: item.primary_language,
    categories: item.categories,
    target_audience: item.target_audience
  };
}

// Compile all files
const indexData = [];
// Sort files alphabetically to keep the output stable
files.sort().forEach(file => {
  const slug = file.replace('.md', '');
  const filePath = path.join(platformsDir, file);
  const content = fs.readFileSync(filePath, 'utf8');
  const parsed = parseMarkdown(content, slug);
  
  // Merge classification fields
  const meta = platformMetaMap[slug] || {
    primary_language: 'en',
    categories: ['technical-blog'],
    target_audience: 'developers'
  };
  
  parsed.primary_language = meta.primary_language;
  parsed.categories = meta.categories;
  parsed.target_audience = meta.target_audience;
  
  indexData.push(parsed);
});

// Write to index.json with 2 spaces formatting
fs.writeFileSync(path.join(PACKAGE_ROOT, 'knowledge/index.json'), JSON.stringify(indexData, null, 2) + '\n', 'utf8');
console.log(`Compiled ${indexData.length} platform profiles into knowledge/index.json`);

