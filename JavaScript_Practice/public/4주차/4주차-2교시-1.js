//set과 map을 사용
const arr = [1,2,3,4];
var mySet = new Set([1,2,3,4,5,2]);  //set은 중복값을 허용하지 않는다.
var myMap = new Map([
	['a','A'],['b','B']
])


var obj = {a:1, b:2};
console.log(arr[Symbol.iterator]());
console.log(mySet[Symbol.iterator]());
console.log(myMap[Symbol.iterator]());

//console.log(obj[Symbol.iterator]()); --> //객체(obj)는 Symbol.iterator를 가지고 있지 않다.

//for of문을 사용하여 위의 값(배열, Set, Map, 객체)들을 출력하시오. --> //객체(obj)는 for of문을 사용할 수가 없다(iterator객체가 아니면 for of문을 사용할 수가 없다.)