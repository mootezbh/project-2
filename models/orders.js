const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
var orderSchema = new mongoose.Schema(
  {
    quantity: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    customer: {
      type: mongoose.Types.ObjectId,
      ref: "customer",
    },
  },
  { timestamps: true }
);

//Export the model
module.exports = mongoose.model("order", userSchema);
