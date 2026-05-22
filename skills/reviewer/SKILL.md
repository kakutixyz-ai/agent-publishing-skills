---
name: reviewer
description: Review a platform draft for fit, spam risk, disclosure, evidence, and platform compliance.
---

# Publishing Reviewer

Use this skill before handing a platform draft to a human for publishing.

## Inputs

- Draft matching `schemas/platform-draft.schema.json`.
- Relevant platform knowledge from `knowledge/platforms/`.
- Rules from `knowledge/rules/`.

## Process

1. Check platform fit against the target platform knowledge.
2. Check for spam signals: hype, vote requests, repeated copy, thin value, and signup-gated claims.
3. Check evidence quality: working links, demos, benchmarks, screenshots, and limitations. Ensure links and metadata are strictly factual and not hallucinated.
4. Check language and formatting requirements.
5. Check disclosure requirements.
6. Check for placeholders: If standard placeholders (like `[Insert Link]`, `[Insert Repository URL]`, etc.) or empty required fields are found, flag them in the review results and mark the status as `revise` or `needs_review` to remind the user to fill them in manually.
7. Return a decision: `approve`, `revise`, or `do_not_publish`.

## Output

Return a review result matching `schemas/review-result.schema.json`.

Never approve a draft that asks for upvotes, hides commercial interest, or makes unsupported claims.
