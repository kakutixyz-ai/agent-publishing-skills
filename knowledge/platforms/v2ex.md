# V2EX (v2ex.com)

URL: https://www.v2ex.com

Source: `legacy-skills/v2ex/SKILL.md`

This normalized profile extracts reusable platform knowledge from the legacy platform profile. It is not a runtime skill.

## Trigger Context

Triggered by mentions of 'V2EX', 'v2ex.com', 'V2EX社区', or '技术社区推广'

## Language

**Primary Language:** 简体中文 (Simplified Chinese).  
V2EX is a Chinese-speaking forum for developers, designers, and tech enthusiasts. The title, main post, and comments must be written in Simplified Chinese. Modern internet slang (e.g., LZ for poster, V友 for community members) is common but should be used sparingly. Technical English words are naturally blended.

## Good Fit

- 优秀的开源项目发布，特别是具有创新性、实用性或设计精美的项目（通常发布在 /go/create 节点）。
- 深度技术讨论、服务器运维心得、实际踩坑与解决过程。
- 程序员职业发展、求职招聘、独立开发经历分享。
- 技术工具的评测、使用心得、开发效率提升指南。

## Poor Fit

- 纯营销软文，带有强烈的商业推广色彩或毫无技术干货的硬广告。
- 搬运或抄袭他人的文章，没有加入任何原创思考或技术讨论。
- 新手极其基础的提问（除非在 /go/qna 且态度诚恳），或者低质量的刷屏、灌水贴。
- 使用带有强力推广返利（Referral）的注册链接。

## Format And Style Notes

- 保持段落短小，每段不超过 3-4 行，段落之间必须使用空行分隔。
- **避免使用 Markdown 标题**：好的做法是使用空行和加粗（`**`）分隔段落。例如：`**背景**` 后跟文本。在 V2EX 帖子里，普通的 Markdown H1/H2 渲染可能会使排版看起来过大或混乱。
- 链接要直接相关，避免推广性链接。好的做法是：`项目地址：https://github.com/v2ex/v2ex`。
- 代码片段较长时建议使用 Gist 或其他代码托管链接，短代码可使用 Markdown 代码块。
- 回复时要直接、技术性，避免没有营养的客套话（如“顶”、“支持”）。
- 不要使用签名或结尾敬语。

## Tone

极客、理性、真诚。以平等的态度交流，接受质疑，讨论专注技术本身，避免客套话和软文营销感。

## Adapter Guidance

Use a matching generic adapter unless the platform has a dedicated adapter. Keep platform-specific facts here and execution steps in `skills/`.