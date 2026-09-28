import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, CalendarDays, PackageCheck, Ruler, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { categories, featuredProducts, getProductsByCategory } from "@/data/products";

const categoryFrames = {
  Living: { image: "/editorial/green-salon.jpg", note: "Color, texture, conversation" },
  Dining: { image: "/editorial/dining-warm.jpg", note: "Tables that hold the evening" },
  Bedroom: { image: "/editorial/lounge-wide.jpg", note: "Quiet rooms, stronger details" },
  Outdoor: { image: "/editorial/miami-living.jpg", note: "Pieces for sun, shade, and salt air" },
};

const serviceNotes = [
  { icon: Ruler, title: "Room planning", text: "Scale guidance before you commit." },
  { icon: Sparkles, title: "Curated finishes", text: "Fabrics, woods, stone, and contrast." },
  { icon: PackageCheck, title: "Miami delivery", text: "Coordinated receiving and placement." },
  { icon: CalendarDays, title: "Studio visits", text: "Private appointments in Miami." },
];

export default function Home() {
  const leadProducts = featuredProducts.slice(0, 4);

  return (
    <>
      <section className="franze-hero">
        <div className="franze-hero-copy">
          <p className="eyebrow">FRANZE & CO. / MIAMI FURNITURE STUDIO</p>
          <h1>Collected rooms for bright, lived-in luxury.</h1>
          <p>
            A sharper furniture edit for Miami homes: expressive upholstery, sculptural tables,
            outdoor-ready pieces, and details that feel personal from the first visit.
          </p>
          <div className="franze-hero-actions">
            <Link className="button dark" href="/shop">Shop the edit <ArrowRight size={17} /></Link>
            <Link className="text-link" href="/studio">Book the studio <ArrowUpRight size={16} /></Link>
          </div>
        </div>
        <div className="franze-hero-media" aria-label="Franze & Co. interior mood">
          <Image src="/editorial/green-salon.jpg" alt="Colorful living room with a green sofa and layered furniture" fill priority sizes="(max-width: 900px) 100vw, 58vw" />
          <div className="franze-hero-card">
            <span>New Miami Edit</span>
            <strong>Indoor / Outdoor / Dining</strong>
          </div>
        </div>
      </section>

      <section className="franze-service-grid shell" aria-label="Franze services">
        {serviceNotes.map((item) => {
          const Icon = item.icon;
          return (
            <div className="franze-service" key={item.title}>
              <Icon size={19} strokeWidth={1.5} />
              <h2>{item.title}</h2>
              <p>{item.text}</p>
            </div>
          );
        })}
      </section>

      <section className="franze-statement shell" id="point-of-view" data-reveal>
        <span>POINT OF VIEW</span>
        <h2>Less showroom copy. More apartment, terrace, dinner party, Sunday morning.</h2>
        <p>
          Franze & Co. is built around rooms that feel assembled over time. The mix is modern,
          but never anonymous: color where it matters, generous silhouettes, durable materials,
          and pieces that can move from a Brickell condo to a Coral Gables patio.
        </p>
      </section>

      <section className="franze-moodboard">
        <div className="franze-moodboard-image franze-moodboard-large">
          <Image src="/editorial/miami-living.jpg" alt="Layered contemporary living room with warm light" fill sizes="(max-width: 900px) 100vw, 56vw" />
        </div>
        <div className="franze-moodboard-copy">
          <p className="eyebrow">THE ROOM, NOT JUST THE OBJECT</p>
          <h2>Build around mood, movement, and daily rituals.</h2>
          <p>
            Our edit favors pieces that pull a room together fast: a saturated sofa, a grounding
            table, a textured chair, and outdoor forms that do not feel like an afterthought.
          </p>
          <Link className="text-link" href="/collections/living">Discover living <ArrowRight size={16} /></Link>
        </div>
        <div className="franze-moodboard-image franze-moodboard-small">
          <Image src="/editorial/kitchen-dining.jpg" alt="Warm kitchen and dining area with modern furniture" fill sizes="(max-width: 900px) 86vw, 28vw" />
        </div>
      </section>

      <section className="franze-categories shell" id="collections">
        <div className="franze-section-kicker">
          <span>SHOP BY SCENE</span>
          <span>04 edits / 24 pieces</span>
        </div>
        <div className="franze-category-track">
          {categories.map((category) => (
            <Link className="franze-category-card" href={`/collections/${category.toLowerCase()}`} key={category}>
              <Image src={categoryFrames[category].image} alt={`${category} furniture scene`} fill sizes="(max-width: 760px) 82vw, 25vw" />
              <span>{getProductsByCategory(category).length} pieces</span>
              <strong>{category}</strong>
              <small>{categoryFrames[category].note}</small>
            </Link>
          ))}
        </div>
      </section>

      <section className="franze-current-edit shell">
        <SectionHeading eyebrow="CURRENTLY IN THE STUDIO" title="Four pieces to start a different room." link="/shop" linkLabel="View everything" />
        <div className="franze-edit-list">
          {leadProducts.map((item, index) => (
            <Link className="franze-edit-item" href={`/products/${item.slug}`} key={item.id}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div className="franze-edit-thumb">
                <Image src={item.images[0]} alt={item.name} fill sizes="(max-width: 760px) 110px, 160px" />
              </div>
              <div>
                <small>{item.category} / {item.subcategory}</small>
                <strong>{item.name}</strong>
              </div>
              <em>${item.price.toLocaleString("en-US")}</em>
            </Link>
          ))}
        </div>
      </section>

      <section className="franze-visit-band">
        <div className="shell">
          <p className="eyebrow light-text">PRIVATE STUDIO / MIAMI</p>
          <h2>Bring floor plans, fabric ideas, or just a room that needs a better story.</h2>
          <Link className="button light" href="/studio">Plan a visit <ArrowRight size={17} /></Link>
        </div>
      </section>
    </>
  );
}
