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

// Define base templates contents
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

for (const platform of platforms) {
  const { slug, recommended_adapter } = platform;
  const platDir = path.join(templatesDir, slug);

  if (!fs.existsSync(platDir)) {
    fs.mkdirSync(platDir, { recursive: true });
  }

  let templateType = '';
  let templateFileName = '';
  let frontMatter = '';

  // Determine template file name and default front matter
  switch (recommended_adapter) {
    case 'adapter-technical-blog':
    case 'adapter-devto':
    case 'adapter-zenn':
    case 'adapter-qiita':
      templateType = 'article';
      templateFileName = 'article.md';
      frontMatter = `---\ntitle: "Article Title"\ntags: ["Tag1", "Tag2"]\n---\n`;
      break;

    case 'adapter-community-discussion':
    case 'adapter-hn':
    case 'adapter-reddit':
      templateType = 'discussion';
      templateFileName = 'discussion.md';
      frontMatter = `---\ntitle: "Discussion Title"\ntags: ["Tag1", "Tag2"]\n---\n`;
      break;

    case 'adapter-launch':
    case 'adapter-producthunt':
      templateType = 'launch';
      templateFileName = 'launch.md';
      frontMatter = `---\nname: "Project Name"\ntagline: "A 60-character tagline of your project"\nlink: "https://example.com"\n---\n`;
      break;

    case 'adapter-showcase':
      templateType = 'showcase';
      templateFileName = 'showcase.md';
      frontMatter = `---\ntitle: "Showcase Title"\nlink: "https://example.com"\n---\n`;
      break;

    case 'adapter-social-shortform':
      templateType = 'shortform';
      templateFileName = 'shortform.md';
      frontMatter = `---\ntags: ["Tag1", "Tag2"]\n---\n`;
      break;

    default:
      // Fallback
      templateType = 'article';
      templateFileName = 'article.md';
      frontMatter = `---\ntitle: "Article Title"\ntags: ["Tag1", "Tag2"]\n---\n`;
  }

  // Customize front matter for specific platforms
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
  const filePath = path.join(platDir, templateFileName);

  fs.writeFileSync(filePath, finalContent, 'utf8');
  count++;
}

console.log(`Generated ${count} templates successfully under templates/platforms/`);
