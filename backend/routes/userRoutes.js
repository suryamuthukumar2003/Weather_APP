const express=require('express');
const {createUser, validateUser}=require('../controllers/userController');

const router=express.Router();

router.post('/new',createUser);
router.post('/login',validateUser);
module.exports=router;