```yaml
platform: csdn
title: 给 AI Agent 装上发布技能——agent-publishing-skills 的设计与实践
status: draft
tags:
  - AI Agent
  - Node.js
  - 开源
  - 发布自动化
  - 技术写作
```

# 给 AI Agent 装上发布技能——agent-publishing-skills 的设计与实践

> 一个支持 91 个平台的通用发布技能库，让 AI 智能体学会规划、撰写和审查技术内容

## 一、背景：AI Agent 为什么需要发布技能

当前 AI Agent 工具（如 Claude Code、Gemini CLI、Codex）已经能帮开发者写代码、改 bug、部署项目，但一到「把项目介绍发到社区」这个环节就卡住了。要么直接贴一段项目简介被平台判定为广告，要么在不同平台发完全一样的内容导致阅读体验极差。

**agent-publishing-skills** 就是为解决这个问题设计的：一个面向 AI Agent 的通用发布技能库，让 Agent 能够像人类开发者一样——先规划发布计划，再写适合平台的草稿，最后自检合规性。

## 二、核心设计：三层解耦架构

```text
knowledge/  ←→  skills/  ←→  agent runtime
  (平台知识)      (执行技能)      (Claude/Gemini/Codex)
```

- **knowledge/**：91 个平台的标准化知识档案，包含语言、格式、语调、适配规则等元数据，平台规则独立于 Agent 运行时。
- **skills/**：4 个核心技能（planner → writer → adapter → reviewer），每个技能只负责一个环节。
- **agent runtime**：适配层，目前已支持 Claude、Gemini、Codex、OpenCode、OpenClaw 五种运行时。

```json
// 典型工作流示例
{
  "工作流": [
    "project-brief.json → planner → 发布计划",
    "发布计划 + 用户确认 → writer → 基础草稿",
    "基础草稿 → adapter → 平台适配稿",
    "平台适配稿 → reviewer → 审查报告",
    "审查通过 → 人工手动发布"
  ]
}
```

## 三、关键技术细节

### 3.1 平台知识标准化

每个平台都有一份 Markdown 知识档案，结构化描述：

- `primary_language`：平台主语言（zh/en/ja/ko 等）
- `good_fit`：适合的内容类型
- `poor_fit`：不适合的内容类型
- `format_notes`：格式要求
- `tone`：语调指南
- `adapter_type`：匹配的适配器类型

目前已覆盖 91 个平台，包括中文平台（CSDN、掘金、知乎、V2EX、开源中国、少数派）、英文平台（DEV、HN、Product Hunt、Reddit）、日文平台（Zenn、Qiita）等。

### 3.2 适配器调度

```javascript
// Adapter 如何匹配平台
function resolveAdapter(platform) {
  // 先查专用适配器
  if (platform.slug in dedicatedAdapters) {
    return dedicatedAdapters[platform.slug];
  }
  // 回退到通用适配器
  return genericAdapters[platform.adapter_type];
}
```

五个通用适配器：`adapter-technical-blog`（技术博客）、`adapter-community-discussion`（社区讨论）、`adapter-launch`（产品发布）、`adapter-showcase`（作品展示）、`adapter-social-shortform`（社交媒体短贴）。

### 3.3 安全规则引擎

发布技能库内置四条硬性安全规则：

1. **anti-spam**：禁止在多个平台发布相同内容，禁止索要点赞/标星。
2. **disclosure**：涉及 AI 生成、商业赞助时必须披露。
3. **factual-accuracy**：禁止捏造用户数、收入、基准测试结果。
4. **no-auto-publish**：所有输出均为草稿，绝不自动发布。

## 四、安装与使用

```bash
# 全局安装
npm install -g @kakuti/agent-publishing-skills

# 为 Claude 安装技能
agent-publishing-skills install claude

# 为 OpenCode 安装技能
agent-publishing-skills install opencode
```

安装后，Agent 即可使用 `planner`、`writer`、`adapter-*`、`reviewer` 技能。

## 五、局限与未来

当前版本的局限性：

- 平台知识档案依赖人工维护，尚未支持自动抓取平台规则变化。
- 草稿质量依赖 LLM 能力，存在生成质量波动的可能性。
- 尚未覆盖视频平台（YouTube、B站）和纯图片平台（Pinterest）。

后续计划：增加更多平台知识档案，引入社区贡献机制，优化适配器的跨语言翻译质量。

## 六、总结

agent-publishing-skills 将「跨平台发布」这个看似简单的任务拆解为可复用的技能层，让 AI Agent 能像有经验的技术作者一样，在发布前考虑平台适配、内容质量和合规性。

项目地址：[https://github.com/anomalyco/agent-publishing-skills](https://github.com/anomalyco/agent-publishing-skills)

npm 包：[https://www.npmjs.com/package/@kakuti/agent-publishing-skills](https://www.npmjs.com/package/@kakuti/agent-publishing-skills)
