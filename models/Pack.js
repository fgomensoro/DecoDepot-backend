const { mongoose, Schema } = require("../dbInitialSetup");

const packSchema = new Schema({
  name: String,
  bigImage: String,
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: "Product",
    },
  ],
});

const Pack = mongoose.model("Pack", packSchema);

module.exports = Pack;
