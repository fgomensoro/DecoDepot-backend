const Product = require("../models/Product");
const Pack = require("../models/Pack");
const { mongoose } = require("../dbInitialSetup");

module.exports = async () => {
  await mongoose.connection.dropCollection("packs");
  const products = await Product.find();

  await Pack.create({
    name: "Minimalistic Living Room",
    bigImage: "pack1_bigImage_1.jpeg",
    bigImage2: "pack1_bigImage_2.jpeg",
    products: [products[0], products[1], products[2], products[3]],
  });

  await Pack.create({
    name: "Minimalistic Living Room",
    bigImage: "pack2_bigImage_1.jpeg",
    bigImage2: "pack2_bigImage_2.jpeg",
    products: [products[4], products[5], products[6], products[7]],
  });

  await Pack.create({
    name: "Traditional Living Room",
    bigImage: "pack3_bigImage_2.jpeg",
    bigImage2: "pack3_bigImage_1.jpeg",
    products: [products[8], products[9], products[10], products[11]],
  });

  await Pack.create({
    name: "Traditional Living Room",
    bigImage: "pack2_bigImage_1.jpeg",
    bigImage2: "pack2_bigImage_2.jpeg",
    products: [products[4], products[5], products[6], products[7]],
  });

  console.log("[Database] Se corrió el seeder de Pack.");
};
