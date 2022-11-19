
const url = require('url');

// var obj = url.parse('https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query=%EC%83%88%EC%8B%B9');
// console.log(obj); //url을 구분지어서 출력
// console.log(url.format(obj));//위에 구분져 있던 것들을 문자열로 다시 출력
// console.log(obj.protocol);
// var string = new url.URL('https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query=%EC%83%88%EC%8B%B9');

var string = new url.URL('http://localhost?name=sesac&name=코딩온&age=10');
//searchParams는 물음표 뒤에 있는 것들을 컨트롤 한다.
console.log(string.searchParams.getAll('name'));
console.log(string.searchParams.keys());

string.searchParams.append('age','20');//age추가
console.log(string.searchParams.getAll('age'));

console.log(string.searchParams.has('age'));//물음표 뒤에 age라는 문자가 있는지 확인