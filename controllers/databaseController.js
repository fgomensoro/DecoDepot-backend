const { dbInitialSetup } = require("../dbInitialSetup");

async function reset(req, res) {
  console.log("reset");
  await dbInitialSetup();
  return res.json({ msg: "OK" });
}

module.exports = {
  reset,
};
