const { mongoose, Schema } = require("../dbInitialSetup");
const bcrypt = require("bcryptjs");

const orderSchema = new Schema({
  name: String,
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
