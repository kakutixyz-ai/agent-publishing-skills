---
name: adapter-showcase
description: Adapt a draft for portfolio, design, demo, and visual showcase platforms.
---

# Showcase Adapter

Use this adapter for Behance, Dribbble, CodePen, Observable, Replit, Glitch, Arena, Awwwards, and other visual or interactive showcase platforms.

## Inputs

- Base draft.
- Platform profile.
- Visual or interactive assets.

## Process

1. Lead with the artifact: screenshot, prototype, demo, code playground, or case study.
2. Keep the written copy short and focused on what the viewer can inspect.
3. Explain the design, implementation, or technical decision behind the work.
4. Include toolchain, constraints, and credits when relevant.
5. Avoid long promotional essays unless the platform expects case studies.

## Output

Return `schemas/platform-draft.schema.json` with `platform` set to the target platform slug.
