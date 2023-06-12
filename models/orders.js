const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
var orderSchema = new mongoose.Schema(
  {
    quantity_total: {
      type: String,
      required: true,
    },
    price_total: {
      type: String,
      required: true,
    },
    customer: {
      type: mongoose.Types.ObjectId,
      ref: "customer",
    },
    products: [
      {
        product: {
          type: mongoose.Types.ObjectId,
     	  ref: "customer",
        },
        price: {
          type: String,
        },
        quantity: {
          type: String,
          default: 0,
        }
      },
    ],
  },
  { timestamps: true }
);

//Export the model
module.exports = mongoose.model("order", orderSchema);
