const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: '.',
  testMatch: '*.e2e.js',
  use: {
    headless: true,
    screenshot: 'only-on-failure', // 실패 시에만 스크린샷을 저장하는 핵심 옵션
  },
});
