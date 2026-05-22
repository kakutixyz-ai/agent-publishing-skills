---
name: adapter-community-discussion
description: Adapt a base draft for discussion-first communities and forums.
---

# Community Discussion Adapter

Use this adapter for platforms such as Hacker News, Reddit, Lobsters, V2EX, Stack Overflow discussion surfaces, GitHub Discussions, Indie Hackers, and similar communities.

## Inputs

- A base draft matching `schemas/platform-draft.schema.json`.
- One platform profile from `knowledge/platforms/`.

## Process

1. Identify the target community and its rules.
2. Use a factual title that makes the technical or community value clear.
3. Keep the post concise unless the platform expects long form.
4. Include primary links: repository, demo, docs, benchmark, article, or reproducible example.
5. Ask for specific feedback only when feedback is genuinely the purpose.
6. Remove vote requests, hype, cross-post boilerplate, and signup-gated claims.
7. Add limitations and context so the post can withstand skeptical replies.

## Output

Return `schemas/platform-draft.schema.json` with `platform` set to the target platform slug.
