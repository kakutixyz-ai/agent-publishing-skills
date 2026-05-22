# Findy — https://findy-code.io

URL: https://findy-code.io

Source: `legacy-skills/findy/SKILL.md`

This normalized profile extracts reusable platform knowledge from the legacy platform profile. It is not a runtime skill.

## Trigger Context

Triggered by mentions of 'Findy', 'Findy Code', 'Findy.io', '日本のエンジニア転職', 'エンジニア市場価値', 'GitHub 評価', 'テックスキル評価'

## Language

- **Primary language:** Japanese (ja-JP).
- **Multilingual strategy:** All content on Findy must be in professional, business-level Japanese. English is only acceptable for isolated technical terms (e.g., "TypeScript," "Kubernetes," "microservices") within an otherwise Japanese context. Using English as the primary language will result in significantly lower engagement, as the platform is exclusively designed for the Japanese engineering job market. Do not use English for profile descriptions, project introductions, or any narrative text.

## Good Fit

- Projects with a strong, verifiable GitHub presence (public repositories with clear README, active commit history, and issue management).
- Open-source libraries or tools that solve a specific, recognized problem in the Japanese software engineering community (e.g., a Japanese-language-aware linter, a cloud cost monitoring tool, a CI/CD optimization library).
- Projects that demonstrate deep technical skill in a specific stack (e.g., Rust systems programming, Go backend services, iOS/Android native development).
- Projects that are production-ready or have clear documentation and a proven track record of usage (e.g., starred by other companies, used in production at known Japanese tech firms).
- Developer tools, infrastructure projects, or performance optimization libraries where the value can be quantified (e.g., "reduces build time by 40%," "used by 3 companies in production").

## Poor Fit

- Consumer-facing apps or services that have no technical or open-source component (e.g., a food delivery app, a social media platform).
- Projects that are purely design-oriented or content-focused (e.g., a UI design system without code, a blog theme).
- Early-stage, unfinished projects with no public code, no README, and no demonstrable technical output.
- Projects that rely heavily on marketing copy, community hype, or personal branding rather than technical merit.
- Projects that are not translatable to or relevant for the Japanese engineering market (e.g., a tool for US-specific tax regulations, a platform for local US events).

## Format And Style Notes

- Focus on data, not narrative. Every statement should be backed by a number, a metric, or a verifiable fact. Avoid storytelling, emotional appeals, or subjective praise.
- Use structured bullet points, not paragraphs. Information should be scannable. Use short, factual bullet points or lists.
- Quantify everything. Whenever possible, provide a number: years of experience, lines of code, number of stars, number of users, performance improvement percentage.
- Prioritize technical accuracy over accessibility. Use precise technical terms, even if they are niche. Do not oversimplify for a general audience.
- Be ruthlessly concise. No fluff, no filler words, no redundant explanations. Every word must carry weight.
- Avoid self-promotion and personal anecdotes. Do not talk about your journey, your passion, or your learning process. Focus on the output and the result.
- Use Japanese technical vocabulary correctly. Match the terminology used by Japanese engineers (e.g., "バックエンド" not "backend", "レビュー" not "code review" where appropriate). Be consistent.
- Connect everything to GitHub. The ultimate proof is in the commit history. Reference specific repositories, pull requests, or issues whenever possible.

## Tone

データで語れ。感情は不要。コードが全ての証拠だ。

## Adapter Guidance

Use a matching generic adapter unless the platform has a dedicated adapter. Keep platform-specific facts here and execution steps in `skills/`.
