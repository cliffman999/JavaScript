let func = function() {
	this.input;
	
	this.setInput = function(input) {
		this.input = input;
	}
	
	this.getInput = function() {
		console.log(this.input);
	}
	
}

let a = new func("인풋값");

console.log(a.input); //undefined

a.setInput("인풋");
a.getInput(); //인풋

a.setInput("인풋2");
a.getInput(); //인풋2
