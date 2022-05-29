//자바스크립트 for in 함수

var obj = {
	a : '가',
	b : '나',
	c : '다'
};

for(var key in obj) {
	console.log(key);
	console.log(obj[key]);
}

/*
for(key in obj) { ***var생략가능*** 근데 의미있나
	console.log(key);
	console.log(obj[key]);
}
*/