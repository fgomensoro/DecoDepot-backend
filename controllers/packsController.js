const Pack = require("../models/Pack");

async function ShowPacks(req, res) {
  const packs = await Pack.find().populate("products");
  res.json(packs);
}

module.exports = {
  ShowPacks,
};
