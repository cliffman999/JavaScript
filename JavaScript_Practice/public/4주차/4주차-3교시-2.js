var mySet = new Set();

mySet.add(2);
mySet.add("Hello");
mySet.add("foo");
console.log(mySet.size);
console.log(mySet.has("foo"));
mySet.delete("foo");
for(var item of mySet) {
	console.log(item);
}

let arr = Array.from(mySet);

/* MAP을 사용해서 함 해보 */