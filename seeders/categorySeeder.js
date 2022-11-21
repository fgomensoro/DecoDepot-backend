const { faker } = require("@faker-js/faker");
const Category = require("../models/Category");
const { mongoose } = require("mongoose");

module.exports = async () => {
  const categories = ["Table", "Chair", "Bed", "Sofa"];
  for (let i = 0; i < categories.length; i++) {
    const category = new Category({
      name: categories[i],
    });

    await category.save();
  }

  console.log("[Database] Se corrió el seeder de Categories.");
};
