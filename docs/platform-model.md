# Platform Model

Platform knowledge and platform adapters are intentionally separate.

## Knowledge Files

Files in `knowledge/platforms/` describe platform facts:

- Audience
- Language expectations
- Good-fit project types
- Poor-fit project types
- Formatting constraints
- Tone
- Anti-spam concerns

These files should not contain step-by-step execution workflows.

## Adapter Skills

Files in `skills/adapter-*` describe how an agent transforms a draft for a platform. Adapters should reference platform knowledge instead of copying it.

## Workflows

Files in `workflows/` describe how multiple skills are composed for a common publishing job.
