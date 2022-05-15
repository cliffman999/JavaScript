//상속을 위한 프로토타입으로의 수정
//https://shlee1353.github.io/2019/07/05/js-prototype-inheritance/
function Person(name,age) {
	this.name = name;
	this.name = age;
}
Person.prototype.introduce1 = function() {
	return "My name is "+this.name;
}

Person.prototype.introduce2 = function() {
	return "My age is "+this.age;
}

var p1 = new Person("kim",25);
console.log(p1.introduce1());
console.log(p1.introduce2());


function Programmer(name,age) {
	this.name = name;
	this.age = age;
}

Programmer.prototype.A = p1.introduce1; //20번 줄의 내용에 대한 예를 들어 설명하세요. //상속이아닌 재정의??

Programmer.prototype = new Person();
var p2 = new Programmer("Lee",27);
console.log(p2.introduce1());
console.log(p2.introduce2());
