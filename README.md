# Ryan's Express Fast Starter

![Author](https://img.shields.io/badge/Author-ryan-orange.svg)
![License](https://img.shields.io/badge/License-MIT-blue.svg)
![Last Commit](https://img.shields.io/github/last-commit/ryan-ahn/npm-express-starter)

## Setting Stack
- Environment : node
- Framework : express
- Database : mongoDB
- ODM : mongoose
- Type : ts-node & typescript

## Project Start
1. Installation
```
$ npm install -g nodemon
$ npx express-starter my-app
$ cd my-app
```
2. Run Project
```
$ npm run dev
```

## Code Structure
&nbsp;⎣&nbsp;**config** - configuration <br/>
&nbsp;⎣&nbsp;**controllers** - error handling, business logic control<br/>
&nbsp;⎣&nbsp;**interfaces** - database model, schema, request & response type <br/>
&nbsp;⎣&nbsp;**loaders** - db connecting, service connecting <br/>
&nbsp;⎣&nbsp;**database** - schema, query <br/>
&nbsp;⎣&nbsp;**routes** - routes <br/>
&nbsp;⎣&nbsp;**utils** - connector, handler, helper <br/>
&nbsp;⎣&nbsp;**services** - service logic control <br/>