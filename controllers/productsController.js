const Product = require("../models/Product");

async function index(req, res) {
  const products = await Product.find();
  res.json({ products });
}

module.exports = {
  index,
};
