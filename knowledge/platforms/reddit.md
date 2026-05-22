# Reddit — https://www.reddit.com/

URL: https://www.reddit.com/

Source: `legacy-skills/reddit/SKILL.md`

This normalized profile extracts reusable platform knowledge from the legacy platform profile. It is not a runtime skill.

## Trigger Context

Triggered by mentions of 'Reddit', 'subreddit', 'r/programming', 'Show HN', 'frontend community'

## Language

**Primary Language:** English (American English spelling and idioms)

## Good Fit

- Libraries and frameworks that solve a specific, common pain point (e.g., a new state management library, a CSS utility tool).
- Open-source tools with clear documentation, a working demo, and a GitHub repo that invites contributions.
- Tutorials and guides that teach a concept or technique (e.g., "How to implement infinite scroll in React").
- Bug reports or performance comparisons backed by reproducible examples (CodeSandbox, Stackblitz).
- Discussion-worthy concepts that invite debate (e.g., "Why I stopped using Redux for context API").

## Poor Fit

- Paid products or services without a free tier or open-source component (Reddit is hostile to ads).
- Vaporware or "coming soon" projects with no working demo or code.
- Low-effort "rate my app" posts without context, screenshots, or technical details.
- Projects that require account sign-up to see the main value (users will not register).
- "Revolutionary" or "game-changing" claims without evidence (hyperbole gets downvoted).

## Format And Style Notes

- Use a clear, factual title that summarizes the post's value.
- Start with a TL;DR if the post is long (>3 paragraphs).
- Use short paragraphs (2–4 sentences max) and bullet points for lists.
- Include a live demo link or a GIF showing the project in action.
- Provide a reproducible example for bug reports or feature requests.
- Quote or reference the specific part of documentation you're discussing.
- Use code blocks with language identifiers for all code snippets.
- Engage with comments within the first hour to boost visibility.

## Tone

javascript
   const [count, setCount] = useState(0);

## Adapter Guidance

Use a matching generic adapter unless the platform has a dedicated adapter. Keep platform-specific facts here and execution steps in `skills/`.
