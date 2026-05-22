# OpenRouter — https://openrouter.ai

URL: https://openrouter.ai

Source: `legacy-skills/openrouter/SKILL.md`

This normalized profile extracts reusable platform knowledge from the legacy platform profile. It is not a runtime skill.

## Trigger Context

Triggered by mentions of 'OpenRouter', 'LLM API routing', 'model gateway', or 'AI model marketplace'

## Language

**Primary language:** American Technical English. All API documentation, error messages, and community discussions are in English. Code examples must use Python (dominant) or cURL. JSON is the universal data format. Non-English content is not accepted in official channels. If you write in another language, it will be ignored or deleted. The platform expects strict RFC adherence and zero natural language fluff.

## Good Fit

- API wrappers and SDKs — Libraries that simplify calling multiple LLM providers through a single interface (e.g., Python clients, TypeScript SDKs, cURL helpers)
- Model routing and fallback logic — Tools that implement provider failover, latency-based routing, or cost-optimized model selection (e.g., OpenRouter-compatible routers)
- Benchmarking and evaluation frameworks — Projects that measure model performance across providers (latency, price, output quality, token throughput)
- Cost optimization tools — Dashboards, calculators, or scripts that compare provider pricing for equivalent models (e.g., comparing Together vs. Fireworks for Mixtral)
- Provider outage monitors — Services or bots that track OpenRouter provider status and alert users to 502s, rate limits, or model deprecations

## Poor Fit

- Prompt engineering collections — Shared prompt libraries or "prompt hacks" that don't involve API configuration or model selection
- AI art generators — Projects focused on image generation, style transfer, or creative AI output (OpenRouter is text-completion focused)
- Non-technical AI tutorials — Beginner guides explaining "what is AI" or "how to use ChatGPT" (assumes expert-level API knowledge)
- Social or community features — Chat apps, forums, or social networks that wrap LLM interactions (OpenRouter is a backend gateway)
- Proprietary model training — Projects that fine-tune or train custom models (OpenRouter provides inference endpoints only)

## Format And Style Notes

- Direct, imperative tone — No greetings, no "we think", no hedging. State facts and commands.
- Exact model IDs in every example — Never use placeholder model names. Always use the OpenRouter model ID format.
- Include JSON response examples — Every API call demonstration must show the full response object.
- Compare providers with tables — When discussing model options, use Markdown tables with price, latency, and context length.
- Error-first documentation — Show the error response, explain why it happened, then show the fix.
- Use inline code for technical terms — Model names, API keys, endpoints, and parameters must be in backticks.
- No emoji, no markdown humor, no conversational fillers — Zero personality markers. Content is clinical and functional.
- Provide raw cURL commands for every example — Python SDK examples are secondary. cURL is the universal fallback.

## Tone

Write clinically, like a configuration file. Every sentence must be executable or directly reference an API parameter. No fluff, no humor, no opinions — only facts, commands, and JSON.

## Adapter Guidance

Use a matching generic adapter unless the platform has a dedicated adapter. Keep platform-specific facts here and execution steps in `skills/`.
