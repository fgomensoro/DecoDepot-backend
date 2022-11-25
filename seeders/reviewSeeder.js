const Review = require("../models/Review");
const { mongoose } = require("../dbInitialSetup");

module.exports = async () => {
  await mongoose.connection.dropCollection("reviews");
  const reviews = [
    "The best designs for your home",
    "The most original and modern designs in the market",
    "Great solutions, small costs",
    "All you need to renewing your house is here",
  ];
  const authors = ["The New York Times", "Artdeco Magazine", "Home Magazine", "Modern design"];
  for (let i = 0; i < reviews.length; i++) {
    const review = new Review({
      comment: reviews[i],
      author: authors[i],
    });

    await review.save();
  }
  console.log("[Database] Se corrió el seeder de Reviews.");
};
