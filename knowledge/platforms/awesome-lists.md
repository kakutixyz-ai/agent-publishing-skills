# Awesome Lists (GitHub Topic: awesome-list)

URL: https://github.com/topics/awesome-list

Source: `legacy-skills/awesome-lists/SKILL.md`

This normalized profile extracts reusable platform knowledge from the legacy platform profile. It is not a runtime skill.

## Trigger Context

Triggered by mentions of 'Awesome Lists' or 'curated GitHub lists'

## Language

**Primary language:** English (American English spelling preferred).

## Good Fit

- Curated resource aggregations: Projects that collect links to tools, libraries, tutorials, or articles on a single, well-defined topic (e.g., "Awesome Machine Learning", "Awesome Go").
- Open-source libraries or frameworks: Projects that are themselves a library or framework and can be listed as one entry in a broader awesome list (e.g., a new HTTP client library for Python).
- Developer tools and CLI utilities: Tools that solve a specific, demonstrable problem for developers (e.g., a code formatter, a testing framework).
- Tutorial series or educational content: A collection of blog posts, videos, or courses that teach a coherent skill (e.g., "Awesome React Hooks Tutorials").
- Minimal, dependency-free projects: Projects that are self-contained, have clear documentation, and are easy to evaluate with a single README.

## Poor Fit

- Commercial products or SaaS platforms: Awesome lists are for free, open-source resources; paid tools, proprietary software, or services with paywalls are not accepted.
- Personal projects with no community value: A one-off script or a project with no documentation, no license, and no clear use case for others.
- Projects lacking a public repository: Awesome lists link to GitHub repos (or similar); projects hosted only on personal websites or private repos cannot be included.
- Inactive or abandoned projects: Lists maintainers expect entries to be actively maintained (recent commits, responsive issues). A project with no updates in 3+ years is a poor fit.
- Topics that already have a canonical awesome list: If an exhaustive, high-quality awesome list exists for the same topic, a new competing list is discouraged unless it offers a unique angle (e.g., opinionated curation, beginner-focused).

## Format And Style Notes

- Use strict GitHub-Flavored Markdown (GFM). No HTML, no tables, no images. Every entry is a bullet point with a link and a short description.
- Keep descriptions under 80 characters. Users scan; they do not read paragraphs.
- Alphabetize entries within each category. Do not sort by popularity, date, or personal preference.
- Use descriptive, hierarchical headings. Each heading should clearly tell the reader what category follows.
- Include a Table of Contents (TOC) for lists longer than 10 entries. Use anchor links to section headings.
- Use backticks for inline code (package names, commands, filenames). Do not use bold or italic for technical terms.
- Do not use emoji, images, or gifs. The awesome list format is text-only. Emoji are only acceptable in official badges (e.g., the `[![Awesome](badge)](https://awesome.re)` badge).
- Include a Contributing section and a License section at the bottom. This signals that the list is open to community contributions and is legally reusable.

## Tone

The vibe is: "A minimalist, no-nonsense directory of the best resources — scan, find, and move on."

## Adapter Guidance

Use a matching generic adapter unless the platform has a dedicated adapter. Keep platform-specific facts here and execution steps in `skills/`.
