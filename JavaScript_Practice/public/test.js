var arr = ['zero', 'one', 'two'];
arr.color = "blue";
arr.name = "JIN";

for(var prop in arr) {
	console.log(prop + " : " + arr[prop]);
}

for(var i=0; i<arr.length; i++) {
	console.log(i,":", arr[i]);
}