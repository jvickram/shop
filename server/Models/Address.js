const Mongoose = require("mongoose");
const Schema = Mongoose.Schema;

const addressSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
    address: {
      type: String,
      required: [true, "Your address is required"],
    },
    city: {
      type: String,
      required: [true, "City is required"],
    },
    state: {
      type: String,
      required: [true, "State is required"],
    },
    country: {
      type: String,
      required: [true, "Country is required"],
    },
    pincode: {
      type: Number,
      required: [true, "Pincode is required"],
    },
  },
  { timestamps: true }
);

module.exports = Mongoose.model("address", addressSchema);
