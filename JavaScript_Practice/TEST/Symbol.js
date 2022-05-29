//Symbol은 객체의 속성 키로 사용하기 위해 만들어졌음.
//대괄호 표기법을 통해서 심볼을 객체의 속성 키로 사용할 수 있음.

const mySymbol = Symbol("my hello Symbol");

const obj = {
	[mySymbol] : "hello"
}

console.log(obj);
	