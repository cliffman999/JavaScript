//제너레이터는 이터러블 객체이므로 for..of문 사용가능 
//for..of문은 done:true일때 마지막 value값을 무시함 그러므로 마지막 값을 return이 아닌 yield로 해야함

function* generateSequence() {
	yield 1; 
	yield 2; 
	yield 3; 

}

let generator = generateSequence();

for(let value of generator) { //for..of 이터레이션이 done: true일 때 마지막 value((return))를 무시
	console.log(value);
}