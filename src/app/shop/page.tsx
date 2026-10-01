import type { Metadata } from "next";
import Image from "next/image";
import { ShopCatalog } from "@/components/shop-catalog";
import { products, toCatalogProduct } from "@/data/products";
export const metadata: Metadata = { title: "Shop Contemporary Furniture", description: "A focused collection of contemporary furniture for warm, architectural interiors in Miami.", alternates: { canonical: "/shop" } };
export default function ShopPage() { return <><header className="page-hero"><Image src="/editorial/shop-hero.webp" alt="Franze furniture collection in a contemporary Miami interior" fill priority sizes="100vw" unoptimized /><div className="page-hero-shade" /><div className="page-hero-content shell"><p className="fc-label">THE FRANZE COLLECTION / {products.length} PIECES</p><span className="shop-intro-number">01</span><h1>Built for<br /><em>living well.</em></h1><p>Furniture with strong silhouettes, tactile materials, and an ease that lasts beyond the first look.</p></div></header><ShopCatalog initialProducts={products.map(toCatalogProduct)} /></>; }
