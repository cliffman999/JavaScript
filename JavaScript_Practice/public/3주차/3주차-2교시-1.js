const {dog : dogName, ...restName} = {
	dog : "dog",
	tiger : "tiger",
	monkey : "monkey"
};

console.log(dogName);
console.log(restName.tiger);
console.log(restName.monkey);