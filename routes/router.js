const express= require("express");
const router=express.Router();
const contollers=require("../controllers/usercontroller");
router.post("/user/register",contollers.userpost);
router.get("/user/getalluser",contollers.getalluser);
router.get("/user/singleuser/:id",contollers.getsingleuser);
router.delete("/user/deleteuser/:id",contollers.deleteuser);
router.put("/user/updateuser/:id",contollers.updateuser);

module.exports=router;
