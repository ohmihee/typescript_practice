# typescript_practice

~ tsc 명령어를 통해 타입스크립트 파일을 자바스크립트 파일로 컴파일 가능하다.

순서도
1.tsc -init (에러가 난다면 typescript를 설치해줬는지 확인한다.) 2. npm init -y 3. npm i nodemon concurrently 4. package.json 수정 script를 수정해준다.
"start:build": "tsc -w",
"start:run": "nodemon dist/index",
"start": "concurrently npm:start:\*"

- type

## primitive type

- number
- string
- boolean
- void
- symbol
- undefined
- null

## Object type

- functions
- arrays
- classes

## type inference

## 타입추론

타입을 명시하지 않아도 대입된 값에 따라 타입을 유추하여 타입을 결정하는 것이다.
이는 보통 타입의 선언과 대입(초기화)이 동시에 할 때 이루어진다.
