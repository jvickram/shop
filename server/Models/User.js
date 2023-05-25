const Mongoose = require("mongoose");
const Schema = Mongoose.Schema;
const bcrypt = require("bcrypt");


const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "User name is required"],
    },
    email: {
      type: String,
      required: [true, "User email is required"],
      unique: true,
    },
    phone: {
      type: Number,
      required: [true, "User phone number is required"],
    },
    password: {
      type: String,
      required: [true, "User password is required"],
    },
    address: {
      type: [Schema.Types.ObjectId],
      ref: "address",
      default: [],
    },
    cart: {
      type: Schema.Types.ObjectId,
      ref: "cart",
    },
    wishlist: {
      type: Schema.Types.ObjectId,
      ref: "wishlist",
    },
    orders: {
      type: [Schema.Types.ObjectId],
      ref: "order",
      default: [],
    },
    payments: {
      type: [Schema.Types.ObjectId],
      ref: "payment",
      default: []
    }
  },
  { timestamps: true }
);

UserSchema.pre("save", async function () {
  this.password = await bcrypt.hash(this.password, 12);
});

module.exports = Mongoose.model("user", UserSchema);
