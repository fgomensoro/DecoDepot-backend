const Order = require("../models/Order");

async function index(req, res) {
  const orders = await Order.find();
  res.json({ orders });
}

async function store(req, res) {
  const orderCreated = await Order.create({
    name: req.body.name,
    products: req.body.prods,
    delivered: req.body.delivered,
  });
  res.json(orderCreated);
}

module.exports = {
  index,
  store,
};
