# Replicate - https://replicate.com

URL: https://replicate.com

Source: `legacy-skills/replicate/SKILL.md`

This normalized profile extracts reusable platform knowledge from the legacy platform profile. It is not a runtime skill.

## Trigger Context

Triggered by mentions of 'Replicate', 'model deployment', 'AI inference API', 'Cog model', or 'run AI models in the cloud'

## Language

**Primary language: English (US technical standard).** All model descriptions, API documentation, error messages, and metadata must be in English. The platform's global user base communicates through code, not natural language. Non-English text in model descriptions or README files will not be indexed by search and may confuse users. Code examples must be in Python (preferred), cURL, or JavaScript. Do not use translations, localization, or non-English explanatory text in model metadata.

## Good Fit

- Pre-trained AI models that can be packaged as a single Docker image using Cog. If your project is a ready-to-run model (e.g., image generation, text embedding, audio transcription) that can be containerized with a `cog.yaml` file and a `predict.py` entry point, it fits perfectly.
- Projects with clear input/output schemas that can be described with typed parameters (strings, numbers, booleans, images). Replicate's playground and API rely on predictable, documented interfaces.
- Open-weight models with permissive licenses (MIT, Apache 2.0, CreativeML Open RAIL-M). Replicate hosts models for inference, not for training. Projects must allow third-party API execution.
- Tools that benefit from serverless GPU execution — models that are too large to run locally or that require expensive hardware (e.g., A100 GPUs). Replicate handles scaling, billing, and infrastructure.
- Projects with existing Hugging Face or GitHub repositories that can be converted to Cog format. Replicate's ecosystem integrates with these platforms for discovery and versioning.

## Poor Fit

- Proprietary or closed-source models with restrictive licenses. Replicate requires the ability to run inference on behalf of users; models with no-distribution clauses cannot be hosted.
- Training or fine-tuning pipelines. Replicate is an inference-only platform. Projects that primarily involve training models, data preprocessing, or custom training loops belong on services like Modal, RunPod, or AWS SageMaker.
- Non-AI software. Replicate is exclusively for machine learning models. Web apps, databases, mobile apps, or traditional SaaS products have no place here.
- Models requiring real-time streaming or WebSocket connections. Replicate's API is synchronous HTTP-based with polling for results. Projects needing low-latency bidirectional communication (e.g., real-time voice chat) are not supported.
- Projects with no public API or no clear demo. Replicate's value is instant experimentation. If a project cannot provide a working playground demo or a simple API call example, it will not attract users.

## Format And Style Notes

- Lead with a one-sentence functional summary. State exactly what the model does, including the input type and output type. Do not use marketing language.
- Use a "Usage" section with a Python code block as the first substantive content. Users scan for code immediately. Place it right after the summary.
- Document all parameters in a Markdown table. Include Parameter, Type, Default, and Description columns. This is how Replicate's UI renders the configuration interface.
- Specify the model version hash in all code examples. Users need exact version pinning for reproducibility. Always include the full SHA or version tag.
- Include at least one example output. Show the actual result of running the model. For image models, link to a hosted image. For text models, show the output string.
- Keep the README under 100 lines. Replicate model pages are scanned quickly. Be concise. Remove installation instructions, dependency lists, and training details. Focus on inference only.
- Use only GitHub-flavored Markdown. No HTML, no inline CSS, no emoji, no images (except linked output examples). The platform strips non-standard elements.
- Link to the original paper and source repository. Replicate users are technical and expect provenance. Include arXiv links and GitHub/Hugging Face URLs in a "References" section.

## Tone

Replicate is the API endpoint for AI models — write like a technical README, not a sales pitch, because users are here to copy-paste code and run inference, not to be convinced.

## Adapter Guidance

Use a matching generic adapter unless the platform has a dedicated adapter. Keep platform-specific facts here and execution steps in `skills/`.
