import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, ArrowUpRight } from "lucide-react";
import { ProductCard } from "@/components/product-card";
import { SectionHeading } from "@/components/section-heading";
import { formattedAddress, siteConfig } from "@/config/site";
import { categories, featuredProducts, getProductsByCategory } from "@/data/products";

const categoryMedia = {
  Living: "/products/brunello-sectional-sofa-brown-velvet/02.webp",
  Dining: "/products/bloom-round-dining-table-brown-marble/02.webp",
  Bedroom: "/products/oxford-bed-greige-oak/02.webp",
  Outdoor: "/products/solea-outdoor-sofa/02.webp",
};

export default function Home() {
  return (
    <>
      <section className="home-hero">
        <Image
          src="/products/forma-sectional-sofa-off-white/02.webp"
          alt="A sculptural off-white sectional in a layered Miami living room"
          fill
          priority
          sizes="100vw"
        />
        <div className="hero-shade" />
        <div className="home-hero-content shell">
          <p className="eyebrow light-text">EDITED FURNITURE / MIAMI</p>
          <h1>Rooms with<br /><em>a point of view.</em></h1>
          <p>Furniture, lighting, and outdoor pieces selected for warm materials, confident silhouettes, and Miami&apos;s indoor-outdoor rhythm.</p>
          <div className="hero-actions">
            <Link className="button light" href="/shop">Explore the collection <ArrowRight size={17} /></Link>
            <Link className="text-link light" href="/studio">Visit Miami Studio <ArrowUpRight size={16} /></Link>
          </div>
        </div>
        <a className="scroll-cue" href="#point-of-view" aria-label="Explore Franze & Co."><ArrowDown size={17} /></a>
      </section>

      <section className="home-manifesto shell" id="point-of-view" data-reveal>
        <p className="eyebrow">THE FRANZE & CO. POINT OF VIEW</p>
        <h2>Collected design for<br />the way Miami lives.</h2>
        <p>We build rooms through contrast: sculptural sofas, expressive tables, relaxed upholstery, and outdoor pieces that feel polished without becoming precious.</p>
      </section>

      <section className="home-rooms" id="collections">
        <div className="shell rooms-heading" data-reveal>
          <span className="eyebrow">SHOP BY ROOM</span>
          <span>04 COLLECTIONS / 24 PIECES</span>
        </div>
        <div className="room-panels">
          {categories.map((category, index) => (
            <Link className={`room-panel room-panel-${index + 1}`} href={`/collections/${category.toLowerCase()}`} prefetch={false} key={category}>
              <Image src={categoryMedia[category]} alt={`${category} furniture collection`} fill sizes="(max-width: 760px) 100vw, 50vw" />
              <span className="room-panel-shade" />
              <span className="room-panel-content">
                <small>0{index + 1} / {getProductsByCategory(category).length} pieces</small>
                <strong>{category}</strong>
                <span>Explore <ArrowRight size={15} /></span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="featured-section">
        <div className="shell">
          <SectionHeading eyebrow="THE CURRENT EDIT" title="Pieces with a pulse." link="/shop" linkLabel="View all 24 pieces" />
          <div className="product-grid home-product-grid">
            {featuredProducts.slice(0, 6).map((item) => <ProductCard product={item} key={item.id} />)}
          </div>
        </div>
      </section>

      <section className="editorial-feature">
        <div className="editorial-feature-image" data-reveal>
          <Image src="/products/nido-lounge-chair-white/02.webp" alt="Nido lounge chair in a warm modern setting" fill sizes="(max-width: 840px) 100vw, 58vw" />
        </div>
        <div className="editorial-feature-copy" data-reveal>
          <p className="eyebrow">SOFT SHAPES / STRONG ROOMS</p>
          <h2>Comfort,<br /><em>with character.</em></h2>
          <p>Rounded seating, stone-like surfaces, and deeper accents give each room ease without sanding away its personality.</p>
          <Link className="text-link" href="/collections/living">Discover living <ArrowRight size={16} /></Link>
        </div>
      </section>

      <section className="material-story shell">
        <div className="material-copy" data-reveal>
          <p className="eyebrow">MATERIAL STUDY / 01</p>
          <h2>Stone grounds.<br />Color lifts.<br />Wood warms.</h2>
          <p>The edit is calm enough to live with and expressive enough to remember: tactile neutrals, darker anchors, and a few pieces with sunlit Miami energy.</p>
          <Link className="button dark" href="/collections/dining">Explore dining <ArrowRight size={17} /></Link>
        </div>
        <div className="material-image material-image-large" data-reveal>
          <Image src="/products/bloom-round-dining-table-brown-marble/02.webp" alt="Bloom brown marble dining table" fill sizes="(max-width: 800px) 100vw, 52vw" />
        </div>
        <div className="material-image material-image-small" data-reveal>
          <Image src="/products/lilo-swivel-lounge-chair-beige-velvet/02.webp" alt="Lilo beige velvet lounge chair" fill sizes="(max-width: 800px) 80vw, 26vw" />
        </div>
      </section>

      <section className="studio-feature">
        <div className="studio-photo" data-reveal>
          <Image src="/products/aura-outdoor-dining-table/02.webp" alt="Outdoor dining setting with the Aura collection" fill sizes="(max-width: 860px) 100vw, 58vw" />
        </div>
        <div className="studio-copy" data-reveal>
          <p className="eyebrow">FRANZE & CO. / MIAMI</p>
          <h2>See the edit<br /><em>in person.</em></h2>
          <p>Scale, texture, and comfort are best understood in the room. Visit by appointment in Miami and explore a layered approach to coastal modern living.</p>
          <address>{formattedAddress}<br />USA</address>
          <div className="studio-actions">
            <Link className="button light" href="/studio">Plan your visit <ArrowRight size={17} /></Link>
            <a className="text-link light" href={siteConfig.directionsUrl} target="_blank" rel="noreferrer">Get directions <ArrowUpRight size={16} /></a>
          </div>
        </div>
      </section>
    </>
  );
}
