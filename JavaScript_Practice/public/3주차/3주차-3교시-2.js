const users = [
	{name:"kim", age:22, addr:"seoul"},
	{name:"lee", age:21, addr:"jinju"},
	{name:"park", age:23, addr:"pusan"}
]

for(let {name:n, age:a, addr:ad} of users) {
	console.log(n,a,ad);
}