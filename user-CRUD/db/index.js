var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/userDetails',function(err,res){
    if(!err){
        console.log('database connected');
    } else{
        console.log('error in connecting to db',err);
    }
});