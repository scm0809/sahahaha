import json
import hashlib

# 1. 롤아웃 설정 파일 로드
with open('feature_flags.json', 'r', encoding='utf-8') as f:
    config = json.load(f)

# 2. Feature Flag 제어 로직 (3개 플래그 적용)
def check_feature_flag(feature_name, user_id=None):
    flag = config['flags'].get(feature_name)
    if isinstance(flag, list): # 대상 사용자 기준 토글
        return user_id in flag
    return flag # 환경 변수/글로벌 기준 토글

# 3. A/B 테스트 2개 Variant 구성 및 사용자 할당 일관성 보장
def assign_ab_variant(user_id, experiment_name):
    # 유저 ID를 해시 처리하여 재접속해도 항상 동일한 그룹(A/B)에 배정되도록 로직 추가
    hash_val = int(hashlib.md5(user_id.encode()).hexdigest(), 16)
    variants = config['ab_test']['variants']
    assigned = variants[hash_val % len(variants)]
    return assigned
