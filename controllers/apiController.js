const Product = require("../models/Product");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const formidable = require("formidable");

async function ShowFeatured(req, res) {
  const featured = await Product.find({ featured: true });
  res.json(featured);
}

module.exports = {
  ShowFeatured,
};
