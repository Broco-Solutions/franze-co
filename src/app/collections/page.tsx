import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { categories, getProductsByCategory } from "@/data/products";

export const metadata: Metadata = { title: "Furniture Collections", description: "Explore Franze collections for living, dining, bedroom, and outdoor spaces.", alternates: { canonical: "/collections" } };
const imagery = { Living: "/editorial/living-hero.webp", Dining: "/editorial/dining-hero.webp", Bedroom: "/editorial/bedroom-hero.webp", Outdoor: "/editorial/outdoor-hero.webp" };

export default function CollectionsPage() {
  return <>
    <header className="franze-collections-intro shell"><p className="franze-kicker">FRANZE / ROOM INDEX</p><h1>Four rooms.<br /><em>Four starting points.</em></h1><p>Each edit begins with the atmosphere a room needs to hold, then follows its function.</p><span>01—04</span></header>
    <main className="franze-collections-list shell">{categories.map((category, index) => <Link href={`/collections/${category.toLowerCase()}`} className="franze-collection-entry" key={category}><span>0{index + 1}</span><div className="franze-collection-entry-copy"><p>{getProductsByCategory(category).length} pieces / room edit</p><h2>{category}</h2><em>Open collection</em></div><div className="franze-collection-entry-image"><Image src={imagery[category]} alt={`${category} furniture collection`} fill priority sizes="(max-width: 760px) 100vw, 38vw" unoptimized /></div></Link>)}</main>
  </>;
}
