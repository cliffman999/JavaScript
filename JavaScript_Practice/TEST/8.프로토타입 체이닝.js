function a() {
	
}
function A() {
	
}
function AA() {
	
}

a.prototype = new A();
A.prototype = new AA();

console.log(a.prototype);
console.log(A.prototype);
console.log(AA.prototype);
