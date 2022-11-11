const Product = require("../models/Product");
const Pack = require("../models/Pack");
const { faker } = require("@faker-js/faker");

module.exports = async () => {
  for (let i = 0; i < 2; i++) {
    const products = await Product.find();
    const randomProduct = products[faker.datatype.number({ min: 0, max: products.length - 1 })];
    const randomProduct2 = products[faker.datatype.number({ min: 0, max: products.length - 1 })];
    const randomProduct3 = products[faker.datatype.number({ min: 0, max: products.length - 1 })];
    const randomProduct4 = products[faker.datatype.number({ min: 0, max: products.length - 1 })];

    const pack = new Pack({
      name: `pack${i + 1}`,
      bigImage: `bigImage_${i + 1}.jpg`,
      products: [randomProduct, randomProduct2, randomProduct3, randomProduct4],
    });

    await pack.save();
  }

  console.log("[Database] Se corrió el seeder de Pack.");
};
