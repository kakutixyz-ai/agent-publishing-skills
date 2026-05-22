# StackShare — https://stackshare.io

URL: https://stackshare.io

Source: `legacy-skills/stackshare/SKILL.md`

This normalized profile extracts reusable platform knowledge from the legacy platform profile. It is not a runtime skill.

## Trigger Context

Triggered by mentions of 'StackShare', 'tech stack', 'tool comparison', 'stack sharing', or 'software architecture showcase'

## Language

- **Primary language:** English (US). All tool descriptions, stack pages, and user-generated content must be in English. Non-English submissions are effectively invisible to the search algorithm and community.
- **Tone:** Technical, factual, and concise. Avoid marketing superlatives ("best", "amazing", "revolutionary") and personal anecdotes. Use neutral declarative statements like "Used for real-time data processing" or "Replaces traditional cron jobs."
- **Vocabulary:** Use exact tool names as they appear in StackShare's database (e.g., "Amazon S3" not "AWS S3 bucket", "Kubernetes" not "K8s"). Spell out acronyms on first mention unless universally known (e.g., "CI/CD" is fine, but "MLOps" should be "Machine Learning Operations (MLOps)").

## Good Fit

- Proven infrastructure tools — Databases, message queues, CI/CD platforms, monitoring solutions, cloud services, and API gateways with stable releases and active maintenance.
- Developer frameworks and libraries — Web frameworks (React, Django), language runtimes (Node.js, Go), and utility libraries that have an official website and clear documentation.
- Open-source projects with corporate adoption — Tools used by well-known companies (e.g., "Used by Netflix, Uber, and Spotify") perform best because StackShare users search by company name.
- SaaS and PaaS products — Commercial developer tools (e.g., Datadog, Sentry, Vercel) with a clear pricing page and a public API or integration point.
- New versions or major rewrites of existing tools — Announcing "Redis Stack" or "Kubernetes 2.0" as a new tool entry, since StackShare tracks tools not versions.

## Poor Fit

- Consumer apps and mobile games — StackShare is engineering-only. A fitness app, social network, or game belongs on Product Hunt or App Store, not here.
- Unreleased or vaporware projects — Tools with no working demo, no GitHub repo, and no public documentation will be flagged by the community and removed.
- Niche internal tools with no public presence — If the tool has no official website, no logo, and no public documentation, it cannot be added because StackShare requires a canonical URL.
- Low-code/no-code platforms targeting non-developers — Tools like Webflow or Bubble are borderline; if the primary users are designers or business analysts, it will not resonate with the engineering audience.
- Single-contributor hobby projects — A personal script or weekend experiment with no community adoption, no stars on GitHub, and no corporate users will not attract upvotes or stack additions.

## Format And Style Notes

- Lead with the tool name and category. Every entry must start with the exact tool name followed by its assigned category in parentheses. Do not bury the tool name in a sentence.
- Keep descriptions to 1–3 sentences (max 300 characters). StackShare truncates longer descriptions. Every word must earn its place.
- Use neutral, factual language. Avoid "best", "amazing", "revolutionary", "game-changing". Let the features speak.
- Always include the official website URL. StackShare auto-generates a canonical link from the URL. Do not use shortened URLs.
- Select the most specific category. Do not use "Other" unless no predefined category matches.
- List tools in a stack using pipe separators, not bullet points. The platform displays stacks as a horizontal row of logos. Use pipes in the text description.
- Do not include version numbers. StackShare tracks tools, not versions. Only include a version if it is part of the tool's official name in the database (rare).
- Never use images or emojis. The platform only displays tool logos from its own database. User-uploaded images and emojis are not supported and will be stripped.

## Tone

List the tools, describe what they do in one factual sentence, and let the logos speak for themselves.

## Adapter Guidance

Use a matching generic adapter unless the platform has a dedicated adapter. Keep platform-specific facts here and execution steps in `skills/`.
