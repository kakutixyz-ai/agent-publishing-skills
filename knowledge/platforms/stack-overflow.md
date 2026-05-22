# Stack Overflow

URL: https://stackoverflow.com

Source: `legacy-skills/stack-overflow/SKILL.md`

This normalized profile extracts reusable platform knowledge from the legacy platform profile. It is not a runtime skill.

## Trigger Context

Triggered by mentions of 'Stack Overflow', 'SO', 'stackexchange' or 'technical Q&A'

## Language

**Primary language:** English (US). All questions, answers, comments, and documentation references must be in English. Non-English posts are subject to immediate closure. Use American English spelling (e.g., "color" not "colour", "initialize" not "initialise"). Avoid idioms, humor, or conversational tone. Technical precision is mandatory.

## Good Fit

- Libraries, frameworks, or tools that solve a specific, reproducible technical problem (e.g., a Python package for parsing malformed JSON, a JavaScript library for debouncing API calls).
- Open-source projects with clear, minimal reproduction steps for common bugs or integration issues (e.g., "How to use [Project Name] with Django's ORM?").
- Projects that have a well-defined error message or stack trace output that users encounter (e.g., `ImportError: No module named 'foo'` when installing [Project Name]).
- Command-line tools or APIs with unambiguous input/output behavior (e.g., "Why does `[Project Name] --verbose` return exit code 1 on Windows?").
- Projects that can be explained in 3–5 code lines without requiring external state or complex setup (e.g., a single-function utility library).

## Poor Fit

- End-user applications, mobile apps, or games where the problem is subjective or depends on user interface behavior (e.g., "Why does my app look ugly?").
- Projects requiring extensive setup, Docker containers, or multi-step environment configuration (e.g., Kubernetes cluster debugging).
- Opinion-based or design-choice questions (e.g., "Should I use [Project Name] or [Alternative]?").
- Projects that are primarily visual, artistic, or creative (e.g., a CSS animation library without a concrete rendering bug).
- "Help me write my code" requests where the user has not attempted a solution (e.g., "How do I build a web scraper with [Project Name]?").

## Format And Style Notes

- Lead with the problem, not the project. Start with the error or behavior, then introduce the project as a solution.
- Provide a minimal, self-contained code block first. No prose before the code.
- Use exact error messages in code blocks, never paraphrased.
- State what you have already tried before asking.
- Avoid any opinion, thanks, or social pleasantries.
- Use precise technical terminology, not analogies or metaphors.
- Format all code, configuration, and terminal output as code blocks with language tags.
- Link to official documentation when referencing project features.

## Tone

python
     import my_project
     result = my_project.process("data.txt")
     # Expected: {"status": "ok"}
     # Actual: TypeError: process() missing 1 required positional argument: 'encoding'

## Adapter Guidance

Use a matching generic adapter unless the platform has a dedicated adapter. Keep platform-specific facts here and execution steps in `skills/`.
