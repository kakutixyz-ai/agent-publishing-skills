const fs = require('fs');
const path = require('path');

const PACKAGE_ROOT = path.resolve(__dirname, '..');
const registryPath = path.join(PACKAGE_ROOT, 'skill-registry.json');
const templatesDir = path.join(PACKAGE_ROOT, 'templates/platforms');

if (!fs.existsSync(registryPath)) {
  console.error(`Registry not found at ${registryPath}`);
  process.exit(1);
}

const registry = JSON.parse(fs.readFileSync(registryPath, 'utf8'));
const platforms = registry.platform_knowledge || [];

console.log(`Found ${platforms.length} platforms in registry.`);

const PLATFORM_OVERRIDES = new Set([
  'dev-community',
  'hacker-news',
  'medium',
  'product-hunt',
  'qiita',
  'reddit',
  'zenn',
  '掘金',
  '知乎'
]);

function templateTypeForAdapter(adapter) {
  switch (adapter) {
    case 'adapter-community-discussion':
    case 'adapter-hn':
    case 'adapter-reddit':
      return 'discussion';
    case 'adapter-launch':
    case 'adapter-producthunt':
      return 'launch';
    case 'adapter-showcase':
      return 'showcase';
    case 'adapter-social-shortform':
      return 'shortform';
    case 'adapter-technical-blog':
    case 'adapter-devto':
    case 'adapter-zenn':
    case 'adapter-qiita':
    default:
      return 'article';
  }
}

function templateFileName(templateType) {
  return `${templateType}.md`;
}

const templatesMap = {
  article: `# {{title}}

## Problem

{{problem}}

## Context

{{context}}

## Implementation

{{implementation}}

## Result

{{result}}

## Limitations

{{limitations}}

## References

{{references}}
`,

  discussion: `# {{title}}

## Background

{{background}}

## Core Proposal / Idea

{{idea}}

## Points for Discussion

{{discussion_points}}

## Call to Action / Question for Community

{{question}}
`,

  launch: `# {{project_name}}

{{one_sentence_value}}

## Who It Is For

{{target_user}}

## What It Does

{{core_features}}

## What Is Available Today

{{available_now}}

## Proof / Demo

{{evidence}}

## Limitations

{{limitations}}
`,

  showcase: `# {{project_name}}

## Summary

{{summary}}

## Demo

{{demo}}

## Technical Notes

{{technical_notes}}

## Feedback Wanted

{{feedback_request}}
`,

  shortform: `{{main_hook}}

{{core_insight}}

{{link_or_call_to_action}}
`
};

let count = 0;

fs.rmSync(templatesDir, { recursive: true, force: true });
fs.mkdirSync(templatesDir, { recursive: true });

for (const platform of platforms) {
  const { slug, recommended_adapter } = platform;
  const templateType = templateTypeForAdapter(recommended_adapter);
  let frontMatter = '';

  if (!PLATFORM_OVERRIDES.has(slug)) {
    continue;
  }

  if (slug === 'zenn') {
    frontMatter = `---
title: "記事のタイトル"
emoji: "🐱"
type: "tech" # tech: 技術記事, idea: アイデア・エッセイ
topics: ["nextjs", "react", "typescript"]
published: false
---
`;
  } else if (slug === 'dev-community' || slug === 'devto') {
    frontMatter = `---
title: "Article Title"
published: false
description: "A short description of the article"
tags: ["javascript", "webdev", "beginners"]
cover_image: "https://direct_url_to_image.png"
canonical_url: "https://myblog.com/canonical"
---
`;
  } else if (slug === 'qiita') {
    frontMatter = `---
title: "記事のタイトル"
tags: ["Node.js", "React", "TypeScript"]
private: true
updated_at: ""
id: null
organization_url_name: null
slide: false
ignorePublish: false
---
`;
  } else if (slug === 'product-hunt') {
    frontMatter = `---
name: "Project Name"
tagline: "A 60-character tagline of your project"
description: "Detailed description of the project"
tags: ["Developer Tools", "Open Source", "Productivity"]
link: "https://yourproject.com"
thumbnail: "https://yourproject.com/thumbnail.png"
gallery:
  - "https://yourproject.com/screenshot1.png"
  - "https://yourproject.com/screenshot2.png"
makers: ["username"]
---
`;
  } else if (slug === 'hacker-news') {
    frontMatter = `---
title: "Show HN: Project Name – One sentence value proposition"
url: "https://yourproject.com"
---
`;
  } else if (slug === 'reddit') {
    frontMatter = `---
subreddit: "r/javascript"
title: "Post Title"
url: "https://yourproject.com"
tags: ["Showoff Saturday", "Resource"]
---
`;
  } else if (slug === '掘金') {
    frontMatter = `---
title: "文章标题"
description: "文章简短描述"
tags: ["前端", "JavaScript", "React"]
theme: channing-cyan
---
`;
  } else if (slug === 'medium') {
    frontMatter = `---
title: "Article Title"
tags: ["Software Engineering", "Web Development", "Technology"]
canonical_url: "https://myblog.com/canonical"
---
`;
  } else if (slug === '知乎') {
    frontMatter = `---
title: "知乎回答标题"
tags: ["程序员", "软件开发", "开源项目"]
---
`;
  }

  const finalContent = frontMatter + templatesMap[templateType];
  const platDir = path.join(templatesDir, slug);
  fs.mkdirSync(platDir, { recursive: true });
  const filePath = path.join(platDir, templateFileName(templateType));

  fs.writeFileSync(filePath, finalContent, 'utf8');
  count++;
}

console.log(`Generated ${count} platform override templates under templates/platforms/`);
