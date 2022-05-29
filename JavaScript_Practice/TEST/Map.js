//Map은 객체와 유사한 키-값 형식으로 데이터를 가진다.

const m = new Map();

m.set('hello', 'world');
console.log(m.get('hello')); //world
console.log(m.has('hello')); //true

m.delete('hello');
console.log(m.get('hello')); //undefined
console.log(m.has('hello')); //false


//Map과 일반적인 객체의 차이점
/*
객체는 속성접근자(.or괄호) 문법을 통해서, Map은 메소드(get,set)를 통해서 내부의 데이터를 조작
문자열과 심볼만이 객체의 속성키가 될 수 있지만, Map은 어떤 값이라도 객체의 키로 사용될 수 있음.

*/