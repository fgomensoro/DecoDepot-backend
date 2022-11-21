const { faker } = require("@faker-js/faker");
const Product = require("../models/Product");
const Category = require("../models/Category");
const slugify = require("slugify");

module.exports = async () => {
  const products = [];
  const categories = await Category.find();

  await Product.create({
    name: "Block Nomad Sofa",
    description: `The cornerstone of our Nomad Collection is the essential sofa reinvented for modern life. The first truly easy-to-move sofa thanks to our award-winning modular design; it has plenty of room for three people, or more if you're into cuddling. It's packed with all the clever, life-changing features you expect from Burrow, starting with a built-in USB charger.`,
    images: ["Block_Nomad_Sofa_1.jpg", "Block_Nomad_Sofa_1.jpg", "Block_Nomad_Sofa_1.jpg"],
    price: 1385,
    stock: 5,
    featured: true,
    category: categories[3],
    slug: "Block_Nomad_Sofa",
  });

  await Product.create({
    name: "Block Nomad Leather Sofa with Ottoman",
    description: `Our Nomad Leather Sofa is the perfect leather sofa for real life, and now it features a matching ottoman made from the same soft, supple, and sophisticated top-grain Italian leather we use across the rest of the collection. Like everything we make, our modular design is incredibly easy to move and packed with all the clever, life-changing features you expect from Burrow, starting with a built-in USB charger.`,
    images: [
      "Block_Nomad_Leather_Sofa_with_Ottoman_1.jpg",
      "Block_Nomad_Leather_Sofa_with_Ottoman_2.jpg",
      "Block_Nomad_Leather_Sofa_with_Ottoman_3.jpg",
    ],
    price: 1550,
    stock: 8,
    featured: true,
    category: categories[3],
    slug: "Block_Nomad_Leather_Sofa_with_Ottoman",
  });

  await Product.create({
    name: "Block Nomad Double Chaise Sectional",
    description: `Our Nomad Leather Sofa is the perfect leather sofa for real life, and now it features a matching ottoman made from the same soft, supple, and sophisticated top-grain Italian leather we use across the rest of the collection. Like everything we make, our modular design is incredibly easy to move and packed with all the clever, life-changing features you expect from Burrow, starting with a built-in USB charger.`,
    images: [
      "Block_Nomad_Double_Chaise_Sectional_1.jpg",
      "Block_Nomad_Double_Chaise_Sectional_2.jpg",
      "Block_Nomad_Double_Chaise_Sectional_3.jpg",
    ],
    price: 1490,
    stock: 1,
    featured: false,
    category: categories[3],
    slug: "Block_Nomad_Double_Chaise_Sectional",
  });

  await Product.create({
    name: "Union 2-Seat Sofa",
    description: `Our Nomad Leather Sofa is the perfect leather sofa for real life, and now it features a matching ottoman made from the same soft, supple, and sophisticated top-grain Italian leather we use across the rest of the collection. Like everything we make, our modular design is incredibly easy to move and packed with all the clever, life-changing features you expect from Burrow, starting with a built-in USB charger.`,
    images: ["Union_2_1.jpg", "Union_2_2.jpg", "Union_2_3.jpg"],
    price: 1550,
    stock: 8,
    featured: false,
    category: categories[3],
    slug: "Union_2-Seat_Sofa",
  });

  await Product.create({
    name: "Slope Nomad Leather 4_Seat Corner Sectional",
    description: `Our Nomad Leather Sofa is the perfect leather sofa for real life, and now it features a matching ottoman made from the same soft, supple, and sophisticated top-grain Italian leather we use across the rest of the collection. Like everything we make, our modular design is incredibly easy to move and packed with all the clever, life-changing features you expect from Burrow, starting with a built-in USB charger.`,
    images: [
      "Slope_Nomad_Leather_4_Seat_Corner_Sectional_1.jpg",
      "Slope_Nomad_Leather_4_Seat_Corner_Sectional_2.jpg",
      "Slope_Nomad_Leather_4_Seat_Corner_Sectional_3.jpg",
    ],
    price: 1670,
    stock: 3,
    featured: true,
    category: categories[3],
    slug: "Slope_Nomad_Leather_4_Seat_Corner_Sectional",
  });

  await Product.create({
    name: "Block Nomad Sofa with Ottoman",
    description: `Our Nomad Leather Sofa is the perfect leather sofa for real life, and now it features a matching ottoman made from the same soft, supple, and sophisticated top-grain Italian leather we use across the rest of the collection. Like everything we make, our modular design is incredibly easy to move and packed with all the clever, life-changing features you expect from Burrow, starting with a built-in USB charger.`,
    images: [
      "Block_Nomad_Sofa_with_Ottoman_1.jpg",
      "Block_Nomad_Sofa_with_Ottoman_2.jpg",
      "Block_Nomad_Sofa_with_Ottoman_3.jpg",
    ],
    price: 990,
    stock: 15,
    featured: false,
    category: categories[3],
    slug: "Block_Nomad_Sofa_with_Ottoman",
  });

  for (let i = 0; i < 20; i++) {
    const randomCategory =
      categories[faker.datatype.number({ min: 0, max: categories.length - 1 })];
    const feat = Math.floor(Math.random() * 10 + 1) > 5 ? true : false;
    const product = new Product({
      name: "Mueble" + i,
      description:
        "Our coffee tables, side tables, and benches — across a variety of stylistic collections — are designed to complement our award-winning seating. Whether you’re looking for a functional coffee table with storage or a timeless mid-century Modern design, our edited selection represents the best of furniture design.",
      images: ["imgPrueba1.jpg", "imgPrueba2.jpg", "imgPrueba3.jpg"],
      price: Math.floor(Math.random() * 1000 + 1),
      stock: Math.floor(Math.random() * 10 + 1),
      featured: feat,
      category: randomCategory,
    });
    product.slug = slugify(`${product.name} ${randomCategory.name}`, "_");
    products.push(product);
    // ACA SE TIENE QUE INSTALAR Y HACER CON SLUGIFY POR SI EL PRODUCTO O LA CATEGORÍA TIENEN MAS DE UNA PALABRA
  }

  await Product.insertMany(products);
  console.log("[Database] Se corrió el seeder de Products.");
};
