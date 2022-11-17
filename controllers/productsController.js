const Product = require("../models/Product");
const Category = require("../models/Category");
const formidable = require("formidable");

async function index(req, res) {
  let products;
  if (req.query.limit) {
    products = await Product.find({ category: req.query.category })
      .populate({ path: "category", Category })
      .limit(req.query.limit);
  } else if (req.query) {
    products = await Product.find(req.query).populate({ path: "category", Category });
  } else {
    products = await Product.find().populate({ path: "category", Category });
  }

  return res.json(products);
}

async function store(req, res) {
  const form = formidable({
    multiples: true,
    keepExtensions: true,
    uploadDir: __dirname + "/../public/img",
  });
  form.parse(req, async (err, fields, files) => {
    const searchedCategory = await Category.findById(fields.category);
    const newProduct = await Product.create({
      name: fields.name,
      description: fields.description,
      images: [files.image1.newFilename, files.image2.newFilename, files.image3.newFilename],
      price: fields.price,
      stock: fields.stock,
      category: searchedCategory,
      featured: fields.featured,
      slug: fields.slug,
    });

    return res.json({ msg: "OK" });
  });
}

async function show(req, res) {
  const product = await Product.findById(req.params.id).populate({
    path: "category",
    Category,
  });
  res.json(product); //response.data.product
}

async function update(req, res) {
  const product = await Product.findById(req.params.id);
  if (product) {
    try {
      const form = formidable({
        multiples: true,
        keepExtensions: true,
        uploadDir: __dirname + "/../public/img",
      });
      form.parse(req, async (err, fields, files) => {
        const newImages = [];
        if (!files.image1.originalFilename) {
          newImages.push(files.image1.newFilename);
        }
        if (!files.image2.originalFilename) {
          newImages.push(files.image2.newFilename);
        }
        if (!files.image3.originalFilename) {
          newImages.push(files.image3.newFilename);
        }
        let newCategory;
        if (fields.category) {
          newCategory = await Category.findById(fields.category);
        }
        product.name = fields.name;
        product.description = fields.description;
        product.price = fields.price;
        product.stock = fields.stock;
        product.category = newCategory || product.category;
        product.featured = fields.featured;
        product.slug = fields.slug;
        if (fields.actionImages === "add") {
          product.images = [...product.images, ...newImages];
        } else {
          product.images = newImages;
        }

        await product.save();
        return res.json({ msg: "OK" });
      });
    } catch (err) {
      return res.status(404).json({ msg: "Failed to update product" });
    }
  }
}

async function destroy(req, res) {
  try {
    await Product.findByIdAndDelete(req.params.id);
    return res.json({ msg: "OK" });
  } catch (err) {
    return res.json({ msg: "Filed to delete product" });
  }
}

module.exports = {
  index,
  store,
  show,
  update,
  destroy,
};
