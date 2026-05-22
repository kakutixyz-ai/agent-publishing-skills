# OpenCode Integration

OpenCode local skill installs discover skills from:

```text
.opencode/skills/<skill-name>/SKILL.md
```

This repository is a multi-skill publishing pack. Install it by expanding the repository contents into `.opencode/`, not by copying the repository as one nested folder.

## Project Install

Recommended project layout:

```text
<project>/
└── .opencode/
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
mkdir -p <project>/.opencode
cp -R skills knowledge templates schemas skill-registry.json <project>/.opencode/
```

Or use the platform wrapper from this repository:

```bash
./integrations/opencode/install.sh --dir <project>
```

On Windows PowerShell:

```powershell
.\integrations\opencode\install.ps1 --dir C:\path\to\project
```

## Incorrect Layout

Do not install it as:

```text
<project>/
└── .opencode/
    └── agent-publishing-skills/
        └── skills/
            └── planner/
                └── SKILL.md
```

That keeps `SKILL.md` files below the discovery path and may prevent the host from finding them.

## Notes

- Register each directory under `skills/` as a separate executable skill.
- Keep `knowledge/`, `templates/`, `schemas/`, and `skill-registry.json` available as read-only context.
- This library drafts and reviews content only. It must not auto-publish.
