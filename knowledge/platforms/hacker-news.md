# Hacker News (HN) — news.ycombinator.com

URL: https://news.ycombinator.com

Source: `legacy-skills/hacker-news/SKILL.md`

This normalized profile extracts reusable platform knowledge from the legacy platform profile. It is not a runtime skill.

## Trigger Context

Expert skill for publishing on Hacker News (news.ycombinator.com). Triggered by mentions of 'Hacker News', 'HN', 'Show HN', or 'Ask HN'.

## Language

The primary language for Hacker News is **English (American/International technical English)**. Non-English posts are extremely rare and generally ignored or flagged. The community expects content in clear, direct, and grammatically correct English. If your project documentation is in another language, you must have an English version of the README or a detailed English summary ready for the post or comment.

## Good Fit

- Open-source tools and libraries — especially command-line utilities, developer tooling, databases, or frameworks that solve a clear technical problem.
- Technical deep dives — detailed blog posts explaining how something works under the hood (e.g., database internals, compiler design, networking protocols).
- Novel engineering projects — projects that demonstrate clever engineering, unusual techniques, or impressive performance benchmarks (e.g., a new compression algorithm, a custom kernel, a fast JSON parser).
- "Show HN" projects — personal side projects or startups that are launched and available for immediate use, especially if they have a technical angle or a demo.
- Well-researched essays on technology — thoughtful, evidence-based pieces on software engineering, system design, or the history of computing.

## Poor Fit

- Pure marketing or sales content — landing pages that are just signup forms without a technical explanation or demo.
- Crypto/NFT/blockchain hype — projects that focus on tokenomics, "moon" talk, or unsubstantiated financial claims. Only projects with novel technical implementations are tolerated.
- Non-technical lifestyle or opinion pieces — general productivity advice, "how to be a better developer" motivational posts, or personal life updates without a technical core.
- Projects requiring paid subscriptions to evaluate — if the core functionality is behind a paywall without a free tier or demo, the community will be hostile.
- Low-effort content — poorly written READMEs, projects with no documentation, or submissions that are simply "check out my app" without any explanation of what makes it technically interesting.

## Format And Style Notes

- Lead with the thesis. The first sentence of your comment or post must state the core claim or result. Do not bury the lede.
- Support claims with data or code. Every assertion should be backed by a link, a benchmark, a code snippet, or a specific technical detail.
- Be concise and direct. Use short sentences. Avoid filler words. Aim for 100–300 words in a comment. Longer is acceptable only if every paragraph adds new information.
- Avoid all marketing language. No superlatives, no exclamation marks, no "amazing," "incredible," or "game-changing." Let the technical facts speak for themselves.
- Use a neutral, evidence-based tone. Present your work as a contribution to the field, not a sales pitch. Acknowledge limitations and trade-offs.
- Format code correctly. Use 2-space indentation for code blocks. Keep snippets under 20 lines. Use inline `code` for short references.
- Link to primary sources. If you reference a paper, a library, or a benchmark, link directly to it. Do not link to a blog post that summarizes the paper.
- Be prepared for criticism. Do not get defensive. If someone points out a flaw, acknowledge it and discuss it. The community respects intellectual honesty more than being right.

## Tone

Write as a curious, humble, and intellectually honest engineer: analytical, objective, respectful, and open to critical technical feedback.

## Adapter Guidance

Use a matching generic adapter unless the platform has a dedicated adapter. Keep platform-specific facts here and execution steps in `skills/`.