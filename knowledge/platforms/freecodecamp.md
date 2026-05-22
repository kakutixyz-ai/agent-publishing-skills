# FreeCodeCamp (https://www.freecodecamp.org)

URL: https://www.freecodecamp.org

Source: `legacy-skills/freecodecamp/SKILL.md`

This normalized profile extracts reusable platform knowledge from the legacy platform profile. It is not a runtime skill.

## Trigger Context

Triggered by mentions of 'FreeCodeCamp', 'freeCodeCamp', 'FCC', 'freeCodeCamp forum', or requests for writing a forum post for the freeCodeCamp community.

## Language

The primary language for all forum posts, GitHub issues, and Discord discussions is **English**. While the interactive curriculum is translated into multiple languages (e.g., Spanish, Chinese, Arabic), the core community operates almost exclusively in English to maximize reach and collaboration. Non-English posts on the main forum are often ignored or redirected to language-specific subcategories. Use standard technical English with precise computer science and web development terminology.

## Good Fit

- Open-source tools and libraries that solve a specific, common coding problem (e.g., a new state management library, a testing utility, a CSS framework).
- Educational resources that complement the freeCodeCamp curriculum (e.g., a tutorial on advanced React patterns, a guide to deploying with Docker).
- Projects that demonstrate a clear "learning by doing" philosophy (e.g., a step-by-step coding challenge, a project-based course).
- Developer tools that are free, open-source, and have minimal setup overhead (e.g., a CLI tool for scaffolding projects, a VS Code extension).
- Bug fixes or improvements to existing open-source projects that are relevant to the community (e.g., a fix for a common JavaScript pitfall).

## Poor Fit

- Commercial products, paid services, or anything with a "buy now" call to action.
- Low-effort or incomplete projects (e.g., a half-finished tutorial, a "Hello World" app).
- Projects that require extensive proprietary software or paid subscriptions to use.
- Off-topic content unrelated to coding, computer science, or learning (e.g., gaming, politics, lifestyle).
- Self-promotional posts that do not provide value to the community (e.g., "Check out my blog for passive income tips").

## Format And Style Notes

- Use markdown for all formatting, especially code blocks. Always specify the language in fenced code blocks. Never inline code for blocks longer than 10 characters.
- Start every help post with the direct link to the specific freeCodeCamp challenge. This is mandatory for getting help on curriculum exercises.
- State the expected vs. actual behavior in 1-2 sentences. Be precise and avoid emotional language.
- Paste the entire relevant code block. Do not crop or paraphrase it. The community needs to see the full context to help.
- Include the exact error message in a separate code block. Do not paraphrase the error.
- Avoid screenshots of code. Use text-based code blocks so others can copy and test your code. Screenshots are only acceptable for UI rendering bugs.
- Keep your post concise. Aim for under 200 words of prose, plus the code block. Long, rambling narratives are ignored.
- Show that you have tried something. Before posting, attempt to debug on your own. Mention what you have tried (e.g., "I tried using `console.log` and the value of `x` is `undefined` at line 10").

## Tone

javascript
        function add(a, b) {
          return a + b;
        }

## Adapter Guidance

Use a matching generic adapter unless the platform has a dedicated adapter. Keep platform-specific facts here and execution steps in `skills/`.
