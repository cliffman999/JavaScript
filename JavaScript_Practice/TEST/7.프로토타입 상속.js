let person = function(name, age) {
	this.name = name;
	this.age = age;
}

person.prototype.introduce1 = function() {
	return "My name is " + this.name;
}

person.prototype.introduce2 = function() {
	return "My age is " + this.age;
}

let a = new person("kim",25);
console.log(a.introduce1());
console.log(a.introduce2());

let programmer = function(name, age) {
	this.name = name;
	this.age = age;
}

//programmer.prototype.A = a.introduce1;
programmer.prototype = new person(); //programmer의 프로토타입을 person으로 지정
let b = new programmer("Lee",27);
console.log(b.introduce1()); //programmer에서 introduce1메소드를 검색하지 못 했으므로 프로토타입에서 검색
console.log(b.introduce2()); 