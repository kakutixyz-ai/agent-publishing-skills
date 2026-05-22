# Forem Skill Guide

URL: https://forem.com

Source: `legacy-skills/forem/SKILL.md`

This normalized profile extracts reusable platform knowledge from the legacy platform profile. It is not a runtime skill.

## Trigger Context

Triggered by mentions of 'Forem', 'dev.to', 'self-hosted community', 'open source publishing platform', 'developer blogging'

## Language

The primary language for content on Forem and its flagship instance (dev.to) is **English (US/International)**. The UI, documentation, and community culture are English-first. While Forem supports localization for self-hosted instances (e.g., a French-speaking community), content posted on the main ecosystem or for maximum reach must be in English. Non-English content is technically possible but will have significantly lower visibility and engagement unless posted on a dedicated language-specific instance. Use clear, technical, and direct English—avoid flowery marketing language.

## Good Fit

- Open-source libraries or tools with a strong developer audience (e.g., CLI tools, frameworks, APIs).
- Technical tutorials or step-by-step guides (e.g., "How to build a REST API with Flask").
- Long-form technical blog posts about architecture, debugging, or performance optimization.
- Community-driven projects seeking contributors (e.g., "We need help with our React component library").
- Projects with a clear "why" and a focus on education or transparency (e.g., post-mortems, design decisions).

## Poor Fit

- Pure marketing or sales-driven content (e.g., "Buy our enterprise SaaS today!").
- Platforms targeting non-technical consumers (e.g., a recipe app for general audiences).
- Projects with no code, documentation, or technical depth (e.g., a generic lifestyle blog).
- Closed-source commercial products with no free tier or open-source component.
- Content that relies heavily on video or multimedia (Forem is text-first; video embeds are secondary).

## Format And Style Notes

- Start with a bold TL;DR or problem statement. The first 100 characters appear in the feed; hook readers immediately.
- Use descriptive, colon-separated titles under 80 characters. Subtitles improve readability.
- Use H2 and H3 headings frequently. Forem auto-generates a table of contents from headings; readers rely on it for navigation.
- Embed code blocks with language identifiers. Syntax highlighting is a core feature.
- Use bullet lists for features, numbered lists for steps. Keep items to 1-2 lines.
- Always include a 16:9 cover image (min 1000px wide). This is the primary visual hook on the feed.
- Add 3-5 relevant tags at the bottom. The first tag is the primary category (e.g., `#opensource`, `#tutorial`).
- Keep the tone professional but informal. Use "we" and "you" to build community; avoid jargon without explanation.

## Tone

"Write like a friendly senior developer explaining a hard-won lesson to a colleague over coffee—clear, humble, and deeply technical."

## Adapter Guidance

Use a matching generic adapter unless the platform has a dedicated adapter. Keep platform-specific facts here and execution steps in `skills/`.
