const { mongoose, Schema } = require("../dbInitialSetup");

const orderSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  products: Array,
  status: {
    type: String,
    enum: {
      values: ["Not paid", "Paid", "Undelivered", "Delivered"],
      message: "This value is not supported",
    },
  },
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
