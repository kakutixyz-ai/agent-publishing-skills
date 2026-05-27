---
name: adapter-launch
description: Adapt a project draft for launch and product discovery platforms.
---

# Launch Adapter

Use this adapter for Product Hunt, Beta-style launch communities, startup directories, maker communities, and product discovery platforms.

## Data Source Constraint

**No internet search.** All content must be generated from local sources only: the project brief, knowledge base, schemas, templates, and user-provided materials. Do not fetch or search external URLs.

## Inputs

- Project brief or base draft.
- One platform profile from `knowledge/platforms/`.
- Launch assets when available.

## Process

1. Extract platform constraints before writing: language, field lengths, launch format, tone, required assets, comment norms, CTA rules, and banned vote-seeking behavior.
2. Use the platform's expected launch shape. Product discovery pages need compact product positioning; startup publications need news-style paragraphs; maker communities need transparent build context.
3. Write a short value proposition for a specific user using the platform's preferred language and register.
4. Explain what is available today. Do not imply availability, pricing, traction, integrations, or funding unless the brief provides it.
5. Highlight differentiators without inflated claims.
6. Include required assets such as logo, screenshots, demo video, website, pricing, or repository only when provided. If required assets are missing, mark the draft `needs_review` and list placeholders.
7. Prepare a maker/founder note when the platform has comment-driven launch norms.
8. Ask for feedback, not votes.
9. Keep the copy as short or long as the profile expects. Do not expand a product card into an essay, and do not compress an editorial launch story into a tagline.
10. Put a short `metadata.platform_constraints_applied` checklist in the output covering language, length, tone, structure, and formatting.

## Output

Return `schemas/platform-draft.schema.json` with `platform` set to the target platform slug.
