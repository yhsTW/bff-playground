# 사전 준비

1. 노드 버전 확인

```shell
node --version
```

2. yarn 설치

```shell
npm install --global yarn
```

3. yarn 버전 확인

```shell
yarn --version
```

# 설치

1. 레포지토리 클론

```shell
git clone https://github.com/yhsTW/bff-playground.git
```

2. 패키지 설치

```shell
yarn install
```

3. 환경 변수 설정

   [.env.example](https://github.com/yhsTW/bff-playground/blob/main/.env.example)을 읽고 환경 변수를 설정합니다.

# 실행 방법

```shell
yarn start
```

# 테스트 방법

1. 로컬 서버 실행 후 브라우저에 http://localhost:[PORT]/graphql을 입력합니다(설정하지 않았다면 PORT 기본값은 3000 입니다.).

2. Documentation를 참고하여 쿼리를 작성 후 실행합니다.

3. 터미널에 구독한 태스크 정보가 표시됩니다.

4. 구독 종료 후 터미널에 'complete!!' 문구가 표시됩니다.
