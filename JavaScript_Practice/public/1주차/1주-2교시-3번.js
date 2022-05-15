Function.prototype.method = function(name, func) {
	this.prototype[name] = func;
}

function Person(name) { //함수지만 클래스이기도함
	this.name = name;
}

Person.method("setName", function(value) {
	this.name = value;
	//this.prototype[setName] = function(value) {this.name = value};
});


Person.method("getName", function() {
	return this.name;
})

var me = new Person("kim");
console.log(me.getName());

me.setName("lee");
console.log(me.getName());