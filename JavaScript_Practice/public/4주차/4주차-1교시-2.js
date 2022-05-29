//자바스크립트 forEach함수

const myArr = ['가','나','다','라','마'];
const newMyArr = myArr.forEach((currentElement, index, array) => { 
	console.log(currentElement),
	console.log(index),
	console.log(array);
	});
	
console.log(newMyArr);