# Replit: Build and Share in Your Browser

URL: https://replit.com

Source: `legacy-skills/replit/SKILL.md`

This normalized profile extracts reusable platform knowledge from the legacy platform profile. It is not a runtime skill.

## Trigger Context

Triggered by mentions of 'Replit', 'Repl', 'online IDE', 'vibe coding', and 'browser-based development'

## Language

**Primary Language:** English (American English for technical terms, error messages, and documentation).

## Good Fit

- Runnable web applications with live demos — Projects that can be fully executed in a browser (Flask apps, React SPAs, Discord bots, Streamlit dashboards).
- Prototypes and minimum viable products (MVPs) — Early-stage ideas that demonstrate core functionality, even if incomplete.
- Educational code examples and interactive tutorials — Code that teaches a concept through runnable examples (e.g., "Build a REST API in 10 lines").
- AI-assisted or "vibe-coded" projects — Projects built with AI tools (Copilot, Replit's Ghostwriter) that showcase rapid iteration.
- Open-source libraries with a single-file entry point — Small tools or utilities that can be demonstrated with one main script and minimal dependencies.

## Poor Fit

- Large-scale enterprise applications — Monolithic codebases with complex build pipelines, databases, and microservices that exceed Replit's resource limits.
- Documentation-heavy projects — Projects that require extensive READMEs, wikis, or API docs to be understood; Replit's audience skips reading and runs the code.
- Closed-source or proprietary software — Replit is inherently public and remixable; private Repls exist but go against the community ethos.
- Hardware-dependent projects — Anything requiring GPU acceleration, USB devices, or specific local hardware (e.g., Arduino, iOS apps).
- Long-form written content — Blog posts, essays, or tutorials without a runnable code component; these belong on Dev.to or Medium.

## Format And Style Notes

- Lead with the live demo link. Always put the runnable Repl URL first. The community wants to run your code, not read about it.
- Use code blocks for every code reference. Never mention a function, class, or snippet without wrapping it in triple backticks.
- Keep the post under 200 words. Replit users skim. State what it does, how you built it, and what's next.
- Use `diff` blocks to show changes. When iterating on a project, show what changed.
- Front-load the result, then the method. Say what it does first, then briefly how.
- Include exactly one visual. A single GIF of the running app or a screenshot of the output. More than one is clutter.
- Use a searchable, noun-phrase title. The title should be what someone would type into Google.
- Avoid "bump" replies and generic praise. Don't reply to your own post. Comments should be technical and specific.

## Tone

diff
     + @app.route('/api/login', methods=['POST'])
     - @app.route('/api/auth', methods=['POST'])

## Adapter Guidance

Use a matching generic adapter unless the platform has a dedicated adapter. Keep platform-specific facts here and execution steps in `skills/`.
