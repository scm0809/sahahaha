# 1. 가볍고 안정적인 Node.js 20 버전 이미지를 기반으로 시작합니다.
FROM node:20-alpine

# 2. 컨테이너 내부의 작업 디렉토리를 설정합니다.
WORKDIR /app

# 3. 패키지 설정 파일을 복사하고 의존성을 설치합니다.
COPY package*.json ./
RUN npm install --production

# 4. 나머지 소스 코드를 전부 컨테이너 안으로 복사합니다.
COPY . .

# 5. 컨테이너가 실행될 때 작동할 명령어를 지정합니다. (아까 세팅한 test 실행)
CMD ["npm", "test"]