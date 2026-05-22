# OKKY (okky.kr)

URL: https://okky.kr

Source: `legacy-skills/okky/SKILL.md`

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

Use a matching generic adapter unless the platform has a dedicated adapter. Keep platform-specific facts here and execution steps in `skills/`.