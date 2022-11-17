const Pack = require("../models/Pack");

async function index(req, res) {
  const packs = await Pack.find().populate("products");
  res.json(packs);
}

module.exports = {
  index,
};
