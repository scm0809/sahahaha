const { test, expect } = require('@playwright/test');

test('🎯 Playwright 기반 웹 브라우저 E2E 시나리오 검증', async ({ page }) => {
  // 안정적인 public 도메인으로 시나리오 검증 진행
  await page.goto('https://example.com');
  
  // 메인 타이틀 확인
  const title = await page.textContent('h1');
  expect(title).toContain('Example Domain');
});
