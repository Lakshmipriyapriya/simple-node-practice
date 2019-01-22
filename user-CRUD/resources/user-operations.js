var userData = require('../model/user');

var createUser = function(req,res){
    console.log('req.body',req.body);
    userData.create(req.body,function(err,data){
        if(!err){
            console.log('user details created',data);
            res.send({
                status:200,
                message: data
            });
        } else{
            res.send(err);
        }
    })
}
var getUser = function(req,res){
    userData.findById(req.params.id,function(err,data){
        if(!err){
            console.log('data from db:',data);
            res.send({
                status:200,
                message:data
            });
        } else {
            res.send(err);
        }
    })
}
var getAllUsers = function(req,res){
    userData.find(function(err,data){
        if(!err){
            res.send({
                status:200,
                message:data
            });
        } else {
            res.send(err);
        }
    })
}
var updateUser = function(req,res){
    userData.findByIdAndUpdate(req.params.id,req.body,function(err,data){
        if(!err){
            res.send({
                status:200,
                message : data
            });
        } else {
            res.send(err);
        }
    })
}
var deleteUser = function(req,res){
    userData.findByIdAndRemove(req.params.id,function(err,data){
        if(!err){
            res.send({
                status:200,
                message: 'user deleted'
            });
        } else {
            res.send(err);
        }
    })
}
exports.createUser = createUser;
exports.getUser = getUser;
exports.getAllUsers = getAllUsers;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;