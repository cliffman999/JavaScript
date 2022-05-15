function Person(arg) { //함수지만 클래스이기도함
	this.name = arg;
	
	this.getName = function() {
		return this.name;
	}
	
	this.setName = function(value) {
		this.name = value;
	}
}

var me = new Person("kim");
console.log(me.getName());

me.setName("lee");
console.log(me.getName());