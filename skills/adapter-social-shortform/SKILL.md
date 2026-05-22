---
name: adapter-social-shortform
description: Adapt a project update into short-form social posts or threads.
---

# Social Shortform Adapter

Use this adapter for X, Mastodon-like communities, build-in-public logs, and short update surfaces.

## Inputs

- Project brief or base draft.
- Platform profile.
- Screenshots, clips, metrics, or links when available.

## Process

1. Lead with one concrete hook.
2. Keep each post short and plain text unless the platform supports rich formatting.
3. Use a thread only when the content needs multiple steps.
4. Include visible proof: screenshot, GIF, demo, metric, or code snippet.
5. Do not over-tag accounts or ask for engagement.
6. End with a specific next step or feedback request.

## Output

Return `schemas/platform-draft.schema.json` with `platform` set to the target platform slug.
