# 8주차 과제: GitHub Actions 파이프라인 고도화 및 최적화

## 🎯 과제 목표
* Matrix 전략을 통한 크로스 플랫폼/버전 테스트 자동화
* Reusable Workflow 및 Composite Action을 활용한 CI/CD 로직 중복 제거 및 모듈화
* `dorny/paths-filter`를 이용한 조건부 배포 시스템 구현

## 1. 파이프라인 아키텍처 개선 내용
| 구성 요소 | 적용 파일 | 주요 최적화 전략 |
| :--- | :--- | :--- |
| **Composite Action** | `setup-node-env/action.yml` | `cache: 'npm'` 적용으로 의존성 설치 시간 단축 |
| **Reusable Workflow** | `reusable-test.yml` | OS(Ubuntu, Windows) 및 Node(18, 20) Matrix 환경 통합 |
| **Main Workflow** | `main-pipeline.yml` | 파일 변경 감지에 따른 선택적 Deploy Job 실행 |

## 2. 주요 기능 및 최적화 성과

### A. 캐싱(Caching) 적용을 통한 단계별 속도 개선
캐시 적용 후, 가장 병목이 심했던 의존성 설치 단계에서 드라마틱한 개선을 확인했습니다.
* **최적화 전:** 전체 실행 시간 약 38~40초 소요
* **최적화 후 (세부 로그 확인):** - `ubuntu-latest` 기준, **순수 테스트 및 환경 세팅 시간이 8초(8s)로 단축**됨을 확인.
  - Cache Hit를 통해 `npm install` 과정이 생략되거나 수초 내로 완료됨.
* **특이사항:** 전체 시간(49s)은 GitHub 무료 티어 서버(Runner)의 할당 대기 및 Windows 환경의 초기 부팅 시간이 포함된 수치이며, 실제 로직 수행 속도는 최적화되었습니다.

### B. 조건부 배포 (Selective Deployment) 및 Matrix 테스트
* **Matrix 전략:** 총 4개의 조합(OS x Node version)에서 병렬 테스트를 성공적으로 수행(Success).
* **조건부 실행:** 소스 코드가 아닌 워크플로우 설정 파일 변경 시, `deploy` Job이 자동으로 스킵(Skip)되어 불필요한 배포 리소스 낭비를 방지함을 검증함.

## 3. 실행 결과 인증
* **사진 1:** 전체 파이프라인 성공 및 Deploy 스킵 확인 (49s 대기 시간 포함본)
* **사진 2:** 세부 로그에서 **8초(8s)** 만에 성공한 최적화 성능 인증샷