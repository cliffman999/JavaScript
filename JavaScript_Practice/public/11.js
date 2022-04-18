class Person {
	constructor(name, sex) {
		this.name = name;
		this.sex = sex;
	}
	
	print() {
		console.log("이름:"+this.name+" 성별:"+this.sex);
	}
}

var myFunc = new Person("LIM", "MALE");
myFunc.print();

var myFunc = new Person("KIM", "FEMALE");
myFunc.print();