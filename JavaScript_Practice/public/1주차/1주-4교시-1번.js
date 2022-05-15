function Person(name) {  
	this.name = name;
}
function Programmer(name) {
	this.name = name;
}
function Designer(name) {
	this.name = name;
}
Programmer.prototype = new Person(); //Programmer --> Person --> Object --> null
Designer.prototype = new Person(); //Designer --> Person --> Object --> null

Person.prototype.introduce = function() { //Object.introduce = function() {...}
	return "My name is " + this.name;
}
Programmer.prototype.coding = function() { //Person.coding = function() {...}
	return "hello world";
}
Designer.prototype.design = function() { //Person.design = function() {...}
	return "beautiful";
}

var programmer = new Programmer("kim");
console.log(programmer.introduce());
console.log(programmer.coding());

var person = new Person("lee");
console.log(person.introduce());
//console.log(person.coding());

var designer = new Designer("park");
console.log(designer.introduce());
console.log(designer.design());