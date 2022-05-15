class Person {
	constructor (name, age, sex) {
		this.name = name;
		this.age = age;
		this.sex = sex;
	}
	
	changeAge() {
		this.age += 1;
	}
}

var output = new Person("kim",22,"남");
console.log(output.name,output.age,output.sex);
output.changeAge();
console.log(output.name,output.age,output.sex);
