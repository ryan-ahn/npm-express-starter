# Boiler Plate for Server Setting

> Typescript Node 서버 구축용 Express 보일러 플레이트

## Setting Stack
- Server : node
- Framwork : express
- database : mongoDB
- odm : mongoose
- type : ts-node & typescript

## Project Start
1. nodemon 설치
```
$ npm install -g nodemon
```
2. clone & dependencies 설치
```
$ git clone ryan-ahn/boilerplate-backend-express
$ cd boilerplate-backend-express
$ npm install
```

2. environment 설정
```
.env 파일 추가하기
PORT, MONGODB_DEV_URL, MONGODB_PROD_URL, DEV_ROOT_ORIGIN, PROD_ROOT_ORIGIN 입력하기
```
4. server 시작하기
```
$ npm run dev
```

## Code Pattern
- Routes + Controllers + Services 패턴을 따름
- Express에서 지원하지 않는 Typescript를 사용하기 위해 TS-Node가 필요
- ESLint + StyleLint + Prettier 포메터 조합

## Code Structure
&nbsp;⎣&nbsp;**config** - config 설정 <br/>
&nbsp;⎣&nbsp;**controllers** - 에러 핸들링 <br/>
&nbsp;⎣&nbsp;**interfaces** - database model, schema, request & response type 코드 등 <br/>
&nbsp;⎣&nbsp;**loaders** - database 연결 <br/>
&nbsp;⎣&nbsp;**modules** - utils, handler, hooks 등 <br/>
&nbsp;⎣&nbsp;**services** - 비즈니스 로직 <br/>
