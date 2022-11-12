const Review = require("../models/Review");

async function index(req, res) {
  try {
    const reviews = await Review.find();
    return res.json({ reviews }); // res.json({ users })
  } catch (err) {
    return res.status(400).json({ err });
  }
}

module.exports = {
  index,
};
