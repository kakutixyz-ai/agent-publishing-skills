---
name: adapter-social-shortform
description: Adapt a project update into short-form social posts or threads.
---

# Social Shortform Adapter

Use this adapter for X, Mastodon-like communities, build-in-public logs, and short update surfaces.

## Data Source Constraint

**No internet search.** All content must be generated from local sources only: the project brief, knowledge base, schemas, templates, and user-provided materials. Do not fetch or search external URLs.

## Inputs

- Project brief or base draft.
- Platform profile.
- Screenshots, clips, metrics, or links when available.

## Process

1. Extract platform constraints before writing: language, character or post length, thread rules, tone, hashtag/account norms, media expectations, link handling, and banned engagement patterns.
2. The platform profile overrides this generic adapter. If a platform expects poetic captions, factual directory blurbs, or professional status updates, use that style instead of a generic social hook.
3. Lead with one concrete hook that fits the platform tone. Do not use hype, outrage, or clickbait unless the platform profile explicitly supports a sharper opinionated style.
4. Keep each post within the platform's stated character or sentence limit. When no exact limit is given, prefer compact posts with short paragraphs.
5. Use a thread only when the platform profile supports threads and the content genuinely needs multiple steps.
6. Include visible proof when available and appropriate: screenshot, GIF, demo, metric, or code snippet. Do not invent proof.
7. Follow platform-specific plain text, Markdown, emoji, hashtag, and tagging rules.
8. Do not over-tag accounts, ask for votes, or ask for engagement.
9. End with the platform-appropriate next step: link, feedback request, update note, or no CTA if the platform discourages promotion.
10. Put a short `metadata.platform_constraints_applied` checklist in the output covering language, length, tone, structure, and formatting.

## Output

Return `schemas/platform-draft.schema.json` with `platform` set to the target platform slug.
