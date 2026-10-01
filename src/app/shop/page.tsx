import type { Metadata } from "next";
import Image from "next/image";
import { ShopCatalog } from "@/components/shop-catalog";
import { products, toCatalogProduct } from "@/data/products";

export const metadata: Metadata = { title: "Shop Contemporary Furniture", description: "A focused collection of contemporary furniture for warm, architectural interiors in Miami.", alternates: { canonical: "/shop" } };

export default function ShopPage() {
  return <>
    <header className="franze-catalog-masthead shell">
      <div className="franze-catalog-serial"><span>01</span><span>CATALOGUE</span><span>{products.length} OBJECTS</span></div>
      <div className="franze-catalog-title"><p className="franze-kicker">THE FRANZE COLLECTION</p><h1>Built for<br /><em>living well.</em></h1><p>Furniture with strong silhouettes, tactile materials, and an ease that lasts beyond the first look.</p></div>
      <div className="franze-catalog-image"><Image src="/editorial/shop-hero.webp" alt="Franze furniture collection in a contemporary Miami interior" fill priority sizes="(max-width: 760px) 100vw, 30vw" unoptimized /></div>
    </header>
    <ShopCatalog initialProducts={products.map(toCatalogProduct)} />
  </>;
}
