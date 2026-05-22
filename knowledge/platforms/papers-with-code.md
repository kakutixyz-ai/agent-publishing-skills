# Papers with Code (https://paperswithcode.com)

URL: https://paperswithcode.com

Source: `legacy-skills/papers-with-code/SKILL.md`

This normalized profile extracts reusable platform knowledge from the legacy platform profile. It is not a runtime skill.

## Trigger Context

Triggered by mentions of 'Papers with Code', 'PwC', 'benchmark results', 'SOTA tracking', 'reproducible research', 'academic AI code sharing'

## Language

**Primary Language:** English (en-US). All content including paper titles, abstracts, task names, dataset labels, and code repository descriptions must be in English. The platform indexes English-language academic papers exclusively from arXiv, major conferences (NeurIPS, ICML, CVPR, ICLR, ACL, EMNLP), and peer-reviewed journals.

## Good Fit

- Research projects that introduce a novel algorithm, model architecture, or training method with measurable performance improvements on established benchmarks.
- Open-source implementations of academic papers that provide reproducible results with clear hyperparameters, dataset splits, and evaluation scripts.
- Projects that achieve state-of-the-art (SOTA) results on a recognized benchmark dataset (e.g., ImageNet, COCO, GLUE, SQuAD, CIFAR-10/100).
- Libraries or frameworks that standardize evaluation metrics for a specific task (e.g., a unified evaluation suite for object detection or text summarization).
- Comparative studies that analyze trade-offs between multiple approaches (e.g., accuracy vs. inference speed, memory usage, or parameter count) with tabular results.

## Poor Fit

- Commercial products, SaaS platforms, or closed-source tools without public code repositories or published research backing.
- Personal portfolio projects, tutorial repositories, or educational courses that do not present novel research contributions.
- Applications focused on user experience, design, or non-technical domains (e.g., a recipe app, a fitness tracker, a social media platform).
- Projects that rely on proprietary datasets that cannot be shared or reproduced by the community.
- Opinion pieces, blog posts, or marketing content that lacks empirical results on standard benchmarks.

## Format And Style Notes

- Use exact, standardized terminology for tasks and datasets. Do not invent names. If the platform lists "Image Classification" as a task, use that exact string. Use "CIFAR-10" not "CIFAR10" or "cifar-10".
- Present results as simple text tables or structured data, not Markdown tables or HTML. The platform parses raw text for leaderboard ingestion.
- Copy the abstract verbatim from the paper. Do not paraphrase, summarize, or add commentary. The platform uses the exact abstract for search indexing.
- Provide a direct GitHub URL as the code link. Use the repository's main page URL. Do not use personal websites, GitLab, Bitbucket, or shortened links.
- Include all hyperparameters and training details in the code repository's README, not in the Papers with Code submission. The submission metadata should be minimal: title, abstract, code URL, task, dataset, metrics.
- Avoid any personal commentary, opinions, or promotional language in the submission fields. The platform is factual and empirical. Do not use words like "groundbreaking", "novel", "state-of-the-art" in the abstract field (the paper itself already says that).
- Use standard metric names and units as listed on the platform. Do not abbreviate inconsistently. For accuracy, use "Top-1 Accuracy" or "Accuracy" depending on the task's convention. For speed, use "FPS" or "ms per inference".
- Keep the submission description empty or use only a single line for notes if required. The platform auto-generates structure; user-added text is rarely displayed. If you must add a note, keep it technical and brief.

## Tone

The platform is a cold, factual scoreboard for AI research where data speaks louder than claims, code is mandatory, and hype is invisible.

## Adapter Guidance

Use a matching generic adapter unless the platform has a dedicated adapter. Keep platform-specific facts here and execution steps in `skills/`.
