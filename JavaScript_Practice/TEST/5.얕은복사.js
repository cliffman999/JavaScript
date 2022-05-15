var arr1 = [1,2,3,4];
var arr2 = arr1;

console.log(arr1); //1,2,3,4
console.log(arr2); //1,2,3,4

arr2[0] = 99;

console.log(arr1); //99,2,3,4
console.log(arr2); //99,2,3,4  --> arr2의 값만 바꿨음에도 얕은복사이기 때문에
				   //arr1의 값도 변경됨.