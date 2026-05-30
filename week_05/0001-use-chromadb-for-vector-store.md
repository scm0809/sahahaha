# [ADR-0001] Vector DB로 ChromaDB 도입

- **Date:** 2026-03-27
- **Status:** Accepted

## 1. Context (배경)
사하구청 문서 데이터를 임베딩하여 RAG 기반 하이브리드 검색을 수행하기 위해 빠르고 효율적인 Vector Database가 필요함. Pinecone, FAISS, ChromaDB가 후보군으로 논의됨.

## 2. Decision (결정 사항)
로컬 환경에서 별도의 클라우드 가입 없이 가장 빠르고 직관적으로 세팅할 수 있는 **ChromaDB**를 최종 Vector DB로 채택함.

## 3. Consequences (결과 및 영향)
- **장점:** 초기 프로토타입 개발 속도가 대폭 향상되며 Python(LangChain)과의 연동성이 뛰어남.
- **단점:** 대규모 트래픽 발생 시 인메모리/로컬 DB의 한계가 있을 수 있으므로, 상용화 단계에서는 마이그레이션 고려 필요.