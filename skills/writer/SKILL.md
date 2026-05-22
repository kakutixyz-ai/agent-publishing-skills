---
name: writer
description: Convert a project brief into a reusable base draft before platform adaptation.
---

# Base Draft Writer

Use this skill after `planner` has produced a publishing plan and the user has confirmed the target direction.

## Inputs

- Project brief matching `schemas/project-brief.schema.json`.
- Selected content angle from a publishing plan.
- Optional template from `templates/base/`.

## Process

1. Write one clear value proposition.
2. Identify the target reader and why they should care.
3. Explain the problem before presenting the project.
4. Include concrete evidence from the brief: repository, demo, screenshots, benchmarks, or implementation details.
5. Include limitations and trade-offs when known.
6. Avoid platform-specific formatting unless the user requests a specific platform.
7. **Strictly Factual Content**: Do not guess or hallucinate any URL, name, version number, benchmark, or metrics. Stick strictly to what is provided in the project brief.
8. **Handling Missing Details**: If a critical piece of information (such as a GitHub repository URL, npm package link, or demo address) is expected but not provided in the brief, output the corresponding heading/section but leave the body blank or use standard placeholders like `[Insert Repository URL]` or `[Insert Demo Link]`. Do not skip the section entirely if the platform structure expects it, but do not make up values.

## Output

Return a draft matching `schemas/platform-draft.schema.json` with `platform` set to `base` and `status` set to `draft`.

Do not publish.
