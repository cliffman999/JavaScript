function Person(name) {
	this.name = name;
	this.protoname = "person";
}
function Programmer(name) {
	this.name = name;
	this.protoname = "programmer";
}
function Hacker(name) {
	this.name = name;
}

Programmer.prototype = new Person();
Hacker.prototype = new Programmer();

Person.prototype.sex = function(sex) {
	if(sex == "male") {
		return "person sex is male";
	} return "person sex is female";
}

Programmer.prototype.sex = function(sex) {
	if(sex == "male") {
		return "programmer sex is male";
	} return "programmer sex is female";
}

Programmer.prototype.introduce = function() {
	return "Hello " + this.name;
}

var hacker = new Hacker("hacker");

console.log(hacker.name);
console.log(hacker.sex("female"));
console.log(hacker.introduce());