const express =  require("express");
const { books, users } = require("./database/connection");
const {fetchBooks,addBooks,updateBook, deleteBook} = require("./controllers/book.controller");
const app = express();
require("./database/connection");
app.use(express.json());
app.get('/books',fetchBooks);
app.post('/books',addBooks);

app.patch("/books/:id",updateBook);


app.delete("/books/:id",deleteBook);

app.get('/users',async(request,response)=>{
    const userData= await users.findAll()
    response.json({
        message:"Users shown here",
        userData
    })
})

app.listen(3000,()=>{
    console.log("server/backend has started at port 3000");
})