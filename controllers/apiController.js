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

async function token(req, res) {
  const user = await User.findOne({ email: req.body.email });

  if (!user) return res.status(404).json("Credenciales Incorrectas");

  if (user.password !== req.body.password) {
    return res.status(404).json("Credenciales Incorrectas");
  }

  const loggedUser = {
    id: user._id,
    firstname: user.firstname,
    lastname: user.lastname,
    email: user.email,
    admin: user.admin,
  };

  let payload = {
    email: req.body.email,
    id: user.id,
    username: user.username,
  };

  const token = jwt.sign(payload, "textoSecreto");
  return res.status(200).json({ token, loggedUser });
}

module.exports = {
  ShowFeatured,
  storeUser,
  token,
};
