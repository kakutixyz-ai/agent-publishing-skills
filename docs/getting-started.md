# Getting Started

Use this library when an agent needs to turn project material into platform-specific publishing drafts.

## Minimal Flow

1. Collect a project brief using `schemas/project-brief.schema.json`.
2. Ask `skills/planner` to recommend suitable platforms.
3. Confirm the publishing plan with the user.
4. Generate a base draft with `skills/writer`.
5. Adapt the draft with the relevant platform adapter.
6. Review the result with `skills/reviewer`.

## Important Rule

Do not publish automatically. The final output must be drafts, review notes, and suggested next actions for a human operator.
