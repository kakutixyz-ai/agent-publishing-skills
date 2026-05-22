# CodePen — https://codepen.io

URL: https://codepen.io

Source: `legacy-skills/codepen/SKILL.md`

This normalized profile extracts reusable platform knowledge from the legacy platform profile. It is not a runtime skill.

## Trigger Context

Triggered by mentions of 'CodePen', 'pen', 'frontend demo', 'CSS art', or 'interactive code snippet'.

## Language

**Primary language:** English. CodePen is a global platform for frontend developers, and all UI, documentation, and community norms are in English. Code comments within pens should be written in English to maximize understanding. Non-English descriptions are strongly discouraged as they reduce discoverability and community engagement. If you must include non-English text, keep it to a single line in the description field.

## Good Fit

- CSS art and visual experiments: Pens that demonstrate creative use of CSS properties (e.g., gradients, animations, 3D transforms) to create artistic visuals.
- UI component demos: Small, self-contained frontend components like modals, carousels, toggle switches, or navigation menus.
- JavaScript library or framework showcases: Minimal working examples that demonstrate a specific feature of a library (e.g., a React hook, a Vue directive, a GSAP timeline).
- Interactive learning tools: Pens that teach a concept through interactivity, such as an SVG path animation walkthrough or a flexbox playground.
- Performance comparisons: Side-by-side demos comparing different approaches (e.g., CSS vs. JS animation, canvas vs. SVG rendering).

## Poor Fit

- Backend or full-stack projects: CodePen only runs client-side code. Anything requiring a database, server logic, or authentication cannot be demonstrated.
- Long-form tutorials or documentation: The platform is for code, not prose. Multi-paragraph explanations belong on a blog, not in a pen description.
- Native mobile or desktop applications: No Swift, Kotlin, C#, or other non-web languages are supported.
- Large, multi-file projects: Pens are limited in size and complexity. A full application with dozens of components is impractical.
- Commercial product pitches: CodePen is a creative sandbox, not a marketplace. Avoid direct sales language or ads.

## Format And Style Notes

- Lead with the visual result. The rendered output is the primary content. Never write a long introduction before showing what the code does.
- Keep descriptions extremely short. 1–2 sentences maximum. State what the pen does and any key dependencies.
- Use code comments to explain *why*, not *what*. Assume the reader can read the code; explain the reasoning.
- Organize code panels logically. HTML first (structure), then CSS (style), then JS (behavior). Use preprocessors (SCSS, Pug, Babel) when they add clarity.
- Avoid external assets unless necessary. Prefer CDN links over local files. If you must use an image, use a placeholder service (e.g., picsum.photos).
- Make your code forkable and readable. Use consistent indentation, meaningful variable names, and avoid unnecessary minification.
- Tag your pen appropriately. Use relevant tags like `css-art`, `animation`, `react`, `vue`, `gsap` to increase discoverability.
- Add a license if you want reuse. MIT or CC0 licenses signal that others can fork and build upon your work.

## Tone

"Let the code speak for itself; the output pane is the headline, the code panels are the story, and the description is just the caption."

## Adapter Guidance

Use a matching generic adapter unless the platform has a dedicated adapter. Keep platform-specific facts here and execution steps in `skills/`.
