import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { categories, getProductsByCategory } from "@/data/products";

export const metadata: Metadata = {
  title: "Furniture Collections",
  description: "Explore Franze & Co. furniture collections for contemporary living, dining, bedroom, and outdoor spaces in Miami.",
  alternates: { canonical: "/collections" },
  openGraph: {
    title: "Furniture Collections",
    description: "Explore Franze & Co. furniture collections for contemporary living, dining, bedroom, and outdoor spaces in Miami.",
    url: "/collections",
    images: ["/editorial/blue-room.jpg"],
  },
};

const media = {
  Living: "/editorial/green-salon.jpg",
  Dining: "/editorial/dining-warm.jpg",
  Bedroom: "/editorial/lounge-wide.jpg",
  Outdoor: "/editorial/miami-living.jpg",
};

export default function CollectionsPage() {
  return (
    <>
      <header className="collections-index-hero shell" data-reveal>
        <p className="eyebrow">THE HOUSE, INDEXED</p>
        <h1>Start with<br /><em>the moment.</em></h1>
        <p>Four focused edits for how a room is actually used, from first coffee to the last guest leaving.</p>
      </header>
      <section className="collection-index">
        {categories.map((category, index) => (
          <Link href={`/collections/${category.toLowerCase()}`} className="collection-index-row" key={category} data-reveal>
            <div className="collection-index-image"><Image src={media[category]} alt={`${category} collection`} fill sizes="(max-width: 760px) 100vw, 54vw" /></div>
            <div className="collection-index-copy">
              <span>0{index + 1}</span>
              <p>{getProductsByCategory(category).length} pieces</p>
              <h2>{category}</h2>
              <span className="text-link">Explore collection <ArrowRight size={16} /></span>
            </div>
          </Link>
        ))}
      </section>
    </>
  );
}
