const { faker } = require("@faker-js/faker");
const Product = require("../models/Product");
const Category = require("../models/Category");
const slugify = require("slugify");

module.exports = async () => {
  const products = [];
  const categories = await Category.find();

  // ================ Chairs ============================================
  await Product.create({
    name: "Pica Chair",
    description: `Pica is an ideal companion chair that warmly embraces the Burrow ethos: supremely comfortable, veritably stylish, and of course, incredibly easy to set up. The rounded silhouette and plush materials invite lengthy sessions of curling up and zoning out, while the petite footprint allows it to find a home in any nook or corner. The perfect balance of comfort and form, Pica makes a cozy compliment to a sofa, beside the bed, or paired up in front of a fireplace.`,
    images: ["Pica_Chair_2.jpg", "Pica_Chair_1.jpg", "Pica_Chair_3.jpg"],
    price: 880,
    stock: 16,
    featured: true,
    category: categories[1],
    slug: "Pica_Chair",
  });

  await Product.create({
    name: "Lodge Chair",
    description: `Despite the suave familiarity of the Danish mid-century aesthetic, the Lodge Chair is unlike any other out there. The handsome carpentry and premium upholstery make it a conversation starter in any room, but the quiet design features make it truly worthy of admiration. From the gentle pitch of the seat to the width of the armrest, every aspect of Lodge has been meticulously considered and refined, so it's not just beautiful, it's functional and comfortable too.`,
    images: ["Lodge_Chair_1.jpg", "Lodge_Chair_2.jpg", "Lodge_Chair_3.jpg"],
    price: 990,
    stock: 12,
    featured: false,
    category: categories[1],
    slug: "Lodge_Chair",
  });

  await Product.create({
    name: "Vesper Wood & Leather Lounge Chair",
    description: `Vesper is a visually striking, statement design that still meets our high standard for functionality. It builds upon a long legacy of molded plywood lounge chairs, and takes a step beyond homage: the custom-pressed shell was engineered to offer a comfortably reclined seat, but also to nest for efficient shipping and easy setup — just the sort of thoughtful touch you've come to expect from Burrow.`,
    images: [
      "Vesper_Wood_and_Leather_Lounge_Chair_1.jpg",
      "Vesper_Wood_and_Leather_Lounge_Chair_2.jpg",
      "Vesper_Wood_and_Leather_Lounge_Chair_3.jpg",
    ],
    price: 770,
    stock: 8,
    featured: false,
    category: categories[1],
    slug: "Vesper_Wood_and_Leather_Lounge_Chair",
  });

  await Product.create({
    name: "Airi Office Chair",
    description: `The first officer to our Pilot Desk, Airi is a breathable, professional-grade office chair. It features a mesh back that prevents the dreaded, all-too-familiar lower back dampness. The frame has four legs with casters, and a pneumatic rising base that can tilt or lock in place. Designed and manufactured by Eurostyle, Airi is contract-grade and built with BIFMA-approved components.`,
    images: ["Airi_Office_Chair_1.jpg", "Airi_Office_Chair_2.jpg", "Airi_Office_Chair_3.jpg"],
    price: 395,
    stock: 4,
    featured: false,
    category: categories[1],
    slug: "Airi_Office_Chair",
  });

  await Product.create({
    name: "Range 2-Piece Lounger",
    description: `A seat module paired with an attached ottoman in a classic 'chaise longue' configuration. Stretch out in a home office, or add a table for a movie room recliner setup. Range is our vision for a plush, comfortable seating system that’s perfect for everything from streaming marathons to afternoon napping, balanced with a bold, contemporary design statement with a low profile and clean, sophisticated lines.`,
    images: [
      "Range_2_Piece_Lounger_1.jpg",
      "Range_2_Piece_Lounger_2.jpg",
      "Range_2_Piece_Lounger_3.jpg",
    ],
    price: 695,
    stock: 10,
    featured: true,
    category: categories[1],
    slug: "Range_2_Piece_Lounger",
  });
  // ================ Sofas =============================================

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
