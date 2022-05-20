const { cat, ...rest} = { 
	tree : "tree",
	cat : "cat",
	dog : "dog",
	tiger : "tiger"
}; //전개연산자 사용시 명시하지 않은 키값은 전개연산자로 들어간다.

console.log(cat); 
console.log(rest); //배열이 아닌 객체형태이므로 전개연산자 사용시 키값과 밸류값이 표시된다.

console.log(rest.tiger);