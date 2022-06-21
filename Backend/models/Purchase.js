const mongoose = require("mongoose");
const Product = require("./Product");

const PurchaseSchema = new mongoose.Schema(
  {
    customer: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    total: { type: Number },
    paymentMethod: { type: String },
    items: [
      {
        product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
        quantity: Number,
      },
    ],
  },
  {
    timestamps: true,
  }
);

PurchaseSchema.methods.returnTotal = function () {
  return this.aggregate([
    {
      $group: {
        _id: null,
        total: { $sum: { $multiply: ["$price", "$quantity"] } },
      },
    },
  ]);
};

const Purchase = mongoose.model("Purchase", PurchaseSchema);

module.exports = Purchase;
