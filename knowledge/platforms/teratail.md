# teratail (テラテイル)

URL: https://teratail.com

Source: `legacy-skills/teratail/SKILL.md`

This normalized profile extracts reusable platform knowledge from the legacy platform profile. It is not a runtime skill.

## Trigger Context

Triggered by mentions of 'teratail', 'teratail.com', or 'Japanese Q&A community'

## Language

**Primary language:** Japanese (日本語)

## Good Fit

- Open-source libraries or tools that solve a specific, reproducible technical problem (e.g., a Python package for CSV parsing)
- Bug fixes or workarounds for common errors with exact error messages (e.g., "ModuleNotFoundError: No module named 'X'")
- Step-by-step technical tutorials with minimal, runnable code examples (e.g., "How to set up Django with PostgreSQL on Ubuntu 22.04")
- Japanese-language documentation or localization tools (e.g., a tool to convert English API docs to Japanese)
- Reproducible environment configurations (e.g., Docker Compose files for a specific stack)

## Poor Fit

- Opinion-based discussions, product showcases, or "Show HN" style announcements
- Closed-source commercial products or SaaS platforms (teratail is for problem-solving, not marketing)
- Projects with no clear technical problem or error to solve (e.g., "Here's my new app, what do you think?")
- Projects requiring lengthy narrative or storytelling (e.g., "How I built X in a weekend")
- Projects with incomplete or missing code (posts must include exact, copy-pasteable code blocks)

## Format And Style Notes

- Open with a polite greeting and close with a formal request for help.
- State the environment (OS, language version, framework version) at the top of the body.
- Use exact error messages (copy-pasted, not paraphrased).
- Provide minimal, runnable code in a code block with a language identifier.
- Explain what you have already tried before asking.
- Use section headers (##) for each part of the question structure.
- Keep the question focused on a single, verifiable technical problem.
- Avoid screenshots of code; use text code blocks. Screenshots of error messages are acceptable only if accompanied by text.

## Tone

tone
teratail is a formal, structured Japanese Q&A community where every post must be a precise, reproducible technical problem with exact code and error messages, written in polite keigo, and where off-topic or incomplete questions are swiftly removed.

## Adapter Guidance

Use a matching generic adapter unless the platform has a dedicated adapter. Keep platform-specific facts here and execution steps in `skills/`.
