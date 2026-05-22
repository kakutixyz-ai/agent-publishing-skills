```yaml
platform: v2ex
title: agent-publishing-skills - 一个让 AI Agent 学会跨平台发布的开源技能库
status: draft
tags:
  - 开源
  - AI
  - Node.js
  - 开发者工具
```

**项目介绍**

我最近做了一个开源项目，叫 agent-publishing-skills。解决的问题很简单：用 Claude Code/Gemini CLI 这类 AI Agent 写代码已经很顺手了，但让它「把项目介绍发到不同技术社区」时，效果很差——要么所有平台发一样的文案，要么完全不理解各平台的格式要求。

这个项目本质上是给 AI Agent 装一套「发布技能包」——先规划（planner）适合发哪些平台，再写基础内容（writer），然后针对每个平台做适配（adapter），最后自查合规性（reviewer）。所有输出都是草稿，不会自动发布。

**技术架构**

核心设计是把「平台知识」和「执行逻辑」拆开：

- knowledge/ 目录里是 91 个平台的标准化说明（语言、格式、语调、适配要求），每个平台一个 Markdown 文件
- skills/ 目录里是四个技能的执行指令（planner → writer → adapter → reviewer）

这套结构让新增平台只需加一个 Markdown 文件，不需要改任何技能代码。目前覆盖了 CSDN、掘金、知乎、V2EX、少数派、开源中国等中文平台，以及 DEV、HN、Reddit、Zenn、Qiita 等外文平台。

**与 V2EX 的关系**

这个项目本身在 knowledge/platforms/ 里有一份 v2ex.md 的档案，详细记录了 V2EX 的平台规则。比如：
- 不要用 Markdown 标题（H1/H2 渲染效果太夸张）
- 段落不超过 3-4 行
- 链接要直接相关，不要用推广链接

发这篇帖子就是为了实地验证——这篇帖子就是用项目的 V2EX 适配器生成的草稿。

**实际场景**

假设你有一个开源工具「json-schema-validator」，在 V2EX 上应该怎么写？适配器会输出大约 200 字的内容，用加粗代替标题，直接给项目链接和技术讨论点。而同样的项目在掘金上会生成一篇 2000 字的技术分析文章。这就是核心价值——**同一件事在不同平台有不同的表达方式**。

**当前局限**

- 中文平台共用通用适配器，没有像 Zenn（日文）那样的专用适配器，适配精度还有提升空间
- 生成质量依赖底层 LLM 能力
- 平台档案需要持续人工维护

项目地址：https://github.com/anomalyco/agent-publishing-skills
npm 地址：https://www.npmjs.com/package/@kakuti/agent-publishing-skills

欢迎试用和反馈。对于「AI Agent 应该怎么处理跨平台内容发布」这个话题，也欢迎讨论。

---

补充说明：这个项目不会自动发布任何内容——所有输出都是 draft 状态。它提供的是让 AI Agent 理解「不同平台应该写成什么样」的能力，最终发布需要人工审核。

如果你在用 Claude Code 或类似的 Agent 工具做开发，并且需要跨平台发布项目更新，可以试试看。安装很简单：

```bash
npm install -g @kakuti/agent-publishing-skills
agent-publishing-skills install claude
```

然后在项目目录放一个 project-brief.json 就能用了。
