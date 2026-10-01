import type { Metadata } from "next";
import { ShopCatalog } from "@/components/shop-catalog";
import { products, toCatalogProduct } from "@/data/products";
export const metadata: Metadata = { title: "Shop Contemporary Furniture", description: "A focused collection of contemporary furniture for warm, architectural interiors in Miami.", alternates: { canonical: "/shop" } };
export default function ShopPage() { return <><header className="shop-intro shell"><p className="fc-label">THE FRANZE COLLECTION / {products.length} PIECES</p><div><span className="shop-intro-number">01</span><h1>Built for<br /><em>living well.</em></h1></div><p>Furniture with strong silhouettes, tactile materials, and an ease that lasts beyond the first look.</p></header><ShopCatalog initialProducts={products.map(toCatalogProduct)} /></>; }
