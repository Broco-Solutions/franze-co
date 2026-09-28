import type { Metadata } from "next";
import Image from "next/image";
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
      <header className="shop-hero" data-reveal>
        <Image src="/editorial/warm-living.jpg" alt="Warm contemporary living room" fill priority sizes="100vw" />
        <div className="shop-hero-shade" />
        <div className="shop-hero-content shell">
          <p className="eyebrow">THE COLLECTION / {products.length} PIECES</p>
          <h1>Furniture with<br />a sense of place.</h1>
          <p>Designed for the pace, light, and texture of a Miami home.</p>
        </div>
      </header>
      <CollectionNav />
      <ShopCatalog initialProducts={products.map(toCatalogProduct)} />
    </>
  );
}
