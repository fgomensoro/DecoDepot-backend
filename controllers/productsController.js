const Product = require("../models/Product");
const Category = require("../models/Category");
async function index(req, res) {
  const products = await Product.find().populate({ path: "category", Category });
  res.json({ products });
}

module.exports = {
  index,
};
