var arr1 = [1,2,3,4];
var arr2 = [];

for(var i=0; i<arr1.length; i++) { //for문을 사용하여 arr1의 값들
	arr2[i] = arr1[i];			   //arr2로 깊은복사
}

console.log(arr1); //1,2,3,4
console.log(arr2); //1,2,3,4

arr2[0] = 99;

console.log(arr1); //1,2,3,4
console.log(arr2); //99,2,3,4  --> 깊은복사가 됐기 때문에 arr2의 값을 바꿔도
				   //arr1의 값이 변경되지 않음. (참조하는 메모리 주소가 다름)
				   //slice와 splice를 사용하면 쉽게 가능