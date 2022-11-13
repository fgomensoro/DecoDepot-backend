const Product = require("../models/Product");
const Category = require("../models/Category");

async function index(req, res) {
  const products = await Product.find().populate({ path: "category", Category });
  res.json({ products });
}

async function detail(req, res) {
  const product = await Product.findOne({ _id: req.params.id }).populate({
    path: "category",
    Category,
  });
  res.json({ product });
}

module.exports = {
  index,
  detail,
};
