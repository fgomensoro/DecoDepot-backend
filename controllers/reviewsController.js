const Review = require("../models/Review");

async function index(req, res) {
  const reviews = await Review.find();
  res.json({ reviews });
}

module.exports = {
  index,
};
