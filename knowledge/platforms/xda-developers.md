# XDA Developers

URL: https://www.xda-developers.com

Source: `legacy-skills/xda-developers/SKILL.md`

This normalized profile extracts reusable platform knowledge from the legacy platform profile. It is not a runtime skill.

## Trigger Context

Triggered by mentions of 'XDA Developers', 'XDA forum', 'Android modding', 'custom ROM'

## Language

**Primary Language:** English.  
All forum posts, custom ROM release notes, and troubleshooting guides must be in English.

## Good Fit

- Android customization tools, root utilities, custom ROM releases, and kernel modifications.
- Deep-dive guides on Android subsystem internals, bootloaders, or low-level hardware hacks.

## Poor Fit

- General web development tutorials (e.g., React/Vue) which are irrelevant to mobile modding.
- Closed-source commercial software trying to advertise without developer tools/source availability.

## Format And Style Notes

- Include a clear section for installation steps (How to Install).
- Always list prerequisites, compatible devices, and known bugs/issues.
- Use BBCode or standard Markdown code blocks for logs.

## Tone

Technical, collaborative, hacker-style. Speak as a modder/developer sharing a custom solution with a tech-savvy community.

## Adapter Guidance

Use a matching generic adapter unless the platform has a dedicated adapter. Keep platform-specific facts here and execution steps in `skills/`.