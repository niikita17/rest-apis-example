const mongoose=require("mongoose");
const validator=require("validator");


const userSchema=new mongoose.Schema({
    firstname:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw error ("not valid Email");
            }
        }
    },
    mobile:{
        type:Number,
        required:true,
        minlength:10,
        maxlength:10
    },
    status:{
        type:String,
        enum:["Active","In-Active"],
        default:"Active"
    },
    datecreated:Date,
    dateUpdated:Date
})

const users=new mongoose.model("users",userSchema);
module.exports=users;
