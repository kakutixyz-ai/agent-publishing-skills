---
name: adapter-community-discussion
description: Adapt a base draft for discussion-first communities and forums.
---

# Community Discussion Adapter

Use this adapter for platforms such as Hacker News, Reddit, Lobsters, V2EX, Stack Overflow discussion surfaces, GitHub Discussions, Indie Hackers, and similar communities.

## Data Source Constraint

**No internet search.** All content must be generated from local sources only: the project brief, knowledge base, schemas, templates, and user-provided materials. Do not fetch or search external URLs.

## Inputs

- A base draft matching `schemas/platform-draft.schema.json`.
- One platform profile from `knowledge/platforms/`.

## Process

1. Extract platform constraints before writing: required language, title style, expected post length, accepted discussion type, tone, formatting, link rules, and banned behavior.
2. Treat forum and community norms as hard constraints. If the profile expects a short factual link submission, do not write a full article. If it expects a support-style problem statement, do not write a launch announcement.
3. Use a factual title that makes the technical or community value clear in the platform's preferred language and register.
4. Keep the post concise unless the platform explicitly expects long form. Use the profile's paragraph and word-count cues when present.
5. Include primary links only when they are provided by the brief: repository, demo, docs, benchmark, article, or reproducible example.
6. Ask for specific feedback only when feedback is genuinely the purpose and the community accepts feedback posts.
7. Remove vote requests, hype, cross-post boilerplate, sales copy, and signup-gated claims.
8. Add limitations and context so the post can withstand skeptical replies.
9. Follow platform-specific Markdown, BBCode, code-block, image, tag, and flair rules.
10. Put a short `metadata.platform_constraints_applied` checklist in the output covering language, length, tone, structure, and formatting.

## Output

Return `schemas/platform-draft.schema.json` with `platform` set to the target platform slug.
