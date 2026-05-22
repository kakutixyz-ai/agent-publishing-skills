# Daily.dev Skill

URL: https://daily.dev

Source: `legacy-skills/daily-dev/SKILL.md`

This normalized profile extracts reusable platform knowledge from the legacy platform profile. It is not a runtime skill.

## Trigger Context

Triggered by mentions of 'Daily.dev', 'dev community', 'developer news', or 'tech content platform'

## Language

The primary language for content on Daily.dev is **English** (specifically, Standard American English with a technical lexicon). The platform is US-based and the global developer audience expects English. Content in other languages is rare and will have extremely limited reach, as the community and voting system are English-first. If you must post in a non-English language, the post will likely be ignored or downvoted. Always write in English.

## Good Fit

- A new open-source library or framework — especially one that solves a specific, well-known pain point (e.g., a faster state management tool, a new testing utility). The community loves to discover and adopt new tools.
- A deep-dive technical tutorial — content that teaches a non-trivial concept (e.g., "How to implement WebSocket reconnection logic", "Building a custom React renderer"). Depth and clarity are rewarded.
- A performance or architecture case study — real-world benchmarks, migration stories (e.g., "How we reduced our Docker image size by 60%"), or refactoring journeys with measurable results.
- A critical analysis of a popular technology — an opinionated piece with evidence (e.g., "Why I stopped using Next.js for internal tools", "The hidden costs of serverless functions"). Controversy backed by data gets traction.
- A curated list of advanced resources — e.g., "10 must-read papers for distributed systems engineers" or "5 underutilized Rust crates for CLI tools". Lists that go beyond surface-level recommendations.

## Poor Fit

- A beginner "hello world" tutorial — e.g., "How to install Python" or "What is a variable?". The audience is experienced; basic tutorials are considered noise.
- A generic motivational or life-hacking post — e.g., "10 habits of successful developers" or "How to stay productive while working from home". The platform is for technical content, not self-help.
- A thinly veiled product advertisement — e.g., a post that is 90% marketing copy for a SaaS tool with no genuine technical insight. The community will downvote or flag it.
- A non-technical career advice post — e.g., "How to negotiate your salary" or "Should you join a startup?". These belong on Blind or LinkedIn, not Daily.dev.
- A low-effort link dump — a post with no original commentary or analysis, just a list of external links. Users expect value in the post itself.

## Format And Style Notes

- Lead with the problem, not the solution. Start the post by describing a pain point that experienced developers will immediately recognize. Then introduce [Project Name] as a response to that pain.
- Keep paragraphs to 2-3 sentences maximum. Long blocks of text are skipped. Readers scan first, read second.
- Use code blocks for all code snippets. Inline code (backticks) is for variable/function names only.
- Use H2 and H3 headers for scannability. The post should have a clear outline that users can navigate.
- Include at least one concrete, reproducible example. A code snippet that the reader can copy and run in their terminal or browser.
- Use bulleted or numbered lists to summarize key points. This matches the skimming behavior of the audience.
- Avoid marketing hyperbole. Do not use words like "revolutionary," "game-changing," or "unbelievable." Let the technical merit speak for itself.
- End with a clear call to action that invites exploration, not hype. Link to the GitHub repo, npm package, or documentation.

## Tone

javascript
   const { data, error } = useSync({ endpoint: '/api/sync', strategy: 'merge' });

## Adapter Guidance

Use a matching generic adapter unless the platform has a dedicated adapter. Keep platform-specific facts here and execution steps in `skills/`.
