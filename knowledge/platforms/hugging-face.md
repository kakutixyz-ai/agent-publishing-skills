# Hugging Face Platform Skill

URL: https://huggingface.co

Source: `legacy-skills/hugging-face/SKILL.md`

This normalized profile extracts reusable platform knowledge from the legacy platform profile. It is not a runtime skill.

## Trigger Context

Triggered by mentions of 'Hugging Face', 'model hub', 'Spaces', '🤗'

## Language

- **Primary Language:** English. Hugging Face is a global, English-first platform for the machine learning community. All model cards, dataset descriptions, Space READMEs, and community discussions must be in English.
- **Multilingual Strategy:** If your project is specifically trained on a non-English language (e.g., a French LLM, a Japanese tokenizer), you may include a short summary in that language at the top of the model card. However, all technical documentation (usage, license, training details) must remain in English. Code comments and variable names should be in English.
- **Code Languages:** Python is dominant for model usage and training. JavaScript/TypeScript is common for Spaces (especially with Gradio or Streamlit). Shell scripts for installation are standard.

## Good Fit

- Machine learning models, especially transformer-based (LLMs, vision models, audio models) that can be loaded via `transformers`, `diffusers`, or `sentence-transformers`.
- Datasets formatted for ML training (e.g., CSV, JSONL, Parquet) with clear splits (train/validation/test) and a `dataset card` explaining provenance and preprocessing.
- Interactive demos (Spaces) that showcase model capabilities using Gradio, Streamlit, or static HTML/JS.
- Open-source tools or libraries that integrate with the Hugging Face ecosystem (e.g., custom trainers, tokenizers, evaluation scripts).
- Research projects that require reproducibility, versioning, and community feedback (e.g., fine-tuned checkpoints, benchmark results).

## Poor Fit

- Closed-source, proprietary models or datasets that cannot be shared publicly.
- Non-ML software projects (e.g., web apps, mobile apps, games) with no AI/ML component.
- Projects that rely on non-open-source dependencies or require paid licenses for usage.
- Projects with no code or documentation (e.g., just a link to a paper or a blog post).
- Projects that are heavily opinionated or political without a clear technical contribution.

## Format And Style Notes

- Use YAML front matter for metadata. Every model card must include `license`, `language`, `tags`, and optionally `datasets` and `metrics`.
- Start with a one-sentence summary. The first line of the model card should immediately tell the reader what the model does.
- Provide a copy-pasteable code snippet. Show how to load and use the model with `pipeline()` or `AutoModel.from_pretrained()`.
- Be explicit about intended use and limitations. This is crucial for responsible AI.
- Use tables for evaluation results. Metrics should be presented clearly, not buried in prose.
- Use bullet points for training details. Keep it concise and structured.
- Use `bold` for key terms. Highlight the most important concepts.
- Keep Space READMEs short and actionable. Focus on what the demo does and how to run it locally.

## Tone

Write like a helpful ML engineer who values clarity, reproducibility, and community contribution over marketing hype.

## Adapter Guidance

Use a matching generic adapter unless the platform has a dedicated adapter. Keep platform-specific facts here and execution steps in `skills/`.
