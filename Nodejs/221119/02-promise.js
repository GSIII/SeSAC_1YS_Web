//promise 문법
// new Promise(function(resolve, reject){

// })

function func1(){
    return new Promise(function(resolve, reject){
        resolve('성공');
    });
}
var a = func1();
console.log(a);
func1().then(function(result){
    console.log('result : ', result);
});


function func2(){
    return new Promise(function(resolve, reject){
        setTimeout(function(){resolve('성공')},1000);
    });
}
func2().then(function(result){
    console.log('result2 : ', result);
    //then 안에서 리턴시키면 다음 then이 리턴값을 받는다. => chaining
    return 'a';
}).then(function(abc){
    console.log('abc : ', abc);
});



//return 했으니 함수를 받을 수 있다.
// var a = func1();
// console.log(a);

// var b = func2();
// console.log(b);