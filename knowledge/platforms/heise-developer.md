# Heise Developer Skill

URL: https://www.heise.de/developer/

Source: `legacy-skills/heise-developer/SKILL.md`

This normalized profile extracts reusable platform knowledge from the legacy platform profile. It is not a runtime skill.

## Trigger Context

Triggered by mentions of 'Heise Developer', 'Heise Developer', 'heise.de/developer', 'Heise Medien' or requests for German technical publishing on the Heise platform.

## Language

**Primary language**: German. All content must be written in standard German with precise technical terminology. English technical terms (e.g., "Kubernetes", "CI/CD", "microservices") are acceptable when no common German equivalent exists, but the surrounding text and commentary must be in German. Non-German content is out of place and will be ignored or criticized by the readership. Use German for all headlines, section titles, image alt-texts, and code comments intended for the reader.

## Good Fit

- Backend infrastructure tools: Projects like container orchestration utilities, monitoring agents, or database management tools that solve concrete operational problems.
- Linux and system-level software: Kernel modules, filesystem tools, networking utilities, or systemd services targeting professional sysadmins.
- Security and cryptography projects: Tools for vulnerability scanning, certificate management, or secure communication that demonstrate rigorous engineering.
- CI/CD and DevOps tooling: Build pipelines, deployment automation, or infrastructure-as-code projects with clear documentation and enterprise use cases.
- Open-source libraries with German documentation: Projects where the README and core docs are available in German, or where the author is willing to create German-language content for the article.

## Poor Fit

- Consumer mobile apps: Games, social media apps, or lifestyle applications with no backend or infrastructure component.
- Frontend-only JavaScript frameworks: Pure UI component libraries or CSS frameworks without significant algorithmic or system-level depth.
- Blockchain or cryptocurrency projects: Unless they involve novel cryptographic research or infrastructure, these are viewed skeptically by the community.
- Closed-source commercial products: Heise Developer focuses on open-source tools and vendor-neutral technical content; proprietary sales pitches are rejected.
- Projects without a clear technical problem statement: Tools that are "nice to have" but don't address a measurable pain point in development or operations.

## Format And Style Notes

- Lead with the problem, not the solution. Start every article by describing the concrete pain point or technical challenge that your project addresses.
- Use precise, factual language. Avoid marketing superlatives and emotional adjectives. State what the tool does and how it works.
- Include runnable code examples. Every technical claim should be backed by a code block that the reader can test. Use language-tagged fenced blocks.
- Structure with clear German subheadings. Use H2 for major sections and H3 for subsections. Keep headings concise and descriptive.
- Cite benchmarks and measurements. Heise Developer readers expect quantitative evidence. Always include numbers, comparisons, and test conditions.
- Explain trade-offs and limitations. Acknowledge where your project is not the best choice. This builds credibility with the technically astute audience.
- Link to German-language resources where possible. Prefer links to Heise articles, German documentation, or German Stack Overflow threads over English-only sources.
- End with a discussion prompt in German. Encourage comments by asking a specific, answerable question about practical experience.

## Tone

Sachlich, präzise und lösungsorientiert: Ein Heise-Developer-Artikel liest sich wie ein gut dokumentiertes Architektur-Review mit Codebeispielen und Benchmarks – kein Marketing, keine Anekdoten, nur technische Fakten und praktische Anleitungen.

## Adapter Guidance

Use a matching generic adapter unless the platform has a dedicated adapter. Keep platform-specific facts here and execution steps in `skills/`.
