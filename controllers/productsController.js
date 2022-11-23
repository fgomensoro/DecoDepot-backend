const Product = require("../models/Product");
const Category = require("../models/Category");
const formidable = require("formidable");
const slugify = require("slugify");
const { findLastKey } = require("lodash");
const { createClient } = require("@supabase/supabase-js");
const fs = require("fs");

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

async function index(req, res) {
  let products;
  if (req.query.limit) {
    products = await Product.find({ category: req.query.category, _id: { $ne: req.query.id } })
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
    const newImages = [];
    for (let i = 1; i <= 3; i++) {
      if (files["image" + i].originalFilename.length > 0) {
        const { data, error } = await supabase.storage
          .from("bucket")
          .upload(
            files["image" + i].newFilename,
            fs.createReadStream(files["image" + i].filepath),
            {
              cacheControl: "3600",
              upsert: false,
              contentType: files["image" + i].mimetype,
            },
          );
        newImages.push(files["image" + i].newFilename);
      }
    }
    const searchedCategory = await Category.findById(fields.category);
    const newProduct = await Product.create({
      name: fields.name,
      description: fields.description,
      images: newImages,
      price: fields.price,
      stock: fields.stock,
      category: searchedCategory,
      featured: fields.featured,
      slug: fields.slug,
    });
    newProduct.slug = slugify(`${newProduct.name} ${newProduct.category.name}`, "_");
    await newProduct.save();

    return res.json({ msg: "OK" });
  });
}

async function show(req, res) {
  const product = await Product.findOne({ slug: req.params.slug }).populate({
    path: "category",
    Category,
  });
  res.json(product); //response.data.product
}

async function update(req, res) {
  if (req.body.updateIsFeatured && req.auth.isAdmin) {
    const product = await Product.findById(req.params.id);
    product.featured = req.body.isFeatured;
    await product.save();
    return res.json({ msg: "Product updated" });
  }
  if (!req.body.updateIsFeatured) {
    const product = await Product.findById(req.params.id).populate({ path: "category", Category });
    if (product) {
      try {
        const form = formidable({
          multiples: true,
          keepExtensions: true,
        });
        form.parse(req, async (err, fields, files) => {
          const newImages = [];
          for (let i = 1; i <= 3; i++) {
            if (files["image" + i].originalFilename.length > 0) {
              const { data, error } = await supabase.storage
                .from("bucket")
                .upload(
                  files["image" + i].newFilename,
                  fs.createReadStream(files["image" + i].filepath),
                  {
                    cacheControl: "3600",
                    upsert: false,
                    contentType: files["image" + i].mimetype,
                  },
                );
              newImages.push(files["image" + i].newFilename);
            }
          }

          let newCategory;
          if (fields.category) {
            newCategory = await Category.findById(fields.category);
          }
          product.name = fields.name;
          product.description = fields.description;
          product.price = fields.price;
          product.stock = fields.stock;
          product.category = newCategory ? newCategory : product.category;
          product.slug = fields.slug;
          if (fields.actionImages === "add") {
            product.images.push(...newImages);
          } else {
            product.images = newImages;
          }
          product.slug = slugify(`${product.name} ${product.category.name}`, "_");
          await product.save();
          return res.json({ msg: "OK" });
        });
      } catch (err) {
        return res.status(404).json({ msg: "Failed to update product" });
      }
    }
  }
}

// async function updateStock(products) {
//   const ids = products.map((p) => p.id );
//   const productsToUpdate = Product.find({id:{$in:ids}})

//   for (product of productsToUpdate) {

//     product.stock = product.stock -
//     // const prod = await Product.findById(product.id);
//     // const updatedStock = await Product.findByIdAndUpdate(product.id, {
//     //   stock: prod.stock - product.qty,
//     // });
//   }
// }

async function updateStock(products) {
  const productIdsQtyMap = products.reduce((accumulator, product) => {
    accumulator[product.id] = product.qty;
    return accumulator;
  }, {});
  const productsToUpdate = await Product.find({ _id: { $in: Object.keys(productIdsQtyMap) } });
  let outOfStock = false;
  for (const product of productsToUpdate) {
    if (product.stock < productIdsQtyMap[product.id]) {
      outOfStock = true;
    } else {
      product.stock = product.stock - productIdsQtyMap[product.id];
    }
  }
  if (outOfStock) {
    return false;
  } else {
    await Product.bulkSave(productsToUpdate);
    return true;
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
  updateStock,
};
