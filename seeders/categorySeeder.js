const Category = require("../models/Category");
const { mongoose } = require("../dbInitialSetup");

module.exports = async () => {
  await mongoose.connection.dropCollection("categories");
  const categories = ["Tables", "Chairs", "Beds", "Sofas", "Décor"];
  for (let i = 0; i < categories.length; i++) {
    const category = new Category({
      name: categories[i],
    });

    await category.save();
  }

  console.log("[Database] Se corrió el seeder de Categories.");
};
