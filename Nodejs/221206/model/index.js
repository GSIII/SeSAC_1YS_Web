const Sequelize = require("sequelize");
const config = require("../config/config.json")["development"];//데이터베이스 정보 불러오기

//2번째 줄에서 "development"키에 접근하고 있기 때문에 config에는 아래 객체가 담겨있다.
// config = {
//         "host": "localhost",
//         "database": "sesac_test",
//         "username": "user",
//         "password": "gsi0901",
//         "dialect": "mysql"
// }

const db = {};

const sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.Visitor = require("./Visitor")(sequelize, Sequelize); //Visitor을 불러와서 Visitor함수 실행한다. 인자는 15번째에서 정의한 sequelize, 1번째 줄에서 모듈 호출하고 있는 Sequelize
db.User = require("./User")(sequelize, Sequelize)

//db안에
// db = {
//     "Sequelize" : Sequelize,
//     "sequelize" : sequelize,
//     "visitor" : "Visitor.js"에서 리턴받은 값을 가지고 있다.
// }

module.exports = db;