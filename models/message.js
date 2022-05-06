let mongoose = require('mongoose');


let messageSchema = mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    details:{
        type: String,
        required:true,
    }
})

let message = module.exports = mongoose.model('message', messageSchema);