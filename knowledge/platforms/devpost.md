# Devpost — `https://devpost.com`

URL: https://devpost.com

Source: `legacy-skills/devpost/SKILL.md`

This normalized profile extracts reusable platform knowledge from the legacy platform profile. It is not a runtime skill.

## Trigger Context

Triggered by mentions of 'Devpost', 'hackathon submission', 'prize for best project', 'judging criteria'

## Language

- **Primary Language:** English (US). All project descriptions, titles, and supporting material must be written in American English.
- **Multilingual Strategy:** Non-English descriptions are permitted but strongly discouraged. If your project targets a non-English audience, write the core pitch in English and add a separate section in the target language. Do not rely on automatic translation; judges rarely switch languages. Use English tags (e.g., `#MachineLearning` not `#机器学习`).
- **Tone:** Action-oriented, concise, technical but accessible. Avoid slang and lengthy personal narratives. Prioritize clarity and impact.

## Good Fit

- The project was built during a 24–72 hour hackathon (or can be framed as such).
- The project has a working demo (live URL, video walkthrough, or executable prototype).
- The project uses APIs, SDKs, or platforms offered by prize sponsors (e.g., Twilio, Stripe, Google Cloud, OpenAI).
- The project solves a specific, well-defined problem with a clear "before and after" user benefit.
- The project can be explained in 3–5 sentences with a strong elevator pitch.

## Poor Fit

- The project is a long-term SaaS product with no hackathon origin story.
- The project has no demo or visual evidence of functionality (e.g., pure theory, academic paper without implementation).
- The project relies on proprietary data or hardware that cannot be demonstrated remotely.
- The project is a simple "Hello World" tutorial or a minimal change to an existing open-source project.
- The project requires a lengthy explanation to understand what it does (more than 30 seconds of reading).

## Format And Style Notes

- Lead with the demo. The first thing a judge sees should be a video or a screenshot. Never start with a wall of text.
- Write a headline that states the benefit, not the technology.
- Keep the "Inspiration" section to 2–3 sentences maximum.
- Use bullet points for "How we built it." List the tech stack as a comma-separated string or short bullets.
- Hyperlink all external resources. Do not paste raw URLs.
- Use the built-in editor headings (H2, H3) consistently. Do not use H1.
- Add a "Challenges" section to show resilience and learning. Keep it to 2–3 bullets.
- End with "What's next" to show future vision. 1–2 sentences maximum.

## Tone

code
"Ship a working demo, pitch the benefit in one sentence, and prove you can execute under a deadline."

## Adapter Guidance

Use a matching generic adapter unless the platform has a dedicated adapter. Keep platform-specific facts here and execution steps in `skills/`.
