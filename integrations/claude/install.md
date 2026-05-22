# Claude Integration

Claude and Claude Code use the Agent Skills format: each skill is a directory that contains a `SKILL.md` file.

## Project Install

Install this library into a project by expanding the repository contents into `.claude/`:

```text
<project>/
└── .claude/
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

Example:

```bash
mkdir -p <project>/.claude
cp -R skills knowledge templates schemas skill-registry.json <project>/.claude/
```

## User Install

For user-level skills, install the skill directories under:

```text
~/.claude/skills/<skill-name>/SKILL.md
```

If using a user-level install, also make `knowledge/`, `templates/`, `schemas/`, and `skill-registry.json` available in the same Claude-readable location so the skills can load their shared context.

## Notes

- Do not install this repository as one single skill directory. It is a multi-skill publishing pack.
- Claude should discover each directory under `skills/` as a separate skill.
- Shared resources are required: the planner and adapters reference `knowledge/`, and structured outputs reference `schemas/`.
- This library drafts and reviews content only. It must not auto-publish.
