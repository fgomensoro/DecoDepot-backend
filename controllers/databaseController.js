const { dbInitialSetup } = require("../dbInitialSetup");

async function reset(req, res) {
  console.log("reset");
  dbInitialSetup();
  res.json({ msg: "OK" });
}

module.exports = {
  reset,
};
