# Stack Overflow en español

URL: https://es.stackoverflow.com](https://es.stackoverflow.com

Source: `legacy-skills/stack-overflow-en-español/SKILL.md`

This normalized profile extracts reusable platform knowledge from the legacy platform profile. It is not a runtime skill.

## Trigger Context

Triggered by mentions of 'Stack Overflow en español', 'Stack Overflow ES', 'SO español', or 'es.stackoverflow'

## Language

**Primary language:** Spanish (Español), in a neutral, pan-Hispanic register. Avoid regional slang (e.g., "vale" from Spain, "chévere" from Venezuela). Use formal "usted" or neutral "tú" (default). Technical keywords (e.g., `function`, `class`, `array`) remain in English. Code comments may be in Spanish. Posting in English will result in downvotes and closure.

## Good Fit

- Libraries or tools that solve a specific, reproducible programming problem (e.g., a date formatting utility, a data validation library).
- Projects with a clear "before/after" demonstrable outcome (e.g., a performance optimization, a bug fix).
- Open-source projects with a well-documented API that users can install and test immediately.
- Code snippets, algorithms, or design patterns that can be explained concisely (under 50 lines of code).
- Projects that target the Spanish-speaking developer community (e.g., a Spanish-language linter, a localization tool).

## Poor Fit

- General discussion, opinion pieces, or "what do you think about X?" posts (Stack Overflow is strictly Q&A).
- Projects that require a long narrative or tutorial walkthrough (use a blog instead).
- Projects with no reproducible code example (e.g., "I have an idea for an app").
- Projects that are primarily visual or design-focused (e.g., a UI component library without code logic).
- Projects that rely on non-standard environments or proprietary platforms (e.g., a closed-source SaaS tool).

## Format And Style Notes

- Titles must be specific and include the technology.
- Start with a clear problem statement (1–2 sentences).
- Include a minimal, reproducible code example.
- State the expected vs. actual output.
- Mention what you already tried.
- Use code blocks with language identifiers.
- Place error messages inside code blocks or blockquotes.
- Avoid social pleasantries in the question body.

## Tone

Llegas con un problema concreto, muestras tu código mínimo, y te vas con una solución precisa; sin rodeos, sin agradecimientos, sin cháchara.

## Adapter Guidance

Use a matching generic adapter unless the platform has a dedicated adapter. Keep platform-specific facts here and execution steps in `skills/`.
