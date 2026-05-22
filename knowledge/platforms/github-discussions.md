# GitHub Discussions

URL: https://github.com/discussions

Source: `legacy-skills/github-discussions/SKILL.md`

This normalized profile extracts reusable platform knowledge from the legacy platform profile. It is not a runtime skill.

## Trigger Context

Triggered by mentions of 'GitHub Discussions', 'open source community', 'project feedback', or 'developer forum'

## Language

**Primary language:** English (en-US). GitHub Discussions operates in a global open source ecosystem where English is the default for technical communication, issue tracking, and project management. Code snippets, error messages, and documentation are expected in English.

## Good Fit

- Open source libraries and frameworks — Projects that invite community contributions, bug reports, and feature requests benefit from the structured Q&A and idea categories.
- Developer tools and CLIs — Command-line tools, build systems, and linters need a space for configuration help and troubleshooting.
- API wrappers and SDKs — Libraries wrapping third-party APIs require clear channels for reporting breaking changes and usage questions.
- Documentation projects — Projects like tutorials, guides, or specification documents can use Discussions for feedback on content accuracy and clarity.
- Community-driven extensions — Plugin ecosystems or theme collections where users share their own additions and ask for integration help.

## Poor Fit

- Closed-source commercial products — Proprietary software with no public repository cannot host Discussions; users expect the code to be visible.
- Consumer-facing apps with no code — Mobile games, social media clones, or design assets without a codebase have no place on a code-centric platform.
- Marketing or landing page projects — Pure promotional websites with no functional code generate spam-like posts and are removed.
- Content farms or blog aggregators — Projects that exist solely to repost external content violate the collaborative spirit.
- Projects with no maintainer activity — Abandoned repositories with unanswered discussions discourage new users and degrade platform trust.

## Format And Style Notes

- Lead with the problem, not pleasantries. Start with the technical issue or proposal. Avoid "Hello everyone, I hope you are doing well."
- Use code blocks with language identifiers. Every code snippet must be in a fenced block with a language tag for syntax highlighting.
- Keep paragraphs to 2-3 sentences. Long walls of text are ignored. Break complex thoughts into digestible chunks.
- Use headings to structure long posts. For feature requests or bug reports, use `##` and `###` to separate context, reproduction steps, expected behavior, and actual behavior.
- Run `npm install`
- Execute `npm run build`
- Prefer lists over prose for steps and options. Numbered lists for reproduction steps, bullet lists for configuration options.
- Quote previous messages to reply specifically. Use `>` to reference the exact point you're addressing.

## Tone

`text

## Adapter Guidance

Use a matching generic adapter unless the platform has a dedicated adapter. Keep platform-specific facts here and execution steps in `skills/`.
