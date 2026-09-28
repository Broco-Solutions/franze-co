import type { Metadata } from "next";
import { CollectionNav } from "@/components/collection-nav";
import { ShopCatalog } from "@/components/shop-catalog";
import { products, toCatalogProduct } from "@/data/products";

export const metadata: Metadata = {
  title: "Shop Furniture Miami",
  description: "Browse 24 contemporary living, dining, bedroom, and outdoor furniture pieces curated by Franze & Co. in Miami.",
  alternates: { canonical: "/shop" },
  openGraph: {
    title: "Shop Furniture Miami",
    description: "Browse 24 contemporary living, dining, bedroom, and outdoor furniture pieces curated by Franze & Co. in Miami.",
    url: "/shop",
    images: ["/editorial/green-salon.jpg"],
  },
};

export default function ShopPage() {
  return (
    <>
      <header className="shop-hero shell" data-reveal>
        <p className="eyebrow">INVENTORY / {products.length} PIECES</p>
        <h1>The Franze<br /><em>inventory.</em></h1>
        <p>Furniture selected for rooms with daylight, dinner plans, and a point of view.</p>
      </header>
      <CollectionNav />
      <ShopCatalog initialProducts={products.map(toCatalogProduct)} />
    </>
  );
}
