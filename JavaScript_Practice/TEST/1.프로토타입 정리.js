let fun = function() {
	this.a = "a";
	this.b = "b"; //b값에 대한 프로토타입이 존재했지만 덮어씌워짐 (메소드 오버라이딩)(메소드 상속)
}				  //애초에 b라는 속성이 fun함수에 존재하지 않을시에 프로토타입에서 b라는 속성을 검색하기 때문에
				  //fun함수에 b속성이 존재하면 프로토타입을 검색하지 않음.
				  //만약 여기서 this.b속성을 지운다면 console.log(out.b)출력시 "proto b"가 출력됨

fun.prototype.b = "proto b";
fun.prototype.c = "proto c";

let out = new fun();

console.log(out.a);
console.log(out.b);
console.log(out.c);

console.log(fun.a); //객체 생성을 하지 않았기 때문에 undefined