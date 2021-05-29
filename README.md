# 정준호 [201930127] <br/>

## [05월 25일]

body-parser 미들 웨어 : 요청 본문을 분석함<br/>

morgan 미들웨어 : 서버의 로그를 기록<br/>

> response 객체<br/>

send(): 데이터본문 제공<br/>
    send는 가장 마지막<br/>
status(): 상태코드 제공<br/>
set(): 헤더 설정<br/>

> 페이지 라우팅<br/>

페이지 라우팅 : 클라이언트 요청에 적절한 페이지를 제공하는 기술<br/>
페이지 라우팅을 할때 토큰을 활용한다 ":<토큰 이름>"형태, 설정 토큰은 다른 문자열로 변환 입력가능, request 객체의 params 속성으로 전달됨<br/>

> port 관련<br/>

0~1023 잘 알려진 포트 (Well-Known Port)<br/>

IANA는 이 포트 번호들을 가장 범용적인 TCP/IP 어플리케이션을 위해 번호를 예약해둠<br/>
대부분의 시스템에서 시스템 관리자나 권한이 높은 사용자(UNIX의 경우 root)만 사용가능<br/>
System Port 라고 부르기도 함.<br/>

1024~49151 등록된 포트 (Registered Port)<br/>

TCP/IP를 사용하지만 RFC 표준으로 제정되지 않았은 어플리케이션 포트들이 많이 있다<br/>
TCP/IP 서버 어플리케이션을 만든 모든 사람들은 이들 포트번호 중 하나를 IANA에게 요청할 수 있다 해당 포트를 어플리케이션에게 할당할 수 있다<br/>
시스템의 모든 사용자는 일반적으로 Registered Port에 접근가능, 사용자 포트라고 부르기도 함<br/>

49152~65535 동적 포트 (Dynamic Port)<br/>

IANA는 이들 포트를 예약하거나 관리 X<br/>
누구나 등록 없이 사용 O,  특정 기관에서만 사용하는 사설 프로토콜에 적합<br/>
특수한 어플리케이션을 위한 유연성을 제공<br/>

> express 기본 메서드<br/>

express(): 서버 애플리케이션을 생성<br/>
use(): 요청이 왔을 때 실행할 함수를 지정<br/>
listen(): 서버를 실행<br/>

## [05월 18일]

npm install <모듈이름>을 cmd에 치면 외부 모듈을 설치할 수 있음

> 동기식 : 모든 파일을 실행하기전에는 프로그램이 실행되지 않음
```js
const file = fs.readFileSync("EEE.txt");//1
console.log(file);//2
console.log(file.toString());//3
//4 프로그램 종료
```
1>>2>>3>>4식으로 작동

> 비동기식 : 병렬처리로 하나의 파일을 읽는 시간으로 모두 처리
```js
const file = fs.readFileSync("EEE.txt");//1

fs.readFile("EEE.txt", (error, file) => { //2
    console.log(file, file.toString());//4
    //5코드 종료
});
//3 코드 종료
```
1>>2>>3>>4>>5 이런식으로 작동한다

> 모듈 관련

노드에서 모듈을 가져올때
const foo = require("dd");

> process 객체와 이벤트

노드에서 이벤트 연결

pricess.on('이벤트 이름', () >> {});

> 전역 변수

__filename: 현재 실행중인 파일 경로
__dirname: 현재 실행중인 폴더 경로

## [05월 10일]

> JSON

문자열은 "" 만들어야함 <br/>
모든 키는 ""로 감싸야함. <br/>
숫자, 문자열, 불 자료형만 사용 가능 <br/>

>Array 

Array 객체는 여러 자료를 다룰 때 사용하는 자료형이다. <br/>
Array의 메서드는 push,pop부분의 설명되어있는 부분을 가져와 내용을 추가했다. <br/>

push : 배열의 마지막 주소 값 추가 <br/>
pop : 배열의 마지막 주소 값 제거 <br/>
shift : 배열의 첫번째 주소 값 제거 후 반환 <br/>
concat : 두 개의 배열을 합쳐줌 <br/>
reverse : 배열을 역순으로 재배열 <br/>
sort : 아스키코드로 정렬 <br/>
slice : 배열을 자르고 반환 <br/>
splice : 배열의 기존 요소를 삭제 또는 교체 (새 요소를 추가 배열의 내용 변경) <br/>
join : 배열 값 사이에 원하는 문자를 삽입 후 반환 <br/>

> ECMASrcipt5에서 따로 추가된 메소드 <br/>
forEach: 배열의 요소를 하나씩 뽑아 반복 <br/>
map: 콜백 함수에서 리턴하는 것을 기반으로 새로운 배열을 만듬 <br/>
filter: 콜백 함수에서 true를 리턴 후 새로운 배열을 만든다.
 <br/>

```JS
let Date1 = new Date(); //현재시간
let Date2 = new Date(Number); //유닉스
let Date3 = new Date("Decmber 9, 1991, 21:30:00"); //문자열
let Date4 = new Date(1991, 12 -1, 9, 21 ,30, 0, 0); //시간요소
```

## [04월 13일]
> 리턴값이 없는 함수(ch05)  
`"${이름}"일반글씨 print에 넣은 메시지를 같이 출력 해줌

> function print(name="무명", count="0"){~~}  
위 형식으로 기본값을 설정해줄수있다

> 정수형 실수형 출력하기
```js
let inputA = '51'
let inputB = '51.254'
let inputC = '512동'

console.log(parseInt(inputA)); //정수출력
console.log(parseInt(inputB));
console.log(parseFloat(inputB)); //실수 출력
console.log(parseInt(inputC)); 

console.log(Number(inputA)); //실수 출력
console.log(Number(inputB));
console.log(Number(inputC));
```

## [04월 06일]
### 슬라이스
    내용
## [03월 16일]
> 오늘 배운 내용 요약 <br/>
> 여러줄 요약 <br> 
> 3번

    최근 내용이 위로 올라 가야함 (업데이트내용이 마지막에 있으면 화가 나겠죠)
    다시 깃허브에 올릴때는 파일에 git을 지구고 다시하면 됨

    <table>
    </table>