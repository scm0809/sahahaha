// [TDD 구현] 핵심 비즈니스 로직 5개 기능
const orderService = {
  // 1. 상품 총 가격 계산
  calculateTotal: (price, quantity) => {
    if (price < 0 || quantity < 0) return 0;
    return price * quantity;
  },

  // 2. 쿠폰 할인 적용
  applyCoupon: (total, couponCode) => {
    if (couponCode === 'SAVE10') return total * 0.9;
    if (couponCode === 'SAVE20') return total * 0.8;
    return total;
  },

  // 3. 세금 계산 (기본 10%)
  calculateTax: (amount) => {
    return amount * 0.1;
  },

  // 4. 무료 배송 여부 판단 (3만 원 이상 무료)
  isFreeShipping: (total) => {
    return total >= 30000;
  },

  // 5. 등급별 포인트 적립율 계산
  calculatePoints: (total, userGrade) => {
    if (userGrade === 'VIP') return total * 0.05;
    return total * 0.01;
  }
};

module.exports = orderService;
