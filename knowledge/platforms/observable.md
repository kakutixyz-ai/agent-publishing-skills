# Observable (https://observablehq.com)

URL: https://observablehq.com

Source: `legacy-skills/observable/SKILL.md`

This normalized profile extracts reusable platform knowledge from the legacy platform profile. It is not a runtime skill.

## Trigger Context

Triggered by mentions of 'Observable', 'Observable notebook', 'interactive visualization', or 'D3 notebook'.

## Language

The primary language of Observable is **English (American technical English)**. Code comments, cell descriptions, and notebook titles should be written in English to maximize discoverability and forking potential. Non-English prose is rare and may limit the notebook's reach within the platform's algorithmic feed. If multilingual content is necessary, consider adding a brief English summary in the first Markdown cell.

## Good Fit

- Data visualization libraries or components (e.g., a new D3.js plugin, a Plot extension, a custom chart type).
- Interactive data analysis tools or dashboards (e.g., a real-time sensor monitor, a financial portfolio explorer).
- Tutorials or walkthroughs that teach a specific visualization technique (e.g., "How to build a choropleth map with Observable Plot").
- Reproducible research or data journalism pieces where code and output must be transparent.
- Prototypes or proofs-of-concept for interactive web graphics (e.g., a generative art sketch, a physics simulation).

## Poor Fit

- Static blog posts or long-form textual essays without interactive code cells.
- Backend or server-side projects (e.g., a REST API, a database migration tool) that cannot run in the browser.
- Projects written primarily in Python, R, or other non-JavaScript languages (Observable's native runtime is JavaScript).
- Mobile apps or native desktop applications that have no web-based visualization component.
- Projects that rely on proprietary data that cannot be publicly shared or attached as a file.

## Format And Style Notes

- Lead with the visual output. The first cell should return the chart or interactive element, not a description.
- Use separate cells for data loading, transformation, and rendering. This leverages Observable's reactivity.
- Prefer declarative Observable Plot over imperative D3.js when possible. It's more idiomatic and concise.
- Comment only what is non-obvious. The code itself should be clean and self-documenting.
- Use `viewof` for interactive inputs (sliders, dropdowns, checkboxes). This is the standard way to add controls.
- Avoid `console.log()` for debugging. Use the cell's return value or a dedicated `display()` call.
- Name your cells with descriptive identifiers. This makes the notebook readable and allows other cells to reference them.
- Include a Markdown cell at the top with a title and a 1-2 sentence abstract. No long introductions.

## Tone

"Code that speaks for itself: every cell is a self-contained experiment, and the output is the only documentation that matters."

## Adapter Guidance

Use a matching generic adapter unless the platform has a dedicated adapter. Keep platform-specific facts here and execution steps in `skills/`.
