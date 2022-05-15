let person1 = {
	name : 'kim'
};

let person2 = {
	name : 'lee',
	study : function() {
		document.write(this.name + "이/가 공부하고 있습니다");
		document.write("<br>");
	}
};

person2.study();
person2.study.call(person1);