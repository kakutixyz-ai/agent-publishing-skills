# CSDN 技术博客平台

URL: https://www.csdn.net

Source: `legacy-skills/csdn/SKILL.md`

This normalized profile extracts reusable platform knowledge from the legacy platform profile. It is not a runtime skill.

## Trigger Context

Triggered by mentions of 'CSDN', 'Chinese developer community', 'CSDN blog', '技术博客', 'CSDN 发文'

## Language

**Primary Language:** 简体中文 (Simplified Chinese).  
CSDN's user base consists primarily of software developers and students in Mainland China. Explanatory text, post titles, and comments must be written in clear, concise Simplified Chinese. Standard technical English terms (e.g., React, SQL, JVM) are expected within prose, but keep instructions and reasoning entirely in Chinese.

## Good Fit

- 详细的踩坑记录和 Bug 修复方案，直击报错信息并附带具体解决步骤。
- 具体编程语言/框架的入门、实战或踩坑教程，贴出完整可复现、可复制的代码。
- 常用工具/库的整理、环境配置搭建（如 Docker 安装、Linux 运维环境配置）以及 API 使用指南。
- 带有源码分析、深层运行机制解析的技术深度好文。

## Poor Fit

- 纯英文文章（CSDN 绝大多数用户习惯中文阅读，纯英文很难获得关注和流量）。
- 没有实质技术内容的行业吹水、软文营销、或大段拼凑的AI生成废话。
- 只有两三行介绍的项目链接推广，缺乏任何原理解释或具体使用范例。
- 针对国外特定服务（如特定海外小众SaaS）的介绍，缺乏国内落地实用价值。

## Format And Style Notes

- 文章开头直接切入痛点，例如“在使用 React 18 时遇到了 XXX 报错，折腾了半天终于解决了……”。
- 必须使用 Markdown 代码块并指定语言，代码中包含必要的中文注释，方便读者直接复制运行。
- 段落重点文字使用粗体标出，提供步骤式的 H2/H3 标题（如“一、环境准备”、“二、代码实现”）。
- 提供清晰的配置与依赖版本说明（如 Node.js v18.16.0, Python 3.10）。
- 附带最终运行效果的终端输出或截图，增加可信度。

## Tone

直奔主题，代码说话，解决 bug 是唯一正义，废话少说，复制即用。

## Adapter Guidance

Use a matching generic adapter unless the platform has a dedicated adapter. Keep platform-specific facts here and execution steps in `skills/`.