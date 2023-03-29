const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var subCategorySchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true,
        index:true,
    },
    category: {
        type: mongoose.Types.ObjectId,
        ref: "category"
    },
    product : [{
        type: mongoose.Types.ObjectId,
        ref: "Product"
    }]
});

//Export the model
module.exports = mongoose.model('subcategory', subCategorySchema);