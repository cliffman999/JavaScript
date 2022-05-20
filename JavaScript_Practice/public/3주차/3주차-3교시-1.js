function Person({name, age, addr}) {
	console.log(name, age, addr);
}

const users = [
	{name:"kim", age:22, addr:"seoul"},
	{name:"lee", age:21, addr:"jinju"},
	{name:"park", age:23, addr:"pusan"}
]

users.map((user) => {
	Person(user);
});