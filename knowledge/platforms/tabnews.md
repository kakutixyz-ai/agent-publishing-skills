# TabNews

URL: https://tabnews.com.br

Source: `legacy-skills/tabnews/SKILL.md`

This normalized profile extracts reusable platform knowledge from the legacy platform profile. It is not a runtime skill.

## Trigger Context

Triggered by mentions of 'TabNews', 'tabnews.com.br', 'comunidade BR de tecnologia', 'fórum de programação brasileiro'

## Language

**Primary language:** Brazilian Portuguese (PT-BR)

## Good Fit

- Open-source tools or libraries with clear technical innovation (e.g., a new state management pattern, a minimalist web framework, a novel database indexing strategy).
- Self-hosted or privacy-focused alternatives to mainstream SaaS products (e.g., a self-hosted analytics dashboard, a local-first note-taking app).
- Projects that solve a specific pain point for Brazilian developers (e.g., a CLI for generating Brazilian tax invoices, a library for CPF/CNPJ validation).
- Technical tutorials or case studies that share hard-won engineering lessons (e.g., "How I reduced our API latency by 60%", "Migrating from MongoDB to PostgreSQL in production").
- Projects with a strong open-source ethos, including a public GitHub repository, a clear license, and contribution guidelines.

## Poor Fit

- Pure marketing or brand awareness campaigns without technical substance (e.g., "Try our new CRM!" without code or architecture details).
- No-code projects or drag-and-drop tools aimed at non-technical users.
- Projects that require a paid subscription or enterprise license to be useful (freemium with a generous free tier is acceptable if the core is open-source).
- Content that is a direct translation of an English blog post without original analysis or Brazilian context.
- Projects that are primarily visual/design-focused with little backend engineering depth (e.g., a Figma plugin for color palettes).

## Format And Style Notes

- Direct, no-clickbait titles.
- Start with a clear problem statement or thesis in the first sentence.
- Use short paragraphs (2-4 sentences max). Avoid walls of text.
- Always use fenced code blocks with language tags.
- Use descriptive anchor text for links, not bare URLs.
- Include images only if they add technical value (diagrams, screenshots of bugs). No memes.
- Avoid emojis, excessive bold/italic, and markdown tables unless strictly necessary for data.
- End with a clear conclusion or call to action that invites technical discussion.

## Tone

Sóbrio, técnico e direto ao ponto — cada parágrafo deve justificar sua existência com informações úteis para outros desenvolvedores brasileiros.

## Adapter Guidance

Use a matching generic adapter unless the platform has a dedicated adapter. Keep platform-specific facts here and execution steps in `skills/`.
