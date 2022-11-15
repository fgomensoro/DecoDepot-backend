const Order = require("../models/Order");

async function index(req, res) {
  const orders = await Order.find();
  return res.json(orders);
}

module.exports = {
  index,
};
