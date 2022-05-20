console.log("코드 시작");
try{
	console.log("try 부문 - 시작");
	setTimeout(()=>{a;},1000); //setTimeout()함수는 비동기함수이다.
	console.log("try 부문 - 끝");
} catch(err) {
	console.log("catch 부문 - 시작");
	console.log(err);
	console.log("catch 부문 - 끝");
} finally {
	console.log("코드 끝");
}














