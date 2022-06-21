const mongoose = require("mongoose");
const Purchase = require("./Purchase");
const Product = require("./Product");

const UserSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    phone: { type: String, required: true },
    email: {
      type: String,
      required: true,
      unique: true,
      /*get: (v) => {
        return "****" + v.split("@")[1];
      },*/
    },
    password: { type: String, required: true },
    accessLevel: { type: String, default: "0", enum: ["0", "1", "2", "3"] },
    purchases: [{type: mongoose.Schema.Types.ObjectId, ref: "Purchase"} ],
    savedCart: [
      {
        product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
        quantity: { type: Number },
      },
    ],
  },
  {
    timestamps: true,
  }
);

UserSchema.methods.toProfileJSON = function () {
  return {
    firstName: this.firstName,
    lastName: this.lastName,
    phone: this.phone,
    email: this.email,
    accessLevel: this.accessLevel,
    purchases: this.purchases,
    savedCart: this.savedCart,
    createdAt: this.createdAt,
    updatedAt: this.updatedAt,
  };
};

const User = mongoose.model("User", UserSchema);

module.exports = User;
