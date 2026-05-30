> 💡 **안내:** 본 문서는 생성형 AI의 도움을 받아 작성되었습니다.
# 11주차 과제: Feature Flag 및 A/B 테스트 구현

## 🎯 1. Feature Flag 도입 (3개 이상)
`feature_flags.json`과 `app.py`를 통해 애플리케이션 내에 총 3가지의 Feature Flag를 설계하고 도입했습니다.
- `new_ui_theme`: 글로벌 환경 변수 기준 토글 제어 (Boolean)
- `beta_feature_access`: 특정 대상 사용자 ID(user_123, user_456 등) 기준 토글 제어 (List)
- `maintenance_mode`: 시스템 전체 점검 모드 제어 (Boolean)

---

## 🎯 2. A/B 테스트 및 할당 일관성
- `checkout_button_color` 실험을 위해 `control(기존)`과 `treatment(신규)` 2개의 variant를 구성했습니다.
- **사용자 할당 일관성**: 유저 ID를 MD5 해시(Hash) 알고리즘으로 처리하여, 동일한 유저가 재접속하더라도 무작위가 아닌 항상 같은 variant(A 또는 B 그룹)에 일관되게 배정되도록 로직을 추가했습니다.
- **이벤트 추적**: `experiment.log`를 생성하여 사용자가 진입할 때마다 어떤 그룹에 배정되었는지 실시간 로그를 기록하는 시스템을 구현했습니다.

---

## 🎯 3. (선택과제) Canary 롤아웃 및 자동 롤백 시나리오 검증
- 신규 기능(`payment_v2`) 배포 시 트래픽을 **1% -> 10%**로 점진적으로 확장(Rollout)해 나가는 시나리오를 설계했습니다.
- 10% 배포 구간에서 시스템 헬스체크 에러(High Latency / 응답 지연 복구 실패)를 감지하고, 즉시 신규 트래픽을 0%로 회수하여 이전 버전으로 되돌리는 **자동 롤백(Rollback) 메커니즘**을 검증하고 `experiment.log`에 기록했습니다.