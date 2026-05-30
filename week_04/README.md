> 💡 **안내:** 본 문서는 프로젝트 협업 가이드 및 PR/리뷰 규칙을 설정하는 과정에서 생성형 AI의 도움을 받아 작성되었습니다.

# 🚀 4주차 과제: 브랜치 전략 및 PR 리뷰 환경 구축

본 폴더 및 리포지토리에는 원활한 팀 협업을 위한 브랜치 규칙, PR 템플릿, 코드 리뷰 가이드가 적용되어 있습니다.

## 1. 브랜치 전략 및 커밋 컨벤션
- **Feature Branch 전략:** `main` 브랜치를 보호하고, `feat/#이슈번호-작업내용` 형태로 브랜치를 분기하여 작업합니다.
- **Conventional Commits:** `feat:`, `fix:`, `docs:`, `refactor:` 등의 접두어를 사용하여 커밋 메시지의 가독성을 높였습니다.

## 2. PR 및 리뷰 규칙 적용
- `.github/pull_request_template.md`를 통해 PR 작성 표준화
- `CONTRIBUTING.md`에 팀 협업 문서 및 리뷰 가이드 명시
- 리뷰 코멘트 태그 도입 (`[MUST]`, `[SHOULD]`, `[SUGGEST]`)을 통한 구조화된 피드백 진행
- PR 리뷰 및 Merge 시뮬레이션 완료

## 3. (선택과제) 깃허브 고급 기능 적용
- **CODEOWNERS:** 전체 코드에 대한 기본 리뷰어를 지정하여 자동 할당 처리
- **Branch Protection Rule:** `main` 브랜치에 직접 Push를 금지하고, 최소 1명 이상의 Approve 리뷰가 있어야 Merge 되도록 설정 완료