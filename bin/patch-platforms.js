const fs = require('fs');
const path = require('path');

const platformsDir = '/Volumes/ssd/Documents/Productions/agent-publishing-skills/knowledge/platforms';

const patches = {
  "alura.md": `# Alura

URL: https://alura.com.br

Source: \`legacy-skills/alura/SKILL.md\`

This normalized profile extracts reusable platform knowledge from the legacy platform profile. It is not a runtime skill.

## Trigger Context

Triggered by mentions of 'Alura', 'Alura Forum', 'Alura+', or Brazilian programming education platform.

## Language

**Primary Language:** Brazilian Portuguese (PT-BR). All explanatory text, titles, community posts, and comments must be written in PT-BR. English is only acceptable inside code snippets for variable names or standard library functions. Using English for explanations will be perceived as unprofessional and will significantly reduce engagement. Code comments should be in Portuguese.

## Good Fit

- Educational libraries or frameworks: Projects that are primarily designed for learning (e.g., a simple ORM, a tutorial-focused CLI tool, a pedagogical game engine).
- Step-by-step tutorial projects: Repositories that include a clear README with a structured, lesson-like walkthrough (e.g., "Building a CRUD with Flask and SQLAlchemy").
- Projects with clear career relevance: Tools or examples that directly map to job market skills (e.g., a data pipeline with Pandas, a REST API with Spring Boot, a React dashboard).
- Projects with Portuguese documentation: Any project where the primary documentation, comments, and examples are already in Brazilian Portuguese.
- Projects targeting beginners: Libraries or applications that solve a common beginner problem (e.g., a simpler logging library, a visual debugger helper) with explicit didactic value.

## Poor Fit

- Projects with only English documentation: If the README and all docs are exclusively in English, it will feel foreign and low-effort to the Alura community.
- Niche academic research code: Papers, proof-of-concept implementations of obscure algorithms, or code with no practical application will not resonate.
- Highly opinionated or controversial tools: Alura is a constructive, non-debate environment. Projects that are political, flame-inducing, or that "bash" other technologies are unsuitable.
- Unstable or alpha-stage projects: Alura users expect reliable, working examples. A project with broken dependencies or incomplete features will frustrate learners.
- Projects requiring advanced English-language resources: If the only way to understand the project is to read an English blog post or watch an English video, it will not succeed on Alura.

## Format And Style Notes

- Use a formal but accessible tone. Address the reader as "você" or use the imperative "vamos". Avoid slang.
- Structure content as a lesson. Use numbered lists for steps and subheadings for sections.
- Always explain the "why" behind the code. Don't just show the code; explain the reasoning.
- Use code blocks with language tags. Always specify the language for syntax highlighting.
- Keep code comments in Portuguese. This reinforces the language immersion for the learner.

## Tone

Write as a supportive, pedagogical, and encouraging instructor: clear, structured, welcoming, and focused on helping students level up their skills (using warm Brazilian Portuguese).

## Adapter Guidance

Use a matching generic adapter unless the platform has a dedicated adapter. Keep platform-specific facts here and execution steps in \`skills/\`.`,

  "arab-hardware.md": `# Arab Hardware (عرب هاردوير)

URL: https://arabhardware.net

Source: \`legacy-skills/arab-hardware/SKILL.md\`

This normalized profile extracts reusable platform knowledge from the legacy platform profile. It is not a runtime skill.

## Trigger Context

Triggered by mentions of 'Arab Hardware', 'منتدى عرب هاردوير', or 'Arab Hardware forum'

## Language

اللغة الأساسية للمنتدى هي **العربية الفصحى (Modern Standard Arabic)**. يجب أن تكون جميع المشاركات والشروحات باللغة العربية. يُسمح باستخدام المصطلحات التقنية الإنجليزية (مثل "kernel"، "API"، "router") عند الضرورة، ولكن مع شرحها بالعربية.

## Good Fit

- شروحات ومقالات تقنية عميقة ومفصلة حول عتاد الحاسوب، الشبكات، البرمجة، والأنظمة.
- مشاريع برمجية مفتوحة المصدر تقدم حلولاً لمشاكل حقيقية مع شرح باللغة العربية.

## Poor Fit

- المشاركات الترويجية أو التسويقية التي لا تقدم أي قيمة تعليمية أو تقنية.
- المحتوى الضعيف أو المنقول حرفياً دون تقديم إضافة أو ترجمة ذات جودة.

## Format And Style Notes

- العنوان يجب أن يكون وصفيًا ودقيقًا: لا تستخدم عناوين عامة. اذكر المشكلة والحل أو الأداة بالاسم.
- استخدم التنسيق الصحيح للكود: لف الأوامر والملفات بين \`[code]\` و \`[/code]\`. لا تستخدم أبدًا علامات Markdown.
- قدم خطوات واضحة ومتسلسلة: ابدأ من البداية وانتهِ بالنتيجة النهائية. استخدم الأرقام أو النقاط.
- استخدم الصور والمخططات بحكمة: الصور ضرورية لتوضيح طوبولوجيا الشبكة أو واجهات المستخدم. استخدم \`[img]\` tag.
- التزم باللغة العربية الفصحى الرسمية: تجنب العامية المصرية أو أي لهجة أخرى في النص الرئيسي.
- قدم الحلول وليس الأسئلة فقط: إذا كنت تشارك مشروعًا، اشرح كيف يحل مشكلة حقيقية. لا تطلب المساعدة فقط.
- استخدم الاقتباس (Quote) للردود المرجعية: عند الرد على سؤال، استخدم \`[quote]\` للإشارة إلى النص الأصلي.
- اختتم الموضوع بخلاصة أو رابط للتوثيق الكامل: في نهاية الموضوع، لخص الخطوات الرئيسية وضع رابطًا لمستودع المشروع أو التوثيق الكامل.

## Tone

نبرة المنتدى: رسمية، تقنية بحتة، حل المشكلات بخطوات واดحة، لا ترحيب بالثرثرة أو الأسئلة المتكررة بدون بحث مسبق.

## Adapter Guidance

Use a matching generic adapter unless the platform has a dedicated adapter. Keep platform-specific facts here and execution steps in \`skills/\`.`,

  "connpass.md": `# Connpass

URL: https://connpass.com

Source: \`legacy-skills/connpass/SKILL.md\`

This normalized profile extracts reusable platform knowledge from the legacy platform profile. It is not a runtime skill.

## Trigger Context

Triggered by mentions of 'Connpass', 'Connpass event', 'Connpass community'

## Language

**Primary language: Japanese** (99% of events are in Japanese).  
All core content — title, description, schedule, location, prerequisites — must be written in Japanese using polite \`desu/masu\` style.  
English-only events exist but are niche (e.g., language exchange meetups). If your event is bilingual, write the main description in Japanese and add a short English summary below.  
Avoid casual speech (\`tameguchi\`), slang, emojis in titles, or hype-driven marketing language.

## Good Fit

- In-person or hybrid tech meetups (workshops, study groups, hackathons, LT nights) targeting Japanese-speaking developers.
- Formal professional gatherings (e.g., "AWS Lambda Hands-on for Beginners") where clear schedules, prerequisites, and fees are essential.
- Community-driven recurring events (e.g., monthly Python study circle) with a stable venue and capacity limit.
- Corporate recruitment or employer branding events (e.g., "Company X Tech Talk Series") with a structured agenda.
- Niche or hobbyist meetups (e.g., "Vintage Mac Restoration Workshop") that require registration management and capacity control.

## Poor Fit

- Purely online/streaming events with no in-person component (use YouTube Live, Twitch, or Zoom instead).
- Social or party-style gatherings (Connpass is too formal and transactional for casual hangouts).
- Commercial product launches or sales pitches (the culture expects educational/community value, not advertising).
- Events for children under 15 (the platform's user base is overwhelmingly adult professionals).
- Short-notice or spontaneous meetups (Connpass events are typically posted 2–4 weeks in advance).

## Format And Style Notes

- Use formal keigo (敬語) throughout the event description.
- Start with a bold, keyword-rich title that includes target audience and topic.
- Use headings (h2/h3) to break content into clear sections: 概要, タイムスケジュール, 持ち物, 注意事項.
- State capacity (定員) and fee (参加費) prominently near the top.
- Use bold text for key details (dates, prerequisites, cancellation policy).
- Keep paragraphs short (2–3 lines max) — Japanese readers scan vertically.
- Provide exact venue access instructions (station name, exit, walking time).
- Include a clear cancellation policy for paid events.

## Tone

Write as a polite, organized event organizer in the Japanese tech community: professional, clear, welcoming, and structured (using standard Keigo \`です\`/\`ます\` form).

## Adapter Guidance

Use a matching generic adapter unless the platform has a dedicated adapter. Keep platform-specific facts here and execution steps in \`skills/\`.`,

  "csdn.md": `# CSDN 技术博客平台

URL: https://www.csdn.net

Source: \`legacy-skills/csdn/SKILL.md\`

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

Use a matching generic adapter unless the platform has a dedicated adapter. Keep platform-specific facts here and execution steps in \`skills/\`.`,

  "developpez-com.md": `# Developpez.com

URL: https://developpez.com

Source: \`legacy-skills/developpez-com/SKILL.md\`

This normalized profile extracts reusable platform knowledge from the legacy platform profile. It is not a runtime skill.

## Trigger Context

Triggered by mentions of 'Developpez.com', 'developpez.com article', 'publier sur Developpez.com', 'forum Developpez.com'

## Language

**Primary Language:** Français (French).  
Developpez.com is the largest French-speaking developer portal. Submissions must be written in professional, grammatically correct French. Technical terms in English are accepted (e.g., "framework", "middleware") but should be integrated naturally. Code comments should also be written in French.

## Good Fit

- Articles de fond sur le développement logiciel, tutoriels détaillés, retours d'expérience technique, analyses d'architecture.
- Projets open-source francophones ou outils avec une documentation claire et des exemples concrets.
- Retours d'expérience pragmatiques sur l'utilisation d'outils ou d'infrastructures.

## Poor Fit

- Contenu purement commercial ou publicitaire sans intérêt technique ou pédagogique.
- Articles rédigés uniquement en anglais sans traduction ou valeur ajoutée pour la communauté francophone.
- Tutoriels très basiques sans explications conceptuelles profondes.

## Format And Style Notes

- Utiliser un français correct, formel et technique. Éviter le ton familier.
- Structurer l'article avec des titres clairs et logiques (H2/H3).
- Fournir des exemples de code commentés en français.
- Privilégier la clarté et l'explication des concepts fondamentaux plutôt que le jargon marketing.
- Commencer par une brève introduction expliquant le problème résolu et ce que le lecteur va apprendre.

## Tone

Un ton formel et technique en français, précis comme une documentation officielle, poli comme une correspondance professionnelle, et sans aucune place pour le marketing ou le bavardage inutile.

## Adapter Guidance

Use a matching generic adapter unless the platform has a dedicated adapter. Keep platform-specific facts here and execution steps in \`skills/\`.`,

  "hacker-news.md": `# Hacker News (HN) — news.ycombinator.com

URL: https://news.ycombinator.com

Source: \`legacy-skills/hacker-news/SKILL.md\`

This normalized profile extracts reusable platform knowledge from the legacy platform profile. It is not a runtime skill.

## Trigger Context

Expert skill for publishing on Hacker News (news.ycombinator.com). Triggered by mentions of 'Hacker News', 'HN', 'Show HN', or 'Ask HN'.

## Language

The primary language for Hacker News is **English (American/International technical English)**. Non-English posts are extremely rare and generally ignored or flagged. The community expects content in clear, direct, and grammatically correct English. If your project documentation is in another language, you must have an English version of the README or a detailed English summary ready for the post or comment.

## Good Fit

- Open-source tools and libraries — especially command-line utilities, developer tooling, databases, or frameworks that solve a clear technical problem.
- Technical deep dives — detailed blog posts explaining how something works under the hood (e.g., database internals, compiler design, networking protocols).
- Novel engineering projects — projects that demonstrate clever engineering, unusual techniques, or impressive performance benchmarks (e.g., a new compression algorithm, a custom kernel, a fast JSON parser).
- "Show HN" projects — personal side projects or startups that are launched and available for immediate use, especially if they have a technical angle or a demo.
- Well-researched essays on technology — thoughtful, evidence-based pieces on software engineering, system design, or the history of computing.

## Poor Fit

- Pure marketing or sales content — landing pages that are just signup forms without a technical explanation or demo.
- Crypto/NFT/blockchain hype — projects that focus on tokenomics, "moon" talk, or unsubstantiated financial claims. Only projects with novel technical implementations are tolerated.
- Non-technical lifestyle or opinion pieces — general productivity advice, "how to be a better developer" motivational posts, or personal life updates without a technical core.
- Projects requiring paid subscriptions to evaluate — if the core functionality is behind a paywall without a free tier or demo, the community will be hostile.
- Low-effort content — poorly written READMEs, projects with no documentation, or submissions that are simply "check out my app" without any explanation of what makes it technically interesting.

## Format And Style Notes

- Lead with the thesis. The first sentence of your comment or post must state the core claim or result. Do not bury the lede.
- Support claims with data or code. Every assertion should be backed by a link, a benchmark, a code snippet, or a specific technical detail.
- Be concise and direct. Use short sentences. Avoid filler words. Aim for 100–300 words in a comment. Longer is acceptable only if every paragraph adds new information.
- Avoid all marketing language. No superlatives, no exclamation marks, no "amazing," "incredible," or "game-changing." Let the technical facts speak for themselves.
- Use a neutral, evidence-based tone. Present your work as a contribution to the field, not a sales pitch. Acknowledge limitations and trade-offs.
- Format code correctly. Use 2-space indentation for code blocks. Keep snippets under 20 lines. Use inline \`code\` for short references.
- Link to primary sources. If you reference a paper, a library, or a benchmark, link directly to it. Do not link to a blog post that summarizes the paper.
- Be prepared for criticism. Do not get defensive. If someone points out a flaw, acknowledge it and discuss it. The community respects intellectual honesty more than being right.

## Tone

Write as a curious, humble, and intellectually honest engineer: analytical, objective, respectful, and open to critical technical feedback.

## Adapter Guidance

Use a matching generic adapter unless the platform has a dedicated adapter. Keep platform-specific facts here and execution steps in \`skills/\`.`,

  "hashnode-africa.md": `# Hashnode Africa (Hashnode.com)

URL: https://hashnode.com/tag/africa

Source: \`legacy-skills/hashnode-africa/SKILL.md\`

This normalized profile extracts reusable platform knowledge from the legacy platform profile. It is not a runtime skill.

## Trigger Context

Triggered by mentions of 'Hashnode Africa', 'African developer community', 'Hashnode blog', 'tech blog Africa'

## Language

- **Primary language**: English (technical, clear, instructional).
- **Multilingual strategy**: English is the dominant language for maximum reach within the global Hashnode network and the Africa tag. French or Portuguese posts are accepted but will have significantly lower visibility. If writing in a secondary language, add an English summary at the top and use relevant tags (e.g., \`#french\`, \`#portuguese\`). Avoid local slang or idioms; use direct, universal technical English.

## Good Fit

- Open-source tools or libraries that solve region-specific problems (e.g., mobile money APIs, offline-first apps, low-bandwidth optimization).
- Step-by-step tutorials for building web applications (React, Node.js, Python, etc.) with code examples.
- Career-focused content: how to break into tech, interview prep, or transitioning from other fields.
- "Build in public" series documenting the development of a SaaS product or side project.
- Technical deep dives into architecture, performance optimization, or testing.

## Poor Fit

- Purely visual portfolios or design showcases without technical explanation.
- Marketing-heavy posts with little to no code or technical value.
- Short-form, link-only posts (e.g., "Check out my new app" with no substance).
- Content focused on non-technical topics (e.g., lifestyle, travel, personal stories unrelated to tech).
- Projects that require proprietary software or paid tools to follow along.

## Format And Style Notes

- Use clear, descriptive titles that promise a learning outcome.
- Start with a 2-3 sentence intro stating the problem and what the reader will learn.
- Use H2 (\`##\`) for major sections and H3 (\`###\`) for subsections. Never use H1.
- Include code blocks with language identifiers for every snippet.
- Keep paragraphs short (2-4 sentences) and use bullet points for steps.
- Add alt text to all images for accessibility.
- Conclude with a recap and a call to action (e.g., "Try it yourself and share your results").
- Use 3-5 relevant tags, including #africa if region-specific.

## Tone

Write like a patient senior developer mentoring a junior colleague: be clear, supportive, and code-first, with a touch of African tech pride.

## Adapter Guidance

Use a matching generic adapter unless the platform has a dedicated adapter. Keep platform-specific facts here and execution steps in \`skills/\`.`,

  "indie-hackers.md": `# Indie Hackers Skill

URL: https://www.indiehackers.com

Source: \`legacy-skills/indie-hackers/SKILL.md\`

This normalized profile extracts reusable platform knowledge from the legacy platform profile. It is not a runtime skill.

## Trigger Context

Triggered by mentions of 'Indie Hackers', 'build in public', 'indie startup', 'SaaS metrics', 'bootstrapped business'.

## Language

**Primary Language:** English (American English business dialect).  
All content must be written in English. The community is global, but the lingua franca is US-based business and technical English. Non-English posts will be ignored or downvoted. Avoid regional slang, idioms, or non-English titles. Use precise business vocabulary (e.g., MRR, LTV, CAC, churn, conversion rate).

## Good Fit

- Bootstrapped SaaS products with transparent revenue data ($0–$10k MRR range is most popular).
- Developer tools, APIs, or libraries that solve a clear pain point for founders (e.g., billing, analytics, email).
- Content that teaches a specific, actionable business or technical lesson (e.g., "How I reduced churn by 40% using feature gates").
- "Build in public" projects where the founder shares real metrics, failures, and weekly progress updates.
- Niche B2B tools or micro-SaaS products that target a specific underserved audience.

## Poor Fit

- Crypto, NFT, or blockchain projects without a strong business case and real revenue.
- Consumer social media apps or entertainment-focused products (e.g., a new TikTok clone).
- AI "wrapper" products that offer no technical or defensible differentiation.
- Get-rich-quick schemes, affiliate marketing courses, or "passive income" hype content.
- Projects that require a large upfront investment or venture capital to get off the ground.

## Format And Style Notes

- Lead with the metric. The first sentence must state a concrete outcome or number.
- Use data tables for revenue breakdowns. Markdown tables are standard.
- Structure posts with clear H2/H3 headings. Scannability is critical.
- Be blunt and data-driven, not emotional. Fluff is rejected.
- Link to your product only when directly relevant. No gratuitous promotion.
- Share failures and mistakes openly. Vulnerability is valued.
- Keep paragraphs short (2–3 sentences max). Busy founders scan.
- Use screenshots of dashboards or graphs, not stock photos or memes.

## Tone

Write as a transparent, data-focused bootstrapped founder: conversational, open, sharing metrics, and discussing real business lessons/failures.

## Adapter Guidance

Use a matching generic adapter unless the platform has a dedicated adapter. Keep platform-specific facts here and execution steps in \`skills/\`.`,

  "le-wagon.md": `# Le Wagon

URL: https://www.lewagon.com

Source: \`legacy-skills/le-wagon/SKILL.md\`

This normalized profile extracts reusable platform knowledge from the legacy platform profile. It is not a runtime skill.

## Trigger Context

Triggered by mentions of 'Le Wagon', 'Le Wagon community', 'bootcamp alumni', 'wagon coding cohort'

## Language

**Primary Language:** Français (French) and English.  
As an international coding bootcamp, Le Wagon operates in both French and English. Post in the language of the specific local channel or cohort group. Keep language conversational, modern, and highly technical.

## Good Fit

- Junior-friendly open-source projects or libraries that are easy to contribute to.
- Interactive web applications built with Ruby on Rails, React, Node.js, or standard bootcamp stacks.
- Study guides, cheat sheets, or portfolio-building resources for junior developers.

## Poor Fit

- Heavy enterprise architecture topics (e.g., Cobol migration, mainframe systems).
- Direct hard-selling or job recruitment ads without educational context.

## Format And Style Notes

- Use emojis to make posts look engaging.
- Provide a clear Github link for review or contributions.
- Explain the visual layout of the project, including a demo link if possible.

## Tone

Write as an encouraging, supportive bootcamp peer or alumnus: positive, constructive, and oriented towards continuous learning and startup building.

## Adapter Guidance

Use a matching generic adapter unless the platform has a dedicated adapter. Keep platform-specific facts here and execution steps in \`skills/\`.`,

  "leetcode-discuss.md": `# LeetCode Discuss

URL: https://leetcode.com/discuss

Source: \`legacy-skills/leetcode-discuss/SKILL.md\`

This normalized profile extracts reusable platform knowledge from the legacy platform profile. It is not a runtime skill.

## Trigger Context

Triggered by mentions of 'LeetCode Discuss', 'LeetCode community', 'Leetcode solutions', 'coding interview prep'

## Language

**Primary Language:** English.  
All explanations, interview feedback, and code comments must be written in English. Clear and concise technical English is highly valued since users span the globe.

## Good Fit

- Step-by-step explanations of algorithms and data structures.
- Structured code solutions with clear time and space complexity analysis (Big O).
- Interview experience logs, detailing questions asked, system design rounds, and advice.

## Poor Fit

- Unformatted code blocks or solutions without any complexity explanation.
- Generic career advice or resumes asking for referrals without sharing value.

## Format And Style Notes

- Format all code snippets in markdown code blocks with correct language identifiers.
- Use bullet points to list steps or key optimization ideas (e.g., "Approach 1: Brute Force", "Approach 2: Two Pointers").
- State time and space complexities explicitly at the end of the explanation.

## Tone

Analytical, educational, and structured. Focus on clarity, efficiency, and helpfulness for interview preparation.

## Adapter Guidance

Use a matching generic adapter unless the platform has a dedicated adapter. Keep platform-specific facts here and execution steps in \`skills/\`.`,

  "makerlog.md": `# Makerlog

URL: https://makerlog.com

Source: \`legacy-skills/makerlog/SKILL.md\`

This normalized profile extracts reusable platform knowledge from the legacy platform profile. It is not a runtime skill.

## Trigger Context

Triggered by mentions of 'Makerlog', 'Makerlog task', 'indie maker log', 'build in public tasks'

## Language

**Primary Language:** English.  
The global indie maker community uses English as its main language. Short, informal, and action-oriented phrasing is standard.

## Good Fit

- Bulleted list of completed tasks, current tasks, and blockers (the typical maker log).
- Milestones and achievements (e.g., "Launched beta", "Got 100 signups").
- Sharing small screenshots or GIFs of features shipped in real-time.

## Poor Fit

- Long-form essays without clear, bite-sized tasks or product updates.
- Highly promotional or sales-y marketing pitches.

## Format And Style Notes

- Keep updates short, ideally bulleted.
- Use emojis to represent tasks (e.g., ✅ for completed, 🛠️ for in-progress).
- Link to the product or specific commit if relevant.

## Tone

Casual, supportive, and task-oriented. Speak as a builder sharing daily progress with other builders.

## Adapter Guidance

Use a matching generic adapter unless the platform has a dedicated adapter. Keep platform-specific facts here and execution steps in \`skills/\`.`,

  "malt.md": `# Malt — Plateforme de mise en relation freelances & clients

URL: https://malt.fr

Source: \`legacy-skills/malt/SKILL.md\`

This normalized profile extracts reusable platform knowledge from the legacy platform profile. It is not a runtime skill.

## Trigger Context

Triggered by mentions of 'Malt', 'Malt.fr', 'Malt.com', 'freelance marketplace France', 'mission de freelance', 'TJM', 'portage salarial', 'freelance IT'.

## Language

**Primary Language:** Français (French).  
Malt is a French freelance platform. All profiles, blog posts, and communications with clients should be written in professional, flawless French. Technical terms are acceptable but should be framed within French grammar.

## Good Fit

- Conseils pratiques pour les freelances (gestion du TJM, négociation client, statuts juridiques en France).
- Retours d'expérience sur des missions techniques spécifiques.
- Présentation d'outils aidant les indépendants dans leur quotidien de développeur freelance.

## Poor Fit

- Contenu promotionnel non sollicité ou spam.
- Articles rédigés uniquement en anglais n'ayant aucun lien avec les freelances basés en France.
- Sujets techniques très éloignés des besoins du marché ou des clients.

## Format And Style Notes

- Adopter un ton professionnel, encourageant et axé sur le réseau.
- Structurer les articles ou publications avec des titres clairs et des listes à puces.
- Mettre en valeur la valeur ajoutée pour les clients et la communauté freelance.
- Utiliser un langage soigné sans abréviations familières.

## Tone

Professionnel, constructif, axé sur l'entraide, le réseau et l'expertise freelance.

## Adapter Guidance

Use a matching generic adapter unless the platform has a dedicated adapter. Keep platform-specific facts here and execution steps in \`skills/\`.`,

  "midudev.md": `# midudev

URL: https://midu.dev

Source: \`legacy-skills/midudev/SKILL.md\`

This normalized profile extracts reusable platform knowledge from the legacy platform profile. It is not a runtime skill.

## Trigger Context

Triggered by mentions of 'midudev', 'midudev blog', 'Spanish frontend community', 'midu community'

## Language

**Primary Language:** Español (Spanish).  
The community is centered on the Spanish developer ecosystem. All articles, forum posts, and comments must be written in Spanish. Technical terms (e.g., "hook", "componente", "renderizado") are used naturally in Spanish prose.

## Good Fit

- Modern frontend tutorials (React, Next.js, Vue, Astro, CSS, Tailwind).
- Practical code snippets solving a modern web design or integration issue.
- Career advice for Spanish-speaking frontend developers.

## Poor Fit

- Backend-heavy topics without any frontend or UI focus.
- Articles in English or other non-Spanish languages.

## Format And Style Notes

- Keep explanations engaging, simple, and friendly.
- Use code blocks with appropriate language identifiers.
- Include visual diagrams or screenshots showing rendering behavior.

## Tone

Close, enthusiastic, highly educational, and community-driven (using standard Spanish).

## Adapter Guidance

Use a matching generic adapter unless the platform has a dedicated adapter. Keep platform-specific facts here and execution steps in \`skills/\`.`,

  "note.md": `# note（ノート）— https://note.com

URL: https://note.com

Source: \`legacy-skills/note/SKILL.md\`

This normalized profile extracts reusable platform knowledge from the legacy platform profile. It is not a runtime skill.

## Trigger Context

Triggered by mentions of 'note', 'note.com', 'note記事', 'note投稿', 'クリエイタープラットフォーム', 'サブスクリプション', '有料記事'

## Language

**Primary Language:** 日本語 (Japanese).  
note is a Japanese creator platform. All articles must be written in grammatically correct, natural Japanese. Write in a friendly, conversational, and respectful style (\`です\`/\`ます\`調).

## Good Fit

- 個人開発のストーリー、起業・創業の体験談、挫折や教訓。
- テックキャリアやプログラミングの学習方法に関するエッセイ。
- プロジェクトの背景、ビジョン、デザイン哲学などのストーリー性のあるコンテンツ。
- 長期間にわたるプロジェクトの振り返り（例: 「1年間OSSを育ててみた結果」）。

## Poor Fit

- ソースコードだけの無機質な記事（コード解説よりストーリーが重視されるため、技術解説のみならQiitaやZennが推奨されます）。
- 純粋なアフィリエイトや宣伝のみの記事。
- 読者に不快感を与えるような批判的・感情的なコンテンツ。

## Format And Style Notes

- 読者に語りかけるような優しい文体を採用する。
- アイキャッチ画像（見出し画像）を設定して、一覧での視認性を高める。
- 技術的なコードブロックは最小限にし、コードの意味やストーリーを分かりやすく日本語で解説する。
- パラグラフごとに適度な改行を入れ、スマートフォンでも読みやすいように視覚的な余白を意識する。

## Tone

優しく、親しみやすく、感情や背景ストーリーを交えたトーン（「〜です」「〜ます」調）。

## Adapter Guidance

Use a matching generic adapter unless the platform has a dedicated adapter. Keep platform-specific facts here and execution steps in \`skills/\`.`,

  "okky.md": `# OKKY (okky.kr)

URL: https://okky.kr

Source: \`legacy-skills/okky/SKILL.md\`

This normalized profile extracts reusable platform knowledge from the legacy platform profile. It is not a runtime skill.

## Trigger Context

Triggered by mentions of 'OKKY', 'okky.kr', '한국 개발자 커뮤니티', 'OKKY에 홍보'

## Language

OKKY의 기본 언어는 **한국어**입니다. 모든 게시글, 댓글, 공지사항은 한국어로 작성되어야 합니다.  
- **기술 용어:** Spring Boot, Kubernetes, CI/CD 등 영어 기술 용어는 한국어 문장 안에 자연스럽게 섞어 사용하는 것이 일반적입니다.  
- **코드:** 코드 자체는 영어(문법)를 유지하되, 코드 블록 내 주석과 설명은 한국어로 작성해야 합니다.  
- **비한국어 게시글:** 영어나 다른 언어로 작성된 게시글은 무시되거나 삭제될 가능성이 높습니다. OKKY는 한국 개발자를 위한 한국어 생태계입니다.

## Good Fit

- 한국 시장을 타겟으로 한 오픈소스 라이브러리 또는 도구.
- 취업/이직 관련 서비스 및 정보 공유.
- 백엔드/인프라 기술에 특화된 실무 프로젝트 및 트러블슈팅 사례.
- 한국 개발자에게 직접적인 도움을 주는 유틸리티나 생산성 도구.

## Poor Fit

- 영어 전용 프로젝트 또는 한국어 설명이 없는 해외 툴.
- 순수 디자인/UI/UX 중심의 프론트엔드 비주얼 쇼케이스.
- 상업적 목적만 가득하고 개발자에게 실질적인 가치가 없는 광고성 SaaS 제품.
- 블록체인/암호화폐/투자 권유 관련 게시글.

## Format And Style Notes

- 제목은 핵심 기술과 프로젝트의 기능을 직관적으로 나타내야 합니다 (예: "Spring Boot용 파일 업로드 라이브러리를 만들어보았습니다").
- 가독성을 위해 단락을 짧게(3-4줄 이내) 작성하고 줄바꿈을 자주 사용하세요.
- 마크다운 코드 블록을 활용하여 핵심 코드를 명확히 보여주고 기술적 의도를 한국어 주석으로 설명하세요.
- 홍보성 문구를 최소화하고, 왜 이 프로젝트를 시작했고 어떤 문제를 해결하는지 기술적으로 명확하게 서술하세요.

## Tone

OKKY는 '기술로 말하고, 경험으로 증명하라'는 무언의 규칙이 지배하는, 한국 현업 개발자들의 냉철하고 직설적인 전문 토론장입니다.

## Adapter Guidance

Use a matching generic adapter unless the platform has a dedicated adapter. Keep platform-specific facts here and execution steps in \`skills/\`.`,

  "platzi.md": `# Platzi Skill – Cómo publicar y promocionar tu proyecto en Platzi

URL: https://platzi.com

Source: \`legacy-skills/platzi/SKILL.md\`

This normalized profile extracts reusable platform knowledge from the legacy platform profile. It is not a runtime skill.

## Trigger Context

Triggered by mentions of 'Platzi', 'Platzi course', 'Platzi project', 'Platzi community', or 'Platzi chat'.

## Language

**Primary Language:** Español (Spanish).  
Platzi serves a large Spanish-speaking developer and learner community in Latin America and Spain. Submissions must be written in friendly, professional Spanish. Avoid English-only explanations, and use Spanish comments in code snippets.

## Good Fit

- Proyectos prácticos de desarrollo web, móvil o datos que demuestren lo aprendido en las rutas de Platzi.
- Guías paso a paso de programación, configuración de entornos y tutoriales técnicos estructurados de manera didáctica.
- Retos y soluciones a ejercicios de la comunidad.

## Poor Fit

- Contenido puramente comercial o publicitario sin valor educativo o instructivo.
- Artículos redactados completamente en inglés sin explicaciones o valor agregado en español.
- Hilos de discusión irrelevantes o agresivos.

## Format And Style Notes

- Escribe en español de manera clara, entusiasta y didáctica.
- Usa bloques de código etiquetados y mantén los párrafos cortos para facilitar la lectura.
- Explica el contexto educativo del proyecto (por ejemplo, "creado como parte de la ruta de aprendizaje de React").
- Anima a otros estudiantes a comentar, hacer preguntas y clonar el repositorio.

## Tone

Escribe como un estudiante avanzado de Platzi que comparte un proyecto práctico con la comunidad: claro, didáctico, sin rodeos, y siempre orientado a que otros aprendan y apliquen.

## Adapter Guidance

Use a matching generic adapter unless the platform has a dedicated adapter. Keep platform-specific facts here and execution steps in \`skills/\`.`,

  "qiita.md": `# Qiita (キータ) — Japanese Technical Knowledge Sharing Platform

URL: https://qiita.com

Source: \`legacy-skills/qiita/SKILL.md\`

This normalized profile extracts reusable platform knowledge from the legacy platform profile. It is not a runtime skill.

## Trigger Context

Triggered by mentions of 'Qiita', 'Japanese tech blog', 'Qiita article'

## Language

**Primary Language:** Japanese (日本語)

## Good Fit

- It is a technical tutorial or "how-to" guide that walks through a specific implementation with exact code, configuration files, and environment setup steps.
- It documents a troubleshooting or debugging experience — "I encountered error X, here is exactly what caused it and how I fixed it."
- It demonstrates a new library, framework, or tool with concrete usage examples and performance comparisons.
- It explains an architecture decision or system design for a real-world project, including diagrams and trade-off analysis.
- It provides a hands-on learning resource such as a step-by-step setup guide, cheat sheet, or best-practices compilation for a specific technology stack.

## Poor Fit

- It is a product announcement or marketing pitch — Qiita is for knowledge sharing, not promotion.
- It is a philosophical or opinion piece without actionable code or technical details.
- It is a translation or summary of an existing English article without original analysis or Japanese-specific context.
- It is a low-effort aggregation of links or resources — the community expects self-contained, original content.
- It is a non-technical topic (e.g., career advice, lifestyle, design without code) — these belong on other platforms.

## Format And Style Notes

- Always include an "環境" (Environment) section early in the article (e.g. Node.js, OS version).
- Use \`##\` for major section headers; never use \`#\` in the body (the title is the H1).
- Always specify the language in code blocks for proper syntax highlighting.
- Use blockquotes or note blocks for important callouts about pitfalls or environment-specific behavior.
- Write code comments in Japanese, not English.
- Place images between major sections, not at the top. Screenshots of errors are especially valued.
- End every article with a "まとめ" (Summary) section that recaps the key steps and suggests next steps.

## Tone

Write as a respectful, objective, and helpful engineer sharing knowledge: polite, technically precise, and supportive of other developers' growth (using formal Japanese \`です\`/\`ます\` form).

## Adapter Guidance

Use a matching generic adapter unless the platform has a dedicated adapter. Keep platform-specific facts here and execution steps in \`skills/\`.`,

  "read-cv.md": `# Read.cv

URL: https://read.cv

Source: \`legacy-skills/read-cv/SKILL.md\`

This normalized profile extracts reusable platform knowledge from the legacy platform profile. It is not a runtime skill.

## Trigger Context

Triggered by mentions of 'Read.cv', 'read.cv profiles', 'anti-resume platform', or 'designer portfolio site'

## Language

The primary language is **English (US)** . The platform's culture and user base are overwhelmingly English-speaking. Non-English content is rare and may limit your reach. If your project documentation or narrative is in another language, you must provide a high-quality English translation for the profile bio, status updates, and any long-form posts. Using English signals that you are part of the global "maker" community the platform serves.

## Good Fit

- Design tools, UI component libraries, and visual development frameworks (e.g., a new CSS utility library, a Figma plugin, a generative art tool).
- Developer tools with a strong visual or user-experience component (e.g., a code playground, a documentation generator with a beautiful default theme).
- Open-source projects that prioritize craft, design thinking, and a polished aesthetic over raw features.
- "Anti-resume" style projects: things that demonstrate a philosophy or a unique approach rather than just a list of features (e.g., a new paradigm for state management).
- Personal projects or side hustles where the *story* of the build is as important as the output (e.g., a solo-developed mobile app with a compelling design narrative).

## Poor Fit

- Enterprise middleware, backend infrastructure, or database tools with no visual output (e.g., a new message queue, a cloud orchestration tool).
- Projects that rely heavily on corporate jargon, legacy branding, or "enterprise-grade" terminology.
- Command-line tools or libraries that are purely functional and have no UI, no demo, and no visual documentation.
- Projects with a large, complex codebase that cannot be summarized in a single, elegant sentence.
- Any project that cannot be represented by a single, high-quality screenshot or GIF.

## Format And Style Notes

- Lead with a strong, declarative sentence. Your bio or post should start with a clear statement of your value.
- Use a single line for your role and impact. Avoid paragraph-length job descriptions.
- Link naturally, not mechanically. Integrate URLs into the narrative.
- Keep paragraphs to 2–4 sentences. Walls of text are ignored.
- Use blockquotes for emphasis, not for citations.
- Embed high-resolution, well-cropped images. A blurry or poorly framed screenshot undermines your credibility.
- Avoid buzzwords. Words like "passionate," "results-driven," "innovative," and "synergy" signal that you are copying a template.
- Use the "Status" feature for current focus. Keep it to a single, punchy phrase.

## Tone

Write as a design-focused, aesthetic-conscious professional: polished, direct, emphasizing craft and storytelling over corporate jargon.

## Adapter Guidance

Use a matching generic adapter unless the platform has a dedicated adapter. Keep platform-specific facts here and execution steps in \`skills/\`.`,

  "rocketseat.md": `# Rocketseat — https://rocketseat.com.br

URL: https://rocketseat.com.br

Source: \`legacy-skills/rocketseat/SKILL.md\`

This normalized profile extracts reusable platform knowledge from the legacy platform profile. It is not a runtime skill.

## Trigger Context

Triggered by mentions of 'Rocketseat', 'Rocketseat community', 'BR dev forum', 'Brasil dev', 'comunidade Rocketseat'

## Language

**Primary language: Brazilian Portuguese (pt-BR).**  
The entire platform — website, forum, Discord server, and all official content — operates in Portuguese. Code snippets remain in English (standard programming practice), but all explanatory text, questions, and discussions must be written in Portuguese. Posting in English is considered out of place and will significantly reduce engagement. Use a natural "Portinglês" style where technical terms are either translated (e.g., "função", "array", "hook") or mixed naturally with Portuguese grammar.

## Good Fit

- Node.js, React, React Native projects — the core stack taught and discussed at Rocketseat; any project built with these technologies will resonate immediately.
- Projects with a clear "learn-by-doing" angle — tutorials, step-by-step guides, challenge solutions, or open-source projects that help others level up.
- Brazilian-focused tools or libraries — packages with Portuguese documentation, support for Brazilian payment gateways (e.g., PagSeguro, Mercado Pago), or integrations with local services.
- Projects with strong visual or interactive demos — GIFs showing UI interactions, architecture diagrams, or before/after performance comparisons (the community loves seeing results).
- Open-source projects seeking Brazilian contributors — the community is eager to collaborate, especially on projects that solve real problems for Brazilian developers.

## Poor Fit

- Enterprise Java, .NET, or legacy PHP projects — the community is overwhelmingly focused on the modern JavaScript/TypeScript ecosystem; these stacks are off-topic.
- Low-code / no-code platforms — Rocketseat values hand-coded solutions and deep technical understanding; visual builders are seen as anti-engineering.
- Pure data science or machine learning projects — unless they involve Node.js or React for deployment; the community has minimal interest in Python/R notebooks.
- Projects with no code sharing — a closed-source SaaS with no public repo, no demo, and no code snippets will be ignored; the community wants to see the code.
- Projects that require paid tools or proprietary licenses — the culture is heavily open-source; anything behind a paywall receives negative reactions.

## Format And Style Notes

- Use proper Markdown formatting. Every post must use code blocks with language identifiers, headings, bullet points, and inline code for variables/functions.
- Start with context, then the problem, then the code. Always explain *what you are building* before showing what broke.
- Include exact error logs in Portuguese or English. Copy-paste the full error message inside a code block. Never paraphrase errors.
- Show what you already tried. List at least 2–3 debugging steps you attempted before posting. The community penalizes lazy questions.
- Keep paragraphs short (3–4 lines max). Long walls of text are ignored. Use line breaks liberally.
- Use Portuguese for everything except code. Code stays in English. Explanations, questions, comments, and even variable names in prose should be in Portuguese.
- Include visual evidence when relevant. Screenshots of UI bugs, error screens, or architecture diagrams are highly valued. Always use Portuguese UI language in screenshots.
- Reference file paths in the standard project format. Use \`src/components/Header.jsx\`, not "the header file inside components."

## Tone

Write as a friendly, supportive peer developer in the Brazilian tech community: enthusiastic, collaborative, code-first, and highly encouraging of learning.

## Adapter Guidance

Use a matching generic adapter unless the platform has a dedicated adapter. Keep platform-specific facts here and execution steps in \`skills/\`.`,

  "sifted.md": `# Sifted — https://sifted.eu

URL: https://sifted.eu

Source: \`legacy-skills/sifted/SKILL.md\`

This normalized profile extracts reusable platform knowledge from the legacy platform profile. It is not a runtime skill.

## Trigger Context

Triggered by mentions of 'Sifted', 'European startup news', 'EU tech journalism', or 'VC funding coverage'.

## Language

**Primary language:** English (UK). All content must use British English spelling (e.g., "organisation", "centre", "behaviour") and formal business vocabulary. Avoid Americanisms (e.g., use "funding round" not "Series A round" generically; use "startup" not "start-up").

## Good Fit

- European B2B SaaS tools with measurable traction (revenue, user growth, funding).
- Fintech, climate tech, deep tech, and healthtech startups based in Europe.
- Open-source projects that have secured institutional funding or enterprise adoption.
- Founders with a compelling personal story tied to a specific European ecosystem (e.g., Berlin, London, Stockholm).
- Data-rich tools or platforms that can demonstrate impact with hard numbers (e.g., "reduced cloud costs by 40% for 500 companies").

## Poor Fit

- Pure consumer apps with no business model or revenue data.
- Non-European projects with no connection to the EU/UK startup ecosystem.
- Hobby projects or side projects with fewer than 100 users and no growth trajectory.
- Projects that rely on hype language ("disruptive", "game-changing", "unicorn-in-the-making").
- Developer tools with no clear business application or enterprise use case.

## Format And Style Notes

- Inverted pyramid structure. Lead with the most important fact (funding amount, revenue milestone, user growth). Background comes later.
- Use UK English spelling and business vocabulary.
- Cite specific numbers in the first two sentences. Funding amounts, user counts, revenue figures, or growth percentages must appear early.
- Short paragraphs (2-3 sentences max). No walls of text. Break up analysis with line breaks.
- Attribute quotes and data to specific sources. Avoid anonymous claims.
- Use subheadings every 300-400 words. Break the article into logical sections with descriptive H3s.
- Avoid hype language and superlatives. Let the data speak. Do not use "disruptive", "game-changing", "revolutionary", or "unicorn" unless quoting someone.
- Reference the European ecosystem explicitly. Tie the project to a specific city, region, or European trend.

## Tone

Write as a sharp, investigative business journalist focusing on the European tech sector: analytical, professional, fact-driven, and objective.

## Adapter Guidance

Use a matching generic adapter unless the platform has a dedicated adapter. Keep platform-specific facts here and execution steps in \`skills/\`.`,

  "speaker-deck.md": `# Speaker Deck

URL: https://speakerdeck.com

Source: \`legacy-skills/speaker-deck/SKILL.md\`

This normalized profile extracts reusable platform knowledge from the legacy platform profile. It is not a runtime skill.

## Trigger Context

Triggered by mentions of 'Speaker Deck', 'Speaker Deck presentation', 'tech slides share'

## Language

**Primary Language:** English.  
As an international platform for slide decks, presentations and transcripts should be written in clear English to maximize reach.

## Good Fit

- Well-designed presentation slide decks (PDF format) covering technical topics, system architecture, or design systems.
- Conference talks, workshops, or study meeting slides with concise bullet points and diagrams.

## Poor Fit

- Bullet-heavy text documents exported to PDF without visual design.
- Direct advertising or product sales sheets disguised as presentations.

## Format And Style Notes

- Keep slides visually oriented; use diagrams, code snippets, and charts.
- Write a detailed markdown description below the deck summarizing key takeaways.
- Include a Github link or demo link prominently in the description.

## Tone

Professional, educational, and visually driven. Focus on transmitting complex ideas in a clear and visual slide format.

## Adapter Guidance

Use a matching generic adapter unless the platform has a dedicated adapter. Keep platform-specific facts here and execution steps in \`skills/\`.`,

  "t3n.md": `# t3n – digital pioneers (https://t3n.de)

URL: https://t3n.de

Source: \`legacy-skills/t3n/SKILL.md\`

This normalized profile extracts reusable platform knowledge from the legacy platform profile. It is not a runtime skill.

## Trigger Context

Triggered by mentions of 't3n', 't3n.de', 't3n Magazin'

## Language

**Primary Language:** Deutsch (German).  
All articles, explanations, and community discussions on t3n must be written in professional, high-quality German. Standard English technical terminology is accepted but must fit naturally into German grammar.

## Good Fit

- Artikel über Webentwicklung, IT-Infrastruktur, neue Technologien, digitale Trends und Open-Source-Projekte mit Relevanz für den deutschsprachigen Raum.
- Technische Analysen, Softwarearchitektur-Best-Practices und Erfahrungsberichte im professionellen Kontext.
- Berichte über Startups und digitale Innovationen in Deutschland, Österreich und der Schweiz.

## Poor Fit

- Reine Marketing- oder Verkaufsartikel ohne echten technischen Mehrwert.
- Beiträge komplett auf Englisch (t3n ist ein rein deutschsprachiges Medium).
- Unstrukturierte oder unausgereifte Hobbyprojekte.

## Format And Style Notes

- Verwende eine professionelle, strukturierte und gut lesbare Sprache (Deutsch).
- Nutze klare Zwischenüberschriften (H2/H3) zur Gliederung des Beitrags.
- Halte die Absätze kurz, präzise und übersichtlich.
- Binde Code-Snippets sparsam ein und erkläre deren Funktionsweise verständlich auf Deutsch.
- Beginne mit einer kurzen Einleitung, die das Problem und die Relevanz für digitale Pioniere beschreibt.

## Tone

Schreibe wie ein erfahrener Tech-Redakteur, der einer deutschsprachigen Entwickler-Community pragmatische, lösungsorientierte Anleitungen und Analysen bietet – ohne Hype, aber mit klarer Meinung und konkretem Code.

## Adapter Guidance

Use a matching generic adapter unless the platform has a dedicated adapter. Keep platform-specific facts here and execution steps in \`skills/\`.`,

  "v2ex.md": `# V2EX (v2ex.com)

URL: https://www.v2ex.com

Source: \`legacy-skills/v2ex/SKILL.md\`

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
- **避免使用 Markdown 标题**：好的做法是使用空行和加粗（\`**\`）分隔段落。例如：\`**背景**\` 后跟文本。在 V2EX 帖子里，普通的 Markdown H1/H2 渲染可能会使排版看起来过大或混乱。
- 链接要直接相关，避免推广性链接。好的做法是：\`项目地址：https://github.com/v2ex/v2ex\`。
- 代码片段较长时建议使用 Gist 或其他代码托管链接，短代码可使用 Markdown 代码块。
- 回复时要直接、技术性，避免没有营养的客套话（如“顶”、“支持”）。
- 不要使用签名或结尾敬语。

## Tone

极客、理性、真诚。以平等的态度交流，接受质疑，讨论专注技术本身，避免客套话和软文营销感。

## Adapter Guidance

Use a matching generic adapter unless the platform has a dedicated adapter. Keep platform-specific facts here and execution steps in \`skills/\`.`,

  "wanted.md": `# Wanted

URL: https://www.wanted.jobs

Source: \`legacy-skills/wanted/SKILL.md\`

This normalized profile extracts reusable platform knowledge from the legacy platform profile. It is not a runtime skill.

## Trigger Context

Triggered by mentions of 'Wanted', 'Wanted jobs', 'Korean tech recruiting', 'Wanted platform'

## Language

**Primary Language:** Korean (한국어) and English.  
As a global recruiting platform originating in Korea, Wanted accepts postings in both Korean and English. Ensure the language matches the office location and target applicant demographic.

## Good Fit

- Technical job descriptions, developer hiring announcements, and company tech stack showcases.
- Tech brand engineering blog posts showing how a team solved a scaling problem.

## Poor Fit

- Personal blogs or hobby projects with no hiring or company connection.
- Highly informal or casual posts with slang.

## Format And Style Notes

- Use clear bullet points for responsibilities (주요 업무) and requirements (자격 요건).
- Structure text with formal H2/H3 tags.
- Mention target stacks and frameworks clearly.

## Tone

Professional, business-formal, and corporate. Speak from the perspective of an engineering team or recruiting manager.

## Adapter Guidance

Use a matching generic adapter unless the platform has a dedicated adapter. Keep platform-specific facts here and execution steps in \`skills/\`.`,

  "xda-developers.md": `# XDA Developers

URL: https://www.xda-developers.com

Source: \`legacy-skills/xda-developers/SKILL.md\`

This normalized profile extracts reusable platform knowledge from the legacy platform profile. It is not a runtime skill.

## Trigger Context

Triggered by mentions of 'XDA Developers', 'XDA forum', 'Android modding', 'custom ROM'

## Language

**Primary Language:** English.  
All forum posts, custom ROM release notes, and troubleshooting guides must be in English.

## Good Fit

- Android customization tools, root utilities, custom ROM releases, and kernel modifications.
- Deep-dive guides on Android subsystem internals, bootloaders, or low-level hardware hacks.

## Poor Fit

- General web development tutorials (e.g., React/Vue) which are irrelevant to mobile modding.
- Closed-source commercial software trying to advertise without developer tools/source availability.

## Format And Style Notes

- Include a clear section for installation steps (How to Install).
- Always list prerequisites, compatible devices, and known bugs/issues.
- Use BBCode or standard Markdown code blocks for logs.

## Tone

Technical, collaborative, hacker-style. Speak as a modder/developer sharing a custom solution with a tech-savvy community.

## Adapter Guidance

Use a matching generic adapter unless the platform has a dedicated adapter. Keep platform-specific facts here and execution steps in \`skills/\`.`,

  "少数派.md": `# 少数派 (sspai.com)

URL: https://sspai.com

Source: \`legacy-skills/少数派/SKILL.md\`

This normalized profile extracts reusable platform knowledge from the legacy platform profile. It is not a runtime skill.

## Trigger Context

Triggered by mentions of '少数派', 'sspai', '效率工具', '数字生活', '深度评测'

## Language

**Primary Language:** 简体中文 (Simplified Chinese).  
少数派 serves tech enthusiasts who love productivity tools and digital lifestyle in China. Content must be written in fluent, high-quality, and engaging Simplified Chinese. Technical terms and product names (e.g., Raycast, Obsidian) are preserved in English, while explanations are in Chinese.

## Good Fit

- 效率工具（如 Obsidian, Raycast, Notion）的深度实用教程、工作流搭建和实战案例。
- 独立开发的优质效率软件、系统辅助工具的“开发背后的故事”或详细功能评测。
- 能够显著提升开发者或普通用户工作效率的软硬件配置方案。
- 数字生活或电子设备使用的深度长文，侧重真实体验。

## Poor Fit

- 纯代码的开发教程（如“如何用 Go 写一个 Web 服务”），这类纯开发技术文不符合少数派普通用户的受众。
- 粗制滥造的商业推广、通稿或单纯的产品上线广告。
- 缺乏个人主观体验和独特见解的搬运式软件汇总。

## Format And Style Notes

- 结构严谨，逻辑清晰，使用标准的中文排版（中英文之间空半格）。
- 用丰富的实际使用场景、截图、动图展示工具的操作过程。
- 介绍工作流时，应从实际问题出发（如“我如何解决每天整理笔记的痛点”）。
- 段落中适当运用粗体或引用（\`>\`）标出核心操作与痛点。
- 结尾建议给出明确的获取渠道、官方链接，并鼓励读者在评论区互动。

## Tone

一篇少数派文章应该让读者读完立刻关掉标签页，去修改自己的配置文件。

## Adapter Guidance

Use a matching generic adapter unless the platform has a dedicated adapter. Keep platform-specific facts here and execution steps in \`skills/\`.`,

  "开源中国.md": `# 开源中国 (oschina.net)

URL: https://www.oschina.net

Source: \`legacy-skills/开源中国/SKILL.md\`

This normalized profile extracts reusable platform knowledge from the legacy platform profile. It is not a runtime skill.

## Trigger Context

Triggered by mentions of '开源中国', 'OSChina', 'oschina.net', '开源社区'

## Language

**Primary Language:** 简体中文 (Simplified Chinese).  
All content must be written in Simplified Chinese. English technical jargon is naturally integrated but explaining the core logic and features must be in clear Chinese.

## Good Fit

- 开源项目的发布和重大更新动态，需详细展示项目功能、架构以及如何使用。
- 有深度、有见解的技术原创博文，如架构设计、数据库优化、高并发解决思路。
- 开源技术趋势分析和开发者社区活动报道。

## Poor Fit

- 纯推广性的商业软文，无代码或技术内涵。
- 机器翻译且未润色的国外技术文章。
- 纯粹的项目链接分享，没有任何详细的技术说明和运行效果展示。

## Format And Style Notes

- 使用规范的中文排版，中英文之间建议留有空格。
- 代码块需要指定语言，且代码内部注释清晰。
- 核心步骤和重要概念使用加粗标出，使用 H2/H3 标题来构建良好的层次结构。
- 结尾建议给出明确的项目开源地址（如 Gitee, GitHub）。

## Tone

在这个社区，你的项目必须用中文证明自己的技术价值，而不是靠营销话术博取关注。

## Adapter Guidance

Use a matching generic adapter unless the platform has a dedicated adapter. Keep platform-specific facts here and execution steps in \`skills/\`.`,

  "掘金.md": `# 掘金 (juejin.cn)

URL: https://juejin.cn

Source: \`legacy-skills/掘金/SKILL.md\`

This normalized profile extracts reusable platform knowledge from the legacy platform profile. It is not a runtime skill.

## Trigger Context

Triggered by mentions of '掘金', 'Juejin', '稀土掘金'

## Language

**Primary Language:** 简体中文 (Simplified Chinese).  
Juejin's core audience is frontend and backend web developers in China. Titles, content, and code explanations must be written in professional, readable Simplified Chinese.

## Good Fit

- 前端开发（React/Vue/Webpack/Astro）、后端开发（Spring/Node.js/Go）、云计算和移动开发相关的实战文章。
- 前沿技术的探索与深度解析（如“深入探讨 CSS 容器查询”、“React 19 渲染机制解析”）。
- 项目从零构建的完整教程，包括架构图、踩坑点和优化实践。
- 个人独立开发项目的全过程回顾、架构设计和商业思考。

## Poor Fit

- 过于基础且毫无新意的笔记（如“JS 中的数组方法有哪些”），容易被判定为低质量。
- 纯外链引流或极短的产品上线公告。
- 针对非技术人员的营销内容或虚假的“财富密码”分享。

## Format And Style Notes

- 必须使用标准的 Markdown 排版，提供良好的多级标题（H2/H3/H4）。
- 代码必须放在代码块中，标注语言，并保留关键注释。
- 使用图表（如 Mermaid 架构图、流程图）或效果动图来展示逻辑与成果。
- 文章开头用 1-2 段简述问题背景与文章的核心价值。
- 保持内容通俗易懂，同时又兼具技术深度。

## Tone

专业、务实、深度优先——用代码和截图说话，拒绝空谈，每一篇文章都要让读者觉得“挖到了金子”。

## Adapter Guidance

Use a matching generic adapter unless the platform has a dedicated adapter. Keep platform-specific facts here and execution steps in \`skills/\`.`,

  "知乎.md": `# 知乎 (Zhihu) 技能文档

URL: https://www.zhihu.com

Source: \`legacy-skills/知乎/SKILL.md\`

This normalized profile extracts reusable platform knowledge from the legacy platform profile. It is not a runtime skill.

## Trigger Context

Triggered by mentions of '知乎', 'Zhihu', or '知识分享平台'

## Language

**Primary Language:** 简体中文 (Simplified Chinese).  
Zhihu is a high-quality Q&A and knowledge sharing platform in China. Responses and articles must be written in fluent, grammatically correct Simplified Chinese, with a emphasis on logical exposition and structured presentation.

## Good Fit

- 针对特定技术痛点的深度科普（例如“为什么大厂都弃用 CSS-in-JS？”）。
- 详实的技术方案比对、行业趋势深度分析以及职业发展经验谈。
- 对特定问题的详细回答，结合原理、图表和业界最佳实践。
- 独立开发或技术项目的商业探索历程，分享真实感悟。

## Poor Fit

- 只有一两句话的项目发布通告，或带有大量牛皮癣广告的软文。
- 纯英文文章（知乎用户绝大多数为中文读者）。
- 搬运无干货的流水账或低质量的代码搬运。

## Format And Style Notes

- 采用“问题-分析-方案-总结”的结构。开头先对核心问题进行解答，然后层层剖析。
- 使用清晰的排版，中英文之间留有空格，合理使用段落加粗来强调关键点。
- 适当引入数据、图表、引用文献来增强说服力。
- 语言需严谨、客气、有逻辑，表现出极高的专业素养。
- 结尾处可以适度引导关注个人技术专栏或开源项目，但切忌过于生硬。

## Tone

用数据和逻辑构建的技术权威，在严谨的学术氛围中分享个人洞见与实战经验。

## Adapter Guidance

Use a matching generic adapter unless the platform has a dedicated adapter. Keep platform-specific facts here and execution steps in \`skills/\`.`
};

for (const [filename, content] of Object.entries(patches)) {
  const filePath = path.join(platformsDir, filename);
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Updated ${filename}`);
}
console.log(`Updated ${Object.keys(patches).length} platform files successfully.`);
