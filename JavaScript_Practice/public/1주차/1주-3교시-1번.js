var array1 = [1,2,3,4];
console.log("원본");
console.log(array1);
var array2 = array1;
var array3 = [];
for(var i=0; i<array1.length; i++) {
	array3[i] = array1[i];
}
array1[0] = 20;
console.log("얕은복사");
console.log(array2);
console.log("깊은복사");
console.log(array3);