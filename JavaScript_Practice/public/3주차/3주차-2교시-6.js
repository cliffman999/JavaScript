let lee = {
	name : "lee",
	city : "jinju"
};

let kim = { //전개연산자 사용 -> 깊은복사
	...lee,
	name : "kim", //프로퍼티 값 수정
	age : 22 //새로운 프로퍼티 추가
};

console.log(lee);
console.log(kim);