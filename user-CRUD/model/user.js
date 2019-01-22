var mongoose = require ('mongoose');
var Schema = mongoose.Schema;
var userDetails = new Schema({
    userName:{
        type:String,
        required:true
    },
    mailId:{
        type: String,
        required:true
    }
});
module.exports = mongoose.model('userDetails',userDetails); 