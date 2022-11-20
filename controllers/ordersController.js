const Order = require("../models/Order");
const User = require("../models/User");
const { updateStock } = require("./productsController");

async function index(req, res) {
  const orders = await Order.find().populate({
    path: "user",
    User,
  });
  res.json(orders);
}

async function store(req, res) {
  const chekStock = await updateStock(req.body.products);
  if (chekStock) {
    const orderCreated = await Order.create({
      user: req.auth.id,
      products: req.body.products,
      status: req.body.status,
      shippingAddress: req.body.address,
      total: req.body.total,
    });
    await User.findByIdAndUpdate(req.auth.id, { $push: { orders: orderCreated } });
    return res.status(201).json(orderCreated);
  } else {
    return res.json({ msg: "Sorry! We are out of sotck! Update your cart and try it again" });
  }
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
