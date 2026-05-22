const {Sequelize, DataTypes} = require("sequelize");
// const bookModel = require("./models/book.model");
const sequelize = new Sequelize(process.env.DATABASE_URL);
sequelize.authenticate().then(()=>{
    console.log("Database connection successfull!")
}).catch((error)=>{
    console.log("Error"+ error)
})

const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize
db.books = require("./models/book.model")(sequelize,DataTypes)

//migrate code 
sequelize.sync({alter:false}).then(()=>{
    console.log("Migrate successfull!");
});
module.exports = db;