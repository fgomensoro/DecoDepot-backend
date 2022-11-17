const { faker } = require("@faker-js/faker");
const Product = require("../models/Product");
const Category = require("../models/Category");
const slugify = require("slugify");

module.exports = async () => {
  const products = [];
  const categories = await Category.find();

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
