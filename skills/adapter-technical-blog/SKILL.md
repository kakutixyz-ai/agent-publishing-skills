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
- `knowledge/styles/technical-blog.md`.
- Optional template from `templates/base/article.md` or `templates/base/tutorial.md`.

## Process

1. Extract a platform constraint sheet from the profile before writing:
   - required language and regional variant;
   - expected length or density cues, such as short forum answer, concise article, long-form tutorial, deep essay, or documentation-style reference;
   - accepted content shape, such as tutorial, case study, implementation note, product story, support answer, or research summary;
   - required tone, such as pedagogical, skeptical, formal, conversational, literary, founder-led, or purely technical;
   - formatting rules for headings, code blocks, callouts, images, tags, links, and metadata;
   - poor-fit and banned patterns.
2. If the platform profile conflicts with the generic technical-blog pattern, the platform profile wins. For example, do not turn a concise support/community format into a long tutorial, and do not turn an essay platform into a code-heavy walkthrough.
3. Match the target platform language from its platform profile. Do not translate into English by default when the profile requires Japanese, Chinese, Portuguese, Korean, Arabic, Spanish, German, or another primary language.
4. Reframe the draft as knowledge sharing rather than promotion.
5. Choose the article length from the profile:
   - short-form platforms: write only the requested concise answer, blurb, or summary;
   - tutorial platforms: provide reproducible steps, prerequisites, code, and expected results;
   - long-form editorial platforms: build an argument with context, evidence, and trade-offs;
   - educational platforms: explain why each step matters and avoid unexplained jumps.
6. State the problem and target reader early using the platform's preferred style.
7. Add environment, setup, code, screenshots, diagrams, or reproducible steps only when the platform expects them and the brief provides the facts.
8. Follow the platform's heading, code block, and callout conventions exactly.
9. Remove unsupported claims, generic marketing language, and content types listed as poor fit.
10. End with the platform-appropriate close: summary, references, next step, or specific technical feedback request. Do not add a sales pitch unless the profile explicitly expects a CTA.
11. Put a short `metadata.platform_constraints_applied` checklist in the output covering language, length, tone, structure, and formatting.

## Output

Return `schemas/platform-draft.schema.json` with `platform` set to the target platform slug.
