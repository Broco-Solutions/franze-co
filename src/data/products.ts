export const categories = ["Living", "Dining", "Bedroom", "Outdoor"] as const;

export type Category = (typeof categories)[number];

export type Product = {
  id: string;
  slug: string;
  name: string;
  sourceProductName: string;
  category: Category;
  subcategory: string;
  price: number;
  compareAtPrice: number | null;
  currency: "USD";
  shortDescription: string;
  description: string;
  materials: string[];
  colors: string[];
  dimensions: string;
  images: string[];
  featured: boolean;
  sourceName: string;
  sourceUrl: string;
  imageSourceUrls: string[];
  dateCaptured: string;
};

export type CatalogProduct = Omit<
  Product,
  "sourceProductName" | "sourceName" | "sourceUrl" | "imageSourceUrls" | "dateCaptured"
>;

type ProductInput = Omit<Product, "id" | "images" | "currency" | "sourceName" | "sourceUrl" | "dateCaptured">;

const unsplash = (id: string) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1200&q=82`;

const catalogImageSets = [
  [unsplash("1555041469-a586c61ea9bc"), unsplash("1540574163026-643ea20ade25")],
  [unsplash("1550254478-ead40cc54513"), unsplash("1586023492125-27b2c045efd7")],
  [unsplash("1600210492486-724fe5c67fb0"), unsplash("1618220179428-22790b461013")],
  [unsplash("1618221195710-dd6b41faaea6"), unsplash("1600607687920-4e2a09cf159d")],
  [unsplash("1600566753190-17f0baa2a6c3"), unsplash("1617104678098-de229db51175")],
  [unsplash("1616486338812-3dadae4b4ace"), unsplash("1615529328331-f8917597711f")],
  [unsplash("1600494603989-9650cf6ddd3d"), unsplash("1594026112284-02bb6f3352fe")],
  [unsplash("1598928506311-c55ded91a20c"), unsplash("1567016432779-094069958ea5")],
  [unsplash("1600585154340-be6161a56a0c"), unsplash("1615529162924-f8605388461d")],
  [unsplash("1618219908412-a29a1bb7b86e"), unsplash("1604014237800-1c9102c219da")],
  [unsplash("1615873968403-89e068629265"), unsplash("1600585154526-990dced4db0d")],
  [unsplash("1618221195710-dd6b41faaea6"), unsplash("1555041469-a586c61ea9bc")],
  [unsplash("1540574163026-643ea20ade25"), unsplash("1550254478-ead40cc54513")],
  [unsplash("1586023492125-27b2c045efd7"), unsplash("1600210492486-724fe5c67fb0")],
  [unsplash("1618220179428-22790b461013"), unsplash("1618221195710-dd6b41faaea6")],
  [unsplash("1600607687920-4e2a09cf159d"), unsplash("1600566753190-17f0baa2a6c3")],
  [unsplash("1617104678098-de229db51175"), unsplash("1616486338812-3dadae4b4ace")],
  [unsplash("1615529328331-f8917597711f"), unsplash("1600494603989-9650cf6ddd3d")],
  [unsplash("1594026112284-02bb6f3352fe"), unsplash("1598928506311-c55ded91a20c")],
  [unsplash("1567016432779-094069958ea5"), unsplash("1600585154340-be6161a56a0c")],
  [unsplash("1615529162924-f8605388461d"), unsplash("1618219908412-a29a1bb7b86e")],
  [unsplash("1604014237800-1c9102c219da"), unsplash("1615873968403-89e068629265")],
  [unsplash("1600585154526-990dced4db0d"), unsplash("1618220179428-22790b461013")],
  [unsplash("1550254478-ead40cc54513"), unsplash("1616486338812-3dadae4b4ace")],
] as const;

let productIndex = 0;

const product = (data: ProductInput): Product => ({
  ...data,
  id: data.slug,
  sourceProductName: data.name,
  currency: "USD",
  images: [...catalogImageSets[productIndex++ % catalogImageSets.length]],
  sourceName: "Franze & Co. Original Catalog",
  sourceUrl: "https://franze-co.com/shop",
  imageSourceUrls: [],
  dateCaptured: "2026-09-10",
});

export const toCatalogProduct = (item: Product): CatalogProduct => {
  const { sourceProductName, sourceName, sourceUrl, imageSourceUrls, dateCaptured, ...catalogItem } = item;
  void sourceProductName;
  void sourceName;
  void sourceUrl;
  void imageSourceUrls;
  void dateCaptured;
  return catalogItem;
};

export const products: Product[] = [
  product({
    slug: "dune-cloud-modular-sofa",
    name: "Dune Cloud Modular Sofa",
    sourceProductName: "Marais Modular Sofa in Chalk",
    category: "Living",
    subcategory: "Sofas & Sectionals",
    price: 2079,
    compareAtPrice: 3170,
    shortDescription: "A low modular sectional shaped for expansive, relaxed rooms.",
    description: "Dune brings generous comfort into a clean architectural profile. Soft tufting and rounded modules make the chalk composition feel relaxed while keeping an open-plan room visually calm.",
    materials: ["Off-white fabric upholstery"],
    colors: ["Off White"],
    dimensions: 'W: 115 3/4" x D: 38 5/8"-77 1/4" x H: 26"; seat height: 16 1/8"',
    featured: true,
    imageSourceUrls: [
      "https://cdn.shopify.com/s/files/1/0898/9048/8616/files/Forma-two-seater-off-white_cutout-2.png?v=1777574643",
      "https://cdn.shopify.com/s/files/1/0898/9048/8616/files/FormaSofaWhiteLifestyleSquare.png?v=1786672728",
      "https://cdn.shopify.com/s/files/1/0898/9048/8616/files/Forma-two-seater-off-white_cutout-3.png?v=1777574643",
    ],
  }),
  product({
    slug: "palma-curve-sectional",
    name: "Palma Curve Sectional",
    sourceProductName: "Collins Sectional in Cocoa Velvet",
    category: "Living",
    subcategory: "Sofas & Sectionals",
    price: 2689,
    compareAtPrice: 2980,
    shortDescription: "Rich velvet gives this flexible sectional a warmer presence.",
    description: "Palma balances cloud-like cushions with the depth of cocoa velvet. Three seating pieces and a coordinating ottoman allow the composition to shift with the room and the occasion.",
    materials: ["Brown velvet upholstery"],
    colors: ["Brown"],
    dimensions: 'W: 113" x D: 78 3/4" x H: 27 3/8"',
    featured: false,
    imageSourceUrls: [
      "https://cdn.shopify.com/s/files/1/0898/9048/8616/files/md019902--g-Photoroom.png?v=1764175550",
      "https://cdn.shopify.com/s/files/1/0898/9048/8616/files/BrunelloSectionalLifestyle.jpg?v=1785878237",
      "https://cdn.shopify.com/s/files/1/0898/9048/8616/files/md019920--g-Photoroom.png?v=1772831487",
    ],
  }),
  product({
    slug: "solenne-ivory-lounge-chair",
    name: "Solenne Ivory Lounge Chair",
    sourceProductName: "Dune Lounge Chair in Ivory",
    category: "Living",
    subcategory: "Lounge Chairs",
    price: 999,
    compareAtPrice: 1390,
    shortDescription: "A cocooning statement chair with one continuous soft curve.",
    description: "Solenne wraps the seat, back, and arms into a singular sculptural silhouette. Its ivory upholstery keeps the generous form light enough for quiet living rooms or a pair in a conversation setting.",
    materials: ["100% polyester upholstery", "Pine wood and plywood frame", "Foam padding", "Plastic legs"],
    colors: ["White"],
    dimensions: 'W: 39 15/16" x D: 35 7/16" x H: 29 1/2"',
    featured: true,
    imageSourceUrls: [
      "https://cdn.shopify.com/s/files/1/0898/9048/8616/files/nido_chair_front.png?v=1745895962",
      "https://cdn.shopify.com/s/files/1/0898/9048/8616/files/Nidosofawhite_loungechair_lifestyle.png?v=1776282089",
      "https://cdn.shopify.com/s/files/1/0898/9048/8616/files/nido_chair_3-4.png?v=1776282089",
    ],
  }),
  product({
    slug: "tide-swivel-boucle-chair",
    name: "Tide Swivel Boucle Chair",
    sourceProductName: "Biscayne Swivel Chair in Sand",
    category: "Living",
    subcategory: "Lounge Chairs",
    price: 749,
    compareAtPrice: 1190,
    shortDescription: "A compact swivel chair with a softly rounded, grounded form.",
    description: "Tide brings movement to a compact footprint. The continuous sand boucle shell curves around the sitter, creating a comfortable accent for reading corners and open living spaces.",
    materials: ["Beige velvet upholstery", "Swivel base"],
    colors: ["Beige"],
    dimensions: 'W: 32 7/8" x D: 34 1/4" x H: 27 13/16"; seat height: 16 15/16"',
    featured: false,
    imageSourceUrls: [
      "https://cdn.shopify.com/s/files/1/0898/9048/8616/files/lilo-lounge-chair-beige-velvet-front-22colored.png?v=1755193449",
      "https://cdn.shopify.com/s/files/1/0898/9048/8616/files/LiloChairBeige_lifestyle.png?v=1778701445",
      "https://cdn.shopify.com/s/files/1/0898/9048/8616/files/lilo-lounge-chair-beige-velvet-ang.png?v=1755193452",
    ],
  }),
  product({
    slug: "pedra-pedestal-coffee-table",
    name: "Pedra Pedestal Coffee Table",
    sourceProductName: "Terra Round Coffee Table",
    category: "Living",
    subcategory: "Coffee & Side Tables",
    price: 799,
    compareAtPrice: 1090,
    shortDescription: "A circular concrete table with a quiet travertine character.",
    description: "Pedra reads like a solid mineral form without overwhelming the room. Its broad round top and stepped pedestal are proportioned for low contemporary seating.",
    materials: ["Concrete", "Travertine-color finish"],
    colors: ["Travertine"],
    dimensions: 'Diameter: 36" x H: 15"',
    featured: true,
    imageSourceUrls: [
      "https://cdn.shopify.com/s/files/1/0898/9048/8616/files/Pietra-Round-Coffee-Table_cutout.png?v=1759344861",
      "https://cdn.shopify.com/s/files/1/0898/9048/8616/files/EloraSofaGreigeLifestyle.png?v=1785952240",
      "https://cdn.shopify.com/s/files/1/0898/9048/8616/files/Pietra-Round-Coffee-Table_cutout-5.png?v=1773150935",
    ],
  }),
  product({
    slug: "arc-line-coffee-table",
    name: "Arc Line Coffee Table",
    sourceProductName: "Arco Travertine Coffee Table",
    category: "Living",
    subcategory: "Coffee & Side Tables",
    price: 849,
    compareAtPrice: 1290,
    shortDescription: "Travertine ceramic and matte black create a precise contrast.",
    description: "Arc layers a slim stone-finish surface over a dark architectural base. The offset composition gives a living room definition while retaining a low, restrained profile.",
    materials: ["6 mm matte travertine ceramic", "MDF base", "Black matte paint"],
    colors: ["Travertine", "Black"],
    dimensions: 'W: 47 1/4" x D: 23 1/2" x H: 10"',
    featured: false,
    imageSourceUrls: [
      "https://cdn.shopify.com/s/files/1/0898/9048/8616/files/roma_coffe_table_tav_front.png?v=1766522171",
      "https://cdn.shopify.com/s/files/1/0898/9048/8616/files/Roma_coffee_table_Travertine_lifestyle_2.png?v=1772635060",
      "https://cdn.shopify.com/s/files/1/0898/9048/8616/files/roma_coffe_table_tav_3-4.png?v=1772635060",
    ],
  }),
  product({
    slug: "cove-round-dining-table",
    name: "Cove Round Dining Table",
    sourceProductName: "Palma Round Dining Table",
    category: "Dining",
    subcategory: "Dining Tables",
    price: 1399,
    compareAtPrice: 1690,
    shortDescription: "A monolithic round table finished in deep brown marble.",
    description: "Cove centers the dining room with a clean circular plane and cylindrical pedestal. Dark brown and gray veining introduce material depth while the round format keeps conversation open.",
    materials: ["Brown marble finish"],
    colors: ["Brown Marble"],
    dimensions: 'Diameter: 47 1/4" x H: 30"; base diameter: 19 11/16"',
    featured: true,
    imageSourceUrls: [
      "https://cdn.shopify.com/s/files/1/0898/9048/8616/files/Bloom-Round-Dining-Table-Brown-Marble_cutout-2.png?v=1765998138",
      "https://cdn.shopify.com/s/files/1/0898/9048/8616/files/Bloom_round_dining_table_lifestyle_2.png?v=1774897568",
      "https://cdn.shopify.com/s/files/1/0898/9048/8616/files/Bloom-Round-Dining-Table-Brown-Marble_cutout.png?v=1774897518",
    ],
  }),
  product({
    slug: "ashwood-oval-dining-table",
    name: "Ashwood Oval Dining Table",
    sourceProductName: "Camden Oak Dining Table",
    category: "Dining",
    subcategory: "Dining Tables",
    price: 2299,
    compareAtPrice: 2690,
    shortDescription: "A generous oak table defined by rounded edges and ribbed bases.",
    description: "Ashwood pairs the warmth of oak with an architectural slatted base. The softly rounded oval top seats up to eight without losing the clarity of its silhouette.",
    materials: ["Greige oak veneer", "Rubberwood inner frame", "Rubberwood base"],
    colors: ["Greige Oak"],
    dimensions: 'L: 79" x D: 40" x H: 30"; base width: 27 9/16"',
    featured: true,
    imageSourceUrls: [
      "https://cdn.shopify.com/s/files/1/0898/9048/8616/files/oxford_din_table_gr_front_2_-Photoroom.png?v=1745901102",
      "https://cdn.shopify.com/s/files/1/0898/9048/8616/files/oxford_rec_table_gr_1500x1500_1703c02d-9a80-4fd4-a84d-eee3914c9a47.jpg?v=1745901103",
      "https://cdn.shopify.com/s/files/1/0898/9048/8616/files/oxford_din_table_gr_3-4-Photoroom.png?v=1745901104",
    ],
  }),
  product({
    slug: "atelier-ceramic-dining-table",
    name: "Atelier Ceramic Dining Table",
    sourceProductName: "Linea Ceramic Dining Table",
    category: "Dining",
    subcategory: "Dining Tables",
    price: 2999,
    compareAtPrice: 4490,
    shortDescription: "Glossy white ceramic floats above a geometric brass base.",
    description: "Atelier has the scale of a statement table and the visual lift of a slim ceramic top. Its brushed brass structure brings warmth to the pale surface and accommodates six to eight seats.",
    materials: ["White glossy ceramic", "Tempered glass", "Metal frame", "Brushed brass-finish metal legs"],
    colors: ["White", "Brushed Brass"],
    dimensions: 'L: 94 1/2" x W: 47 1/4" x H: 30"',
    featured: false,
    imageSourceUrls: [
      "https://cdn.shopify.com/s/files/1/0898/9048/8616/files/siena_din_table_wh_front_1-Photoroom.png?v=1745894833",
      "https://cdn.shopify.com/s/files/1/0898/9048/8616/files/siena_table_wh_1500x1500_a81e7e09-caac-4e19-8e36-1531a568da37.jpg?v=1745894834",
      "https://cdn.shopify.com/s/files/1/0898/9048/8616/files/siena_din_table_wh_3-4_1-Photoroom.png?v=1767220065",
    ],
  }),
  product({
    slug: "riva-cane-dining-chair",
    name: "Riva Cane Dining Chair",
    sourceProductName: "Harbor Linen Dining Chair",
    category: "Dining",
    subcategory: "Dining Chairs",
    price: 329,
    compareAtPrice: 490,
    shortDescription: "A curved linen chair outlined by a slender brass frame.",
    description: "Riva combines an enveloping back with a light cane structure. Natural linen softens the silhouette, while the warm frame introduces a measured accent around the dining table.",
    materials: ["Off-white linen upholstery", "Metal frame", "Brushed brass legs", "Foam cushion"],
    colors: ["Off White", "Brushed Brass"],
    dimensions: 'W: 20 15/16" x D: 22 7/16" x H: 32 9/16"',
    featured: true,
    imageSourceUrls: [
      "https://cdn.shopify.com/s/files/1/0898/9048/8616/files/oxford_dining_chair_br_front.png?v=1745895809",
      "https://cdn.shopify.com/s/files/1/0898/9048/8616/files/use_interior_walls_of_the_first_reference_image_to_generate_a_new_similar_image_but_using_only_the_e_3.png?v=1768508938",
    ],
  }),
  product({
    slug: "noa-swivel-dining-chair",
    name: "Noa Swivel Dining Chair",
    sourceProductName: "Cove Swivel Dining Chair",
    category: "Dining",
    subcategory: "Dining Chairs",
    price: 419,
    compareAtPrice: 620,
    shortDescription: "A fully upholstered dining chair with a discreet swivel base.",
    description: "Noa turns through a compact base while maintaining a soft, continuous profile. Sand upholstery and generous padding support long dinners without adding visual weight.",
    materials: ["100% polyester velvet", "Pinewood and plywood frame", "Foam padding", "Metal swivel base"],
    colors: ["Beige"],
    dimensions: 'W: 23 5/8" x D: 22 1/16" x H: 30"; seat height: 18 7/8"',
    featured: false,
    imageSourceUrls: [
      "https://cdn.shopify.com/s/files/1/0898/9048/8616/files/dune_din_chair_wh_front.png?v=1745895893",
      "https://cdn.shopify.com/s/files/1/0898/9048/8616/files/use_interior_walls_of_the_first_reference_image_to_generate_a_new_similar_image_but_using_only_the_e_2_4.png?v=1768508925",
    ],
  }),
  product({
    slug: "calma-leather-dining-chair",
    name: "Calma Leather Dining Chair",
    sourceProductName: "Sand Dining Chair Vegan Leather Beige",
    category: "Dining",
    subcategory: "Dining Chairs",
    price: 420,
    compareAtPrice: null,
    shortDescription: "Soft vegan leather balanced by oak and brushed brass.",
    description: "Calma layers a gently padded seat over a precise leather frame. Tobacco upholstery and warm oak create a composed chair for stone or timber tables.",
    materials: ["Vegan leather upholstery", "Foam padding", "Brushed brass frame", "Solid oak legs"],
    colors: ["Beige", "Brown", "Brushed Brass"],
    dimensions: 'W: 22 7/8" x D: 21 5/8" x H: 30 3/4"; seat height: 19 3/4"',
    featured: false,
    imageSourceUrls: [
      "https://cdn.shopify.com/s/files/1/0898/9048/8616/files/Sand-Dining-Chair-Vegan-Leather-Beige_cutout-3.png?v=1784690253",
      "https://cdn.shopify.com/s/files/1/0898/9048/8616/files/OxfordXSGreigeRoundTableLifestyle.jpg?v=1785960838",
    ],
  }),
  product({
    slug: "alba-channel-bed",
    name: "Alba Channel Bed",
    sourceProductName: "Baxter Bed Alabaster w/ Beige Velvet Headboard",
    category: "Bedroom",
    subcategory: "Beds",
    price: 1599,
    compareAtPrice: 3090,
    shortDescription: "A wide velvet headboard anchors a softly ribbed bed frame.",
    description: "Alba creates a calm, full-width backdrop for the bedroom. An ivory frame and channelled headboard combine a quiet neutral palette with a subtle vertical rhythm.",
    materials: ["Alabaster-finish frame", "Beige velvet headboard"],
    colors: ["Alabaster", "Beige"],
    dimensions: 'Queen: W: 65" x D: 85" x H: 48"; King: W: 82" x D: 85" x H: 48"',
    featured: true,
    imageSourceUrls: [
      "https://cdn.shopify.com/s/files/1/0898/9048/8616/files/can_you_create_a_front_facing_view_of_this_bed.png?v=1768416515",
      "https://cdn.shopify.com/s/files/1/0898/9048/8616/files/Slide_15_v6Batch7.jpg?v=1768416515",
      "https://cdn.shopify.com/s/files/1/0898/9048/8616/files/Updated_Bed_test.jpg?v=1768416515",
    ],
  }),
  product({
    slug: "rowan-platform-bed",
    name: "Rowan Platform Bed",
    sourceProductName: "Camden Platform Bed",
    category: "Bedroom",
    subcategory: "Beds",
    price: 1799,
    compareAtPrice: 2990,
    shortDescription: "Slatted oak and soft upholstery create a broad, restful plane.",
    description: "Rowan extends its oak headboard to frame the bed as part of the architecture. Upholstered rails and dense foam soften the timber composition without obscuring its natural rhythm.",
    materials: ["Oak veneer headboard", "100% polyester upholstery", "Rubberwood frame and slats", "High-density foam"],
    colors: ["Greige Oak", "Greige"],
    dimensions: 'Queen: W: 59"-94 1/2" x D: 86 1/4" x H: 48"; King: W: 75"-110 1/2" x D: 86 1/4" x H: 48"',
    featured: true,
    imageSourceUrls: [
      "https://cdn.shopify.com/s/files/1/0898/9048/8616/files/new_oxford_bed.png?v=1746634453",
      "https://cdn.shopify.com/s/files/1/0898/9048/8616/files/OxfordBedGreigeOak_lifestyle.png?v=1781794256",
      "https://cdn.shopify.com/s/files/1/0898/9048/8616/files/oxford_bed_3-4_2.png?v=1776181687",
    ],
  }),
  product({
    slug: "linen-house-bed",
    name: "Linen House Bed",
    sourceProductName: "Sable Bed Off White Linen",
    category: "Bedroom",
    subcategory: "Beds",
    price: 1599,
    compareAtPrice: 2290,
    shortDescription: "Off-white linen and a slim brass line define a tailored bed.",
    description: "Linen House pairs a cushioned linen frame with a single warm metal accent across the headboard. The broad, low profile gives the bedroom a composed focal point without feeling formal.",
    materials: ["Off-white linen upholstery", "Brass headboard accent"],
    colors: ["Off White", "Brass"],
    dimensions: 'Queen bed: W: 60 5/8" x D: 83 1/2" x H: 13 3/8"; King bed: W: 78 11/16" x D: 83 1/2" x H: 13 3/8"',
    featured: false,
    imageSourceUrls: [
      "https://cdn.shopify.com/s/files/1/0898/9048/8616/files/Sable-Queen-Bed_cutout-2.png?v=1760560051",
      "https://cdn.shopify.com/s/files/1/0898/9048/8616/files/Slide_11_v6Batch_3.jpg?v=1766069921",
      "https://cdn.shopify.com/s/files/1/0898/9048/8616/files/Sable-Queen-Bed_cutout.png?v=1767045715",
    ],
  }),
  product({
    slug: "isla-two-drawer-nightstand",
    name: "Isla Two-Drawer Nightstand",
    sourceProductName: "Camden Two-Drawer Nightstand",
    category: "Bedroom",
    subcategory: "Nightstands",
    price: 699,
    compareAtPrice: 990,
    shortDescription: "Curved bedside storage in a warm gray-oak finish.",
    description: "Isla carries a rounded profile into a compact two-drawer nightstand. Oak veneer keeps the piece warm and natural beside upholstered or timber beds.",
    materials: ["Greige oak veneer", "Rubberwood inner frame", "Rubberwood base"],
    colors: ["Greige Oak"],
    dimensions: 'W: 26" x D: 18 1/8" x H: 18 1/2"',
    featured: false,
    imageSourceUrls: [
      "https://cdn.shopify.com/s/files/1/0898/9048/8616/files/oxford_nightstand_gr_front.png?v=1745901031",
      "https://cdn.shopify.com/s/files/1/0898/9048/8616/files/oxford_nightstand_gr_1500x1500_3ed04203-4ffc-436f-9d58-045cd8f9c0f8.jpg?v=1766688007",
    ],
  }),
  product({
    slug: "atelier-wide-dresser",
    name: "Atelier Wide Dresser",
    sourceProductName: "Lioh Dresser Alabaster",
    category: "Bedroom",
    subcategory: "Dressers",
    price: 1199,
    compareAtPrice: 1750,
    shortDescription: "A softly rounded dresser in matte alabaster.",
    description: "Atelier turns practical storage into a calm horizontal element. Rounded edges and an uninterrupted matte finish keep the soft-close drawers visually quiet.",
    materials: ["Matte lacquered engineered wood", "Soft-close drawers"],
    colors: ["Alabaster"],
    dimensions: 'W: 67" x D: 21" x H: 31 1/2"',
    featured: false,
    imageSourceUrls: [
      "https://cdn.shopify.com/s/files/1/0898/9048/8616/files/lioh-dresser-alabaster_front.png?v=1746641839",
      "https://cdn.shopify.com/s/files/1/0898/9048/8616/files/lioh-dresser-alabaster_ang.png?v=1746641839",
    ],
  }),
  product({
    slug: "boucle-end-bench",
    name: "Boucle End Bench",
    sourceProductName: "Elora Bench Greige Boucle",
    category: "Bedroom",
    subcategory: "Benches",
    price: 419,
    compareAtPrice: 790,
    shortDescription: "A softly curved bench with a compact sculptural footprint.",
    description: "Boucle End adds texture at the foot of a bed or along a dressing wall. Its ivory upholstery and rounded legs keep the silhouette unified from every angle.",
    materials: ["Greige boucle upholstery"],
    colors: ["Greige"],
    dimensions: 'W: 52 3/4" x D: 20" x H: 20"',
    featured: true,
    imageSourceUrls: [
      "https://cdn.shopify.com/s/files/1/0898/9048/8616/files/Bench_view_01-Photoroom_c5d85212-47dc-4cd5-aba7-1138bdcea83e.png?v=1764614050",
      "https://cdn.shopify.com/s/files/1/0898/9048/8616/files/Elora_Bench_Greige_boucle_lifestyle.png?v=1773150258",
    ],
  }),
  product({
    slug: "solana-outdoor-sectional",
    name: "Solana Outdoor Sectional",
    sourceProductName: "Verdura Outdoor Sectional",
    category: "Outdoor",
    subcategory: "Outdoor Sofas",
    price: 1299,
    compareAtPrice: 1890,
    shortDescription: "A generous L-shaped setting for poolside and terrace living.",
    description: "Solana brings the scale of an indoor sectional outside through two clean, low modules. Sand UV-resistant upholstery and a slender structure keep the arrangement composed and inviting.",
    materials: ["UV water-resistant fabric", "Galvanized iron structure"],
    colors: ["Beige", "Natural"],
    dimensions: 'Right-arm section: W: 61" x D: 36 5/8" x H: 26 3/8"; chaise: W: 81 1/2" x D: 36 5/8" x H: 26 3/8"',
    featured: true,
    imageSourceUrls: [
      "https://cdn.shopify.com/s/files/1/0898/9048/8616/files/SoleaoutdoorSofa_cutout4.png?v=1770844218",
      "https://cdn.shopify.com/s/files/1/0898/9048/8616/files/Solea_outdoor_coffee_table_lifestyle_copy.png?v=1772036910",
    ],
  }),
  product({
    slug: "palma-rope-lounge-chair",
    name: "Palma Rope Lounge Chair",
    sourceProductName: "Vita Outdoor Lounge Chair",
    category: "Outdoor",
    subcategory: "Outdoor Lounge Chairs",
    price: 599,
    compareAtPrice: 690,
    shortDescription: "Woven rope opens a compact lounge chair to the breeze.",
    description: "Palma frames deep removable cushioning with dark bronze aluminum and vertical rope. Its rounded profile feels comfortable enough for long afternoons while remaining visually light on a terrace.",
    materials: ["Powder-coated aluminum", "Polyester rope", "Polyester fabric cushion", "High-density foam with Dacron wrap"],
    colors: ["Matte Bronze", "Neutral"],
    dimensions: 'W: 28 5/16" x D: 28 11/16" x H: 26 3/16"',
    featured: true,
    imageSourceUrls: [
      "https://cdn.shopify.com/s/files/1/0898/9048/8616/files/Vita-Outdoor-Lounge-Chair_cutout-6.png?v=1770912982",
      "https://cdn.shopify.com/s/files/1/0898/9048/8616/files/vita_lounge_outdoor.png?v=1773927809",
    ],
  }),
  product({
    slug: "current-outdoor-sofa",
    name: "Current Outdoor Sofa",
    sourceProductName: "Onda Outdoor 3 Seater Sofa",
    category: "Outdoor",
    subcategory: "Outdoor Sofas",
    price: 1499,
    compareAtPrice: 1690,
    shortDescription: "A three-seat outdoor sofa with bold, flowing arms.",
    description: "Current uses a curved matte-bronze frame to give its low horizontal seat a distinct outline. Removable neutral cushions bring a softer layer to patios, gardens, and poolside settings.",
    materials: ["Powder-coated aluminum", "Polyester fabric removable cushions"],
    colors: ["Matte Bronze", "Neutral"],
    dimensions: 'W: 79 7/8" x D: 31 7/8" x H: 29 7/8"; seat height: 15 3/4"',
    featured: false,
    imageSourceUrls: [
      "https://cdn.shopify.com/s/files/1/0898/9048/8616/files/Onda-Outdoor-3-Seater-Sofa_cutout-3.png?v=1770920399",
      "https://cdn.shopify.com/s/files/1/0898/9048/8616/files/Onda_Outdoor_3_Seater_Sofa_lifestyle.png?v=1772037123",
    ],
  }),
  product({
    slug: "costa-round-outdoor-table",
    name: "Costa Round Outdoor Table",
    sourceProductName: "Costa Outdoor Dining Table",
    category: "Outdoor",
    subcategory: "Outdoor Dining",
    price: 649,
    compareAtPrice: 790,
    shortDescription: "A compact round table with a deep bronze architectural base.",
    description: "Costa makes outdoor dining feel composed through one material and one dark finish. Its circular aluminum top and geometric supports suit intimate breakfasts and relaxed evening meals.",
    materials: ["Powder-coated aluminum", "Matte bronze aluminum frame"],
    colors: ["Dark Brown", "Matte Bronze"],
    dimensions: 'Diameter: 42" x H: 30"',
    featured: true,
    imageSourceUrls: [
      "https://cdn.shopify.com/s/files/1/0898/9048/8616/files/Aura-Outdoor-Dining-Table_cutout.png?v=1770911070",
      "https://cdn.shopify.com/s/files/1/0898/9048/8616/files/Aura_Dining_Chair_table_lifestyle.png?v=1773837157",
    ],
  }),
  product({
    slug: "seagrass-outdoor-dining-chair",
    name: "Seagrass Outdoor Dining Chair",
    sourceProductName: "Costa Outdoor Dining Chair",
    category: "Outdoor",
    subcategory: "Outdoor Dining",
    price: 299,
    compareAtPrice: 490,
    shortDescription: "A rounded outdoor dining chair in bronze and pale upholstery.",
    description: "Seagrass softens a weather-resistant aluminum frame with a curved back and padded seat. The dark outline gives the pale upholstery definition around an outdoor table.",
    materials: ["Powder-coated aluminum", "Matte bronze aluminum frame", "Polyester fabric upholstery"],
    colors: ["Dark Brown", "Light Neutral"],
    dimensions: 'W: 22" x D: 23 3/16" x H: 30"',
    featured: false,
    imageSourceUrls: [
      "https://cdn.shopify.com/s/files/1/0898/9048/8616/files/Aura-Outdoor-Dining-Chair_cutout.png?v=1770910406",
      "https://cdn.shopify.com/s/files/1/0898/9048/8616/files/Aura-Outdoor-Dining-Chair_cutout-5.png?v=1773837114",
    ],
  }),
  product({
    slug: "atlas-stone-outdoor-table",
    name: "Atlas Stone Outdoor Table",
    sourceProductName: "Pebble Outdoor Coffee Table",
    category: "Outdoor",
    subcategory: "Outdoor Coffee Tables",
    price: 399,
    compareAtPrice: 830,
    shortDescription: "Rounded corners give a durable stone-toned table a softer form.",
    description: "Atlas anchors an outdoor lounge without a hard edge. Its square stone-finish surface and cylindrical aluminum legs bring a calm mineral note to open-air settings.",
    materials: ["Ceramic finish", "Aluminum"],
    colors: ["Light Stone"],
    dimensions: 'W: 35 7/16" x D: 35 7/16" x H: 14 3/16"',
    featured: false,
    imageSourceUrls: [
      "https://cdn.shopify.com/s/files/1/0898/9048/8616/files/pebble_od_coffee_table_front.png?v=1745894409",
      "https://cdn.shopify.com/s/files/1/0898/9048/8616/files/pebble_od_cot_5k.jpg?v=1745894410",
    ],
  }),
];

export const getProductBySlug = (slug: string) => products.find((item) => item.slug === slug);

export const getProductsByCategory = (category: Category) =>
  products.filter((item) => item.category === category);

export const featuredProducts = products.filter((item) => item.featured);

export const formatPrice = (price: number, currency: Product["currency"] = "USD") =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(price);
