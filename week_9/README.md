> 💡 **안내:** 본 문서는 생성형 AI의 도움을 받아 작성되었습니다.
# 🚀 9주차 과제: CI/CD 파이프라인 심화 및 보안 세팅

본 레포지토리는 9주차 과제인 패키지 배포, Docker 이미지 자동 빌드, 그리고 Dependabot 보안 설정을 적용한 결과물입니다.

## ✅ 달성한 과제 목표

### 1. GitHub Packages에 npm 패키지 배포
* **내용:** GitHub Actions를 사용하여 코드를 npm 패키지로 포장하고 GitHub Packages에 배포했습니다.
* **버전 업데이트:** `v1.0.0` 최초 배포 후, 패치를 통해 `v1.0.1`로 성공적으로 버전업하여 재배포를 완료했습니다.
* **패키지 경로:** `ghcr.io/scm0809/sahahaha`
<img width="1569" height="1252" alt="image" src="https://github.com/user-attachments/assets/34ffbbc5-af73-4f9a-8f5f-fc0653225ea7" />

### 2. Docker 이미지 자동 빌드 및 Push (GHCR)
* **내용:** `Dockerfile`을 작성하여 Node.js 앱을 컨테이너화했습니다.
* **자동화:** GitHub Actions(`docker-image.yml`)를 통해 코드가 푸시될 때마다 Docker 이미지를 자동으로 빌드하고 GitHub Container Registry(GHCR)에 푸시하도록 구성했습니다.
* **로컬 실행 검증:** 깃허브에 올라간 도커 이미지를 로컬 컴퓨터로 `pull` 받아 성공적으로 `run` 되는 것을 확인했습니다.
<img width="2492" height="935" alt="스크린샷 2026-05-30 204417" src="https://github.com/user-attachments/assets/6be42449-5138-4b91-aa2b-926ae28f3206" />
<img width="1048" height="337" alt="스크린샷 2026-05-30 202319" src="https://github.com/user-attachments/assets/06b1f163-c437-4bd0-af57-d57d2cfa2522" />

### 3. Dependabot 보안 자동화 세팅
* **내용:** `.github/dependabot.yml` 파일을 생성하여 저장소의 보안 취약점을 정기적으로 검사하도록 설정했습니다.
* **적용 범위:**
  * `npm` 패키지 생태계 보안 검사 (매주)
  * `github-actions` 워크플로우 보안 검사 (매주)
* GitHub 저장소의 `Security` 탭에서 Dependabot Alerts를 활성화하여 취약점 모니터링을 시작했습니다.
<img width="2831" height="1196" alt="스크린샷 2026-05-30 202508" src="https://github.com/user-attachments/assets/bd32ef3c-72ae-4236-b0a9-2f15eaed7eec" />
<img width="2805" height="1046" alt="스크린샷 2026-05-30 204516" src="https://github.com/user-attachments/assets/aaa97c29-2e61-48c7-84a0-9e64335c6805" />

