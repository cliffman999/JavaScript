let str = "Hello";
let iter = str[Symbol.iterator]();
let result = iter.next();

console.log(result);
console.log(result.done);
console.log(result.value);