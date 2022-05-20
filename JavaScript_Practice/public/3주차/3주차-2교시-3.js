let cat, dog; //객체 비구조화시 변수 선언 키워드가 없을 경우 괄호로 감싼다

	({cat, dog} = {cat : "cat", dog : "dog"});
	console.log(cat);
	console.log(dog);