const url = require('url');
var string = new url.URL('https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=sesac');
console.log(string.searchParams.keys());//url에서 모든 키를 가져오기
console.log(string.searchParams.values());//url에서 모든 값을 가져오기
string.searchParams.delete('sm');//sm키 삭제하기
console.log(string.searchParams.keys());

