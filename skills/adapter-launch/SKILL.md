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

1. Write a short value proposition for a specific user.
2. Explain what is available today.
3. Highlight differentiators without inflated claims.
4. Include required assets such as logo, screenshots, demo video, website, pricing, or repository.
5. Prepare a maker/founder note when the platform has comment-driven launch norms.
6. Ask for feedback, not votes.

## Output

Return `schemas/platform-draft.schema.json` with `platform` set to the target platform slug.
