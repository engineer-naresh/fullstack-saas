//users, userName, userPrice, userAuthor, userGenre
const userModel = (sequelize, DataTypes)=>{
    const user = sequelize.define("user",{
        user:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        email:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        password:{
            type:DataTypes.STRING,
        },
    })
    return user;
}
module.exports = userModel; //export default userModel