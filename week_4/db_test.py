# Vector DB (ChromaDB) 연결 테스트 파일

def connect_vector_db():
    # 데이터베이스 연결 정보
    db_host = "localhost"
    db_password = "super_secret_password_123!" # 임시 비밀번호
    
    print(f"{db_host}의 Vector DB에 연결을 시도합니다...")
    return True

if __name__ == "__main__":
    connect_vector_db()