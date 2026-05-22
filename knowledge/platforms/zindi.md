# Zindi — https://zindi.africa

URL: https://zindi.africa

Source: `legacy-skills/zindi/SKILL.md`

This normalized profile extracts reusable platform knowledge from the legacy platform profile. It is not a runtime skill.

## Trigger Context

Triggered by mentions of 'Zindi', 'data science competition', 'African data science', 'Zindi.africa'

## Language

The primary language for content on Zindi is **formal technical English**. While the platform has a pan-African user base including many French, Portuguese, and Arabic speakers, all competition descriptions, discussion threads, and solution walkthroughs are expected to be in English. Non-English posts will receive significantly less engagement and may be flagged as off-topic. Code comments, variable names, and notebook titles must be in English. Avoid slang, regional idioms, or non-technical jargon. French or Swahili phrases may occasionally appear in community comments, but for official posts and solution write-ups, use clear, precise English.

## Good Fit

- Data science and machine learning projects that solve real-world problems relevant to Africa (e.g., agriculture, finance, health, energy, climate).
- Projects with a clear, measurable performance metric (e.g., accuracy, RMSE, F1-score) that can be displayed on a leaderboard.
- Open-source libraries, tools, or frameworks that are commonly used in data science competitions (e.g., XGBoost, LightGBM, CatBoost, TensorFlow, PyTorch, scikit-learn).
- Reproducible research projects that include well-documented Jupyter notebooks, Python scripts, or R Markdown files.
- Projects that demonstrate novel feature engineering, model ensembling, or data preprocessing techniques applicable to tabular, time-series, or geospatial data.

## Poor Fit

- Mobile apps, web applications, or frontend UI projects with no underlying data science or ML component.
- Game development, creative writing, or art projects unrelated to data analysis or predictive modeling.
- Hardware projects (e.g., Arduino, Raspberry Pi) that do not include a significant data processing or ML element.
- Projects that rely on proprietary datasets that cannot be shared or publicly evaluated.
- Projects that are purely theoretical (e.g., mathematical proofs) with no code, dataset, or practical implementation.

## Format And Style Notes

- Use a clear, descriptive title that includes your rank and the problem domain.
- Start with a short introduction (2-3 lines) that reveals your key insight or unique trick.
- Use numbered lists or bullet points for your methodology, not long paragraphs.
- Include only critical, novel code snippets — never dump an entire notebook.
- Present results in a Markdown table comparing validation, public LB, and private LB scores.
- Bold key metrics and use inline code for column names, library versions, and hyperparameters.
- Include a "Key Takeaway" section at the end (1-2 sentences) summarizing the most important lesson.
- Hyperlink to external resources (GitHub repo, research paper, blog post) for deeper dives.

## Tone

Write like a professional data scientist who is generous with knowledge: be precise, be humble, and let your results speak through numbers.

## Adapter Guidance

Use a matching generic adapter unless the platform has a dedicated adapter. Keep platform-specific facts here and execution steps in `skills/`.
