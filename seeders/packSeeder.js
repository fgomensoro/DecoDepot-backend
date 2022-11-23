const Product = require("../models/Product");
const Pack = require("../models/Pack");
const { faker } = require("@faker-js/faker");

module.exports = async () => {
  const products = await Product.find();

  await Pack.create({
    name: "Minimalistic Living Room",
    bigImage: "pack1_bigImage_1.jpeg",
    bigImage2: "pack1_bigImage_2.jpeg",
    products: [products[0], products[1], products[2], products[3]],
  });

  await Pack.create({
    name: "Minimalistic Living Room",
    bigImage: "pack1_bigImage_1.jpeg",
    bigImage2: "pack1_bigImage_2.jpeg",
    products: [products[0], products[1], products[2], products[3]],
  });

  await Pack.create({
    name: "Traditional Living Room",
    bigImage: "pack2_bigImage_1.jpeg",
    bigImage2: "pack2_bigImage_2.jpeg",
    products: [products[4], products[5], products[6], products[7]],
  });
  
  await Pack.create({
    name: "Traditional Living Room",
    bigImage: "pack2_bigImage_1.jpeg",
    bigImage2: "pack2_bigImage_2.jpeg",
    products: [products[4], products[5], products[6], products[7]],
  });

  // for (let i = 0; i < 2; i++) {
  //   const products = await Product.find();
  //   const randomProducts = [];
  //   let usedNumbers = [];
  //   for (let i = 0; i < 4; i++) {
  //     let randomNumber = faker.datatype.number({ min: 0, max: products.length - 1 });
  //     while (usedNumbers.includes(randomNumber)) {
  //       randomNumber = faker.datatype.number({ min: 0, max: products.length - 1 });
  //     }
  //     randomProducts.push(products[randomNumber]);
  //     usedNumbers.push(randomNumber);
  //   }

  //   const pack = new Pack({
  //     name: "Minimalistic Living Room",
  //     bigImage: "pack1_bigImage.jpeg",
  //     products: [products[0], products[1], products[2], products[3]],
  //   });

  //   await pack.save();
  // }

  console.log("[Database] Se corrió el seeder de Pack.");
};
