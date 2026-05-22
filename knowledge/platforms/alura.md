# Alura

URL: https://alura.com.br

Source: `legacy-skills/alura/SKILL.md`

This normalized profile extracts reusable platform knowledge from the legacy platform profile. It is not a runtime skill.

## Trigger Context

Triggered by mentions of 'Alura', 'Alura Forum', 'Alura+', or Brazilian programming education platform.

## Language

**Primary Language:** Brazilian Portuguese (PT-BR). All explanatory text, titles, community posts, and comments must be written in PT-BR. English is only acceptable inside code snippets for variable names or standard library functions. Using English for explanations will be perceived as unprofessional and will significantly reduce engagement. Code comments should be in Portuguese.

## Good Fit

- Educational libraries or frameworks: Projects that are primarily designed for learning (e.g., a simple ORM, a tutorial-focused CLI tool, a pedagogical game engine).
- Step-by-step tutorial projects: Repositories that include a clear README with a structured, lesson-like walkthrough (e.g., "Building a CRUD with Flask and SQLAlchemy").
- Projects with clear career relevance: Tools or examples that directly map to job market skills (e.g., a data pipeline with Pandas, a REST API with Spring Boot, a React dashboard).
- Projects with Portuguese documentation: Any project where the primary documentation, comments, and examples are already in Brazilian Portuguese.
- Projects targeting beginners: Libraries or applications that solve a common beginner problem (e.g., a simpler logging library, a visual debugger helper) with explicit didactic value.

## Poor Fit

- Projects with only English documentation: If the README and all docs are exclusively in English, it will feel foreign and low-effort to the Alura community.
- Niche academic research code: Papers, proof-of-concept implementations of obscure algorithms, or code with no practical application will not resonate.
- Highly opinionated or controversial tools: Alura is a constructive, non-debate environment. Projects that are political, flame-inducing, or that "bash" other technologies are unsuitable.
- Unstable or alpha-stage projects: Alura users expect reliable, working examples. A project with broken dependencies or incomplete features will frustrate learners.
- Projects requiring advanced English-language resources: If the only way to understand the project is to read an English blog post or watch an English video, it will not succeed on Alura.

## Format And Style Notes

- Use a formal but accessible tone. Address the reader as "você" or use the imperative "vamos". Avoid slang.
- Structure content as a lesson. Use numbered lists for steps and subheadings for sections.
- Always explain the "why" behind the code. Don't just show the code; explain the reasoning.
- Use code blocks with language tags. Always specify the language for syntax highlighting.
- Keep code comments in Portuguese. This reinforces the language immersion for the learner.

## Tone

Write as a supportive, pedagogical, and encouraging instructor: clear, structured, welcoming, and focused on helping students level up their skills (using warm Brazilian Portuguese).

## Adapter Guidance

Use a matching generic adapter unless the platform has a dedicated adapter. Keep platform-specific facts here and execution steps in `skills/`.