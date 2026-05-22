# agent-publishing-skills

`agent-publishing-skills` is a general-purpose publishing skill library for AI agents.

It helps an agent turn one project brief into platform-aware publishing plans, technical articles, launch copy, community posts, showcase drafts, and review reports. The project is intentionally generic: it is not tied to one product, one company, or one agent runtime.

The library currently normalizes publishing knowledge for **91 developer, startup, design, and technical community platforms**.

## What This Project Does

`agent-publishing-skills` gives agents a structured way to answer questions like:

- Which platforms are a good fit for this project?
- Should this become a tutorial, launch post, discussion thread, or showcase?
- What language, tone, format, and evidence does each platform expect?
- How do we avoid spammy cross-posting?
- What should be reviewed before a human publishes?

The output is always draft material and review guidance. This project does **not** auto-publish.

## Design Model

The repository separates platform knowledge from agent execution.

```text
knowledge  = reusable platform facts, style expectations, and safety rules
skills     = agent-facing execution interfaces
workflows  = recommended skill sequences for common publishing jobs
schemas    = stable input/output contracts between skills
templates  = reusable draft structures
integrations = install notes for different agent platforms
```

This separation matters because platform facts change more often than skill orchestration. Adapters should reference `knowledge/` instead of duplicating platform rules.

## Repository Structure

```text
agent-publishing-skills/
├── README.md
├── package.json
├── bin/
├── skill-registry.json
├── gemini-extension.json
├── docs/
│   ├── getting-started.md
│   ├── security.md
│   ├── platform-model.md
│   └── contribution-guide.md
├── knowledge/
│   ├── platforms/      # 91 normalized platform profiles
│   ├── styles/         # reusable content styles
│   └── rules/          # no-auto-publish, disclosure, anti-spam
├── skills/
│   ├── planner/
│   ├── writer/
│   ├── reviewer/
│   ├── adapter-technical-blog/
│   ├── adapter-community-discussion/
│   ├── adapter-launch/
│   ├── adapter-showcase/
│   └── adapter-social-shortform/
├── workflows/
├── templates/
├── schemas/
├── examples/
└── integrations/
```

## Core Workflow

1. Create a project brief using `schemas/project-brief.schema.json`.
2. Run `skills/planner` to classify the project and recommend platforms.
3. Confirm the publishing plan with the user.
4. Run `skills/writer` to produce a reusable base draft.
5. Run a generic adapter to create platform-specific drafts.
6. Run `skills/reviewer` before any manual publishing.

The typical flow is:

```text
project brief
→ planner
→ user confirmation
→ writer
→ adapter
→ reviewer
→ human publishes manually
```

## Runtime Skills

The core skills are:

- `planner`: evaluates project-platform fit and creates a publishing plan.
- `writer`: turns a project brief into a reusable base draft.
- `reviewer`: checks drafts for platform fit, spam risk, disclosure, evidence, and formatting.

Generic adapters cover broad platform families:

- `adapter-technical-blog`: tutorials, engineering notes, long-form technical posts.
- `adapter-community-discussion`: forums, Q&A-style communities, discussion-first platforms.
- `adapter-launch`: Product Hunt-style launch and product discovery surfaces.
- `adapter-showcase`: visual, design, demo, and portfolio platforms.
- `adapter-social-shortform`: short updates, build-in-public posts, and threads.

## Platform Knowledge

`knowledge/platforms/` contains 91 normalized platform profiles. Each profile captures reusable facts such as:

- platform URL
- language expectations
- good-fit project types
- poor-fit project types
- formatting and style notes
- tone guidance
- source profile reference

`knowledge/index.json` provides a structured index of the 91 platform profiles.

`skill-registry.json` maps each platform to a recommended adapter.

## Schemas

Schemas define the contracts between skills:

- `schemas/project-brief.schema.json`
- `schemas/publishing-plan.schema.json`
- `schemas/platform-draft.schema.json`
- `schemas/review-result.schema.json`
- `schemas/skill-registry.schema.json`

Agents should use these schemas to keep planner, writer, adapter, and reviewer output consistent.

## Safety Rules

This library is built around manual publishing and community respect.

Agents using this project must:

- never auto-publish;
- never ask for votes, likes, stars, or upvotes;
- never fabricate benchmarks, users, revenue, testimonials, or endorsements;
- disclose sponsorship, affiliation, or AI assistance when required;
- adapt content per platform instead of cross-posting identical copy.

See `docs/security.md` and `knowledge/rules/` for details.

## Examples

Example project briefs live in `examples/`:

- `examples/open-source-tool/`
- `examples/ai-demo/`
- `examples/design-tool/`
- `examples/developer-library/`

These are intentionally generic and can be used to test planner, writer, adapter, and reviewer behavior.

## Integrations

Installation notes are provided for:

- Claude
- Gemini
- OpenAI Agents / Codex
- OpenCode
- OpenClaw compatibility

See `integrations/` for platform-specific loading guidance.

## CLI Install

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

From a cloned repository, platform-specific wrappers are also available.

On macOS or Linux:

```bash
./integrations/claude/install.sh --dir /path/to/project
./integrations/gemini/install.sh --dir /path/to/project
./integrations/opencode/install.sh --dir /path/to/project
./integrations/openai-agents/install.sh --dir /path/to/project
```

On Windows PowerShell:

```powershell
.\integrations\claude\install.ps1 --dir C:\path\to\project
.\integrations\gemini\install.ps1 --dir C:\path\to\project
.\integrations\opencode\install.ps1 --dir C:\path\to\project
.\integrations\openai-agents\install.ps1 --dir C:\path\to\project
```

Supported targets:

- `claude`: installs into `.claude/` or `~/.claude/`
- `opencode`: installs into `.opencode/` or `~/.config/opencode/`
- `codex`: installs into `.codex/agent-publishing-skills/` or `~/.codex/vendor_imports/agent-publishing-skills/`
- `gemini`: installs as a Gemini CLI extension directory

Use `--scope user` for user-level installs and `--force` to overwrite an existing install.

## Public Package Surface

The published project surface is:

```text
bin/
docs/
knowledge/
skills/
workflows/
templates/
schemas/
examples/
integrations/
package.json
skill-registry.json
gemini-extension.json
```

## License

Add a `LICENSE` file before publishing this repository publicly.
