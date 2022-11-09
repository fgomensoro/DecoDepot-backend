const { mongoose, Schema } = require("../dbInitialSetup");
const bcrypt = require("bcryptjs");

const categorySchema = new Schema({
  name: String,
});

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
