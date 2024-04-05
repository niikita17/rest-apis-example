require("dotenv").config();
const express=require("express");
const app=express();
const cors=require("cors");
const PORT=3002;
const router=require("./routes/router")
const DB=require("./db/connect")
app.use(cors());
app.use(express.json());

app.use(router);    
app.listen(PORT,()=>{
    console.log("sever is running");
})