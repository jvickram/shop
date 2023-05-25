const Mongoose = require("mongoose");
const Schema = Mongoose.Schema;

const CartSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
    products: {
      type: [Schema.Types.ObjectId],
      ref: "product",
      default: [],
    },
  },
  { timestamps: true }
);

module.exports = Mongoose.model("cart", CartSchema);
