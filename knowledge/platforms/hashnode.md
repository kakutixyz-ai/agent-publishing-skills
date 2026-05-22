# Hashnode

URL: https://hashnode.com

Source: `legacy-skills/hashnode/SKILL.md`

This normalized profile extracts reusable platform knowledge from the legacy platform profile. It is not a runtime skill.

## Trigger Context

Triggered by mentions of 'Hashnode', 'Hashnode blog', 'developer blogging platform'

## Language

The primary language is English (US/International technical English). Hashnode's user base and SEO algorithms heavily favor English. Non-native authors typically write in English to maximize reach. While Spanish, Portuguese, French, and German are acceptable, posts in these languages receive significantly less organic discovery. Avoid mixing languages in a single article.

## Good Fit

- Developer tools and libraries (CLI tools, SDKs, APIs, frameworks, databases, testing utilities) – the core audience is software engineers who want deep technical explanations.
- Long-form technical tutorials (step-by-step guides, architecture deep dives, "from scratch" implementations) – readers expect thorough, practical walkthroughs with code.
- Open-source projects with clear documentation – authors use Hashnode to showcase their project's architecture, design decisions, and contribution guides.
- DevOps and infrastructure projects (Docker setups, CI/CD pipelines, cloud deployments, monitoring stacks) – these resonate with the platform's DevOps-heavy user base.
- Projects with visual architecture diagrams or data flow charts – readers skim for diagrams before reading text; Mermaid.js diagrams are well-supported.

## Poor Fit

- Non-technical lifestyle or entertainment projects (fashion apps, game walkthroughs, social media clones without technical novelty) – the community expects substance.
- Projects that are purely marketing landing pages with no code, documentation, or technical explanation – Hashnode is not a product launch site.
- Projects with no English documentation or README – non-English projects will struggle to gain traction.
- Projects that are simple CRUD apps without a unique technical angle – "another todo app" without a novel implementation detail won't attract readers.
- Projects requiring proprietary or paid software to evaluate – the platform favors open-source and freely accessible tools.

## Format And Style Notes

- Start with a problem statement and a promise. Hook the reader by stating a specific pain point and what they will learn to solve it.
- Use code blocks with language tags for every snippet. Never leave code unformatted.
- Keep paragraphs to 3–4 lines maximum. Long blocks of text are intimidating and get skipped.
- Include at least one architecture or flow diagram per 500 words. Visuals break up text and explain complex systems.
- Use H2 for main sections, H3 for subsections. Never use H1 (reserved for the title). Keep heading hierarchy logical.
- End with a clear takeaway and a call-to-action. Summarize what the reader accomplished and invite engagement.
- Avoid stock photos and generic images. Use only screenshots, diagrams, or code output images.
- Write in active voice and use "you" to address the reader directly. This creates a tutorial-like, engaging tone.

## Tone

Write like a senior engineer explaining a clever solution to a colleague over a whiteboard – precise, humble, and focused on the "why" behind the code.

## Adapter Guidance

Use a matching generic adapter unless the platform has a dedicated adapter. Keep platform-specific facts here and execution steps in `skills/`.
