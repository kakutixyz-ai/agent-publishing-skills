# Gemini CLI Integration

Gemini CLI supports extensions. An extension can bundle agent skills in a `skills/` directory and is installed from a GitHub repository URL or local path.

## Repository Layout

This repository is intended to be installed as a Gemini CLI extension:

```text
agent-publishing-skills/
├── gemini-extension.json
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

## Install From GitHub

```bash
gemini extensions install https://github.com/<owner>/agent-publishing-skills
```

## Install From Local Path

```bash
gemini extensions install /path/to/agent-publishing-skills
```

For active development, link the local repository instead:

```bash
gemini extensions link /path/to/agent-publishing-skills
```

Restart Gemini CLI after installing, updating, or linking the extension.

## Notes

- Gemini CLI reads `gemini-extension.json` from the extension root.
- Agent skills are exposed from `skills/<skill-name>/SKILL.md`.
- Keep `knowledge/`, `templates/`, `schemas/`, and `skill-registry.json` in the extension root because the skills reference them as shared context.
- This library drafts and reviews content only. It must not auto-publish.
