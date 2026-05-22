# Rocketseat — https://rocketseat.com.br

URL: https://rocketseat.com.br

Source: `legacy-skills/rocketseat/SKILL.md`

This normalized profile extracts reusable platform knowledge from the legacy platform profile. It is not a runtime skill.

## Trigger Context

Triggered by mentions of 'Rocketseat', 'Rocketseat community', 'BR dev forum', 'Brasil dev', 'comunidade Rocketseat'

## Language

**Primary language: Brazilian Portuguese (pt-BR).**  
The entire platform — website, forum, Discord server, and all official content — operates in Portuguese. Code snippets remain in English (standard programming practice), but all explanatory text, questions, and discussions must be written in Portuguese. Posting in English is considered out of place and will significantly reduce engagement. Use a natural "Portinglês" style where technical terms are either translated (e.g., "função", "array", "hook") or mixed naturally with Portuguese grammar.

## Good Fit

- Node.js, React, React Native projects — the core stack taught and discussed at Rocketseat; any project built with these technologies will resonate immediately.
- Projects with a clear "learn-by-doing" angle — tutorials, step-by-step guides, challenge solutions, or open-source projects that help others level up.
- Brazilian-focused tools or libraries — packages with Portuguese documentation, support for Brazilian payment gateways (e.g., PagSeguro, Mercado Pago), or integrations with local services.
- Projects with strong visual or interactive demos — GIFs showing UI interactions, architecture diagrams, or before/after performance comparisons (the community loves seeing results).
- Open-source projects seeking Brazilian contributors — the community is eager to collaborate, especially on projects that solve real problems for Brazilian developers.

## Poor Fit

- Enterprise Java, .NET, or legacy PHP projects — the community is overwhelmingly focused on the modern JavaScript/TypeScript ecosystem; these stacks are off-topic.
- Low-code / no-code platforms — Rocketseat values hand-coded solutions and deep technical understanding; visual builders are seen as anti-engineering.
- Pure data science or machine learning projects — unless they involve Node.js or React for deployment; the community has minimal interest in Python/R notebooks.
- Projects with no code sharing — a closed-source SaaS with no public repo, no demo, and no code snippets will be ignored; the community wants to see the code.
- Projects that require paid tools or proprietary licenses — the culture is heavily open-source; anything behind a paywall receives negative reactions.

## Format And Style Notes

- Use proper Markdown formatting. Every post must use code blocks with language identifiers, headings, bullet points, and inline code for variables/functions.
- Start with context, then the problem, then the code. Always explain *what you are building* before showing what broke.
- Include exact error logs in Portuguese or English. Copy-paste the full error message inside a code block. Never paraphrase errors.
- Show what you already tried. List at least 2–3 debugging steps you attempted before posting. The community penalizes lazy questions.
- Keep paragraphs short (3–4 lines max). Long walls of text are ignored. Use line breaks liberally.
- Use Portuguese for everything except code. Code stays in English. Explanations, questions, comments, and even variable names in prose should be in Portuguese.
- Include visual evidence when relevant. Screenshots of UI bugs, error screens, or architecture diagrams are highly valued. Always use Portuguese UI language in screenshots.
- Reference file paths in the standard project format. Use `src/components/Header.jsx`, not "the header file inside components."

## Tone

Write as a friendly, supportive peer developer in the Brazilian tech community: enthusiastic, collaborative, code-first, and highly encouraging of learning.

## Adapter Guidance

Use a matching generic adapter unless the platform has a dedicated adapter. Keep platform-specific facts here and execution steps in `skills/`.