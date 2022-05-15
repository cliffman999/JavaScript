const arr1 = [1,2,3,[4,5],6];
const arr2 = [4,7,8,arr1,50];

for(var i=0; i<arr2.length; i++) {
	if(i==3) {
		for(var l=0; l<arr1.length; l++) {
			if(l==3) {
				for(var n=0; n<2; n++) {
					console.log(arr2[i][l][n]);
				}
			} else {
				console.log(arr2[i][l]);
			}
			
		}
	} else {
		console.log(arr2[i]);
	}	
}
console.log();


