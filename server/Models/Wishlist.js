const Mongoose = require("mongoose");
const Schema = Mongoose.Schema;

const WishlistSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: [true, "User is required for order"]
    },
    products: {
      type: [Schema.Types.ObjectId],
      ref: "product",
      default: [],
    },
  },
  { timestamps: true }
);

module.exports = Mongoose.model("wishlist", WishlistSchema);
