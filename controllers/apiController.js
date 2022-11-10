const Product = require("../models/Product");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const formidable = require("formidable");

async function ShowFeatured(req, res) {
  const featured = await Product.find({ featured: true });
  res.json(featured);
}

async function storeUser(req, res) {
  console.log("hola");
  const newUser = await new User({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    password: req.body.password,
    adress: req.body.adress,
    phoneNumber: req.body.phoneNumber,
  });

  await newUser.save();
  res.json("algo paso");
}

module.exports = {
  ShowFeatured,
  storeUser,
};
