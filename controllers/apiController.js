const Product = require("../models/Product");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const formidable = require("formidable");

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
  const storedHash = user.password;
  const checkPassword = await bcrypt.compare(req.body.password, storedHash);

  if (!user) {
    return res.json("credenciales inválidas user");
  }

  if (!checkPassword) {
    return res.json("credenciales inválidas password");
  }

  const payload = {
    email: req.body.email,
    id: user.id,
    username: user.username,
  };

  const token = jwt.sign(payload, process.env.JWT_SECRET);

  res.json({
    token,
  });
}

module.exports = {
  storeUser,
  token,
};
