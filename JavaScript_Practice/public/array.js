var array1 = [0,1,2];
var array2 = [];

var array3 = array1[2] + array2[2];
console.log(array3); //숫자타입에 undefined타입을 연산할 수 없으므로 연산결과 NaN출력
console.log(array3.length); //array3는 객체이기는 하지만 배열객체는 아니므로 
							//length 메서드를를 사용할 수 없음