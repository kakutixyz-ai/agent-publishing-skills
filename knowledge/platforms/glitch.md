# Glitch — https://glitch.com

URL: https://glitch.com

Source: `legacy-skills/glitch/SKILL.md`

This normalized profile extracts reusable platform knowledge from the legacy platform profile. It is not a runtime skill.

## Trigger Context

Triggered by mentions of 'Glitch', 'remix', 'live coding', 'web app prototyping', or 'Node.js playground'.

## Language

The primary language for project descriptions, READMEs, and community interaction is **English (US/international)**. While Glitch is global, the dominant community language and all official documentation/UI is English. Code comments and project descriptions should be in English to maximize visibility and remixability.

## Good Fit

- Small, runnable web apps or APIs that can be demonstrated live (e.g., a chat bot, a URL shortener, a data visualization).
- Experimental or incomplete projects where the value is in the idea or the learning process, not production polish.
- Projects that benefit from being forked and modified by others (e.g., a starter template for a React app, a Discord bot skeleton).
- Front-end focused demos with HTML, CSS, and JavaScript that can be seen instantly in the live preview.
- Tools or utilities that solve a specific, small problem (e.g., a markdown-to-HTML converter, a random password generator).

## Poor Fit

- Large-scale, production-grade applications with complex build pipelines or databases (Glitch has resource limits).
- Native mobile apps or desktop applications that cannot run in a browser.
- Projects requiring proprietary licenses or strict copyright enforcement (the "remix" culture expects open, permissive code).
- Pure documentation sites or static blogs with no interactive code component.
- Projects that rely heavily on paid third-party APIs or services that require secret keys (though env vars are supported, the community dislikes broken demos).

## Format And Style Notes

- Lead with the live demo link. Always provide the `https://[project].glitch.me` URL first. This is the most important piece of information.
- Keep the README under 300 words. Glitch users scan quickly. Get to the point.
- Use code blocks with language tags. Always specify the language for syntax highlighting.
- Be honest about limitations. The community respects transparency. List known bugs or missing features.
- Include a "Remix on Glitch" button. This is the standard call-to-action.
- Use inline code for function names and variables. This is standard technical writing.
- Avoid images unless demonstrating a visual bug. Text and live demos are preferred. Images should be small and functional.
- Structure with flat headings. Use `##` for major sections, `###` rarely. Avoid deeply nested structures.

## Tone

"We're all learning here — share your broken prototype, explain what it does in one sentence, and invite others to remix it."

## Adapter Guidance

Use a matching generic adapter unless the platform has a dedicated adapter. Keep platform-specific facts here and execution steps in `skills/`.
