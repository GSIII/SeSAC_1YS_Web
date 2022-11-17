function call(name,cb) {
    setTimeout(function(){
        console.log("사용자는 " + name);
        console.log("시작은 call");
        cb(name);
    },2000);
}
function back(cb) {
    setTimeout(function(){
        console.log("두번째는 back");
        cb();
    },1000);
}
function hell(cb) {
    setTimeout(function(){
        cb();
    },500);
}

call('kim',function(user){
    back(function(){
        hell(function(){
            console.log("세번째는 hell");
        });
    });

});

