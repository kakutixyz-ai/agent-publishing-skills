# Hatena Blog

URL: https://hatenablog.com/

Source: `legacy-skills/hatena-blog/SKILL.md`

This normalized profile extracts reusable platform knowledge from the legacy platform profile. It is not a runtime skill.

## Trigger Context

Triggered by mentions of 'Hatena Blog', 'はてなブログ', or 'Hatena' for writing technical blog posts in Japanese.

## Language

**Primary language: Japanese (日本語).**  
The entire ecosystem—UI, monetization (Hatena Blog Pro), user base, and discovery via Hatena Bookmark—is Japanese. English posts are treated as noise and rarely reach the core veteran tech circle. Write entirely in Japanese.

## Good Fit

- Personal documentation projects – libraries, tools, or frameworks you built primarily for yourself but are sharing as a reference.
- Migration or upgrade stories – moving from an old stack (e.g., Python 2 → 3, Rails 4 → 7, jQuery → React) with detailed before/after code.
- Deep-dive debugging posts – step-by-step analysis of a tricky bug, including failed attempts and the final root cause.
- Deprecation or sunsetting announcements – why you stopped maintaining a tool, what you learned, and alternatives for users.
- Configuration-heavy setups – Docker Compose, CI/CD pipelines, or server provisioning with many config files and command snippets.

## Poor Fit

- Marketing-first launch posts – "We raised $5M" or "Download our new app today!" will be ignored or downvoted.
- Tutorials for absolute beginners – "What is Git?" or "How to install Python" are too basic for this audience.
- Opinion pieces without code – hot takes on tech trends with no concrete implementation will be dismissed as noise.
- Clickbait or listicles – "10 Tools You Must Use in 2025" style posts do not match the personal-lab atmosphere.
- Product demos with heavy branding – posts that read like a press release or a sales brochure will get zero stars.

## Format And Style Notes

- Start directly with the problem statement.
- Use Hatena's proprietary code block syntax, not standard markdown.
- Separate "Problem" and "Solution" sections with a horizontal rule.
- Use footnotes extensively for references.
- Prefer tables over bullet points for configuration comparisons.
- Use diagrams (Mermaid or ASCII) instead of screenshots.
- Acknowledge dead ends and failed attempts honestly.
- End with a reflective conclusion, not a call to action.

## Tone

Good: 「先日、Rails 7 にアップグレードした際に、Active Storage の S3 接続で謎のエラーに遭遇しました。」
   Bad: 「こんにちは！今日はRailsのアップグレードについて書きます。まず初めに…」

## Adapter Guidance

Use a matching generic adapter unless the platform has a dedicated adapter. Keep platform-specific facts here and execution steps in `skills/`.
