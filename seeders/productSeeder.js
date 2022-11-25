const { faker } = require("@faker-js/faker");
const Product = require("../models/Product");
const Category = require("../models/Category");
const slugify = require("slugify");
const { mongoose } = require("../dbInitialSetup");

module.exports = async () => {
  await mongoose.connection.dropCollection("products");
  const products = [];
  const categories = await Category.find();

  // ===================================== PACKS - COMBOS =====================================

  // ============== PACK - 1 ===============

  await Product.create({
    name: "Anton Leather Chaise",
    description:
      "Deeply inspired by modern Brooklyn lofts, the brown suede 3/4 seater right-hand corner sofa is designed for interiors with a raw, authentic style. The simple lines and generous shapes of this industrial corner sofa make it an ideal place to receive your loved ones, lounge around while enjoying your favorite series or simply relax after a long day. And what's its little plus? It is available in several colors to meet all decorative needs.",
    images: [
      "anton_leather_chaise_1.jpeg",
      "anton_leather_chaise_2.jpeg",
      "anton_leather_chaise_3.jpeg",
    ],
    price: 5798,
    stock: 15,
    featured: false,
    category: categories[3],
    slug: "anton_leather_chaise",
  });

  await Product.create({
    name: "Crescent Swivel Chair",
    description:
      "Its welcoming silhouette that wraps around your body to create a hug-like feel, this Joyner chair will bring in much-needed comfort and style into your home. Its neutral color makes it easy to transition into any room. Featuring a 360-Degree swivel base that adds convenience. The foam seat will make you think you're on cloud 9. With a 22-inch seat depth, it's easy to curl up with your favorite book, sit back and relax.",
    images: [
      "crescent_swivel_chair_1.jpeg",
      "crescent_swivel_chair_2.jpeg",
      "crescent_swivel_chair_3.jpeg",
    ],
    price: 890,
    stock: 15,
    featured: false,
    category: categories[1],
    slug: "crescent_swivel_chair",
  });

  await Product.create({
    name: "Monti Lava Stone Coffee Table",
    description:
      "Made of lava stone that has been dexterously covered in some parts in concrete, the Cocktail Table is weighty and earnest. In a Polished Concrete finish, this table is built to endure and can be placed in the garden or indoors. Hairline cracks occur and are part of the natural beauty and uniqueness of each piece. These are part of the natural curing process, but they do not affect durability or structural integrity because of the steel frame underneath.",
    images: [
      "monti_lava_stone_coffee_table_1.jpeg",
      "monti_lava_stone_coffee_table_2.jpeg",
      "monti_lava_stone_coffee_table_3.jpeg",
    ],
    price: 599,
    stock: 15,
    featured: false,
    category: categories[0],
    slug: "monti_lava_stone_coffee_table",
  });

  await Product.create({
    name: "Diego Olivero Terracotta",
    description:
      "This geometric vase has a heart-shaped design which is romantic and warm. It also has geometric structure and stable load. this vase is suitable for living room, kitchen, balcony, bedroom, dining table, hotel and other places. It is durable and has good appearance and more connotation.",
    images: [
      "diego_olivero_terracotta_vases_1.jpeg",
      "diego_olivero_terracotta_vases_2.jpeg",
      "diego_olivero_terracotta_vases_3.jpeg",
    ],
    price: 60,
    stock: 15,
    featured: false,
    category: categories[4],
    slug: "diego_olivero_terracotta_vases",
  });

  // ============== PACK - 2 ===============

  await Product.create({
    name: "Lucia Wing Chair",
    description:
      "Lucia Wing Chair is an armchair with soft, enveloping curves. Made of FSC™ certified solid wood, upholstered in leather or fabric, it can also be equipped with an optional headrest in leather or matching fabric.",
    images: [
      "lucia_wing_chair_metal_legs_1.jpeg",
      "lucia_wing_chair_metal_legs_2.jpeg",
      "lucia_wing_chair_metal_legs_3.jpeg",
    ],
    price: 799,
    stock: 15,
    featured: false,
    category: categories[1],
    slug: "Lucia_Wing_Chair",
  });

  await Product.create({
    name: "Aluminum Flat Leg Coffee Table",
    description:
      "Blending industrial styling with a more organic shape, the Aluminum Flat Leg Coffee Table coffee table is a unique add-on to the living room. The table tops oval shaping and worn in lines bring in a natural and aged aesthetic to its metal structure.",
    images: [
      "aluminum_flat_leg_coffee_table_1.jpeg",
      "aluminum_flat_leg_coffee_table_2.jpeg",
      "aluminum_flat_leg_coffee_table_3.jpeg",
    ],
    price: 997,
    stock: 15,
    featured: false,
    category: categories[0],
    slug: "Aluminum_Flat_Leg_Coffee_Table",
  });

  await Product.create({
    name: "Form Studies Ceramic Vases",
    description:
      "Our Form Studies Ceramic Vases feature a rough texture with a color fading effect. They have a design that can go with many different styles, such as farmhouse, Nordic, Scandinavian, etc. They are great ceramic pots for houseplants, ground plants, fresh flowers, and artificial flowers, and can even be used as small pots for simple decoration of family dining tables.",
    images: ["form_studies_vases_1.jpeg", "form_studies_vases_2.jpeg", "form_studies_vases_3.jpeg"],
    price: 40,
    stock: 15,
    featured: false,
    category: categories[4],
    slug: "Form_Studies_Ceramic_Vases",
  });

  await Product.create({
    name: "Foundations Marble Trays",
    description:
      "Honed Arabascato marble is imported from Italy and hand-carved into serving tray designed by Jennifer Fisher. Beautiful, light to dark grey veining will vary in intensity from piece to piece. The larger scale is perfect for serving charcuterie, but as Jennifer notes. This works as a great tray anywhere in your house. Use this in your kitchen, use this in your bathroom, use this in your closet. It's not confined to food.",
    images: [
      "foundations_marble_trays_1.jpeg",
      "foundations_marble_trays_2.jpeg",
      "foundations_marble_trays_3.jpeg",
    ],
    price: 38,
    stock: 15,
    featured: false,
    category: categories[4],
    slug: "foundations_marble_trays",
  });

  // ============== PACK - 3 ===============

  await Product.create({
    name: "Harmony Modular Sofa",
    description:
      "This iconic sofa from the collection is characterized by generous proportions. The corners of the sofa's upper arm are cushion-shaped, the main inspiration of the collection. The shape of the backrest is molded until it reaches the armrest where its thickness is reduced, converging into a delicate silhouette that embraces its occupants.",
    images: [
      "harmony_modular_sofa_1.jpeg",
      "harmony_modular_sofa_2.jpeg",
      "harmony_modular_sofa_3.jpeg",
    ],
    price: 2399,
    stock: 15,
    featured: false,
    category: categories[3],
    slug: "harmony_modular_sofa",
  });

  await Product.create({
    name: "Double Channeled Swivel Chair",
    description:
      "Atop a 360-degree swivel, cleanly shaped seating is upholstered in cream-colored high-performance fabric, for a sensible spin on modern styling. Performance fabrics are specially created to withstand spills, stains, high traffic and wear, ensuring long-term comfort and unmatched durability.",
    images: [
      "double_channeled_swivel_chair_1.jpeg",
      "double_channeled_swivel_chair_2.jpeg",
      "double_channeled_swivel_chair_3.jpeg",
    ],
    price: 999,
    stock: 15,
    featured: false,
    category: categories[3],
    slug: "double_channeled_swivel_chair",
  });

  await Product.create({
    name: "Solstice Coffee Table",
    description:
      "A simple design and a standout piece in any space. This round horseshoe shaped coffee table, while elegant, adds space to place your favorite drinks and books. The table is made of flexible plywood with solid wood bracing for support. This particular striping has been left raw in color and finished with a satin water-based polyethylene for protection.",
    images: [
      "solstice_coffee_table_1.jpeg",
      "solstice_coffee_table_2.jpeg",
      "solstice_coffee_table_3.jpeg",
    ],
    price: 799,
    stock: 15,
    featured: false,
    category: categories[0],
    slug: "solstice_coffee_table",
  });

  await Product.create({
    name: "Irving Wood Table Lamp",
    description:
      "This one-of-a-kind lamp is made from the tropical hardwood Cupesí. This lamp is an excellent choice to place in the living room, bedrooms and all kinds of modern environments thanks to its integration of colors. Modern thanks to its integration of colors that combine with the latest trends in the world of decoration.",
    images: [
      "irving_wood_table_lamp_1.jpeg",
      "irving_wood_table_lamp_2.jpeg",
      "irving_wood_table_lamp_3.jpeg",
    ],
    price: 549,
    stock: 15,
    featured: false,
    category: categories[4],
    slug: "irving_wood_table_lamp",
  });

  // ================ Tables ============================================

  await Product.create({
    name: "T brace Console Table",
    description: `Inspired by the American Industrial Age, our collection by Julie Lawrence evokes its iconic infrastructure. Solid oak timbers are supported on tapered stanchions of hand-cast metal, the mix of materials and textures imparting a rugged, organic aesthetic. Carefully calibrated proportions lend refinement.`,
    images: [
      "T_brace_Console_Table_1.jpg",
      "T_brace_Console_Table_2.jpg",
      "T_brace_Console_Table_3.jpg",
    ],
    price: 3200,
    stock: 6,
    featured: false,
    category: categories[0],
    slug: "T_brace_Console_Table",
  });

  await Product.create({
    name: "Reclaimed Oak Parsons Console Table",
    description: `Reclaimed oak timbers from decades-old buildings, with distressed white oak planks for consistency and stability, lend richness to this simple, linear collection from artisan Theo Eichholtz. Each piece is handcrafted of wood that retains its natural character, bearing the occasional knot, nick or crack where no two tables are exactly the same.`,
    images: [
      "Reclaimed_Oak_Parsons_Console_Table_1.jpg",
      "Reclaimed_Oak_Parsons_Console_Table_2.jpg",
      "Reclaimed_Oak_Parsons_Console_Table_3.jpg",
    ],
    price: 2500,
    stock: 10,
    featured: true,
    category: categories[0],
    slug: "Reclaimed_Oak_Parsons_Console_Table",
  });

  await Product.create({
    name: "Davos Oak Console Table",
    description: `Inspired by the 1970s use of bold lines and natural forms, the Davos collection by Australians Nicholas and Harrison Condos is built on a heroic scale. The spare silhouettes, rendered in thick veneers of American white oak, reveal an intriguing juxtaposition of crisp angles and rounded corners. The oak's texture is enhanced by a high-heat finishing process that creates distinctive cracks and purposeful imperfections, a celebration of the wood's character and unique grain patterning.`,
    images: [
      "Davos_Oak_Console_Table_1.jpg",
      "Davos_Oak_Console_Table_2.jpg",
      "Davos_Oak_Console_Table_3.jpg",
    ],
    price: 2700,
    stock: 3,
    featured: false,
    category: categories[0],
    slug: "Davos_Oak_Console_Table",
  });

  await Product.create({
    name: "Bardot Burl Rectangular Dining Table",
    description: `Understated and tailored in its restraint, our collection honors the minimalist geometric forms of 1970s postmodernism and the era's embrace of exotic materials. The clean, gently curved silhouettes are wrapped in burlwood veneers, which highlight the intricate, swirling grain patterns and mottled shading. Expertly cut and pieced by hand, the burl is sanded and buffed to an elegant sheen.`,
    images: [
      "Bardot_Burl_Rectangular_Dining_Table_1.jpg",
      "Bardot_Burl_Rectangular_Dining_Table_2.jpg",
      "Bardot_Burl_Rectangular_Dining_Table_3.jpg",
    ],
    price: 3800,
    stock: 1,
    featured: false,
    category: categories[0],
    slug: "Bardot_Burl_Rectangular_Dining_Table",
  });

  await Product.create({
    name: "Oslo Cylinder Rectangular Dining Table",
    description: `Inspired by the simplicity of early Swedish Modernism, the boldly scaled Oslo collection by Australians Nicholas and Harrison Condos is a contemporary celebration of the spare silhouettes and gentle contours of the natural world. Defined by a sculptural grouping of cylindrical supports, the tables are meticulously handcrafted of wire-brushed American white oak. A high-heat finishing process creates distinctive cracking, further enhancing the wood's rich texture and unique grain patterning — an elegant juxtaposition of rustic and relaxed, minimalist and refined.`,
    images: [
      "Oslo_Cylinder_Rectangular_Dining_Table_1.jpg",
      "Oslo_Cylinder_Rectangular_Dining_Table_2.jpg",
      "Oslo_Cylinder_Rectangular_Dining_Table_3.jpg",
    ],
    price: 4200,
    stock: 3,
    featured: true,
    category: categories[0],
    slug: "Oslo_Cylinder_Rectangular_Dining_Table",
  });

  await Product.create({
    name: "T brace Rectangular Extension Dining Table",
    description: `Inspired by the American Industrial Age, our collection by Julie Lawrence evokes its iconic infrastructure. Solid oak timbers are supported on tapered stanchions of hand-cast metal, the mix of materials and textures imparting a rugged, organic aesthetic. Carefully calibrated proportions lend refinement.`,
    images: [
      "T_brace_Rectangular_Extension_Dining_Table_1.jpg",
      "T_brace_Rectangular_Extension_Dining_Table_2.jpg",
      "T_brace_Rectangular_Extension_Dining_Table_3.jpg",
    ],
    price: 6200,
    stock: 3,
    featured: false,
    category: categories[0],
    slug: "T_brace_Rectangular_Extension_Dining_Table",
  });

  // ================ Beds ==============================================
  await Product.create({
    name: "Cortona Fabric Panel Platform Bed",
    description: `Designed by Ann Marie Vering of Los Angeles, the Cortona collection evokes the architectural language of Italian postmodernism. The bed's angular silhouette is a study in geometric forms, harmoniously coexisting, with a crisp, block-like headboard rests atop a recessed platform base, lending it the appearance of floating.`,
    images: [
      "Cortona_Fabric_Panel_Platform_Bed_1.jpg",
      "Cortona_Fabric_Panel_Platform_Bed_2.jpg",
      "Cortona_Fabric_Panel_Platform_Bed_3.jpg",
    ],
    price: 8800,
    stock: 4,
    featured: true,
    category: categories[2],
    slug: "Cortona_Fabric_Panel_Platform_Bed",
  });

  await Product.create({
    name: "Vittorio Fabric Panel Platform Bed With Footboard",
    description: `Designed by Ann Marie Vering of Los Angeles, the Cortona collection evokes the architectural language of Italian postmodernism. The bed's angular silhouette is a study in geometric forms, harmoniously coexisting, with a crisp, block-like headboard rests atop a recessed platform base, lending it the appearance of floating.`,
    images: [
      "Vittorio_Fabric_Panel_Platform_Bed_With_Footboard_1.jpg",
      "Vittorio_Fabric_Panel_Platform_Bed_With_Footboard_2.jpg",
      "Vittorio_Fabric_Panel_Platform_Bed_With_Footboard_3.jpg",
    ],
    price: 7700,
    stock: 1,
    featured: false,
    category: categories[2],
    slug: "Vittorio_Fabric_Panel_Platform_Bed_With_Footboard",
  });

  await Product.create({
    name: "Modena Fabric Panel Patform Bed",
    description: `Distinguished by crisp lines and smooth contours, our sculptural platform beds are fully customizable. Create your perfect bed, down to the last detail – from headboard height and style to upholstery fabrics or leathers. Our nontufted panel bed's unadorned, hand-upholstered headboard lends elegance and luxurious comfort.`,
    images: [
      "Modena_Fabric_Panel_Patform_Bed_1.jpg",
      "Modena_Fabric_Panel_Patform_Bed_2.jpg",
      "Modena_Fabric_Panel_Patform_Bed_3.jpg",
    ],
    price: 3900,
    stock: 5,
    featured: true,
    category: categories[2],
    slug: "Modena_Fabric_Panel_Patform_Bed",
  });

  await Product.create({
    name: "Cayden Campaign Fabric Panel Bed",
    description: `European campaign furnishings of the 19th century inspired our collection by the Van Thiels, echoed in the simple strength of the shapes and the rustic grain of the solid oak. Subtle details including tapered legs and rich upholstery lend refinement to the clean, forthright silhouettes.`,
    images: [
      "Cayden_Campaign_Fabric_Panel_Bed_1.jpg",
      "Cayden_Campaign_Fabric_Panel_Bed_2.jpg",
      "Cayden_Campaign_Fabric_Panel_Bed_3.jpg",
    ],
    price: 4290,
    stock: 7,
    featured: true,
    category: categories[2],
    slug: "Cayden_Campaign_Fabric_Panel_Bed",
  });

  await Product.create({
    name: "Modena Fabric Framed Panel Platform Bed",
    description: `Distinguished by crisp lines and smooth contours, our fully customizable platform bed is set atop a recessed base that lends the appearance of floating. Create your perfect bed, down to the last detail – from headboard height and style to upholstery fabrics or leathers. The sculptural form of our nontufted panel bed is anchored by a hand-upholstered headboard framed in richly textured oak.`,
    images: [
      "Modena_Fabric_Framed_Panel_Platform_Bed_1.jpg",
      "Modena_Fabric_Framed_Panel_Platform_Bed_2.jpg",
      "Modena_Fabric_Framed_Panel_Platform_Bed_3.jpg",
    ],
    price: 4190,
    stock: 3,
    featured: false,
    category: categories[2],
    slug: "Modena_Fabric_Framed_Panel_Platform_Bed",
  });

  await Product.create({
    name: "Cayden Campaign Fabric Panel Bed With Footboard",
    description: `European campaign furnishings of the 19th century inspired our collection by the Van Thiels, echoed in the simple strength of the shapes and the rustic grain of the solid oak. Subtle details including tapered legs and rich upholstery lend refinement to the clean, forthright silhouettes.`,
    images: [
      "Cayden_Campaign_Fabric_Panel_Bed_With_Footboar_1.jpg",
      "Cayden_Campaign_Fabric_Panel_Bed_With_Footboar_2.jpg",
      "Cayden_Campaign_Fabric_Panel_Bed_With_Footboar_3.jpg",
    ],
    price: 5190,
    stock: 5,
    featured: false,
    category: categories[2],
    slug: "Cayden_Campaign_Fabric_Panel_Bed_With_Footboard",
  });

  // ================ Chairs ============================================

  await Product.create({
    name: "Milos Chair",
    description: `At once classic and contemporary, rustic and refined, our collection by Dutch designer Luay Al-Rawi is a celebration of natural materials and traditional craftsmanship. A restrained oak frame with tapered legs plays host to tailored panels of handwoven Seagrass, its textural pattern a juxtaposition of geometric motifs.`,
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
    description: `At once classic and contemporary, rustic and refined, our collection by Dutch designer Luay Al-Rawi is a celebration of natural materials and traditional craftsmanship. A restrained oak frame with tapered legs plays host to tailored panels of handwoven Seagrass, its textural pattern a juxtaposition of geometric motifs.`,
    images: [
      "Aegean_Teak_Lounge_Chair_1.jpg",
      "Aegean_Teak_Lounge_Chair_2.jpg",
      "Aegean_Teak_Lounge_Chair_3.jpg",
    ],
    price: 880,
    stock: 16,
    featured: false,
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
    featured: false,
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

  // for (let i = 0; i < 20; i++) {
  //   const randomCategory =
  //     categories[faker.datatype.number({ min: 0, max: categories.length - 1 })];
  //   const feat = Math.floor(Math.random() * 10 + 1) > 5 ? true : false;
  //   const product = new Product({
  //     name: "Mueble" + i,
  //     description:
  //       "Our coffee tables, side tables, and benches — across a variety of stylistic collections — are designed to complement our award-winning seating. Whether you’re looking for a functional coffee table with storage or a timeless mid-century Modern design, our edited selection represents the best of furniture design.",
  //     images: ["imgPrueba1.jpg", "imgPrueba2.jpg", "imgPrueba3.jpg"],
  //     price: Math.floor(Math.random() * 1000 + 1),
  //     stock: Math.floor(Math.random() * 10 + 1),
  //     featured: feat,
  //     category: randomCategory,
  //   });
  //   product.slug = slugify(`${product.name} ${randomCategory.name}`, "_");
  //   products.push(product);
  // }

  // await Product.insertMany(products);
  console.log("[Database] Se corrió el seeder de Products.");
};
