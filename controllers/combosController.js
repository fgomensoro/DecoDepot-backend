const Combo = require("../models/Combo");

async function ShowCombos(req, res) {
  const combos = await Combo.find();
  res.json({ combos });
}

module.exports = {
  ShowCombos,
};
