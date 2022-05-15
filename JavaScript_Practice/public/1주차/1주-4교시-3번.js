var person = {
	name : "kim",
	getName : function() {
		return this.name;
	},
	setName : function(arg) {
		this.name = arg;
	}
};

function create_object(o) {
	function F() {}
	F.prototype = 0;
	return new F();
}

var kim = create_object(person);
kim.setName("me");
console.log(kim.getName());