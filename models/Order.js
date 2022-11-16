const { mongoose, Schema } = require("../dbInitialSetup");

const orderSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  products: [],
  delivered: Boolean,
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
