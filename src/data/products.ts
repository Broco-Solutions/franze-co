/**
 * Public catalog policy
 *
 * Franze does not publish a product until its supplier authorization, product
 * record, and image rights have been documented in CONTENT-SOURCES.md.
 */
export const categories = ["Residential", "Hospitality", "Outdoor"] as const;
export type Category = (typeof categories)[number];

export type Product = {
  id: string;
  slug: string;
  name: string;
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
};

export type CatalogProduct = Product;

// Intentionally empty: no Franze-owned or authorized product records were
// available at the time of the cross-repository audit (2026-10-01).
export const products: Product[] = [];
export const featuredProducts: Product[] = [];
export const toCatalogProduct = (item: Product): CatalogProduct => item;
export const getProductBySlug = (slug: string) => products.find((item) => item.slug === slug);
export const getProductsByCategory = (category: Category) => products.filter((item) => item.category === category);
export const getProductsBySubcategory = (subcategory: string) => products.filter((item) => item.subcategory === subcategory);
export const formatPrice = (price: number, currency: Product["currency"] = "USD") =>
  new Intl.NumberFormat("en-US", { style: "currency", currency, maximumFractionDigits: 0 }).format(price);
