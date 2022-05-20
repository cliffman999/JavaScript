const kim1 = {
	name : "kim1", 
	age:22, 
	address:"seoul",
	friends : [
		{name: 'lee1', age:21, address:"jinju"},
		{name: 'park1', age:23, address:"busan"}
	]
}

const kim2 = {
	name : "kim2", 
	age:22, 
	address:"seoul",
	friends : [
		{name: 'lee2', age:21, address:"jinju"},
		{name: 'park2', age:23, address:"busan"}
	]
}

let {name:n1, friends : [{name:n2, age:a}, {name:n, addr:ad}]} = kim1;
console.log(n2);
console.log(a);
console.log(n);
console.log(ad);

let {name : n3, friends : [,{name:n4}]} = kim2;
console.log(n3);
















