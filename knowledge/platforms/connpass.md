# Connpass

URL: https://connpass.com

Source: `legacy-skills/connpass/SKILL.md`

This normalized profile extracts reusable platform knowledge from the legacy platform profile. It is not a runtime skill.

## Trigger Context

Triggered by mentions of 'Connpass', 'Connpass event', 'Connpass community'

## Language

**Primary language: Japanese** (99% of events are in Japanese).  
All core content — title, description, schedule, location, prerequisites — must be written in Japanese using polite `desu/masu` style.  
English-only events exist but are niche (e.g., language exchange meetups). If your event is bilingual, write the main description in Japanese and add a short English summary below.  
Avoid casual speech (`tameguchi`), slang, emojis in titles, or hype-driven marketing language.

## Good Fit

- In-person or hybrid tech meetups (workshops, study groups, hackathons, LT nights) targeting Japanese-speaking developers.
- Formal professional gatherings (e.g., "AWS Lambda Hands-on for Beginners") where clear schedules, prerequisites, and fees are essential.
- Community-driven recurring events (e.g., monthly Python study circle) with a stable venue and capacity limit.
- Corporate recruitment or employer branding events (e.g., "Company X Tech Talk Series") with a structured agenda.
- Niche or hobbyist meetups (e.g., "Vintage Mac Restoration Workshop") that require registration management and capacity control.

## Poor Fit

- Purely online/streaming events with no in-person component (use YouTube Live, Twitch, or Zoom instead).
- Social or party-style gatherings (Connpass is too formal and transactional for casual hangouts).
- Commercial product launches or sales pitches (the culture expects educational/community value, not advertising).
- Events for children under 15 (the platform's user base is overwhelmingly adult professionals).
- Short-notice or spontaneous meetups (Connpass events are typically posted 2–4 weeks in advance).

## Format And Style Notes

- Use formal keigo (敬語) throughout the event description.
- Start with a bold, keyword-rich title that includes target audience and topic.
- Use headings (h2/h3) to break content into clear sections: 概要, タイムスケジュール, 持ち物, 注意事項.
- State capacity (定員) and fee (参加費) prominently near the top.
- Use bold text for key details (dates, prerequisites, cancellation policy).
- Keep paragraphs short (2–3 lines max) — Japanese readers scan vertically.
- Provide exact venue access instructions (station name, exit, walking time).
- Include a clear cancellation policy for paid events.

## Tone

Write as a polite, organized event organizer in the Japanese tech community: professional, clear, welcoming, and structured (using standard Keigo `です`/`ます` form).

## Adapter Guidance

Use a matching generic adapter unless the platform has a dedicated adapter. Keep platform-specific facts here and execution steps in `skills/`.