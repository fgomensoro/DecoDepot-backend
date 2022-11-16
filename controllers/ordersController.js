const Order = require("../models/Order");

async function index(req, res) {
  const orders = await Order.find();
  res.json({ orders });
}

async function store(req, res) {
  const orderCreated = await Order.create({
    name: req.body.name,
    products: [req.body.prods],
    delivered: req.body.delivered,
  });
  res.json(orderCreated);
}

async function update(req, res) {
  const updatedOrder = await Order.findByIdAndUpdate(
    { _id: req.params.id },
    { delivered: req.body.delivered },
  );
  res.json(updatedOrder);
}

module.exports = {
  index,
  store,
  update,
};
