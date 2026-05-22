# note（ノート）— https://note.com

URL: https://note.com

Source: `legacy-skills/note/SKILL.md`

This normalized profile extracts reusable platform knowledge from the legacy platform profile. It is not a runtime skill.

## Trigger Context

Triggered by mentions of 'note', 'note.com', 'note記事', 'note投稿', 'クリエイタープラットフォーム', 'サブスクリプション', '有料記事'

## Language

**Primary Language:** 日本語 (Japanese).  
note is a Japanese creator platform. All articles must be written in grammatically correct, natural Japanese. Write in a friendly, conversational, and respectful style (`です`/`ます`調).

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

Use a matching generic adapter unless the platform has a dedicated adapter. Keep platform-specific facts here and execution steps in `skills/`.