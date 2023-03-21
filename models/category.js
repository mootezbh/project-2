const mongoose = require('mongoose');


var categorySchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true,
    },
    description:{
        type:String,
        required:true,
    },
    subcategory: [{
        type: mongoose.Types.ObjectId,
        ref: "subCategory"
    }]
});

//Export the model
module.exports = mongoose.model('category', categorySchema);