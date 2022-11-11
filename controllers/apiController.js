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
  console.log(req.body);
  const userAutentication = await User.findOne({ email: req.body.email });
  const passwordAutentication = req.body.password === req.body.confirmPassword;
  if (!userAutentication && passwordAutentication) {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const userCreated = await User.create({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      adress: req.body.adress,
      password: hashedPassword,
      phoneNumber: req.body.phoneNumber,
    });
    if (userCreated) {
      return res.json(userCreated);
    }
  } else {
    if (!passwordAutentication) {
      res.json("⚠️ Password confirmation doesn't match Password ");
    } else {
      res.json("⚠️ User already exists");
    }
  }
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
