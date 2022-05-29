let obj2 = {
	0:'a',
	1:'b',
	2:'c',
	length:3
}

console.log(Array.isArray(obj2));
console.log(obj2 instanceof Array);
console.log(obj2.length);
let arr = Array.from(obj2);
console.log(Array.isArray(arr));
console.log(arr instanceof Array);
console.log(arr.length);
arr.push('e');
for(var i=0; i<arr.length; i++) {
	console.log(arr[i]);
}