const express=require('express');
const router=express.Router();
const {get_user,add_user,update_user,delete_user}=require('../../modules/user_modules/user_auth_module')

router.route('/add').post(add_user);
router.route('/get').post(get_user);
router.route('/update').patch(update_user);
router.route('/delete').delete(delete_user);


module.exports=router;