//제너레이터

function* generateSequence() {
	yield 1; // {value : 1, done : flase}
	yield 2; // {value : 2, done : flase}
	return 3; // { value : 3, done : true }

}

let generator = generateSequence();

let one = generator.next();
let two = generator.next();
let three = generator.next();

console.log(one);
console.log(two);
console.log(three);