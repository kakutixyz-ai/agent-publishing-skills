# agent-publishing-skills

`agent-publishing-skills` is a general-purpose publishing skill library for AI agents.

It helps an agent turn one project brief into platform-aware publishing plans, technical articles, launch copy, community posts, showcase drafts, and review reports. The project is intentionally generic: it is not tied to one product, one company, or one agent runtime.

The library normalizes publishing knowledge for **91 developer, startup, design, and technical community platforms** worldwide.

---

## Key Capabilities & Core Features

Unlike simple text generation templates, `agent-publishing-skills` provides structured, multi-dimensional execution skills that adapt content intelligently based on real platform constraints.

### 🌐 91 Global Platform Profiles
The library embeds 91 normalized profiles in [knowledge/platforms/](file:///Volumes/ssd/Documents/Productions/agent-publishing-skills/knowledge/platforms) (compiled into [knowledge/index.json](file:///Volumes/ssd/Documents/Productions/agent-publishing-skills/knowledge/index.json)), covering major developer networks, design portfolios, product discovery launches, and regional tech blogs. Examples include:
* **Tech Blogs / Forums**: Dev.to, Medium, CSDN, Qiita, Velog, Hashnode, Hackernoon.
* **Launch & Discovery**: Product Hunt, Peerlist, Launching Next, BetaList, BuildHop.
* **Showcase & Portfolios**: Behance, Dribbble, CodePen, Awwwards, read.cv, layers.to.
* **Q&A & Discussions**: Stack Overflow, Reddit, Hacker News, V2EX, Lobsters, Indie Hackers.

### 📊 Intelligent Platform Recommendation & Scoring
The `planner` skill evaluates your project brief, applying a structured filtering and scoring algorithm:
1. **Target Pre-Filtering**: Excludes platforms that do not match the project's target audience, categories, or languages.
2. **Suitability Scoring (1 to 5)**: Scores suitable platforms based on project type and available evidence (demos, repos, benchmarks).
3. **Justified Exclusion**: If a platform is not a good fit, it marks it as `not_recommended` with a specific, community-aware reason (e.g., "Lobsters rejects commercial self-promotion without technical depth").

### 🗺️ Multi-Locale & Style Adaptation
Content is dynamically tailored to the target audience's locale and platform guidelines:
* **Localizations**: Supports automatic tone and layout adjustments for English, Simplified Chinese (Juejin/Zhihu), Japanese (Qiita/Zenn), Korean (Brunch/note), Portuguese (Alura/Rocketseat), Arabic (Arab Hardware), German (CCC/t3n), and more.
* **Style Constraints**: Dictates whether to use long-form tutorials, short-form visual copy, code blocks, screenshots, or mood boards (e.g., preserving Markdown vs. BBCode formatting rules).

### 🏷️ Flexible Category Selection
Platform profiles are classified into distinct categories, allowing agents or developers to filter publishing targets dynamically:
* `technical-blog`: For engineering articles and in-depth tutorials.
* `community-discussion`: For text-centric engagement, discussion, and Q&A.
* `launch`: For product debuts and maker updates.
* `showcase`: For visual showcases, design mockups, and interactive demos.
* `social-shortform`: For micro-blogging and build-in-public threads.

### 🛡️ Anti-Violation & Community Compliance
To prevent accounts from being banned and posts from being flagged, the library builds platform compliance policies directly into the `reviewer` skill:
* **No-Auto-Publish Rule**: Under no circumstances does the library allow AI agents to auto-publish directly to external APIs, avoiding automated spam penalties. Workflows strictly produce drafts and checklists for human review.
* **Anti-Spam & Promotion Safeguards**: Detects and rejects drafts that solicit upvotes, stars, likes, or retweets (which violates guidelines on Product Hunt, Hacker News, and Reddit) or use hype-filled clickbait (e.g. "revolutionary", "game-changing").
* **Cross-Posting Evasion**: Flags and blocks attempts to cross-post identical text across different sites. It forces adapters to rewrite the content according to each platform's unique guidelines.
* **Affiliation & AI Disclosure**: Automatically scans for commercial intent, sponsorships, or AI assistance, and enforces proper disclosures in compliance with platform guidelines (e.g., FTC, Reddit community rules).

### 🚫 Anti-Hallucination Guardrails
To prevent AI models from hallucinating information, the skills implement double-sided factuality constraints:
* **Strict Factuality**: The `writer` skill relies strictly on the project brief. It will never invent repository URLs, version numbers, metrics, or demo links.
* **Smart Placeholders**: If crucial details are missing in the brief, the writer inserts standard placeholders (e.g., `[Insert Demo Link]`) instead of hallucinating dummy values.
* **Review Verification**: The `reviewer` skill automatically scans the final draft for remaining placeholders or unresolved links, flagging them to ensure a human operator must review and populate them manually.

---

## Design Model

The repository separates platform knowledge from agent execution.

```text
knowledge  = reusable platform facts, style expectations, and safety rules
skills     = agent-facing execution interfaces (planner, writer, reviewer)
workflows  = recommended skill sequences for common publishing jobs
schemas    = stable input/output contracts between skills
templates  = reusable draft structures
integrations = install notes and script wrappers for different agent platforms
```

This separation matters because platform facts change more often than skill orchestration. Adapters reference `knowledge/` instead of duplicating platform rules.

---

## Repository Structure

```text
agent-publishing-skills/
├── README.md
├── LICENSE             # MIT License
├── package.json
├── package-lock.json
├── skill-registry.json
├── gemini-extension.json
├── project-brief.json  # Base configuration brief
├── bin/
│   ├── agent-publishing-skills.js  # Installer CLI
│   ├── compile-platforms-index.js  # Knowledge compiler utility
│   ├── generate-templates.js       # Base template generator
│   ├── patch-platforms.js          # Platform data patch tool
│   └── verify-drafts.js            # Draft validation utility
├── docs/
│   ├── getting-started.md
│   ├── security.md
│   ├── platform-model.md
│   └── contribution-guide.md
├── knowledge/
│   ├── index.json      # Compiled platform facts & indexing database
│   ├── platforms/      # 91 normalized platform profiles (.md files)
│   ├── styles/         # Reusable content styles
│   └── rules/          # No-auto-publish, disclosure, anti-spam rules
├── skills/
│   ├── planner/        # Platform recommendation & suitability scorer
│   ├── writer/         # Reusable base draft writer
│   ├── reviewer/       # Copy compliance & formatting reviewer
│   ├── adapter-technical-blog/
│   ├── adapter-community-discussion/
│   ├── adapter-launch/
│   ├── adapter-showcase/
│   └── adapter-social-shortform/
├── workflows/          # Platform workflow sequences
├── templates/          # Reusable publishing templates
├── schemas/            # Stable JSON Schemas for input/output Validation
├── examples/           # Pre-configured test project briefs
└── integrations/       # Platform-specific installers & configurations
```

---

## Core Workflow

```text
 project brief
      ↓
   planner       (Filters 91 platforms & generates plan)
      ↓
user confirmation (User reviews & confirms targets)
      ↓
   writer        (Produces reusable base draft)
      ↓
   adapter       (Adapts base draft to platform style)
      ↓
  reviewer       (Validates compliance & formatting)
      ↓
human publishes manually (Safety first, no auto-publishing)
```

1. **Brief Entry**: Provide project specs using `schemas/project-brief.schema.json`.
2. **Platform Fit**: Run `skills/planner` to filter and score recommended platforms.
3. **Confirmation**: User reviews the generated plan.
4. **Drafting**: Run `skills/writer` to create a factual base draft.
5. **Adaptation**: Run a generic adapter (e.g., `adapter-technical-blog`) to build platform-specific drafts.
6. **Polishing**: Run `skills/reviewer` to check guidelines, fix links, and flag missing details.

---

## Runtime Skills

The core skills are:
* `planner`: Evaluates project-platform fit, scores platforms, and creates a publishing plan.
* `writer`: Turns a project brief into a reusable, strictly factual base draft.
* `reviewer`: Checks drafts for spam risks, disclosure, evidence, placeholders, and formatting.

Generic adapters convert the base draft into platform-specific configurations:
* `adapter-technical-blog`: Tutorials, engineering notes, and long-form posts.
* `adapter-community-discussion`: Q&A-style threads and community discussions.
* `adapter-launch`: Launch pages and startup showcase updates.
* `adapter-showcase`: Media-first portfolios and visual mockups.
* `adapter-social-shortform`: Micro-updates and build-in-public threads.

---

## CLI & Integrations

### CLI Install
This package includes a cross-platform Node.js installer for local agent environments.

From npm:
```bash
npm install -g @kakuti/agent-publishing-skills
agent-publishing-skills install --target claude --dir /path/to/project
```

From a cloned repository:
```bash
node ./bin/agent-publishing-skills.js install --target claude --dir /path/to/project
```

### Supported Integration Targets
* `claude`: Installs into `.claude/` or `~/.claude/`
* `opencode` / `openclaw`: Installs into `.opencode/` or `~/.config/opencode/`
* `codex` / `openai-agents`: Installs into `.codex/agent-publishing-skills/` or user vendor directory
* `gemini`: Installs as a Gemini CLI extension directory

Use `--scope user` for user-level installs and `--force` to overwrite existing files.

### Wrapper Scripts
Platform-specific installation scripts are available in [integrations/](file:///Volumes/ssd/Documents/Productions/agent-publishing-skills/integrations).

On macOS or Linux:
```bash
./integrations/claude/install.sh --dir /path/to/project
./integrations/gemini/install.sh --dir /path/to/project
./integrations/opencode/install.sh --dir /path/to/project
./integrations/openclaw/install.sh --dir /path/to/project
./integrations/openai-agents/install.sh --dir /path/to/project
```

On Windows PowerShell:
```powershell
.\integrations\claude\install.ps1 --dir C:\path\to\project
.\integrations\gemini\install.ps1 --dir C:\path\to\project
.\integrations\opencode\install.ps1 --dir C:\path\to\project
.\integrations\openclaw\install.ps1 --dir C:\path\to\project
.\integrations\openai-agents\install.ps1 --dir C:\path\to\project
```

---

## Development & Verification

For developers contributing to this library:

### 🧪 Running Unit Tests
Unit tests use Jest and verify markdown parsing, schema consistency, and draft adaptation rules:
```bash
npm install
npm test
```

### 🔍 Verifying Draft Schema Integrity
You can test platform schemas and verify mock draft objects locally using the built-in validator script:
```bash
npm run verify-drafts
```

### ⚡ Compiling Platform Indexes
If you add or update platforms in `knowledge/platforms/`, compile the updated platform facts into the database index:
```bash
node bin/compile-platforms-index.js
```

---

## Disclaimer

> [!WARNING]
> **Use at Your Own Risk**: 
> This project is a draft structuring and content review tool. It does not publish content automatically. **Any user of this library must manually review and verify all generated content before publishing.** 
> 
> The authors and maintainers of this project bear **no responsibility** for any consequences, claims, damages, or liabilities if the published content violates platform policies, community rules, copyright laws, or any local legal regulations.

---

## License

This project is licensed under the MIT License. See the [LICENSE](file:///Volumes/ssd/Documents/Productions/agent-publishing-skills/LICENSE) file for details.
