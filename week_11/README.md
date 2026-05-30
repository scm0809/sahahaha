> 💡 **안내:** 본 문서는 생성형 AI의 도움을 받아 작성되었습니다.
# 11주차 과제: Feature Flag 및 A/B 테스트 구현

## 🎯 1. Feature Flag 도입 (3개 이상)
eature_flags.json과 pp.py에 3가지 플래그를 구현했습니다.
- 
ew_ui_theme: 글로벌 환경 변수 기준 토글 (Boolean)
- eta_feature_access: 특정 대상 사용자(user_123 등) 기준 토글 (List)
- maintenance_mode: 점검 모드 토글 (Boolean)

## 🎯 2. A/B 테스트 및 할당 일관성
- checkout_button_color 실험을 위해 control과 	reatment 두 가지 variant를 구성했습니다.
- 사용자 ID를 MD5 해시(Hash) 처리하여 재접속 시에도 항상 동일한 variant가 할당되도록 **일관성을 보장**했습니다.
- experiment.log에 사용자가 어떤 그룹에 배정되었는지 **이벤트 추적 로직**을 기록했습니다.

## 🎯 3. (선택과제) Canary 롤아웃 및 자동 롤백 시나리오 검증
- 트래픽을 1% -> 10%로 점진적 확장(Rollout)하는 과정을 experiment.log에 시뮬레이션했습니다.
- 10% 구간에서 헬스체크 에러(High Latency)가 발생하여 즉시 트래픽을 0%로 회수하는 **자동 롤백(Rollback)** 시나리오를 검증 및 기록했습니다.
