const { mongoose, Schema } = require("../dbInitialSetup");

const productSchema = new Schema(
  {
    name: String,
    description: String,
    images: [],
    price: Number,
    stock: Number,
    category: {
      type: Schema.Types.ObjectId,
      ref: "Category",
    },

    featured: Boolean,
    slug: String,
  },
  { timestamps: true },
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
