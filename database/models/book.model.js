//books, bookName, bookPrice, bookAuthor, bookGenre
const bookModel = (sequelize, DataTypes)=>{
    const Book = sequelize.define("book",{
        bookName:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        bookAuthor:{
            type:DataTypes.STRING,
            defaultValue:"Naresh",
        },
        bookGenre:{
            type:DataTypes.STRING,
        },
        bookPrice:{
            type:DataTypes.INTEGER,
            allowNull:false,
        }
    })
    return Book;
}
module.exports = bookModel; //export default bookModel