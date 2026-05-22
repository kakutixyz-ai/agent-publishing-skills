---
name: adapter-technical-blog
description: Adapt a base draft for technical blogging platforms that value tutorials, implementation notes, and reproducible engineering detail.
---

# Technical Blog Adapter

Use this adapter for platforms such as DEV Community, Hashnode, Medium, Zenn, Qiita, CSDN, 掘金, freeCodeCamp, CSS-Tricks, and similar article-first developer communities when no dedicated adapter is required.

## Data Source Constraint

**No internet search.** All content must be generated from local sources only: the project brief, knowledge base, schemas, templates, and user-provided materials. Do not fetch or search external URLs.

## Inputs

- A base draft matching `schemas/platform-draft.schema.json`.
- One platform profile from `knowledge/platforms/`.
- Optional template from `templates/base/article.md` or `templates/base/tutorial.md`.

## Process

1. Match the target platform language from its platform profile.
2. Reframe the draft as knowledge sharing rather than promotion.
3. State the problem and target reader early.
4. Add environment, setup, code, screenshots, or reproducible steps when available.
5. Follow the platform's heading, code block, and callout conventions.
6. Remove unsupported claims and generic marketing language.
7. End with a useful summary, references, or technical feedback request.

## Output

Return `schemas/platform-draft.schema.json` with `platform` set to the target platform slug.
