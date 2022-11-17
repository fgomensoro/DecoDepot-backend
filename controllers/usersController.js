const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const slugify = require("slugify");

async function index(req, res) {
  const users = await User.find();
  res.json(users);
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
      userCreated.slug = slugify(`${userCreated.firstname} ${userCreated.lastname}`, "_");
      await userCreated.save();
      const payload = {
        id: userCreated._id,
        isAdmin: userCreated.isAdmin,
      };
      const token = jwt.sign(payload, process.env.JWT_SECRET);
      const user = {
        token: token,
        firstname: userCreated.firstname,
        lastname: userCreated.lastname,
        email: userCreated.email,
        address: userCreated.address,
        phoneNumber: userCreated.phoneNumber,
        isAdmin: userCreated.isAdmin,
        orders: [],
        slug: userCreated.slug,
      };
      return res.json(user);
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
    const checkPassword = await bcrypt.compare(req.body.password, user.password);

    if (!checkPassword) {
      return res.json({ msg: "Invalid credentials" });
    }

    if (checkPassword) {
      const payload = {
        id: user._id,
        isAdmin: user.isAdmin,
      };
      const token = jwt.sign(payload, process.env.JWT_SECRET);
      user = {
        token: token,
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
        address: user.address,
        phoneNumber: user.phoneNumber,
        isAdmin: user.isAdmin,
        id: user.id,
        orders: [],
        slug: user.slug,
      };
      return res.json(user);
    }
  } catch (error) {
    return res.status(400).json({ msg: "User not find" });
  }
}

async function update(req, res) {
  const user = await User.findById(req.params.id);

  /*   const userAutentication = await User.findOne({ email: req.body.email });
  const passwordAutentication = req.body.password === req.body.confirmPassword;
  if (!userAutentication && passwordAutentication) { */
  /* const hashedPassword = await bcrypt.hash(req.body.password, 10); */
  !req.body.firstname ? (user.firstname = user.firstname) : (user.firstname = req.body.firstname);
  !req.body.lastname ? (user.lastname = user.lastname) : (user.lastname = req.body.lastname);
  !req.body.email ? (user.email = user.email) : (user.email = req.body.email);
  !req.body.address ? (user.address = user.address) : (user.address = req.body.address);
  !req.body.phoneNumber
    ? (user.phoneNumber = user.phoneNumber)
    : (user.phoneNumber = req.body.phoneNumber);
  /*   !hashedPassword ? (user.password = user.password) : (user.password = user.password); */
  !req.body.isAdmin ? (user.isAdmin = user.isAdmin) : (user.isAdmin = req.body.isAdmin);
  console.log(req.body.address);
  user.save();
  /*  } else {
    if (!passwordAutentication) {
      return res.json({ msg: "⚠️ Password confirmation doesn't match Password " });
    } else {
      return res.json({ msg: "⚠️ User already exists" });
    } */

  return res.json(user);
}

async function destroy(req, res) {
  await User.findByIdAndDelete(req.params.id);
  return res.json({ msg: "OK" });
}
async function show(req, res) {
  const user = await User.findById(req.params.id);
  return res.json(user);
}

module.exports = {
  show,
  index,
  store,
  token,
  update,
  destroy,
};
