import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { categories, getProductsByCategory } from "@/data/products";
export const metadata: Metadata = { title: "Furniture Collections", description: "Explore Franze collections for living, dining, bedroom, and outdoor spaces.", alternates: { canonical: "/collections" } };
const imagery = { Living: "/products/mori-performance-fabric-chaise-sectional-sofa/01.png", Dining: "/products/sloane-travertine-dining-table/01.png", Bedroom: "/products/dawson-bed/01.png", Outdoor: "/products/eden-outdoor-sofa/01.png" };
export default function CollectionsPage() { return <main className="project-index shell"><header><p className="fc-label">SHOP BY ROOM</p><h1>Make space for<br /><em>the good things.</em></h1><p>Four collections, each built around how a room feels when it is genuinely lived in.</p></header><div className="collection-index">{categories.map((category,index) => <Link href={`/collections/${category.toLowerCase()}`} className="collection-index-row" key={category}><div className="collection-index-image"><Image src={imagery[category]} alt={`${category} furniture collection`} fill sizes="(max-width: 760px) 100vw, 54vw" /></div><div className="collection-index-copy"><span>0{index+1}</span><p>{getProductsByCategory(category).length} pieces</p><h2>{category}</h2><span className="text-link">Explore <ArrowUpRight size={16} /></span></div></Link>)}</div></main>; }
