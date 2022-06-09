const mongoose = require("mongoose");

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
    purchases: [{ type: mongoose.Schema.Types.ObjectId, ref: "Purchase" }],
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
    password: this.password,
    accessLevel: this.accessLevel,
    purchases: this.purchases,
  };
};

const User = mongoose.model("User", UserSchema);

module.exports = User;
