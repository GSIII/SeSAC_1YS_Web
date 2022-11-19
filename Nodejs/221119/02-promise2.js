// new Promise(function(resolve,reject){
    //resolve : 함수형태, 성공했을 때 실행할 친구
    //reject : 함수형태, 실패 or 에러를 처리할 때 사용되는 친구
// });

// const { rejects } = require("assert")

function func3(flag){
    return new Promise(function(resolve,reject){
        if (flag) {
            resolve('flag는 true');
        } else {
            reject('flag는 false');
        }
    });
}
func3(false).then(
    function(msg){
        console.log('msg1 : ',msg);
    },
    //then에서 먼저 처리하면 catch로 가지 않는다.
    function(msg){
        console.log('msg2: ', msg)
    }
).catch(
    function(msg){
        console.log('msg3 : ', msg);
    }
);


// func3(false).then(
//     function(msg){
//         console.log('msg1 : ',msg);
//     },
//     function(msg) {
//         console.log('msg2 : ',msg);
//     }
// );