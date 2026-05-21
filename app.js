const express =  require("express");
const app = express();
require("./database/connection");
app.get('/books',(request,response)=>{
    //code logic to retrieve books goes here..

    response.json({
        message:"All books shown here"
    });
});
app.post('/books',(req,res)=>{
    //code logic to add books goes here
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


app.listen(3000,()=>{
    console.log("server/backend has started at port 3000");
})