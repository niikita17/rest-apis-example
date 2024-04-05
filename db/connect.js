const { error } = require("console");
const mongoose=require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.mongodburl,{
    useUnifiedTopology:true,
    useNewUrlParser:true
}).then(()=>
    console.log("database connected sucessfully")).

    catch((error)=>{
        console.log(error);
    });
