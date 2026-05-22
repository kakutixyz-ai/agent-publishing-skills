# CSS-Tricks

URL: https://css-tricks.com

Source: `legacy-skills/css-tricks/SKILL.md`

This normalized profile extracts reusable platform knowledge from the legacy platform profile. It is not a runtime skill.

## Trigger Context

Triggered by mentions of 'CSS-Tricks', 'CSS-Tricks article', 'CSS-Tricks tutorial', or 'CSS-Tricks blog'

## Language

**Primary language:** English (American English spelling and phrasing, e.g., "color" not "colour").

## Good Fit

- Front-end libraries, frameworks, or tools (e.g., a new CSS utility library, a JavaScript animation library, a React component for responsive layouts).
- Projects that solve a specific, practical CSS/HTML/JavaScript problem (e.g., a technique for creating custom scrollbars, a pattern for responsive tables).
- Tutorial-style content that teaches a single, focused technique with clear code examples and live demos (CodePen embeds).
- Open-source projects with detailed READMEs, changelogs, and a clear "why this exists" narrative (e.g., a CSS reset, a SVG icon system).
- Projects that address browser compatibility issues or progressive enhancement strategies (e.g., a polyfill, a fallback for CSS Grid).

## Poor Fit

- Back-end only frameworks, databases, or server-side languages (e.g., a new Node.js ORM, a Python web framework, a Rust database driver).
- Mobile app development (Swift, Kotlin, Flutter) unless it involves a cross-platform web component.
- Design tools (Figma, Sketch, Adobe XD) unless the content focuses on exporting CSS or design tokens.
- General productivity tools or non-web-development projects (e.g., a note-taking app, a CLI for file management).
- Projects that require extensive theoretical or mathematical explanation with minimal code (e.g., a new sorting algorithm, a machine learning model).

## Format And Style Notes

- Use descriptive, problem-driven titles.
- Open with a clear "the problem" paragraph.
- Use fenced code blocks with language identifiers.
- Embed live demos (CodePen) whenever possible.
- Keep paragraphs short (2–4 sentences) and use bullet lists for steps.
- Include a "Browser Support" section or note for new techniques.
- Use bold for key terms and italic for filenames or emphasis.
- End with a concise summary and a call to action.

## Tone

css
        .container {
          display: grid;
          grid-template-columns: 200px 1fr;
          gap: 1rem;
        }

## Adapter Guidance

Use a matching generic adapter unless the platform has a dedicated adapter. Keep platform-specific facts here and execution steps in `skills/`.
