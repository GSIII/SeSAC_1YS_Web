//배열 구조분해는 순서를 찾아서 들어가기 때문에 순서를 지켜줘야 한다.
let list = ['apple', 'banana'];
[item1, item2]=list;
//let item1=list[0];
//let item2=list[1]; 를 줄여서 위 코드처럼 쓰는거다.
console.log(item1);
console.log(item2);

[item1, item2 ='peach', item3='orange']=list;
//item1, item2에 값이 없으면 pearch넣어라 item3에 값이 없으면 orange넣어라. 값이 없을 경우 대체해서 값을 넣는 것
console.log(item1);
console.log(item2);
console.log(item3);

let x = 1;
let y = 3;
//x에 3을 넣고 y에 1을 넣고 싶으면 아래처럼 하면 된다.
[y,x]=[x,y];
//x값이 y에 들어가고, y값이 x에 들어간다.
//[1,3]이라는 배열을 만들고 구조분해를 통해서
//구조분해를 통해서 [a,b]=[1,3] 
console.log(x);
console.log(y);
console.log('=============================================================')



//객체 구조분해 = 이름으로 키값을 찾아서 알아서 들어간다. 순서가 달라도 상관없다.
let obj = {
    a:'one',
    b:'two',
    e:'1',
    f:'2'
}

let {b : key1, a , c='three'} = obj; //변수의 이름을 바꾸고 싶으면 :(콜론)이용한다
console.log(a);
console.log(key1);
console.log(c);

console.log('==========================================');

//...은 전개 연산자=> 간단히 말해서 나머지 애들 가져오는것.
//구조분해할때 전개연산자는 가장 마지막에 들어가야한다. 앞에가 추출되고 나머지를 출력하는 것이기 때문이다.
let {b, ...rest} = obj;
console.log(b);
console.log(rest);
