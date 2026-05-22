# Atlassian Community

URL: https://community.atlassian.com

Source: `legacy-skills/atlassian-community/SKILL.md`

This normalized profile extracts reusable platform knowledge from the legacy platform profile. It is not a runtime skill.

## Trigger Context

Triggered by mentions of 'Atlassian Community', 'Jira community', 'Confluence forums', or 'Atlassian support forum'

## Language

**Primary Language:** English (Australian/British spelling preferred but US English accepted). The global community and official Atlassian team operate in English. Technical terms should use exact Atlassian product names (e.g., "Jira Service Management" not "JSM," "Advanced Roadmaps" not "Portfolio"). Marketing fluff, vague adjectives ("great," "amazing"), and overly casual slang ("gonna," "wanna") are strongly discouraged. Non-English posts are rare and typically receive limited engagement; if posting in another language, include an English translation and use language-specific sub-communities where available.

## Good Fit

- Atlassian product add-ons, plugins, and marketplace apps (e.g., ScriptRunner, Automation for Jira extensions, Confluence macros)
- Integration tools that connect Jira, Confluence, Bitbucket, or Opsgenie with third-party services (Slack, GitHub, GitLab, Microsoft Teams)
- Developer tools and libraries that enhance Atlassian product workflows (e.g., custom field types, dashboard gadgets, REST API wrappers)
- Migration and administration utilities for Jira Cloud, Data Center, or Server (e.g., bulk import/export tools, backup scripts)
- Documentation and training resources specifically addressing Atlassian product features (e.g., Automation rule templates, workflow design patterns)

## Poor Fit

- General-purpose productivity apps with no Atlassian integration (e.g., a generic to-do list or note-taking app)
- Non-technical consumer products (e.g., games, social media tools, lifestyle apps)
- Projects requiring extensive UI/UX critique or design feedback (the community focuses on functionality and configuration)
- Competing project management platforms (e.g., Monday.com, Asana, Trello) unless they offer a migration path to Atlassian products
- Marketing-heavy content with no technical depth or actionable "how-to" guidance

## Format And Style Notes

- Always state the product name and version in the title or first sentence. Use brackets: `[Jira Cloud]` or `[Confluence Data Center 8.5]`. Never assume the reader knows your environment.
- Use structured headers for every post. Standard sections: `## Problem`, `## Steps to Reproduce`, `## Expected vs Actual Behavior`, `## Environment`. This is the expected format for technical support.
- Include exact error messages and logs in code blocks. Use triple backticks with language tags (e.g., ````json`, ````groovy`, ````log`). Do not paraphrase errors.
- Use numbered lists for configuration steps. Break complex workflows into sequential, numbered actions. Avoid paragraphs for procedural content.
- Annotate screenshots with red circles or arrows. For UI configuration issues, a screenshot is mandatory. Use the platform's native image upload (drag-and-drop). Do not use external image hosts.
- Mark the accepted solution clearly. When a reply resolves your issue, reply with "This solved my problem" and mark it as the Accepted Solution. This is a core community norm.
- Use inline code ticks for field names, issue keys, and short commands. For example: `customfield_12345`, `PROJ-42`, `jira.home`. This improves readability and precision.
- Avoid marketing language and vague praise. Focus on specific, reproducible facts. Use words like "configure," "resolve," "workaround," "expected behavior." Do not say "amazing," "incredible," "game-changer."

## Tone

Write like a senior Atlassian administrator who values precision over flair, expects version-specific details, and appreciates a clear "Problem → Steps → Solution" structure.

## Adapter Guidance

Use a matching generic adapter unless the platform has a dedicated adapter. Keep platform-specific facts here and execution steps in `skills/`.
