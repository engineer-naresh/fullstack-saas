const {Sequelize, DataTypes} = require("sequelize")
const sequelize = new Sequelize(process.env.DATABASE_URL);
sequelize.authenticate().then(()=>{
    console.log("Database connection successfull!")
}).catch((error)=>{
    console.log("Error"+ error)
})

const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize
module.exports = db;