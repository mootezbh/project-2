const mongoose = require("mongoose");
const user = require("./user");
const providerSchema = new mongoose.Schema({
  company_name: {
    type: String,
  },
  product: [{
    type: mongoose.Types.ObjectId,
    ref: "product"
  }]
});
user.discriminator("provider",providerSchema);
module.exports = mongoose.model("provider");
