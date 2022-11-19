//함수한테 함수를 파라미터로 보내서 실행 순서를 정해주는 것이 콜백함수이다.
function func1(callback){
    console.log('func1');
    callback('이름');

}


function func2(name){
    console.log('func2');
    console.log('name : ', name);   
}
func1(func2);


console.log('================================================')

// function func2(name){
//     console.log('func2');
//     console.log('name : ', name);   
// }
// func1(func2);

//위 코드와 아래 코드는 같은 코드이다.
//위 코드는 함수를 따로 빼놓은 것이다. 
func1(function(name){
    console.log('func2');
    console.log('name : ', name);
})