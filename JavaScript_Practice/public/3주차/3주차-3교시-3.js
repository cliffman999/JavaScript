let {name, age, addr} = kim1;  // let 재선언 불가, 동일 코드 반복시 SyntaxError

var {name, age, addr} = kim1; // var 재선언 가능, 동일 코드 반복시 정상 실행

({name, age, addr} = kim2); // 객체 비구3주차-2교시-9.js조화, 변수 선언 키워드가 없어 소괄호로 감싸주어 정상실행