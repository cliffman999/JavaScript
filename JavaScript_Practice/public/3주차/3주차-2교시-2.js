const key = "dog name";
const { "cat-name" : cat_name, [key] : dog_name } = {
	"cat-name" : "cat",
	"dog name" : "dog"
};

console.log(cat_name);
console.log(dog_name);