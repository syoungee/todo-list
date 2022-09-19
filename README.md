<div align="center">

# Todo List <br/> 프론트 페이지 구현 📓

<b> 원티드 프론트엔드 프리온보딩 챌린지 1차 </b>

<p>
  <img src="https://img.shields.io/badge/React-^18.2.0-61DAFB?style=flat&logo=React&logoColor=white"/> 
  <img src="https://img.shields.io/badge/typescript-^4.7.4-3178c6?style=flat&logo=typescript&logoColor=white"/>
  <img src="https://img.shields.io/badge/node-v18.4.0-black?style=flat&logo=node&logoColor=white"/>
  <br/>
  <img src="https://img.shields.io/badge/Javscript-F7DF1E?style=flat&logo=Javascript&logoColor=white"/>
  <img src="https://img.shields.io/badge/CSS-DD3A0A?style=flat&logo=CSS3&logoColor=white"/>
</p>

</div>

## 📒 Project

개인으로 진행한 프로젝트입니다😎 <br/>
[프로젝트 명세](https://github.com/syoungee/wanted-pre-onboarding-challenge-fe-1-api)

## ⏳ 개발 기간

2022/08/05 ~ ing
<br/>

## 📷 프로젝트 시연

https://user-images.githubusercontent.com/22606199/183275189-6aee57ed-daf2-43cd-b7e4-66829c32b717.mp4

https://user-images.githubusercontent.com/22606199/183284987-c71a6dd7-edc3-4361-8aef-6541f7255398.mp4

https://user-images.githubusercontent.com/22606199/185723708-b5b42fd5-0454-4bb9-b1f1-3777e7f064fd.mov

## 구현 기능

```
1. 회원 가입(인증), 로그인
아래의 링크에서 회원 가입 후 token을 부여받아 로그인 가능
이메일, 비밀번호 validation check false시 버튼 비활성화, true시 버튼 활성화
localhost:3000/auth

2. Todo List
로그인 성공 시 Todo List 페이지로 이동
localhost:3000/todo
햄버거 메뉴와 삭제 메뉴를 클릭 시 해당 기능 동작

3. Todo 상세 페이지
Todo List에서 햄버거 메뉴 클릭 시 detail page로 이동
뒤로 가기를 통해 빠져나올 수 있음

4. todo 수정 페이지

5. todo 생성 페이지

6. 기타 사항
프로젝트 명세 링크의 서버를 띄우고 프로그램을 실행해주세요
```

## ✍🏻 프로젝트 설명

```
- 본 서비스는 Todo List 메모 정리 서비스입니다.
- 회원가입과 로그인 절차가 구현되어 있습니다.
- 게시글 CRUD 기능이 구현되어 있습니다.
```

## 📔 페이지

```
i. 메인페이지(회원 가입 or 로그인 접근 가능)
ii. todo list 페이지
iii. todo list 상세 페이지
iv. todo 수정 페이지
v. todo 생성 페이지
```

## 파일 경로

```
src
 ┣ api
 ┃ ┗ api.js
 ┣ components
 ┃ ┣ Login.tsx
 ┃ ┣ Main.tsx
 ┃ ┣ Register.tsx
 ┃ ┣ Todo.css
 ┃ ┣ Todo.tsx
 ┃ ┣ TodoAddPage.tsx
 ┃ ┣ TodoDetail.tsx
 ┃ ┣ TodoDetailEditor.tsx
 ┃ ┣ Welcome.css
 ┃ ┗ Welcome.tsx
 ┣ App.tsx
 ┗ index.tsx
```

## 실행 방법

[server](https://github.com/syoungee/wanted-pre-onboarding-challenge-fe-1-api)<br/>
서버와 클라이언트 모두 아래의 명령어로 실행<br/>
localhost환경에서 서버는 port번호 8080, 클라이언트는 port번호 3000을 사용<br/>
```
npm install && npm start
```

## 추가적으로 필요한 구현사항

```
1. typescript 보완(any 없애기)
2. refactoring(dir 수정 및 함수 기능 단위로 쪼개기 - 관심사 분리)
3. react-query 적용시키기
4. redux로 상태 관리 구현해보기
5. README.md 보완
```

## 회고
회사 생활을 하면서 리팩토링은 유니콘과 비슷한 존재라고 생각했는데 이번 챌린지를 통해 이 또한 노력으로 극복할 수 있고 실력이라고 느꼈습니다.<br/>
클린 코드에 대한 고민 없이 일을 해왔던 지난 날들이 너무 아쉽습니다.<br/>
**일잘러의 길은 기록만이 살 길이다**라는 교훈을 얻게 된 2주였습니다🫶🏻<br/>
챌린지는 20일에 마무리 되지만 지속해서 업데이트해 나갈 예정입니다.<br/>


## 벨로그 구경가기✨

[![Velog's GitHub stats](https://velog-readme-stats.vercel.app/api?name=syoungee&color=dark)](https://velog.io/@syoungee)

