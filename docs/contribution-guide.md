# Contribution Guide

Add new platforms by separating facts from execution.

## Adding a Platform

1. Create `knowledge/platforms/<platform>.md`.
2. Add an adapter in `skills/adapter-<platform>/SKILL.md` only if the platform needs custom transformation behavior.
3. Add templates under `templates/platforms/<platform>/` when reusable structures are known.
4. Register the skill in `skill-registry.json`.
5. Add schema references for input and output.

## Knowledge Rule

Keep stable platform facts in `knowledge/`, and keep execution steps in `skills/`. Do not duplicate full platform profiles inside adapter skills.
