const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    variety: { type: String },
    category: { type: String, required: true },
    subcategory: { type: String },
    size: { type: String, required: true },
    brand: {
      type: String,
      required: true,
    },
    price: { type: Number, required: true },
    salePrice: { type: Number },
    quantity: { type: Number, required: true },
    description: { type: String },
    allergens: [{ type: String }],
    keywords: [{ type: String, required: true }],
    photoURL: [{ type: String }],
  },
  {
    timestamps: true,
  }
);

ProductSchema.methods.toProductDetailsJSON = function () {
  return {
    name: this.name,
    variety: this,
    category: this.category,
    size: this.size,
    brand: this.brand,
    price: this.price,
    quantity: this.quantity,
    description: this.description,
    allergens: this.allergens,
    keywords: this.keywords,
  };
};

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
