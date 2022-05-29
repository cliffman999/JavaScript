//iterable객체는 배열을 일반화한 "반복 가능한 객체"이다.
//이터러블이라는 개념을 사용하면 어떤객체에든 for..of반복문을 적용시킬 수 있다. 
//배열은 대표적인 이터러블 객체이다.

//배열이 아닌 객체를 이터러블로 만들려면(for..of문을 사용가능하게) 객체에 Symbol.iterator라는 메서드를 추가해야한다.
/*
1.for..of가 시작되자마자 for..of는 Symbol.iterator를 호출합니다(Symbol.iterator가 없으면 에러가 발생합니다). 
	Symbol.iterator는 반드시 이터레이터(iterator, 메서드 next가 있는 객체) 를 반환해야 합니다.
2.이후 for..of는 반환된 객체(이터레이터)만을 대상으로 동작합니다.
3.for..of에 다음 값이 필요하면, for..of는 이터레이터의 next()메서드를 호출합니다.
4.next()의 반환 값은 {done: Boolean, value: any}와 같은 형태이어야 합니다. 
	done=true는 반복이 종료되었음을 의미합니다. done=false일땐 value에 다음 값이 저장됩니다. 
*/

let range = {
	from : 1,
	to  : 5
}

/*
for(let num of range) {
	console.log(num);
} */

range[Symbol.iterator] = function() {
	return {
		current : this.from,
		last : this.to,
		next() {
			if(this.current <= this.last) {
				return { done : false, value : this.current++ };
			} else {
				return { done : true };
			}
		}
	}
};

for(let num of range) {
	console.log(num);
}
