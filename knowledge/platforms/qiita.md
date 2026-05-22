# Qiita (キータ) — Japanese Technical Knowledge Sharing Platform

URL: https://qiita.com

Source: `legacy-skills/qiita/SKILL.md`

This normalized profile extracts reusable platform knowledge from the legacy platform profile. It is not a runtime skill.

## Trigger Context

Triggered by mentions of 'Qiita', 'Japanese tech blog', 'Qiita article'

## Language

**Primary Language:** Japanese (日本語)

## Good Fit

- It is a technical tutorial or "how-to" guide that walks through a specific implementation with exact code, configuration files, and environment setup steps.
- It documents a troubleshooting or debugging experience — "I encountered error X, here is exactly what caused it and how I fixed it."
- It demonstrates a new library, framework, or tool with concrete usage examples and performance comparisons.
- It explains an architecture decision or system design for a real-world project, including diagrams and trade-off analysis.
- It provides a hands-on learning resource such as a step-by-step setup guide, cheat sheet, or best-practices compilation for a specific technology stack.

## Poor Fit

- It is a product announcement or marketing pitch — Qiita is for knowledge sharing, not promotion.
- It is a philosophical or opinion piece without actionable code or technical details.
- It is a translation or summary of an existing English article without original analysis or Japanese-specific context.
- It is a low-effort aggregation of links or resources — the community expects self-contained, original content.
- It is a non-technical topic (e.g., career advice, lifestyle, design without code) — these belong on other platforms.

## Format And Style Notes

- Always include an "環境" (Environment) section early in the article (e.g. Node.js, OS version).
- Use `##` for major section headers; never use `#` in the body (the title is the H1).
- Always specify the language in code blocks for proper syntax highlighting.
- Use blockquotes or note blocks for important callouts about pitfalls or environment-specific behavior.
- Write code comments in Japanese, not English.
- Place images between major sections, not at the top. Screenshots of errors are especially valued.
- End every article with a "まとめ" (Summary) section that recaps the key steps and suggests next steps.

## Tone

Write as a respectful, objective, and helpful engineer sharing knowledge: polite, technically precise, and supportive of other developers' growth (using formal Japanese `です`/`ます` form).

## Adapter Guidance

Use a matching generic adapter unless the platform has a dedicated adapter. Keep platform-specific facts here and execution steps in `skills/`.