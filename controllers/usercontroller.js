
const users=require("../models/user");
const moment=require("moment");

exports.userpost=async(req,res)=>{
const {firstname, email, mobile, status}=req.body;
if(!firstname || !email || !mobile || !status){
    return res.status(400).send("all input is required");
}
try {
    
    const preuser= await users.findOne({email:email});
    if(preuser)
    {
        return res.status(400).json({error:"user is already exits"});
    }else{
        const dateCreate=moment(new Date()).format('YYYY-MM-DD HH:mm:ss');
        const user=new users({
            firstname,email,mobile,status, datecreated:dateCreate

        })
        await user.save();
        return res.status(200).json(user);
    }

} catch (error) {
    console.log(error);
    return res.status(500).json(error);
}
}

exports.getalluser= async(req,res)=>{

//     const search=req.params.search;
//     const status=req.params.status;
 
//     const sort=req.params.sort || "";
//     const page=req.params.page;
//  const query={
//     firstname:{$regex:search, $option:"i"}
//  }
// if(status!="")
// query.status=status;


// const items_per_page=4;
// const skip=(page-1)*items_per_page;
// const count=await users.countDocuments(query);
    try {
        const allusers=await users.find()
        // .sort({datecreated:sort=="new"?-1:1})
        // .limit(items_per_page)
        // .skip(skip)
        // const pagecount=Math.ceil(count/items_per_page)
        return res.status(200).json(allusers);
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
}

exports.getsingleuser=async(req,res)=>{
    const {id}=req.params; 
    try {
        const singleuser=await users.findOne({_id:id});
        if(!singleuser)
        {
            return res.status(404).json({msg:"user not found"});
        }else{
            return res.status(200).json(singleuser);
        }

    } catch (error) {
        console.log(error);
        return res.status(400).json(error);

    }
}

exports.deleteuser=async(req,res)=>{
     const {id}=req.params;
    try {
        const deleteduser=await users.findByIdAndDelete({_id:id});
        if(!deleteduser){
            return res.status(404).json({msg:"user not found"});          
        }else{
            return res.status(200).json({msg:" user is deleted ", deleteduser});
        }

    } catch (error) {
        console.log(error);
        return res.status(400).json(error);

    }
}

exports.updateuser=async(req,res)=>{
  const {id}=req.params;
  
  const {firstname, email, mobile, status}=req.body;
try {
    
        const dateupdate=moment(new Date().format("YYYY-MM-DD hh:mm:ss"));
        const updateuserdata=await users.findByIdAndUpdate({_id:id},{
            firstname,email,mobile,gender,status, dateupdated:dateupdate
        },{new:true})
        await updateuserdata.save();
        return res.status(200).json(updateuserdata);
    

} catch (error) {
    console.log(error);
    return res.status(500).json({msg:error});
}

}