const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    variety: { type: String },
    category: { type: String, required: true },
    size: { type: String, required: true },
    brand: {
      type: String,
      required: true,
    },
    price: { type: String, required: true },
    quantity: { type: Number, required: true },
    allergens: [{ type: String, required: true }],
    keywords: [{ type: String, required: true }],
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
