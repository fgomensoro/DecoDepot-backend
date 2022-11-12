const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

async function index(req, res) {
  const users = await User.find();
  res.json({ users });
}

async function store(req, res) {
  const userAutentication = await User.findOne({ email: req.body.email });
  const passwordAutentication = req.body.password === req.body.confirmPassword;
  if (!userAutentication && passwordAutentication) {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const userCreated = await User.create({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      address: req.body.address,
      password: hashedPassword,
      phoneNumber: req.body.phoneNumber,
      isAdmin: false,
    });
    if (userCreated) {
      await userCreated.save();
      const payload = {
        id: userCreated._id,
        isAdmin: userCreated.isAdmin,
      };
      const token = jwt.sign({ payload }, "stringSecreto");
      const user = {
        token: token,
        firstname: userCreated.firstname,
        lastname: userCreated.lastname,
        email: userCreated.email,
        address: userCreated.address,
        phoneNumber: userCreated.phoneNumber,
        isAdmin: userCreated.isAdmin,
        orders: [],
      };
      return res.json({
        user,
      });
    }
  } else {
    if (!passwordAutentication) {
      return res.json({ msg: "⚠️ Password confirmation doesn't match Password " });
    } else {
      return res.json({ msg: "⚠️ User already exists" });
    }
  }
}

async function token(req, res) {
  try {
    let user = await User.findOne({ email: req.body.email });
    const checkPassword = bcrypt.compare(user.password, req.body.password);
    if (!user) {
      return res.json("credenciales inválidas user");
    }

    if (!checkPassword) {
      return res.json("credenciales inválidas password");
    }

    if (checkPassword) {
      const payload = {
        id: user._id,
        isAdmin: user.isAdmin,
      };
      const token = jwt.sign({ payload }, process.env.JWT_SECRET);
      user = {
        token: token,
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
        address: user.address,
        phoneNumber: user.phoneNumber,
        isAdmin: user.isAdmin,
        orders: [],
      };
      return res.json({
        user,
      });
    }
  } catch (error) {
    return res.status(400).json({ msg: "User not find" });
  }
}

module.exports = {
  index,
  store,
  token,
};
