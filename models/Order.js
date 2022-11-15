const { mongoose, Schema } = require("../dbInitialSetup");

const orderSchema = new Schema({
  name: String,
  products: [],
  delivered: Boolean,
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
