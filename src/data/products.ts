import catalog from "./catalog.json";

export const categories = ["Living", "Dining", "Bedroom", "Outdoor"] as const;
export type Category = (typeof categories)[number];
export type Product = {
  id: string; slug: string; name: string; sourceProductName: string; category: Category; subcategory: string;
  price: number; compareAtPrice: number | null; currency: "USD"; shortDescription: string; description: string;
  materials: string[]; colors: string[]; dimensions: string; images: string[]; featured: boolean;
  sourceName: string; sourceUrl: string; imageSourceUrls: string[]; dateCaptured: string;
};
export type CatalogProduct = Omit<Product, "sourceProductName" | "sourceName" | "sourceUrl" | "imageSourceUrls" | "dateCaptured">;
export const products = catalog as Product[];
export const featuredProducts = products.filter((product) => product.featured);
export const toCatalogProduct = ({ sourceProductName, sourceName, sourceUrl, imageSourceUrls, dateCaptured, ...product }: Product): CatalogProduct => { void sourceProductName; void sourceName; void sourceUrl; void imageSourceUrls; void dateCaptured; return product; };
export const getProductBySlug = (slug: string) => products.find((product) => product.slug === slug);
export const getProductsByCategory = (category: Category) => products.filter((product) => product.category === category);
export const getProductsBySubcategory = (subcategory: string) => products.filter((product) => product.subcategory === subcategory);
export const formatPrice = (price: number, currency: Product["currency"] = "USD") => new Intl.NumberFormat("en-US", { style: "currency", currency, maximumFractionDigits: 0 }).format(price);
