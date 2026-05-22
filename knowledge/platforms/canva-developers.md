# Canva Developers

URL: https://www.canva.dev

Source: `legacy-skills/canva-developers/SKILL.md`

This normalized profile extracts reusable platform knowledge from the legacy platform profile. It is not a runtime skill.

## Trigger Context

Triggered by mentions of 'Canva Developers', 'Canva API', 'Canva SDK', 'Canva integration', or 'Canva app development'.

## Language

The primary language for content on Canva Developers is **English (Australian/British spelling conventions are optional)**. The platform is global but the company is Australian. Use standard technical English. Code examples should be in **TypeScript/JavaScript** (primary), **Python** (secondary for backend automation), and **REST/curl** for API testing. Avoid emojis or slang in core documentation. The tone should be direct, instructional, and optimistic, using active voice. Treat the reader as a capable engineer who values clarity over persuasion.

## Good Fit

- API-driven design tools: Projects that programmatically generate or edit visual content (e.g., social media image generators, automated report creators).
- Embedded editor integrations: Applications that need to integrate a white-label Canva editor for users to create or modify designs within a third-party platform.
- Template automation systems: Tools that manage, version, or distribute Canva design templates (e.g., brand asset managers, marketing automation platforms).
- OAuth/authentication demos: Projects showcasing secure user authorization flows that connect external apps to Canva's design ecosystem.
- Visual content pipelines: Workflows that combine data from external sources (e.g., spreadsheets, databases, CMS) and output finished Canva designs via the API.

## Poor Fit

- Pure code libraries with no visual output: Projects like CLI tools, data parsers, or backend frameworks that don't produce or interact with visual designs.
- Game development or 3D rendering: Canva is a 2D design platform; projects involving Unity, Unreal Engine, or 3D model generation are irrelevant.
- Social media or chat applications: Projects focused on messaging, forums, or real-time communication have no natural integration point with Canva's design API.
- Blockchain or cryptocurrency tools: Unless they specifically generate visual assets like NFT images, these projects are outside the platform's scope.
- Hardware or IoT projects: Canva's API is cloud-based and design-focused; firmware, robotics, or sensor-based projects cannot be demonstrated here.

## Format And Style Notes

- Use active voice and imperative mood for instructions.
- Provide runnable code examples first, then explain.
- Use H2 for major sections, H3 for subsections, avoid H4+.
- Embed screenshots only for visual output (not for UI elements).
- Use bullet points for options or variations.
- Keep tables narrow (max 4 columns) for parameter lists.
- End with a "Next Steps" section linking to specific SDK methods or endpoints.
- Use blockquotes only for warnings or notes.

## Tone

`
   - Bad: A paragraph describing the authentication flow, then a code snippet at the end.

3. **Use H2 for major sections, H3 for subsections, avoid H4+**.
   - Good: `## Authentication` followed by `### OAuth Flow`
   - Bad: `#### The OAuth Redirect Handler`

4. **Embed screenshots only for visual output** (not for UI elements).
   - Good: A screenshot showing the final generated design with a caption.
   - Bad: A screenshot of the Canva editor interface with no context.

5. **Use bullet points for options or variations**.
   - Good: `- **Template ID**: Use `getTemplateById()` for exact match.`
   - Bad: Long paragraph describing three different ways to fetch templates.

6. **Keep tables narrow (max 4 columns)** for parameter lists.
   - Good: `| Parameter | Type | Required | Description |`
   - Bad: A table with 7 columns including "Example Value", "Default", "Notes", "See Also".

7. **End with a "Next Steps" section** linking to specific SDK methods or endpoints.
   - Good: `## Next Steps\n- [Create a design](/docs/create-design)\n- [Manage templates](/docs/templates)`
   - Bad: Ending with "For more information, visit the docs."

8. **Use blockquotes only for warnings or notes**.
   - Good: `> **Note**: The API rate limit is 100 requests per minute for free tier.`
   - Bad: Using blockquotes to highlight a feature or to introduce a code example.

## Tone Summary

## Adapter Guidance

Use a matching generic adapter unless the platform has a dedicated adapter. Keep platform-specific facts here and execution steps in `skills/`.
