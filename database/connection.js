const {Sequelize, DataTypes} = require("sequelize")
const sequelize = new Sequelize("postgresql://postgres.rvqosousksvaocazuqnm:TUKyZ23TFcCkS9uz@aws-1-ap-south-1.pooler.supabase.com:6543/postgres");
sequelize.authenticate().then(()=>{
    console.log("Database connection successfull!")
}).catch((error)=>{
    console.log("Error"+ error)
})

const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize
module.exports = db;