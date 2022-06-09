const productSchema = {
  type: "object",
  properties: {
    name: { type: String },
    variety: { type: String },
    category: { type: String },
    size: { type: String },
    brand: { type: String },
    price: { type: String },
    quantity: { type: integer },
    allergens: [{ type: String }],
    keywords: [{ type: String }],
  },
  required: [
    "name",
    "category",
    "size",
    "brand",
    "price",
    "quantity",
    "allergens",
    "keywords",
  ],
};

module.exports = productSchema;
