//set은 집합 형태의 자료구조 set내부에 이미 존재하는 데이터를 추가하려고 하면 이는 ""무시""됨.

const s = new Set();

s.add(1);
s.add(2);
s.add(1); //set은 중복된 데이터가 저장되는것을 허용하지 않음.

console.log(s);