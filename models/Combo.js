const { mongoose, Schema } = require("../dbInitialSetup");

const comboSchema = new Schema({
  name: String,
  bigImage: String,
  image1: {
    type: Schema.Types.ObjectId,
    ref: "Product",
  },
  image2: {
    type: Schema.Types.ObjectId,
    ref: "Product",
  },
  image3: {
    type: Schema.Types.ObjectId,
    ref: "Product",
  },
  image4: {
    type: Schema.Types.ObjectId,
    ref: "Product",
  },
});

const Combo = mongoose.model("Combo", comboSchema);

module.exports = Combo;
