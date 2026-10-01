import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { categories } from "@/data/products";

export const metadata: Metadata = { title: "Furniture Project Index", description: "Explore Franze & Co. sourcing pathways for residential, hospitality, and outdoor projects.", alternates: { canonical: "/collections" } };

const notes = ["Homes made for everyday use.", "Public-facing spaces with a point of view.", "Open-air rooms shaped by climate."];

export default function CollectionsPage() {
  return <main className="project-index shell">
    <header data-reveal><p className="fc-label">PROJECT INDEX</p><h1>Different spaces<br /><em>ask different things.</em></h1><p>Choose the context, then build the brief together.</p></header>
    <div className="project-index-list">{categories.map((category, index) => <Link href={`/collections/${category.toLowerCase()}`} key={category} data-reveal><span>0{index + 1}</span><div><h2>{category}</h2><p>{notes[index]}</p></div><ArrowUpRight size={22} /></Link>)}</div>
  </main>;
}
