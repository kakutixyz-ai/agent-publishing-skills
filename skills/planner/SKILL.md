---
name: planner
description: Analyze a project brief and produce a platform publishing plan. Use before writing platform-specific drafts.
---

# Publishing Planner

Use this skill to decide which platforms are appropriate for a project and what content angle each platform should receive.

## Inputs

- A project brief matching `schemas/project-brief.schema.json`.
- Optional user constraints such as target language, launch date, or platforms to exclude.

## Knowledge To Load

- `knowledge/index.json` for compiled candidate platform facts.
- `knowledge/rules/anti-spam.md`
- `knowledge/rules/no-auto-publish.md`

## Process

1. Classify the project type: developer tool, library, AI demo, SaaS, design tool, tutorial, research project, community discussion, or other.
2. Identify available proof: repository, demo, screenshots, benchmarks, docs, launch assets, or user evidence.
3. **Structured Pre-Filtering**: Identify target constraints (e.g. language, audience, content goals) and filter the platforms list from `knowledge/index.json` using their `primary_language`, `categories`, and `target_audience` fields. Skip scoring platforms that do not match the target language or goals.
4. Score matching candidate platforms from 1 to 5 based on suitability.
5. Recommend only platforms where the project has a clear community value.
6. Mark poor-fit platforms as `not_recommended` with a concrete reason.
7. List missing assets or confirmations before drafting.

## Output

Return a publishing plan matching `schemas/publishing-plan.schema.json`.

Do not write platform drafts in this skill. Do not publish.
