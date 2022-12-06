const Visitor = (Sequelize,DataTypes)=>{
    return Sequelize.define(
        "visitor", //mysql문에서 create table visitor()
        {
            id:{ //id int not null primary key auto_increment
                type: DataTypes.INTEGER,
                allowNull : false,
                primaryKey : true,
                autoIncrement : true
            },
            name : { //name varchar(10) not null
                type : DataTypes.STRING(10),
                allowNull : false
            },
            comment : { //comment mediumtext
                type : DataTypes.TEXT('medium')
            }
        },
        {
            tableName : "visitor", //sequelize는 테이블을 복수형으로 만들려고한다. => 테이블 이름이 visitors가 된다는 것이다.
            freezeTaableName : true, //테이블 이름을 복수형으로 하지 않겠다.
            timestamps : false // timestamp의 디폴트값은 ture이다. 데이터가 생성/수정될 때마다 timestapm를 찍는다. => 시간저장 사용하고 싶지 않으면 false로 적어줘야한다. 
        }
    )
}

module.exports = Visitor; //model/index.js에서 require한다.