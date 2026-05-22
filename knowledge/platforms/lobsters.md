# Lobsters (lobste.rs)

URL: https://lobste.rs

Source: `legacy-skills/lobsters/SKILL.md`

This normalized profile extracts reusable platform knowledge from the legacy platform profile. It is not a runtime skill.

## Trigger Context

Triggered by mentions of 'Lobsters', 'lobste.rs', or 'Lobsters community'

## Language

**Primary language: English (American/Commonwealth formal-technical English).**

## Good Fit

- Systems-level or infrastructure projects: Kernel modules, compilers, databases, networking tools, or anything that operates close to the metal.
- Novel algorithms or data structures: A new sorting algorithm, a lock-free queue, or a novel indexing technique with rigorous analysis and benchmarks.
- Open-source libraries with deep technical documentation: A Rust crate, a C library, or a Python package that solves a hard engineering problem and has a well-written README and technical blog post.
- Programming language or toolchain innovations: A new linter, a static analyzer, a debugger extension, or a language runtime optimization.
- Security research with a technical writeup: A vulnerability disclosure, a fuzzing framework, or a cryptographic primitive explanation—as long as it avoids political or social commentary.

## Poor Fit

- Consumer-facing apps or products: A new social media app, a to-do list, a note-taking tool, or any project without a deep technical angle.
- Low-code or no-code platforms: Drag-and-drop builders, visual programming tools, or anything that abstracts away engineering complexity.
- Tutorials for beginners: "How to learn Python in 10 minutes" or "Getting started with React." The community expects advanced, expert-level content.
- Projects with heavy self-promotion: "Check out my startup" or "I built this in a weekend" without substantive technical depth.
- Non-technical or political content: Any project related to social issues, politics, religion, or that includes non-engineering commentary.

## Format And Style Notes

- Titles must be descriptive and factual. No clickbait, no questions, no editorializing.
- Story descriptions (optional) should be 1-2 sentences explaining why the article is technically interesting. Do not summarize the whole article.
- Comments must be dense and assume a high baseline of technical knowledge. Use precise terminology.
- Use short paragraphs (2-4 sentences max per block) in comments. Break up long thoughts.
- Use blockquotes to reference the parent comment or article text before responding.
- Use inline code for function names, variables, commands, and short code snippets.
- Code blocks must use triple backticks with a language identifier, and must be syntactically correct.
- Avoid bullet lists unless comparing specific technical points. Use prose for explanations.

## Tone

Write as if you are presenting a paper to a room of senior engineers who will critically examine every technical claim—no fluff, no hype, just precise, rigorous, and insightful technical discussion.

## Adapter Guidance

Use a matching generic adapter unless the platform has a dedicated adapter. Keep platform-specific facts here and execution steps in `skills/`.
