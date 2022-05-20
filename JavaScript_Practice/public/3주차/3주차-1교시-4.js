const { cat, dog : dogName, tiger : tiger2}  = { //객체로부터 속성을 해체하여 객체의 원래 속성명과는 다른 이름의 변수에 할당할 수 있습니다.
												 //배열객체에 값을 저장할때 키값의 이름을 지정할 수 있다. 
	cat : "cat",
	dog : "dog",
	tiger : "tiger"
};

console.log(cat); 
console.log(dogName);
console.log(tiger2)

