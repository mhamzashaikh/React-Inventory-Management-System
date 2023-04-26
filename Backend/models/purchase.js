const mongoose = require("mongoose");

const PurchaseSchema = new mongoose.Schema(
  {
    userID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    ProductID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "product",
      required: true,
    },
    QuantityPurchased: {
      type: Number,
      required: true,
    },
    PurchaseDate: {
      type: String,
      required: true,
    },
    TotalPurchaseAmount: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const Purchase = mongoose.model("purchase", PurchaseSchema);
module.exports = Purchase;
