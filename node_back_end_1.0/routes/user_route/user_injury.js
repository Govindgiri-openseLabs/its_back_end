const express=require('express');
const router=express.Router();
const {get_injury,add_injury,delete_injury}=require('../../modules/user_modules/user_injury_module.js')

router.route('/add').post(add_injury);
router.route('/get').post(get_injury);
router.route('/delete').patch(delete_injury);


module.exports=router;