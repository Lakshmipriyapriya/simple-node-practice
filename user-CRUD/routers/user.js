var express = require('express');
var router = express.Router();
var userOperations = require('../resources/user-operations');

router.post('/',function(req,res,next){
    userOperations.createUser(req,res);
});
router.get('oneUser/:id',function(req,res,next){
    userOperations.getUser(req,res);
});
router.get('/all',function(req,res){
    userOperations.getAllUsers(req,res);
});
router.put('/modify/:id',function(req,res){
    userOperations.updateUser(req,res);
});
router.delete('/remove/:id',function(req,res){
    userOperations.deleteUser(req,res);
});
module.exports = router;
