# Wanted

URL: https://www.wanted.jobs

Source: `legacy-skills/wanted/SKILL.md`

This normalized profile extracts reusable platform knowledge from the legacy platform profile. It is not a runtime skill.

## Trigger Context

Triggered by mentions of 'Wanted', 'Wanted jobs', 'Korean tech recruiting', 'Wanted platform'

## Language

**Primary Language:** Korean (한국어) and English.  
As a global recruiting platform originating in Korea, Wanted accepts postings in both Korean and English. Ensure the language matches the office location and target applicant demographic.

## Good Fit

- Technical job descriptions, developer hiring announcements, and company tech stack showcases.
- Tech brand engineering blog posts showing how a team solved a scaling problem.

## Poor Fit

- Personal blogs or hobby projects with no hiring or company connection.
- Highly informal or casual posts with slang.

## Format And Style Notes

- Use clear bullet points for responsibilities (주요 업무) and requirements (자격 요건).
- Structure text with formal H2/H3 tags.
- Mention target stacks and frameworks clearly.

## Tone

Professional, business-formal, and corporate. Speak from the perspective of an engineering team or recruiting manager.

## Adapter Guidance

Use a matching generic adapter unless the platform has a dedicated adapter. Keep platform-specific facts here and execution steps in `skills/`.