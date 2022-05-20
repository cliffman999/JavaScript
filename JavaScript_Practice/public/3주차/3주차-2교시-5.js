let arr = [1,2,3];
let copy1 = arr; // 대입연산자 사용시 얕은복사
let [...copy2] = arr; // !!!전개연산자 사용시 깊은복사!!!
let copy3 = [...arr];

arr[0] = "string";

console.log(arr);
console.log(copy1);
console.log(copy2);
console.log(copy3);