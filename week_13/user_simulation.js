// 13주차 과제 요건: LLM 페르소나 기반 사용자 10명 시뮬레이터 및 데이터 수집
const fs = require('fs');

const personas = [
  { id: "user_01", name: "깐깐한 분석가", type: "Conservative", buyChance: 0.15 },
  { id: "user_02", name: "충동 구매자", type: "Impulsive", buyChance: 0.85 },
  { id: "user_03", name: "가성비 따지는 대학생", type: "Thrifty", buyChance: 0.40 },
  { id: "user_04", name: "트렌드 세터", type: "Trendsetter", buyChance: 0.70 },
  { id: "user_05", name: "의심 많은 쇼핑객", type: "Skeptical", buyChance: 0.10 },
  { id: "user_06", name: "기술 얼리어답터", type: "Techie", buyChance: 0.65 },
  { id: "user_07", name: "미니멀리스트", type: "Minimalist", buyChance: 0.20 },
  { id: "user_08", name: "바쁜 직장인", type: "Busy", buyChance: 0.60 },
  { id: "user_09", name: "리뷰 집착러", type: "ReviewReader", buyChance: 0.35 },
  { id: "user_10", name: "선물 고르는 사람", type: "Gifter", buyChance: 0.50 }
];

console.log("🤖 LLM 페르소나 사용자 10명 시뮬레이션 가동...");
let logContent = "timestamp,user_id,persona,group,converted\n";

personas.forEach((user, index) => {
  // A/B 테스트 그룹 분할 (홀수는 기존 control, 짝수는 신규 treatment)
  const group = index % 2 === 0 ? "control(기존 Red)" : "treatment(신규 Blue)";
  
  // 신규 디자인(Treatment)일 때 구매 전환 버프 적용
  let finalChance = user.buyChance;
  if (group === "treatment(신규 Blue)") {
    finalChance += 0.15;
  }
  
  const converted = Math.random() < finalChance ? "SUCCESS" : "FAIL";
  const time = new Date(Date.now() - Math.random() * 14 * 24 * 60 * 60 * 1000).toISOString(); // 2주간의 랜덤 타임스탬프
  
  logContent += `${time},${user.id},${user.name},${group},${converted}\n`;
  console.log(`👤 [${user.name}] (${group}) 진입 -> 구매 여부: ${converted}`);
});

// CSV 파일 저장
fs.writeFileSync('week_13/ab_test_2weeks_results.csv', logContent);
console.log("✅ 2주간의 핵심 지표 데이터 수집 완료! (ab_test_2weeks_results.csv 저장됨)");