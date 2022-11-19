const {Car} = require('./07-class.js');
//결과 [class Car]
console.log(Car);

var car1 = new Car('red');//constructor 함수를 실행한다. constructor함수는 인자를 받고 있으므로 값을 보내줘야한다.
console.log(car1.returnColor());
var car2 = new Car('blue');
console.log(car2.returnColor());
var car3 = new Car('yellow');
console.log(car3.returnColor());
