const orderService = require('./core');

describe('📦 12주차 핵심 기능 5개 TDD 단위 테스트 (Jest)', () => {
  
  test('1. calculateTotal: 금액과 수량을 곱해 총액을 정확히 반환하는가', () => {
    expect(orderService.calculateTotal(1000, 3)).toBe(3000);
    expect(orderService.calculateTotal(-500, 2)).toBe(0);
  });

  test('2. applyCoupon: 쿠폰 코드에 따라 할인이 올바르게 적용되는가', () => {
    expect(orderService.applyCoupon(10000, 'SAVE10')).toBe(9000);
    expect(orderService.applyCoupon(10000, 'SAVE20')).toBe(8000);
    expect(orderService.applyCoupon(10000, 'NONE')).toBe(10000);
  });

  test('3. calculateTax: 부가세 10%가 정확히 계산되는가', () => {
    expect(orderService.calculateTax(10000)).toBe(1000);
  });

  test('4. isFreeShipping: 30,000원 이상일 때 무료 배송이 활성화되는가', () => {
    expect(orderService.isFreeShipping(35000)).toBe(true);
    expect(orderService.isFreeShipping(25000)).toBe(false);
  });

  test('5. calculatePoints: 회원 등급별 적립 포인트가 올바르게 계산되는가', () => {
    expect(orderService.calculatePoints(10000, 'VIP')).toBe(500);
    expect(orderService.calculatePoints(10000, 'NORMAL')).toBe(100);
  });
});
