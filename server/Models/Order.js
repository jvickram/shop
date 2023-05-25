const Mongoose = require("mongoose");
const Schema = Mongoose.Schema;

const OrderedProductsSchema = new Schema(
  {
    product: {
      type: Schema.Types.ObjectId,
      ref: "product",
    },
    quantity: {
      type: Number,
      required: [true, "Order quantity is required"],
    },
  },
  { timestamps: false }
);

const OrderSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: [true, "User is required for order"]
    },
    totalItems: {
      type: Number,
      required: [true, "Total no. of items are required"],
    },
    orderTotalValue: {
      type: Number,
      required: [true, "Total order value is required"],
    },
    billingAddress: {
      type: Schema.Types.ObjectId,
      ref: "address",
    },
    paymentStatus: {
      type: Boolean,
      default: false,
    },
    products: {
      type: [OrderedProductsSchema],
      default: undefined,
    },
  },
  { timestamps: true }
);

module.exports = Mongoose.model("order", OrderSchema);
