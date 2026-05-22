const { books } = require("../database/connection");

const fetchBooks = async(request,response)=>{
    //code logic to retrieve books goes here..
   const datas = await books.findAll(); //findAll() always returns array
    response.json({
        message:"All books shown here",
        datas
    });
    console.log("fetch books called");
};
const addBooks = async(req,res)=>{
    //code logic to add books goes here
    const {bookName,bookAuthor,bookGenre,bookPrice} =req.body
    
    await books.create({
        bookName,
        bookAuthor,
        bookGenre,
        bookPrice
    })
    console.log(req.body);
    res.json({
    message:"Books added successfully!"
})
}
const updateBook = (req,res)=>{
    //code to update books goes here
    res.json({
        message:"Books updated successfully!"
    });
}
const deleteBook = (req,res)=>{
    //code to delete books goes here
    res.json({
        message:"Books deleted successfully!"
    });     
}
module.exports = {fetchBooks, addBooks, updateBook, deleteBook};