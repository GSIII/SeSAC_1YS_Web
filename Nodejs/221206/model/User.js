const User = (Sequelize,DataTypes)=>{
    return Sequelize.define(
        "user", 
        {
            id:{ 
                type: DataTypes.STRING(10),
                allowNull : false,
                primaryKey : true
            },
            name : { 
                type : DataTypes.STRING(5),
                allowNull : false
            },
            pw : { 
                type : DataTypes.STRING(12),
                allowNull : false
            }
        },
        {
            tableName : "user", 
            freezeTaableName : true, 
            timestamps : false 
        }
    )
}

module.exports = User; 

