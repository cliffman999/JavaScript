const obj1 = {
	a : "A",
	b : "B"
};

const obj2 = {
	c : "C",
	d : "D"
};

const obj3 = {obj1,obj2};
console.log(obj3.obj2.c);