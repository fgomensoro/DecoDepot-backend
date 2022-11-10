const Product = require("../models/Product");
const Combo = require("../models/Combo");
const { faker } = require("@faker-js/faker");

module.exports = async () => {
  for (let i = 0; i < 2; i++) {
    const products = await Product.find();
    const randomProduct = products[faker.datatype.number({ min: 0, max: products.length - 1 })];
    const randomProduct2 = products[faker.datatype.number({ min: 0, max: products.length - 1 })];
    const randomProduct3 = products[faker.datatype.number({ min: 0, max: products.length - 1 })];
    const randomProduct4 = products[faker.datatype.number({ min: 0, max: products.length - 1 })];

    const combo = new Combo({
      name: `combo${i + 1}`,
      bigImage: `bigImage_${i + 1}.jpg`,
      image1: randomProduct,
      image2: randomProduct2,
      image3: randomProduct3,
      image4: randomProduct4,
    });

    await combo.save();
  }

  console.log("[Database] Se corrió el seeder de Combo.");
};
