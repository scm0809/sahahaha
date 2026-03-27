# 🚀 사하구청 AI 상담사 프로젝트 (Saha-gu AI Counselor)

![License](https://img.shields.io/badge/license-MIT-green)
![Python](https://img.shields.io/badge/python-3.10+-blue.svg)
![FastAPI](https://img.shields.io/badge/FastAPI-009688?style=flat&logo=FastAPI&logoColor=white)

본 프로젝트는 사하구 주민들을 위한 **AI 기반 맞춤형 민원 상담 웹 서비스 프로토타입**입니다. 
단순 챗봇을 넘어, RAG(검색 증강 생성) 기술을 활용해 구청의 실제 데이터를 기반으로 정확하고 빠른 민원 안내를 제공하는 것을 목표로 합니다.

---

## 📅 주차별 개발 연혁 (Project Milestone)

본 프로젝트는 체계적인 오픈소스 협업 및 문서화 프로세스를 준수하여 개발되었습니다.

* **[1~3주차] AI 백엔드 및 프로토타입 구축**
  * FastAPI 기반 백엔드 서버 뼈대 구축
  * 구청 민원 데이터 수집을 위한 웹 크롤링 테스트 (`feat/#1-crawling`)
  * OpenAI API 연동 및 Vector DB(ChromaDB) 세팅
  * Vanilla JS를 활용한 프론트엔드 채팅 UI 구현 (`feat/#3-ui`)

* **[4주차] 협업 프로세스 및 브랜치 전략 세팅**
  * Issue 및 Pull Request 템플릿 적용
  * PR 리뷰 컨벤션(`[MUST]`, `[SHOULD]` 등) 도입
  * `main` 브랜치 보호 규칙(Branch Protection) 설정으로 코드 안정성 확보

* **[5주차] 프로젝트 문서화 및 자동화 (DevOps)**
  * 프로젝트 [Wiki](https://github.com/본인아이디/sahahaha/wiki) 페이지 개설 (Getting Started, Dev Guide, Troubleshooting)
  * 기술결정기록([ADR](docs/adr)) 구조 도입 및 ChromaDB 도입 배경 문서화
  * GitHub Actions를 활용한 Issue/PR 자동 응답 워크플로우(Bot) 초안 작성

* **[6주차] 오픈소스 커뮤니티 생태계 구축**
  * 누구나 자유롭게 사용할 수 있도록 **MIT License** 적용
  * 기여자를 위한 [CONTRIBUTING.md](CONTRIBUTING.md) 및 [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) 작성
  * 향후 확장을 위한 오픈소스 라이선스 분석 및 Inner Source 도입 로드맵 설계

---

## 🛠️ 기술 스택 (Tech Stack)
* **Backend:** Python, FastAPI
* **AI & Data:** OpenAI API, ChromaDB (Vector Store), LangChain
* **Frontend:** HTML, CSS, Vanilla JS
* **DevOps & Collaboration:** Git/GitHub, GitHub Actions, GitHub Wiki & Discussions

---

## 📂 프로젝트 핵심 구조 (Directory Structure)
```text
📦 sahahaha
 ┣ 📂 .github/workflows  # GitHub Actions 자동화 스크립트
 ┣ 📂 docs/adr           # 기술결정기록(ADR) 문서
 ┣ 📂 week_6             # 오픈소스 도입 로드맵 문서
 ┣ 📜 CODE_OF_CONDUCT.md # 행동 강령
 ┣ 📜 CONTRIBUTING.md    # 오픈소스 기여 가이드
 ┣ 📜 LICENSE            # MIT 라이선스
 ┗ 📜 README.md          # 현재 문서
