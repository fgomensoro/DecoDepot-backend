const { mongoose, Schema } = require("../dbInitialSetup");

const reviewSchema = new Schema(
  {
    author: String,
    comment: String,
  },
  { timestamps: true },
);

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;
