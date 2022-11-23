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
    featured: true,
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
    featured: true,
    category: categories[2],
    slug: "Cayden_Campaign_Fabric_Panel_Bed_With_Footboard",
  });
  // ================ Chairs ============================================
  await Product.create({
    name: "Pica Chair",
    description: `Pica is an ideal companion chair that warmly embraces the Burrow ethos: supremely comfortable, veritably stylish, and of course, incredibly easy to set up. The rounded silhouette and plush materials invite lengthy sessions of curling up and zoning out, while the petite footprint allows it to find a home in any nook or corner. The perfect balance of comfort and form, Pica makes a cozy compliment to a sofa, beside the bed, or paired up in front of a fireplace.`,
    images: ["Pica_Chair_2.jpg", "Pica_Chair_1.jpg", "Pica_Chair_3.jpg"],
    name: "Milos Chair",
    description: `At once classic and contemporary, rustic and refined, our collection by Dutch designer Luay Al-Rawi is a celebration of natural materials and traditional craftsmanship. A restrained oak frame with tapered legs plays host to tailored panels of handwoven seagrass, its textural pattern a juxtaposition of geometric motifs.`,
    images: ["Milos_Chair_1.jpg", "Milos_Chair_2.jpg", "Milos_Chair_3.jpg"],
    price: 880,
    stock: 16,
    featured: true,
    featured: false,
    category: categories[1],
    slug: "Pica_Chair",
    slug: "Milos_Chair",
  });

  await Product.create({
    name: "Lodge Chair",
    name: "Marbella Teak Lounge Chair",
    description: `Despite the suave familiarity of the Danish mid-century aesthetic, the Lodge Chair is unlike any other out there. The handsome carpentry and premium upholstery make it a conversation starter in any room, but the quiet design features make it truly worthy of admiration. From the gentle pitch of the seat to the width of the armrest, every aspect of Lodge has been meticulously considered and refined, so it's not just beautiful, it's functional and comfortable too.`,
    images: ["Lodge_Chair_1.jpg", "Lodge_Chair_2.jpg", "Lodge_Chair_3.jpg"],
    images: [
      "Marbella_Teak_Lounge_Chair_1.jpg",
      "Marbella_Teak_Lounge_Chair_2.jpg",
      "Marbella_Teak_Lounge_Chair_3.jpg",
    ],
    price: 990,
    stock: 12,
    featured: false,
    category: categories[1],
    slug: "Lodge_Chair",
    slug: "Marbella_Teak_Lounge_Chair",
  });

  await Product.create({
    name: "Vesper Wood & Leather Lounge Chair",
    description: `Vesper is a visually striking, statement design that still meets our high standard for functionality. It builds upon a long legacy of molded plywood lounge chairs, and takes a step beyond homage: the custom-pressed shell was engineered to offer a comfortably reclined seat, but also to nest for efficient shipping and easy setup — just the sort of thoughtful touch you've come to expect from Burrow.`,
    name: "Balmani Teak Lounge Chair",
    description: `Inspired by the sculptural works of Salvador Dalí and Diego Giacometti, our chair from Julie Lawrence merges the rustic sensibility of a hand-forged metal base with tailored upholstery. Employing an ancient fabrication process, artisans hand hammer the metal bars to reveal an alive, imperfect and organic texture, a counterpoint to the frame's slender, tapered silhouette.`,
    images: [
      "Vesper_Wood_and_Leather_Lounge_Chair_1.jpg",
      "Vesper_Wood_and_Leather_Lounge_Chair_2.jpg",
      "Vesper_Wood_and_Leather_Lounge_Chair_3.jpg",
      "Balmani_Teak_Lounge_Chair_1.jpg",
      "Balmani_Teak_Lounge_Chair_2.jpg",
      "Balmani_Teak_Lounge_Chair_3.jpg",
    ],
    price: 770,
    stock: 8,
    featured: false,
    featured: true,
    category: categories[1],
    slug: "Vesper_Wood_and_Leather_Lounge_Chair",
    slug: "Balmani_Teak_Lounge_Chair",
  });

  await Product.create({
    name: "Airi Office Chair",
    name: "Dixon Swivel Chair",
    description: `The first officer to our Pilot Desk, Airi is a breathable, professional-grade office chair. It features a mesh back that prevents the dreaded, all-too-familiar lower back dampness. The frame has four legs with casters, and a pneumatic rising base that can tilt or lock in place. Designed and manufactured by Eurostyle, Airi is contract-grade and built with BIFMA-approved components.`,
    images: ["Airi_Office_Chair_1.jpg", "Airi_Office_Chair_2.jpg", "Airi_Office_Chair_3.jpg"],
    images: ["Dixon_Swivel_Chair_1.jpg", "Dixon_Swivel_Chair_2.jpg", "Dixon_Swivel_Chair_3.jpg"],
    price: 395,
    stock: 4,
    featured: false,
    featured: true,
    category: categories[1],
    slug: "Airi_Office_Chair",
    slug: "Dixon_Swivel_Chair",
  });

  await Product.create({
    name: "Range 2-Piece Lounger",
    name: "Marisol Seagrass Slope Arm Chair",
    description: `A seat module paired with an attached ottoman in a classic 'chaise longue' configuration. Stretch out in a home office, or add a table for a movie room recliner setup. Range is our vision for a plush, comfortable seating system that’s perfect for everything from streaming marathons to afternoon napping, balanced with a bold, contemporary design statement with a low profile and clean, sophisticated lines.`,
    images: [
      "Range_2_Piece_Lounger_1.jpg",
      "Range_2_Piece_Lounger_2.jpg",
      "Range_2_Piece_Lounger_3.jpg",
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
    slug: "Range_2_Piece_Lounger",
    slug: "Aegean_Teak_Lounge_Chair",
  });
  // ================ Sofas =============================================

  await Product.create({
    name: "Block Nomad Sofa",
    name: "Cloud Sofa",
    description: `The cornerstone of our Nomad Collection is the essential sofa reinvented for modern life. The first truly easy-to-move sofa thanks to our award-winning modular design; it has plenty of room for three people, or more if you're into cuddling. It's packed with all the clever, life-changing features you expect from Burrow, starting with a built-in USB charger.`,
    images: ["Block_Nomad_Sofa_1.jpg", "Block_Nomad_Sofa_1.jpg", "Block_Nomad_Sofa_1.jpg"],
    images: ["Cloud_Sofa_1.jpg", "Cloud_Sofa_2.jpg", "Cloud_Sofa_3.jpg"],
    price: 1385,
    stock: 5,
    featured: true,
    category: categories[3],
    slug: "Block_Nomad_Sofa",
    slug: "Cloud_Sofa",
  });

  await Product.create({
    name: "Block Nomad Leather Sofa with Ottoman",
    description: `Our Nomad Leather Sofa is the perfect leather sofa for real life, and now it features a matching ottoman made from the same soft, supple, and sophisticated top-grain Italian leather we use across the rest of the collection. Like everything we make, our modular design is incredibly easy to move and packed with all the clever, life-changing features you expect from Burrow, starting with a built-in USB charger.`,
    images: [
      "Block_Nomad_Leather_Sofa_with_Ottoman_1.jpg",
      "Block_Nomad_Leather_Sofa_with_Ottoman_2.jpg",
      "Block_Nomad_Leather_Sofa_with_Ottoman_3.jpg",
    ],
    name: "Maxwell Sofa",
    description: `Ultra-deep proportions meet supreme comfort in our Maxwell collection. Clean lines and a streamlined silhouette define its architectural attitude, while a modernist, low-slung profile and broad track arms invite lounging.`,
    images: ["Maxwell_Sofa_1.jpg", "Maxwell_Sofa_2.jpg", "Maxwell_Sofa_3.jpg"],
    price: 1550,
    stock: 8,
    featured: true,
    category: categories[3],
    slug: "Block_Nomad_Leather_Sofa_with_Ottoman",
    slug: "Maxwell_Sofa",
  });

  await Product.create({
    name: "Block Nomad Double Chaise Sectional",
    description: `Our Nomad Leather Sofa is the perfect leather sofa for real life, and now it features a matching ottoman made from the same soft, supple, and sophisticated top-grain Italian leather we use across the rest of the collection. Like everything we make, our modular design is incredibly easy to move and packed with all the clever, life-changing features you expect from Burrow, starting with a built-in USB charger.`,
    name: "Maxwell Leather Sofa",
    description: `Ultra-deep proportions meet supreme comfort in our Maxwell collection. Clean lines and a streamlined silhouette define its architectural attitude, while a modernist, low-slung profile and broad track arms invite lounging..`,
    images: [
      "Block_Nomad_Double_Chaise_Sectional_1.jpg",
      "Block_Nomad_Double_Chaise_Sectional_2.jpg",
      "Block_Nomad_Double_Chaise_Sectional_3.jpg",
      "Maxwell_Leather_Sofa_1.jpg",
      "Maxwell_Leather_Sofa_2.jpg",
      "Maxwell_Leather_Sofa_3.jpg",
    ],
    price: 1490,
    stock: 1,
    featured: false,
    category: categories[3],
    slug: "Block_Nomad_Double_Chaise_Sectional",
    slug: "Maxwell_Leather_Sofa",
  });

  await Product.create({
    name: "Union 2-Seat Sofa",
    name: "Maxwell Three Seat Cushion Sofa",
    description: `Our Nomad Leather Sofa is the perfect leather sofa for real life, and now it features a matching ottoman made from the same soft, supple, and sophisticated top-grain Italian leather we use across the rest of the collection. Like everything we make, our modular design is incredibly easy to move and packed with all the clever, life-changing features you expect from Burrow, starting with a built-in USB charger.`,
    images: ["Union_2_1.jpg", "Union_2_2.jpg", "Union_2_3.jpg"],
    images: [
      "Maxwell_Three_Seat_Cushion_Sofa_1.jpg",
      "Maxwell_Three_Seat_Cushion_Sofa_2.jpg",
      "Maxwell_Three_Seat_Cushion_Sofa_3.jpg",
    ],
    price: 1550,
    stock: 8,
    featured: false,
    category: categories[3],
    slug: "Union_2-Seat_Sofa",
    slug: "Maxwell_Three_Seat_Cushion_Sofa",
  });

  await Product.create({
    name: "Slope Nomad Leather 4_Seat Corner Sectional",
    name: "Belgian Track Arm Slipcovered Sofa",
    description: `Our Nomad Leather Sofa is the perfect leather sofa for real life, and now it features a matching ottoman made from the same soft, supple, and sophisticated top-grain Italian leather we use across the rest of the collection. Like everything we make, our modular design is incredibly easy to move and packed with all the clever, life-changing features you expect from Burrow, starting with a built-in USB charger.`,
    images: [
      "Slope_Nomad_Leather_4_Seat_Corner_Sectional_1.jpg",
      "Slope_Nomad_Leather_4_Seat_Corner_Sectional_2.jpg",
      "Slope_Nomad_Leather_4_Seat_Corner_Sectional_3.jpg",
      "Belgian_Track_Arm_Slipcovered_Sofa_1.jpg",
      "Belgian_Track_Arm_Slipcovered_Sofa_2.jpg",
      "Belgian_Track_Arm_Slipcovered_Sofa_3.jpg",
    ],
    price: 1670,
    stock: 3,
    featured: true,
    category: categories[3],
    slug: "Slope_Nomad_Leather_4_Seat_Corner_Sectional",
    slug: "Belgian_Track_Arm_Slipcovered_Sofa",
  });

  await Product.create({
    name: "Block Nomad Sofa with Ottoman",
    description: `Our Nomad Leather Sofa is the perfect leather sofa for real life, and now it features a matching ottoman made from the same soft, supple, and sophisticated top-grain Italian leather we use across the rest of the collection. Like everything we make, our modular design is incredibly easy to move and packed with all the clever, life-changing features you expect from Burrow, starting with a built-in USB charger.`,
    name: "Belgian Track Arm Sofa",
    description: `Our European-inspired take on the classic sofa redefines it for a new age. Low to the ground, deep in profile, and sleekly streamlined for sophisticated appeal, it's a chic, ultra-comfortable twist on tradition.`,
    images: [
      "Block_Nomad_Sofa_with_Ottoman_1.jpg",
      "Block_Nomad_Sofa_with_Ottoman_2.jpg",
      "Block_Nomad_Sofa_with_Ottoman_3.jpg",
      "Belgian_Track_Arm_Sofa_1.jpg",
      "Belgian_Track_Arm_Sofa_2.jpg",
      "Belgian_Track_Arm_Sofa_3.jpg",
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
    slug: "Belgian_Track_Arm_Sofa",
  });

  // await Product.create({
  //   name: "Block Nomad Sofa",
  //   description: `The cornerstone of our Nomad Collection is the essential sofa reinvented for modern life. The first truly easy-to-move sofa thanks to our award-winning modular design; it has plenty of room for three people, or more if you're into cuddling. It's packed with all the clever, life-changing features you expect from Burrow, starting with a built-in USB charger.`,
  //   images: ["Block_Nomad_Sofa_1.jpg", "Block_Nomad_Sofa_2.jpg", "Block_Nomad_Sofa_3.jpg"],
  //   price: 1385,
  //   stock: 5,
  //   featured: true,
  //   category: categories[3],
  //   slug: "Block_Nomad_Sofa",
  // });

  // await Product.create({
  //   name: "Block Nomad Leather Sofa with Ottoman",
  //   description: `Our Nomad Leather Sofa is the perfect leather sofa for real life, and now it features a matching ottoman made from the same soft, supple, and sophisticated top-grain Italian leather we use across the rest of the collection. Like everything we make, our modular design is incredibly easy to move and packed with all the clever, life-changing features you expect from Burrow, starting with a built-in USB charger.`,
  //   images: [
  //     "Block_Nomad_Leather_Sofa_with_Ottoman_1.jpg",
  //     "Block_Nomad_Leather_Sofa_with_Ottoman_2.jpg",
  //     "Block_Nomad_Leather_Sofa_with_Ottoman_3.jpg",
  //   ],
  //   price: 1550,
  //   stock: 8,
  //   featured: true,
  //   category: categories[3],
  //   slug: "Block_Nomad_Leather_Sofa_with_Ottoman",
  // });

  // await Product.create({
  //   name: "Block Nomad Double Chaise Sectional",
  //   description: `Our Nomad Leather Sofa is the perfect leather sofa for real life, and now it features a matching ottoman made from the same soft, supple, and sophisticated top-grain Italian leather we use across the rest of the collection. Like everything we make, our modular design is incredibly easy to move and packed with all the clever, life-changing features you expect from Burrow, starting with a built-in USB charger.`,
  //   images: [
  //     "Block_Nomad_Double_Chaise_Sectional_1.jpg",
  //     "Block_Nomad_Double_Chaise_Sectional_2.jpg",
  //     "Block_Nomad_Double_Chaise_Sectional_3.jpg",
  //   ],
  //   price: 1490,
  //   stock: 1,
  //   featured: false,
  //   category: categories[3],
  //   slug: "Block_Nomad_Double_Chaise_Sectional",
  // });

  // await Product.create({
  //   name: "Union 2-Seat Sofa",
  //   description: `Our Nomad Leather Sofa is the perfect leather sofa for real life, and now it features a matching ottoman made from the same soft, supple, and sophisticated top-grain Italian leather we use across the rest of the collection. Like everything we make, our modular design is incredibly easy to move and packed with all the clever, life-changing features you expect from Burrow, starting with a built-in USB charger.`,
  //   images: ["Union_2_1.jpg", "Union_2_2.jpg", "Union_2_3.jpg"],
  //   price: 1550,
  //   stock: 8,
  //   featured: false,
  //   category: categories[3],
  //   slug: "Union_2-Seat_Sofa",
  // });

  // await Product.create({
  //   name: "Slope Nomad Leather 4_Seat Corner Sectional",
  //   description: `Our Nomad Leather Sofa is the perfect leather sofa for real life, and now it features a matching ottoman made from the same soft, supple, and sophisticated top-grain Italian leather we use across the rest of the collection. Like everything we make, our modular design is incredibly easy to move and packed with all the clever, life-changing features you expect from Burrow, starting with a built-in USB charger.`,
  //   images: [
  //     "Slope_Nomad_Leather_4_Seat_Corner_Sectional_1.jpg",
  //     "Slope_Nomad_Leather_4_Seat_Corner_Sectional_2.jpg",
  //     "Slope_Nomad_Leather_4_Seat_Corner_Sectional_3.jpg",
  //   ],
  //   price: 1670,
  //   stock: 3,
  //   featured: true,
  //   category: categories[3],
  //   slug: "Slope_Nomad_Leather_4_Seat_Corner_Sectional",
  // });

  // await Product.create({
  //   name: "Block Nomad Sofa with Ottoman",
  //   description: `Our Nomad Leather Sofa is the perfect leather sofa for real life, and now it features a matching ottoman made from the same soft, supple, and sophisticated top-grain Italian leather we use across the rest of the collection. Like everything we make, our modular design is incredibly easy to move and packed with all the clever, life-changing features you expect from Burrow, starting with a built-in USB charger.`,
  //   images: [
  //     "Block_Nomad_Sofa_with_Ottoman_1.jpg",
  //     "Block_Nomad_Sofa_with_Ottoman_2.jpg",
  //     "Block_Nomad_Sofa_with_Ottoman_3.jpg",
  //   ],
  //   price: 990,
  //   stock: 15,
  //   featured: false,
  //   category: categories[3],
  //   slug: "Block_Nomad_Sofa_with_Ottoman",
  // });
