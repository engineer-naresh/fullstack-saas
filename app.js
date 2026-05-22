const express =  require("express");
const { books } = require("./database/connection");
const {fetchBooks,addBooks,updateBook, deleteBook} = require("./controllers/book.controller");
const app = express();
const bookRoute = require("./routes/book.route");
require("./database/connection");
app.use(express.json());
// book routes using mvcr architecture
app.use("",bookRoute);

app.listen(3000,()=>{
    console.log("server/backend has started at port 3000");
})