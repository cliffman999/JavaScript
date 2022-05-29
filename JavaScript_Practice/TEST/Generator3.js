//제너레이터는 이터러블 객체이므로 전개연산자 사용가능

function* generateSequence() {
	yield 1; 
	yield 2; 
	yield 3; 

}

let sequence = [0, ... generateSequence()]; 
//위 예시에서 ...generateSequence()는 반복 가능한 제너레이터 객체를 배열 요소로 바꿔줍니다

console.log(sequence);