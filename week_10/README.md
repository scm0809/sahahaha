> 💡 **안내:** 본 문서는 생성형 AI의 도움을 받아 작성되었습니다.
# 10주차 과제: 클라우드 배포 및 파이프라인 구축

## 🎯 1. 프론트엔드 자동 배포 및 PR 프리뷰 환경 구성

Vercel을 이용하여 GitHub 리포지토리와 연동하고, PR(Pull Request) 생성 시 자동으로 프리뷰(미리보기) 환경이 구축되도록 설정했습니다.

<img width="2358" height="1466" alt="스크린샷 2026-05-30 214455" src="https://github.com/user-attachments/assets/32733aef-0d56-4297-831a-d482b0784d89" />
<img width="1421" height="1364" alt="스크린샷 2026-05-30 211609" src="https://github.com/user-attachments/assets/45a41567-3938-4350-bf80-331e5d59839c" />


---

## 🎯 2. Docker 기반 배포 파이프라인 전략 설계

본 프로젝트는 환경 일관성과 배포 자동화를 위해 **Docker 컨테이너 기반의 CI/CD 파이프라인**을 설계했습니다.

1. **컨테이너화 (Containerization)**:
   - 애플리케이션과 실행 환경(Node.js/Python 등)을 `Dockerfile`로 작성하여 독립적인 도커 이미지로 빌드합니다.
   - 이를 통해 로컬, 테스트, 운영 환경 간의 '내 컴퓨터에선 되는데 서버에선 안 되는' 환경 불일치 문제를 원천 차단합니다.
2. **CI/CD 파이프라인 통합 (GitHub Actions)**:
   - `main` 브랜치에 코드가 푸시(Push)되거나 PR이 머지(Merge)되면 GitHub Actions 워크플로우가 자동으로 트리거됩니다.
   - 워크플로우 내에서 도커 이미지를 빌드하고, 클라우드 컨테이너 레지스트리(예: AWS ECR 또는 Docker Hub)에 푸시합니다.
3. **무중단 배포 및 모니터링**:
   - 푸시된 이미지를 외부 클라우드 플랫폼(AWS ECS 또는 GCP Cloud Run)에서 Pull 받아 새로운 컨테이너로 배포합니다.
   - 배포 직후 헬스체크(Health Check) 스크립트가 실행되어 정상 구동 여부를 확인합니다.

---

## 🎯 3. 클라우드 배포 자동화 워크플로우 및 헬스체크 구현

위에서 설계한 배포 전략을 바탕으로, GitHub Actions를 활용하여 클라우드 컨테이너 배포 및 헬스체크를 수행하는 자동화 워크플로우 코드를 작성하고 정상 구동을 확인했습니다.

<img width="2816" height="985" alt="스크린샷 2026-05-30 215720" src="https://github.com/user-attachments/assets/154cd8cf-0ee7-4eea-b329-6995aca76a24" />
