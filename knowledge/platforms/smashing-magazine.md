# Smashing Magazine

URL: https://www.smashingmagazine.com/

Source: `legacy-skills/smashing-magazine/SKILL.md`

This normalized profile extracts reusable platform knowledge from the legacy platform profile. It is not a runtime skill.

## Trigger Context

Triggered by mentions of 'Smashing Magazine', 'Smashing Mag', 'smashingmagazine.com'

## Language

**Primary Language:** English (International/Technical)

## Good Fit

- Open-source libraries or frameworks with robust documentation and real-world use cases (e.g., a new state management tool with performance benchmarks)
- Design systems or component libraries that demonstrate accessibility-first principles and measurable improvements
- Developer tooling that solves a specific, painful problem in the frontend workflow (e.g., a build tool that reduces bundle size by 40%)
- In-depth technical guides or tutorials that teach a complex concept step-by-step with working code examples
- Case studies of production deployments showing performance gains, accessibility wins, or design process improvements

## Poor Fit

- Pure marketing or promotional content without substantial technical depth
- Beginner-level tutorials that only cover basic syntax (e.g., "What is CSS?" or "JavaScript for absolute beginners")
- Projects that are vaporware, incomplete, or lack a working demo/repository
- Opinion pieces without data, benchmarks, or reproducible examples
- Content that violates web standards, ignores accessibility, or promotes dark patterns

## Format And Style Notes

- Lead with the problem, not the introduction. The first paragraph must state the pain point and promise a solution. No fluff, no "in this article we will discuss."
- Use descriptive, action-oriented headings. Headers should tell the reader what they will learn or do.
- Provide working code examples in every technical section. Code must be syntactically correct, complete enough to run, and include language identifiers in fenced blocks.
- Use numbered lists for step-by-step instructions, bullet points for features. This matches the platform's scannable, tutorial-friendly format.
- Include data and benchmarks. Smashing Magazine readers expect evidence, not opinions. Show numbers, comparisons, and real-world results.
- Write alt text for every image that describes what is shown and why it matters. Accessibility is not optional.
- End with a clear takeaway or call to action. Summarize what the reader learned and point them to a next resource (book, workshop, related article).
- Maintain a peer-to-peer tone. Write as a senior developer or designer speaking to another professional. Avoid teaching down or using unnecessary jargon explanations.

## Tone

css
     .card {
       aspect-ratio: 16 / 9;
       object-fit: cover;
     }

## Adapter Guidance

Use a matching generic adapter unless the platform has a dedicated adapter. Keep platform-specific facts here and execution steps in `skills/`.
