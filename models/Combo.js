const { mongoose, Schema } = require("../dbInitialSetup");

const comboSchema = new Schema({
  name: String,
  bigImage: String,
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: "Product",
    },
  ],
});

const Combo = mongoose.model("Combo", comboSchema);

module.exports = Combo;
