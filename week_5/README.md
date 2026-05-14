# 5주차 과제: GitHub 기반의 문서화 및 프로젝트 협업 체계 구축
> 💡 **안내:** 본 문서는 생성형 AI의 도움을 받아 작성되었습니다.

## 1. GitHub Wiki 문서화 (핵심 3종)
* **Getting Started / Development Guide / Troubleshooting** 작성 및 상호 링크 연결 완료

## 2. 기술 결정 기록 (ADR) 도입 및 실무 적용
중요한 기술적 결정을 기록하기 위해 표준화된 ADR 체계를 구축했습니다.
* **디렉토리 구조**: `week_5/docs/adr/` 경로에서 관리
* **작성 사례 ([ADR-0001])**: **Vector DB로 ChromaDB 도입**
  - **배경**: 사하구청 문서 기반 RAG 시스템 구축을 위한 효율적 벡터 검색 필요
  - **결정**: 로컬 세팅이 간편하고 Python 연동성이 우수한 ChromaDB 채택
  - **결과**: 초기 프로토타입 개발 속도 향상 (상용화 시 마이그레이션 고려)
* 🔗 **[ADR 목록 바로가기](https://github.com/scm0809/sahahaha/blob/main/week_5/0001-use-chromadb-for-vector-store.md)**

## 3. 운영 자동화 워크플로우 설계 (선택 과제)
* Auto-reply, SLA Tracking, Weekly Summary 워크플로우 초안 구성

## 4. GitHub Discussions 및 RFC 운영 (선택 과제)
* Discussions 카테고리 설계 및 RFC 형식의 기술 토론 운영 완료
