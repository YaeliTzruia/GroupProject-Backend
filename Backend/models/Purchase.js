const mongoose = require("mongoose");

const PurchaseSchema = new mongoose.Schema(
  {
    customer: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    paymentMethod: { type: String, required: true },
    items: [{ product: {type: mongoose.Schema.Types.ObjectId, ref: "Product" }, quantity: Number, required: true}],
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
                total: {$sum: {$multiply: ["$price", "$quantity"]}}
            }
        }
    ])
}

const Purchase = mongoose.model("Purchase", PurchaseSchema);

module.exports = Purchase;