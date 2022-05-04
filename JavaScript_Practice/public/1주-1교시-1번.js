var array1 = [
	"홍길동",90,80,70
];
var array2 = [
	"이길동",81,90,90
];
var outputArray1 = [];
var outputArray2 = [];
for(var i=1; i<array1.length; i++) {
	var output1 = array1[i];
	outputArray1[i] = output1;
	
	var output2 = array2[i];
	outputArray2[i] = output2;
}
var total1 = 0;
var total2 = 0;
for(var i=1; i<outputArray1.length; i++) {
	total1 += outputArray1[i];
	total2 += outputArray2[i];
}
var avar1 = total1/3;
var avar2 = total2/3;
console.log("이름 국어 영어 수학 총점 평균");
console.log(array1[0], outputArray1[1], outputArray1[2], outputArray1[3], total1, avar1);
console.log(array2[0], outputArray2[1], outputArray2[2], outputArray2[3], total2, avar2);
