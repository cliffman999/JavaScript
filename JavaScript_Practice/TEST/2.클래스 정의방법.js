class person { //클래스 선언시 ()붙이면 안됨(기본)
	constructor(name, age, sex) { //constructor(생성자)를 통하여 클래스 생성시 인자값을 받을 수 있음.
		this.name = name; //클래스 내 변수선언
		this.age = age;
		this.sex = sex;
	}
	
	changeAge(age) { //클래스 내 함수선언
		this.age = age;
	}
	
	print() {
		console.log(out.name, out.age, out.sex);
	}
}

let out = new person("jin",23,"male"); //클래스 생성시 constructor에 정의된 인자값 전달

out.print();
out.changeAge(27);
out.print();