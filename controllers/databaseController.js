const { dbInitialSetup } = require("../dbInitialSetup");

async function reset(req, res) {
  await dbInitialSetup();
  return res.json({ msg: "OK" });
}

module.exports = {
  reset,
};
