# Indie Logs — https://indielogs.com

URL: https://indielogs.com

Source: `legacy-skills/indie-logs/SKILL.md`

This normalized profile extracts reusable platform knowledge from the legacy platform profile. It is not a runtime skill.

## Trigger Context

Triggered by mentions of 'Indie Logs', 'indielogs.com', 'building in public logs', or 'indie dev diary platform'

## Language

**Primary language:** English (US/UK neutral). The platform's audience is global indie developers, and English is the lingua franca. Code snippets, technical terms, and tool names always remain in English. Non-English posts are rare and may have reduced reach. If you must write in another language, include an English summary at the top and use English for all code blocks and technical terms. Avoid marketing jargon ("disruptive", "game-changing"), overly formal language, and conversational slang. Use plain technical English.

## Good Fit

- Open-source libraries or tools where the development process itself is interesting (e.g., building a new caching library, a CLI tool, a database driver)
- Side projects or MVPs where you are making incremental progress and want to document the journey publicly
- Technical experiments, refactors, or migrations (e.g., "Switching from REST to GraphQL", "Porting a Python tool to Rust")
- Projects with a clear technical challenge or learning curve (e.g., implementing a custom compression algorithm, building a real-time sync engine)
- Developer tools, APIs, SDKs, or frameworks that other indie developers might adopt or learn from

## Poor Fit

- Consumer-facing apps or products that rely on marketing copy, screenshots, or visual demos (e.g., a photo editing app, a social media platform)
- Projects that are already polished, launched, and no longer in active development — logs need ongoing progress
- Non-technical projects like e-commerce stores, content blogs, or physical products
- Projects that require extensive visual storytelling (e.g., game trailers, UI animations, design portfolios)
- Projects where the primary value is a finished product or service, not the building process

## Format And Style Notes

- Start with a concise summary of what you accomplished.
- Use Markdown headers to structure your log into clear sections.
- Include concrete technical details — library names, version numbers, function names.
- Use fenced code blocks with language tags for any code snippets.
- Be honest about failures and blockers — these are valued content.
- Limit images and emojis to one or two per post maximum, and only for emphasis.
- Keep posts between 300 and 700 words; use a TL;DR for longer posts.
- Embed links naturally within text — to GitHub commits, PRs, or live demos.

## Tone

`python
   def parse_line(line: str) -> dict:
       return json.loads(line)

## Adapter Guidance

Use a matching generic adapter unless the platform has a dedicated adapter. Keep platform-specific facts here and execution steps in `skills/`.
