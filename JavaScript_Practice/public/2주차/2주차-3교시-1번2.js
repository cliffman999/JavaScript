const arr1 = ['a','b','c','d','e'];
const arr2 = [1,2,3,4,5];

Array.prototype.push.apply(arr1, arr2);

console.log(arr1);
console.log(arr2);