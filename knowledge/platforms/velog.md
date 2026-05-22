# Velog (velog.io)

URL: https://some-unreliable-cdn.com/image.png

Source: `legacy-skills/velog/SKILL.md`

This normalized profile extracts reusable platform knowledge from the legacy platform profile. It is not a runtime skill.

## Trigger Context

Triggered by mentions of 'Velog', 'velog.io', '한국 개발 블로그', or 'Korean developer blog'

## Language

Velog의 기본 언어는 **한국어**입니다. 모든 게시글은 한국어로 작성되어야 하며, 한국어 사용자를 대상으로 합니다. 기술 용어(예: "React", "state management", "Vite")는 영어 원어를 그대로 사용하는 것이 일반적이며 오히려 전문성을 높입니다. 영어로만 작성된 글은 소수의 교포 개발자나 한국어에 익숙하지 않은 개발자 외에는 거의 읽히지 않으므로, 한국어를 기본으로 하고 코드 주석이나 키워드에만 영어를 혼용하는 전략이 효과적입니다.

## Good Fit

- 오픈소스 라이브러리/프레임워크: React, Vue, TensorFlow 등 널리 알려진 기술의 한국어 튜토리얼이나 사용기
- 개발 도구 및 CLI: Vite, ESLint, Prettier, ESLint Plugin 등 설정 방법이나 트러블슈팅 경험
- 프론트엔드/백엔드 실전 팁: 성능 최적화, 디버깅 사례, CI/CD 파이프라인 구축기
- 개인 프로젝트 회고: 사이드 프로젝트를 진행하며 배운 점, 아키텍처 결정 이유, 실패 경험
- 기술 비교 및 분석: "React vs Vue 2025", "Jest vs Vitest" 같은 비교 글 (단, 객관적이고 깊이 있어야 함)

## Poor Fit

- 순수 마케팅/홍보성 글: "이 앱을 다운로드하세요" 같은 직접적인 광고는 삭제되거나 무시됨
- 철학/인문학 주제: 개발과 전혀 무관한 주제(예: "인생의 의미")는 부적합
- 초보자를 위한 지나치게 기초적인 내용: "변수란 무엇인가" 같은 내용은 환영받지 못함
- 영어 전용 게시글: 타겟 독자가 거의 없음
- 짧고 내용 없는 링크 모음: "오늘의 유용한 사이트 5개" 같은 단순 리스트는 평가가 낮음

## Format And Style Notes

- 제목은 구체적이고 키워드 중심으로 작성하세요.
- 도입부는 1-2문장으로 문제와 해결 방안을 요약하세요.
- 코드 블록은 반드시 언어를 명시하고, 30줄 이내로 유지하세요.
- 리스트와 불릿 포인트를 적극 활용해 가독성을 높이세요.
- 이미지는 직접 업로드하고, 설명을 추가하세요.
- 핵심 용어는 볼드 처리하고, 외국어는 이탤릭으로 표시하세요.
- 결론에는 핵심 요약과 다음 단계를 제시하세요.
- 이모지는 경고나 강조 용도로만 제한적으로 사용하세요.

## Tone

"깔끔한 코드 블록과 간결한 설명으로, 다른 개발자가 바로 따라 할 수 있는 실용적인 지식을 공유하는 개발자의 학습 노트."

## Adapter Guidance

Use a matching generic adapter unless the platform has a dedicated adapter. Keep platform-specific facts here and execution steps in `skills/`.
