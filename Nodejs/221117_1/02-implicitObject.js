// console.log(global);
// // global.console.log(golobal.console)은 아래 코드와 같은 코드이다.
// console.log(global.console);

let obj = {
    out:{
        in:{
            key:'value'
        }
    }
}
console.log(obj);
console.log(obj['out']);
// 에러들만 모아서 출력할 수 있다.
console.error('error');
//time과 timeEnd에는 똑같은 파라미터가 들어가야 시간이 측정된다.
console.time('시간');
console.timeEnd('시간');
//콘솔에서 표 형태를 보고싶을때
console.table([{name:'abc'},{name:'def'}]);
//객체 구조를 보여주는 dir 여기서는 obj의 구조를 보여준다. colors:true로 하면 색이 나타남 depth는 객체 구조에서 어느 단계까지 파악하고 싶은지 보여주는 것.
console.dir(obj,{colors:true, depth:1});
console.dir(obj,{colors:true, depth:2});
//에러가 어디에서 나왔는지 알려주는 것
console.trace("Error");