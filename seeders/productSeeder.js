const { faker } = require("@faker-js/faker");
const Product = require("../models/Product");
const Category = require("../models/Category");
const slugify = require("slugify");

module.exports = async () => {
  const products = [];
  const categories = await Category.find();

  // ================ Chairs ============================================

  await Product.create({
    name: "Milos Chair",
    description: `At once classic and contemporary, rustic and refined, our collection by Dutch designer Luay Al-Rawi is a celebration of natural materials and traditional craftsmanship. A restrained oak frame with tapered legs plays host to tailored panels of handwoven seagrass, its textural pattern a juxtaposition of geometric motifs.`,
    images: ["Milos_Chair_1.jpg", "Milos_Chair_2.jpg", "Milos_Chair_3.jpg"],
    price: 880,
    stock: 16,
    featured: false,
    category: categories[1],
    slug: "Milos_Chair",
  });

  await Product.create({
    name: "Marbella Teak Lounge Chair",
    description: `Despite the suave familiarity of the Danish mid-century aesthetic, the Lodge Chair is unlike any other out there. The handsome carpentry and premium upholstery make it a conversation starter in any room, but the quiet design features make it truly worthy of admiration. From the gentle pitch of the seat to the width of the armrest, every aspect of Lodge has been meticulously considered and refined, so it's not just beautiful, it's functional and comfortable too.`,
    images: [
      "Marbella_Teak_Lounge_Chair_1.jpg",
      "Marbella_Teak_Lounge_Chair_2.jpg",
      "Marbella_Teak_Lounge_Chair_3.jpg",
    ],
    price: 990,
    stock: 12,
    featured: false,
    category: categories[1],
    slug: "Marbella_Teak_Lounge_Chair",
  });

  await Product.create({
    name: "Balmani Teak Lounge Chair",
    description: `Inspired by the sculptural works of Salvador Dalí and Diego Giacometti, our chair from Julie Lawrence merges the rustic sensibility of a hand-forged metal base with tailored upholstery. Employing an ancient fabrication process, artisans hand hammer the metal bars to reveal an alive, imperfect and organic texture, a counterpoint to the frame's slender, tapered silhouette.`,
    images: [
      "Balmani_Teak_Lounge_Chair_1.jpg",
      "Balmani_Teak_Lounge_Chair_2.jpg",
      "Balmani_Teak_Lounge_Chair_3.jpg",
    ],
    price: 770,
    stock: 8,
    featured: true,
    category: categories[1],
    slug: "Balmani_Teak_Lounge_Chair",
  });

  await Product.create({
    name: "Dixon Swivel Chair",
    description: `The first officer to our Pilot Desk, Airi is a breathable, professional-grade office chair. It features a mesh back that prevents the dreaded, all-too-familiar lower back dampness. The frame has four legs with casters, and a pneumatic rising base that can tilt or lock in place. Designed and manufactured by Eurostyle, Airi is contract-grade and built with BIFMA-approved components.`,
    images: ["Dixon_Swivel_Chair_1.jpg", "Dixon_Swivel_Chair_2.jpg", "Dixon_Swivel_Chair_3.jpg"],
    price: 395,
    stock: 4,
    featured: true,
    category: categories[1],
    slug: "Dixon_Swivel_Chair",
  });

  await Product.create({
    name: "Marisol Seagrass Slope Arm Chair",
    description: `A seat module paired with an attached ottoman in a classic 'chaise longue' configuration. Stretch out in a home office, or add a table for a movie room recliner setup. Range is our vision for a plush, comfortable seating system that’s perfect for everything from streaming marathons to afternoon napping, balanced with a bold, contemporary design statement with a low profile and clean, sophisticated lines.`,
    images: [
      "Marisol_Seagrass_Slope_Arm_Chair_1.jpg",
      "Marisol_Seagrass_Slope_Arm_Chair_2.jpg",
      "Marisol_Seagrass_Slope_Arm_Chair_3.jpg",
    ],
    price: 695,
    stock: 10,
    featured: false,
    category: categories[1],
    slug: "Marisol_Seagrass_Slope_Arm_Chair",
  });

  await Product.create({
    name: "Aegean Teak Lounge Chair",
    description: `At once classic and contemporary, rustic and refined, our collection by Dutch designer Luay Al-Rawi is a celebration of natural materials and traditional craftsmanship. A restrained oak frame with tapered legs plays host to tailored panels of handwoven seagrass, its textural pattern a juxtaposition of geometric motifs.`,
    images: [
      "Aegean_Teak_Lounge_Chair_1.jpg",
      "Aegean_Teak_Lounge_Chair_2.jpg",
      "Aegean_Teak_Lounge_Chair_3.jpg",
    ],
    price: 880,
    stock: 16,
    featured: true,
    category: categories[1],
    slug: "Aegean_Teak_Lounge_Chair",
  });
  // ================ Sofas =============================================

  await Product.create({
    name: "Cloud Sofa",
    description: `The cornerstone of our Nomad Collection is the essential sofa reinvented for modern life. The first truly easy-to-move sofa thanks to our award-winning modular design; it has plenty of room for three people, or more if you're into cuddling. It's packed with all the clever, life-changing features you expect from Burrow, starting with a built-in USB charger.`,
    images: ["Cloud_Sofa_1.jpg", "Cloud_Sofa_2.jpg", "Cloud_Sofa_3.jpg"],
    price: 1385,
    stock: 5,
    featured: true,
    category: categories[3],
    slug: "Cloud_Sofa",
  });

  await Product.create({
    name: "Maxwell Sofa",
    description: `Ultra-deep proportions meet supreme comfort in our Maxwell collection. Clean lines and a streamlined silhouette define its architectural attitude, while a modernist, low-slung profile and broad track arms invite lounging.`,
    images: ["Maxwell_Sofa_1.jpg", "Maxwell_Sofa_2.jpg", "Maxwell_Sofa_3.jpg"],
    price: 1550,
    stock: 8,
    featured: true,
    category: categories[3],
    slug: "Maxwell_Sofa",
  });

  await Product.create({
    name: "Maxwell Leather Sofa",
    description: `Ultra-deep proportions meet supreme comfort in our Maxwell collection. Clean lines and a streamlined silhouette define its architectural attitude, while a modernist, low-slung profile and broad track arms invite lounging..`,
    images: [
      "Maxwell_Leather_Sofa_1.jpg",
      "Maxwell_Leather_Sofa_2.jpg",
      "Maxwell_Leather_Sofa_3.jpg",
    ],
    price: 1490,
    stock: 1,
    featured: false,
    category: categories[3],
    slug: "Maxwell_Leather_Sofa",
  });

  await Product.create({
    name: "Maxwell Three Seat Cushion Sofa",
    description: `Our Nomad Leather Sofa is the perfect leather sofa for real life, and now it features a matching ottoman made from the same soft, supple, and sophisticated top-grain Italian leather we use across the rest of the collection. Like everything we make, our modular design is incredibly easy to move and packed with all the clever, life-changing features you expect from Burrow, starting with a built-in USB charger.`,
    images: [
      "Maxwell_Three_Seat_Cushion_Sofa_1.jpg",
      "Maxwell_Three_Seat_Cushion_Sofa_2.jpg",
      "Maxwell_Three_Seat_Cushion_Sofa_3.jpg",
    ],
    price: 1550,
    stock: 8,
    featured: false,
    category: categories[3],
    slug: "Maxwell_Three_Seat_Cushion_Sofa",
  });

  await Product.create({
    name: "Belgian Track Arm Slipcovered Sofa",
    description: `Our Nomad Leather Sofa is the perfect leather sofa for real life, and now it features a matching ottoman made from the same soft, supple, and sophisticated top-grain Italian leather we use across the rest of the collection. Like everything we make, our modular design is incredibly easy to move and packed with all the clever, life-changing features you expect from Burrow, starting with a built-in USB charger.`,
    images: [
      "Belgian_Track_Arm_Slipcovered_Sofa_1.jpg",
      "Belgian_Track_Arm_Slipcovered_Sofa_2.jpg",
      "Belgian_Track_Arm_Slipcovered_Sofa_3.jpg",
    ],
    price: 1670,
    stock: 3,
    featured: true,
    category: categories[3],
    slug: "Belgian_Track_Arm_Slipcovered_Sofa",
  });

  await Product.create({
    name: "Belgian Track Arm Sofa",
    description: `Our European-inspired take on the classic sofa redefines it for a new age. Low to the ground, deep in profile, and sleekly streamlined for sophisticated appeal, it's a chic, ultra-comfortable twist on tradition.`,
    images: [
      "Belgian_Track_Arm_Sofa_1.jpg",
      "Belgian_Track_Arm_Sofa_2.jpg",
      "Belgian_Track_Arm_Sofa_3.jpg",
    ],
    price: 990,
    stock: 15,
    featured: false,
    category: categories[3],
    slug: "Belgian_Track_Arm_Sofa",
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

  // await Product.insertMany(products);
  console.log("[Database] Se corrió el seeder de Products.");
};
