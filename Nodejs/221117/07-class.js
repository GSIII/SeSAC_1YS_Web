class Car {
    constructor(color) {
        this.color = color;
        this.isDoor = true;
    }
    move(){
        console.log('움직인다.');
    }
    stop(){
        console.log('멈춘다.');
    }
    returnColor(){
        return this.color;
    }
}

//car라는 클래스를 객체로 감싸서 내보내자
module.exports={Car};