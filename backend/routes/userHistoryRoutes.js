const express=require('express');
const{addHistory,deleteAllHistory,deleteHistory,getHistory}=require('../controllers/historyController');
const verifyUser=require('../utils/verifyToken');

const router=express.Router();

router.post('/getWeather',verifyUser,addHistory);
router.get('/gethistory/:userId',verifyUser,getHistory);
router.delete('/deletehistory/:id',verifyUser,deleteHistory);
router.delete('/allhistory/:userId',verifyUser,deleteAllHistory);

module.exports=router;