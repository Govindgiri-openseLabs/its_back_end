const express=require('express');
const router=express.Router();
const {get_admin,add_admin,update_admin,delete_admin}=require("../../modules/admin_modules/admin_auth_module.js");

router.route("/get").post(get_admin);
router.route("/add").post(add_admin);
router.route("/update").patch(update_admin);
router.route("/delete").delete(delete_admin);

module.exports=router;