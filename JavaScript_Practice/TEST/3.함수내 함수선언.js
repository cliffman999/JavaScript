let func = function(input) { //함수안에
	
	this.print = function() { //또다른 함수선언가능 
		console.log(input);
	}
}

let a = new func("HELLO");
a.print();