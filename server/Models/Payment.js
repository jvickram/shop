const Mongoose = require("mongoose");
const Schema = Mongoose.Schema;

const PaymentSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: [true, "User is required for payment"],
    },
    status: {
      type: Boolean,
      required: [true, "Payment status is required"],
    },
    amount: {
      type: Number,
      required: [true, "Payment amount are required"],
    },
  },
  { timestamps: true }
);

module.exports = Mongoose.model("payment", PaymentSchema);
