# Zenn — https://zenn.dev

URL: https://zenn.dev

Source: `legacy-skills/zenn/SKILL.md`

This normalized profile extracts reusable platform knowledge from the legacy platform profile. It is not a runtime skill.

## Trigger Context

Triggered by mentions of 'Zenn', 'Zenn.dev', 'Japanese tech blog'

## Language

Zenn のプライマリ言語は **日本語** です。コードブロック内の変数名、関数名、API エンドポイント、標準ライブラリの用語は英語のまま記述します。技術用語は「フロントエンド」「デプロイ」「バックエンド」などのカタカナ英語を適切に使用してください。英語のみの記事は発見アルゴリズムで優先度が下がり、コメントもつきにくいため、日本語での投稿を強く推奨します。

## Good Fit

- 特定の技術スタック（React、Next.js、Go、Rust、TypeScript など）に特化したライブラリやツール
- 実装手順を詳細に解説できるチュートリアル形式のプロジェクト
- パフォーマンス改善や設計パターンに関する知見を共有できるプロジェクト
- 初学者向けにわかりやすく説明できる、段階的なコード例を含むプロジェクト
- 日本語の技術コミュニティで需要の高いトピック（認証、データベース設計、デプロイ手法など）を扱うプロジェクト

## Poor Fit

- プロダクトのプロモーションや売り込みが主目的のプロジェクト（Zenn は「売り込み」ではなく「知識共有」の場）
- 英語のみで構成され、日本語の説明が一切ないプロジェクト
- コード例が少なく、概念的な説明だけのプロジェクト（Zenn ではコードが主体）
- 未完成または動作確認が不十分なプロジェクト（正確性が重視される）
- 過度な自己宣伝や「いいね」の直接的な要求を含むプロジェクト

## Format And Style Notes

- タイトルは具体的で技術スタックを含める
- 冒頭で問題と対象読者を明確にする
- コードブロックには必ず言語を指定する
- 見出しは H2（##）と H3（###）のみ使用する
- 画像は実際のブラウザ出力やエディタのスクリーンショットを使用する
- 注意点や補足は `:::message` で囲む
- 絵文字は最小限に抑える
- 結論では得られた結果を簡潔にまとめ、公式ドキュメントへのリンクを添える

## Tone

Zenn のトーンは「静かな自習室で、隣の席の先輩エンジニアが丁寧にコードを教えてくれる」ような、誠実で実用的な知識共有の場です。

## Adapter Guidance

Use a matching generic adapter unless the platform has a dedicated adapter. Keep platform-specific facts here and execution steps in `skills/`.
