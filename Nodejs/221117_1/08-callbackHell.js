function login(id,pw,cb){
    setTimeout(function(){
        console.log('사용자 입장');
        cb(id);
    },3000);
}

function getVideo(id, cb) {
    setTimeout(function(){
        console.log(id + '의 비디오 리스트');
        cb(['아바타', '라라랜드']);
    },2000);
}

function getDetail(video, cb) {
    setTimeout(function(){
        cb('비디오 제목 : ' + video);
    },1000);
}

login('kim', '1234', function(user){
    getVideo(user, function(video){
        getDetail(video[0], function(msg){
            console.log(msg)
        });
    });
});

//동기식이라면 아래와 같은 코드로 진행되면 된다.
// let user = login(id,pw);
// let videos = getVideo(user);
// let msg = getDetail(video[0]);
// console.log(msg);



// // 4번째 cb
// cb = function(user){
//     getVideo(user, );
// }
// //11번째 cb
// cb = function(videos){
//     getDetail(videos[0], );
// } 
// // 17번째 cb
// cb = function(msg){
//     console.log( msg );
// }
