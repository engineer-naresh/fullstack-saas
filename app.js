const express =  require("express");
const { books, users } = require("./database/connection");
const app = express();
require("./database/connection");
app.use(express.json());
app.get('/books',async(request,response)=>{
    //code logic to retrieve books goes here..
   const datas = await books.findAll(); //findAll() always returns array
    response.json({
        message:"All books shown here",
        datas
    });
});
app.post('/books',async(req,res)=>{
    //code logic to add books goes here
    const {bookName,bookAuthor,bookGenre,bookPrice} =req.body
    await books.create({
        bookName:bookName,
        bookAuthor:bookAuthor,
        bookGenre:bookGenre,
        bookPrice:bookPrice
    })
    console.log(bookName,bookAuthor,bookGenre,bookPrice)

    res.json({
    message:"Books added successfully!"
})
});

app.patch("/books/:id",(req,res)=>{
    //code to update books goes here
    res.json({
        message:"Books updated successfully!"
    });
});


app.delete("/books/:id",(req,res)=>{
    //code to delete books goes here
    res.json({
        message:"Books deleted successfully!"
    });     
});
// DATABASE_URL="postgresql://postgres.rvqosousksvaocazuqnm:[YOUR-PASSWORD]@aws-1-ap-south-1.pooler.supabase.com:6543/postgres"

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