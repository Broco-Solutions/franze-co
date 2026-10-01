import Image from "next/image";
import Link from "next/link";
import { FeaturedRail } from "@/components/featured-rail";
import { HeroTitle } from "@/components/hero-title";
import { categories, featuredProducts, getProductsByCategory, toCatalogProduct } from "@/data/products";

const roomImages = {
  Living: "/editorial/living-hero.webp",
  Dining: "/editorial/dining-hero.webp",
  Bedroom: "/editorial/bedroom-hero.webp",
  Outdoor: "/editorial/outdoor-hero.webp",
};

export default function Home() {
  return <>
    <section className="franze-pf-hero">
      <Image src="/editorial/franze-miami-hero.webp" alt="Editorial Franze Miami interior" fill priority sizes="100vw" unoptimized />
      <div className="franze-pf-hero-shade" />
      <div className="franze-pf-hero-copy"><p>FRANZE &amp; CO. / MIAMI</p><HeroTitle /><span>CONTEMPORARY PIECES FOR WARM, ARCHITECTURAL ROOMS</span><Link href="/shop">Explore the collection</Link></div>
    </section>

    <section className="franze-pf-featured" data-reveal>
      <div className="franze-pf-section-head shell"><div><p>THE FRANZE COLLECTION</p><h2>Featured pieces</h2></div><Link href="/shop">View all furniture</Link></div>
      <FeaturedRail products={featuredProducts.slice(0, 6).map(toCatalogProduct)} />
    </section>

    <section className="franze-pf-lines shell" data-reveal>
      <div className="franze-pf-section-head"><div><p>SHOP BY ROOM</p><h2>Discover our<br />room edits</h2></div><p className="franze-pf-intro">Natural materials, clear forms, and a practical point of view for every space.</p></div>
      <div className="franze-pf-lines-grid">{categories.map((category) => <Link href={`/collections/${category.toLowerCase()}`} key={category}><div><Image src={roomImages[category]} alt={`${category} furniture collection`} fill sizes="(max-width: 760px) 86vw, 25vw" unoptimized /></div><h3>{category}</h3><p>{getProductsByCategory(category).length} pieces</p></Link>)}</div>
    </section>

    <section className="franze-pf-story" data-reveal>
      <div className="franze-pf-story-copy"><p>THE FRANZE EDIT</p><h2>Rooms that feel<br /><em>lived in.</em></h2><span>We collect furniture with texture, proportion, and enough quiet confidence to anchor the whole room.</span><Link href="/collections/living">Explore living</Link></div>
      <div className="franze-pf-story-image"><Image src="/editorial/living-hero.webp" alt="Franze living room interior" fill sizes="100vw" unoptimized /></div>
    </section>

    <section className="franze-pf-studio" data-reveal>
      <div className="shell"><p>FRANZE STUDIO / MIAMI</p><h2>See the proportions.<br />Feel the materials.</h2><span>Visit the studio to compare finishes and find the pieces that belong in your room.</span><Link href="/studio">Plan a studio visit</Link></div>
    </section>
  </>;
}
