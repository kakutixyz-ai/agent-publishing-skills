# OpenAI and Codex Integration

OpenAI-compatible skills use the portable Agent Skills pattern: a skill is a directory containing `SKILL.md`, with optional resources and scripts available to the agent.

This repository is a multi-skill publishing pack, not a single skill.

## Codex Skill Pack Layout

For Codex or another OpenAI-compatible local agent environment, make this repository available with this structure:

```text
agent-publishing-skills/
├── skills/
│   ├── planner/
│   │   └── SKILL.md
│   ├── writer/
│   │   └── SKILL.md
│   ├── reviewer/
│   │   └── SKILL.md
│   └── adapter-*/
│       └── SKILL.md
├── knowledge/
├── templates/
├── schemas/
└── skill-registry.json
```

If installing manually into a Codex skills directory, copy each skill directory under the host's skills location and keep the shared resource directories readable from the same workspace or package:

```text
<codex-skills-root>/
├── planner/
│   └── SKILL.md
├── writer/
│   └── SKILL.md
├── reviewer/
│   └── SKILL.md
└── adapter-*/
    └── SKILL.md
```

Then provide these shared resources alongside the skills or in the active project workspace:

```text
knowledge/
templates/
schemas/
skill-registry.json
```

## Agents SDK or API Use

For OpenAI Agents SDK or API-based agents, treat this repository as instruction and retrieval context:

- Register each `skills/*/SKILL.md` as a distinct workflow instruction.
- Use `skill-registry.json` to discover available skills, platform knowledge paths, and schema contracts.
- Load only the relevant `knowledge/` files for the selected platforms.
- Use `schemas/` to validate project briefs, publishing plans, drafts, and review results where the host supports structured output validation.
- Require explicit human confirmation before any external publishing action.

## Notes

- Do not install this repository as one single skill unless the host supports nested multi-skill packs.
- The skills depend on shared `knowledge/`, `templates/`, and `schemas/`; copying only `skills/` is incomplete.
- This library drafts and reviews content only. It must not auto-publish.
