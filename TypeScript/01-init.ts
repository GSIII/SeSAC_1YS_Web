//변수
//키워드 변수이름 : 타입 = 값;
//타입표기( type annotation )

//primitive 타입
const str: String = "string";
const num: number = 1;
const bool: boolean = true;

// object 타입
const arr1: number[] = [1, 2, 3];
const arr2: String[] = ["a", "w", "e"];
const arr3: Array<number> = [1, 2, 3];
// console.log(arr2[0].concat("!"));

//tuple : 길이가 고정되고 타입이 고정되어 있는 배열)
const arr4: [boolean, string] = [true, "a"];

//enum : 특정 값을 열거하는 집합
enum Names {
  sesac,
  새싹,
}
const name1: Names = Names.sesac;
// name1 = 'sesac' //에러

// any(최대한 안쓰는게 좋다) 모든 타입에 대해서 허용한다.
const any1: any = [1, 2, 3]; //어떤 타입이 들어가든 상관없다.

//void : undefined와 null 만 들어갈 수 있는 타입 (변수에서는 잘 쓰지 않는다. 함수에서는 리턴값이 없을 때 사용)
const var1: void = undefined;

//never : 절대 끝까지 도달하지 않는 것에 사용한다.
function neverEnd(): never {
  while (true) {}
}

//함수
// ( 매개변수 : type ) : <return>
// function 함수이름 (매개변수:type) : 반환타입 {}
function sum1(a: number, b: number): number {
  return a + b;
}
// console.log(sum1(1, 2));
// 타입스크립트에서 매개변수값은 필수
// console.log(sum1('1',2)); //에러
// console.log(sum1(1,2,3)); //에러

// 만약 선택적으로 받고 싶게 하고싶다면
//a는 필수적으로 받게 하고 b는 선택적으로 받게 하고 있다.
// ?표시를 넣으면 number 또는 undefined가 올 수 있따. 따라서 리턴값은 num+num 혹은 num+undefined가 올 수 있다.
// 따라서 리턴 타입을 void로 설정해준 것이다.
function sum2(a: number, b?: number): void {
  console.log(a);
  console.log(b);
}
sum2(1);
sum2(1, 2);

// 리턴 타입을 void로 하지 않을 때는 조건문 추가해준다.
function sum3(a: number, b?: number): number {
  if (b == undefined) return a;
  else return a + b;
}

// interface(미리 정의해 놓는 규칙)
interface Student {
  name: string;
  age: number;
  nickname?: string; //nickname은 필수 아님
}
const student1: Student = {
  name: "이름1",
  age: 10,
};
const student2: Student = {
  name: "이름2",
  age: 20,
  nickname: "닉네임2",
};
function check(stu: Student) {
  console.log(stu.name);
}
check(student1);
check(student2);

//class
// class 클래스이름 {
//     변수명:타입;
//     constructor(변수:타입){
//         this.변수명 = 변수
//     }
// }
class Person {
  id: string;
  constructor(name: string, age: number) {
    this.id = name + age;
  }
}
const person1 = new Person("이름3", 30);
console.log(person1.id);

interface Shape {
  width: number;
  getLength(): number;
}
class Square implements Shape {
  //readonly 속성을 주면 return this.width=width
  constructor(readonly width: number) {}
  // height: number; //정해놓은 규칙을 지키는 선에서 다른 것을 추가해도 상관 없다.
  getLength(): number {
    return this.width;
  }
}
const square1 = new Square(10);
console.log(square1.getLength());

class Person2 {
  constructor(public name: string, private age: number) {
    this.name = name;
    this.age = age;
  }
}
const person3 = new Person2("a", 1);
console.log(person3.name); //public 이라 볼 수 있지만
// console.log(person3.age) //에러 private으로 지정했기 때문에 볼 수 없다.

// 제네릭 : 타입을 함수의 매개변수처럼 사용하는 것
// 재사용 가능한 컴포넌트를 위해 사용한다.
//any를 쓰지 않는 이유는 any는 모든 타입에 허용하니까 타입을 지정할 수 없다.
// <T>
function getText<T>(text: T): T {
  return text;
}
console.log(getText<string>("a")); //T자리에 string 이 들어간다.
console.log(getText<number>(1));
