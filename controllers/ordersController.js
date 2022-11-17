const Order = require("../models/Order");
const User = require("../models/User");

async function index(req, res) {
  const orders = await Order.find().populate({
    path: "user",
    User,
  });
  res.json(orders);
}

async function store(req, res) {
  const orderCreated = await Order.create({
    user: req.auth.id,
    products: req.body.prods,
    status: req.body.status,
  });

  await User.findByIdAndUpdate(req.auth.id, { $push: { orders: orderCreated } });

  res.status(201).json(orderCreated);
}

async function update(req, res) {
  const updatedOrder = await Order.findByIdAndUpdate(req.params.id, {
    status: req.body.status,
  });
  res.json(updatedOrder);
}

async function show(req, res) {
  const order = await Order.findById(req.params.id).populate({
    path: "user",
    User,
  });
  res.json(order); //response.data.product
}

module.exports = {
  index,
  store,
  update,
  show,
};
