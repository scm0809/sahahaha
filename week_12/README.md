# 12주차 과제: TDD 기반 개발 및 자동화 테스트 파이프라인 구축

## 🎯 1. TDD (Red-Green-Refactor) 사이클 기반 핵심 기능 구현
core.js에 서비스 핵심 비즈니스 로직 5개를 작성하였으며, 개발 과정에서 TDD 원칙을 준수했습니다.
1. calculateTotal: 상품 가격 및 수량 예외 처리 총액 계산
2. pplyCoupon: 지정된 프로모션 쿠폰 코드별 할인 적용
3. calculateTax: 결제 금액 기준 부가세(10%) 산출
4. isFreeShipping: 임계값(3만 원) 기준 배송비 유무 판정
5. calculatePoints: VIP/일반 등급별 차등 포인트 적립

## 🎯 2. 단위 테스트 커버리지 80% 이상 달성 및 CI 연동
- Jest 프레임워크를 활용해 5대 핵심 기능에 대한 분기 커버리지를 **100% 달성**했습니다.
- .github/workflows/week12-ci.yml 설정을 통해 GitHub에 Push될 때마다 자동으로 코드를 땡겨와 테스트(
pm run test) 및 커버리지 측정을 수행하도록 파이프라인을 구축했습니다.

## 🎯 3. (선택과제) Playwright 기반 E2E 시나리오 및 자동 스크린샷 설정
- playwright.config.js 내에 screenshot: 'only-on-failure' 옵션을 탑재하여, 종단간(E2E) 테스트 실패 시 문제 추적을 위한 스크린샷 아티팩트가 생성되도록 환경을 구성했습니다.
- sample.e2e.js 파일을 통해 가상 브라우저 환경에서 정상 작동 시나리오를 자동 검증했습니다.