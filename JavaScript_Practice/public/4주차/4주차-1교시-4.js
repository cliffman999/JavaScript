//set과 map을 사용
const arr = [1,2,3,4];
var mySet = new Set([1,2,3,4,5]);
var myMap = new Map(['a','A'],['b','B']);


var obj = {a:1, b:2};
console.log(arr[symbol.iterator]());
console.log(mySet[symbol.iterator]());
console.log(myMap[symbol.iterator]());
console.log(obj[symbol.iterator]())