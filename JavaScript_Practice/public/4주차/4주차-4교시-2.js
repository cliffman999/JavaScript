const arr = [10,20,30,40];

const avg = arr.reduce((total, value, index, array) => {
	total += value;
	if(index == array.length-1) {
		return total / array.length;
	} else {
		return total;
	}
});

console.log(avg);