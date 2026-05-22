# Brunch (https://brunch.co.kr)

URL: https://brunch.co.kr

Source: `legacy-skills/brunch/SKILL.md`

This normalized profile extracts reusable platform knowledge from the legacy platform profile. It is not a runtime skill.

## Trigger Context

Triggered by mentions of 'Brunch', '브런치', 'long-form Korean blog', 'Kakao platform'

## Language

**Primary language:** Korean (Standard Korean).  
The platform's entire UI and user base operate in Korean. Writing in English or other languages will result in negligible discoverability and goes against the platform's culture.  
**Strategy:** All content must be written in polished, natural Korean. Use standard grammar and honorifics (해요체 or 하십시오체) appropriate for a professional yet personal tone. Avoid regional dialects or overly casual internet slang. Subtitles or pull quotes may include English technical terms (e.g., "API", "MVP") but keep them minimal and contextual.

## Good Fit

- Korean-language software tools, libraries, or frameworks with a clear narrative (e.g., "How I built a real-time chat app in Go")
- Side projects that solve a relatable problem for Korean developers or creators (e.g., a Korean spell-checker CLI tool)
- Open-source projects with detailed documentation that can be translated into a reflective, essay-style post
- Apps or services targeting Korean users, where the founder's journey and lessons learned are shareable
- Tools that improve productivity, design, or writing—topics that resonate with Brunch's intellectual audience

## Poor Fit

- Projects with no Korean documentation or README (English-only repos will feel alien)
- Highly technical, code-heavy projects requiring deep domain expertise (e.g., a kernel module) that cannot be explained accessibly
- Projects that are purely commercial or ad-driven (Brunch readers dislike overt sales pitches)
- Projects that lack a human story or personal reflection (e.g., a generic boilerplate generator)
- Projects targeting non-Korean markets exclusively (e.g., a French-language travel app with no Korean relevance)

## Format And Style Notes

- Start with a personal hook. Open with a real-life moment or a question that draws the reader in. Avoid dry introductions.
- Use short, scannable paragraphs. 2–4 sentences per paragraph. Long blocks of text are uncommon and discourage mobile reading.
- Embed high-quality images every 3–4 paragraphs. Use full-width, high-resolution screenshots or diagrams. Images should be self-explanatory and visually appealing.
- Use blockquote sparingly for key insights. Reserve quotes for a single powerful sentence or a user testimonial. Overusing them looks like a clickbait article.
- Avoid bullet-heavy lists. If you use lists, keep them to 3–5 items maximum and use them only for step-by-step guides or takeaways. Prefer narrative flow.
- Write titles that evoke curiosity without being sensational. 10–15 Korean characters is optimal. Include a subtitle (한 줄 요약) if possible.
- Conclude with a reflective takeaway, not a call to action. Avoid "Download now" or "Follow for more." Instead, invite readers to think or share their own experiences.
- Use Korean honorifics naturally. Maintain a polite, professional tone (해요체) throughout. Avoid 반말 unless quoting a direct conversation.

## Tone

글은 기술을 전달하는 도구가 아니라, 기술을 통해 인간의 이야기를 전하는 창문이다.

## Adapter Guidance

Use a matching generic adapter unless the platform has a dedicated adapter. Keep platform-specific facts here and execution steps in `skills/`.
