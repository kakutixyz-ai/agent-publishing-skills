---
name: adapter-showcase
description: Adapt a draft for portfolio, design, demo, and visual showcase platforms.
---

# Showcase Adapter

Use this adapter for Behance, Dribbble, CodePen, Observable, Replit, Glitch, Arena, Awwwards, and other visual or interactive showcase platforms.

## Data Source Constraint

**No internet search.** All content must be generated from local sources only: the project brief, knowledge base, schemas, templates, and user-provided materials. Do not fetch or search external URLs.

## Inputs

- Base draft.
- Platform profile.
- Visual or interactive assets.

## Process

1. Extract platform constraints before writing: language, caption length, visual asset requirements, case-study depth, tone, tags, credits, and formatting limitations.
2. Lead with the artifact: screenshot, prototype, demo, code playground, or case study.
3. Match the platform's visual-writing mode:
   - gallery and portfolio platforms: short captions, strong asset sequencing, credits, and toolchain;
   - code playgrounds: concise description, dependencies, and what to inspect;
   - case-study platforms: problem, process, decisions, and outcome;
   - curation platforms: minimal or poetic captions without marketing copy.
4. Keep the written copy short unless the platform profile explicitly expects a case study.
5. Explain the design, implementation, or technical decision behind the work only to the depth the platform expects.
6. Include toolchain, constraints, and credits when relevant and factual.
7. Avoid long promotional essays, unsupported claims, and content types listed as poor fit.
8. Follow platform-specific Markdown, rich-text, image count, embed, and tag rules.
9. Put a short `metadata.platform_constraints_applied` checklist in the output covering language, length, tone, structure, and formatting.

## Output

Return `schemas/platform-draft.schema.json` with `platform` set to the target platform slug.
