import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { featuredProducts } from "@/data/products";

const rooms = [
  { number: "01", name: "Sitting", note: "Soft geometry for long conversations.", image: "/editorial/blue-room.jpg", href: "/collections/living" },
  { number: "02", name: "Gathering", note: "Tables, chairs and the things around them.", image: "/editorial/dining-warm.jpg", href: "/collections/dining" },
  { number: "03", name: "Resting", note: "A slower edit for private rooms.", image: "/editorial/bath-stone.jpg", href: "/collections/bedroom" },
  { number: "04", name: "Outside", note: "Built for shade, weather and late light.", image: "/editorial/miami-living.jpg", href: "/collections/outdoor" },
];

export default function Home() {
  return <>
    <section className="fc-hero">
      <div className="fc-hero-photo"><Image src="/editorial/franze-hero-v2.webp" alt="Warm contemporary Miami living room with sculptural furniture" fill priority sizes="100vw" /></div>
      <div className="fc-hero-frame" aria-hidden="true" />
      <div className="fc-hero-wordmark" aria-hidden="true">FRANZE &amp; CO.</div>
      <div className="fc-hero-note"><span>01 / THE MIAMI EDIT</span><span>INDOOR + OUTDOOR</span></div>
      <div className="fc-hero-card"><p className="fc-label">FURNITURE FOR ROOMS WITH A POINT OF VIEW</p><h1>Quiet luxury, lived in.</h1><p>Collected pieces for soft light, long tables, and homes that feel entirely your own.</p><Link href="/shop">Explore the edit <ArrowRight size={17} /></Link></div>
    </section>
    <section className="fc-manifest"><p className="fc-label">A LOCAL EDIT, NOT A LOOKBOOK</p><h1>Good rooms happen when the useful things are also the memorable ones.</h1><div><p>Franze & Co. brings expressive, practical furniture into focus for homes shaped by Florida light. We source pieces for real routines: morning coffee, friends staying late, a terrace that gets used.</p><Link href="/about">Our approach <ArrowUpRight size={16} /></Link></div></section>
    <section className="fc-room-index" aria-label="Shop by room"><div className="fc-index-head"><span>SHOP THE HOUSE</span><span>FOUR WAYS IN</span></div><div className="fc-room-grid">{rooms.map((room) => <Link href={room.href} className="fc-room" key={room.name}><div className="fc-room-image"><Image src={room.image} alt={`${room.name} furniture scene`} fill sizes="(max-width: 720px) 100vw, 50vw" /></div><div className="fc-room-copy"><span>{room.number}</span><h2>{room.name}</h2><p>{room.note}</p><ArrowUpRight size={19} /></div></Link>)}</div></section>
    <section className="fc-spotlight"><div className="fc-spotlight-copy"><p className="fc-label">THE WEEKEND TABLE</p><h2>Make room for the people, then make it beautiful.</h2><p>Pieces with honest scale and surfaces that can take a little life. Start with the table; build the rest around the ritual.</p><Link href="/collections/dining" className="fc-arrow-button">Explore dining <ArrowUpRight size={17} /></Link></div><div className="fc-spotlight-photo"><Image src="/editorial/kitchen-dining.jpg" alt="Dining table in a warm kitchen" fill sizes="(max-width: 900px) 100vw, 55vw" /></div></section>
    <section className="fc-products"><header><p className="fc-label">CURRENTLY ON THE FLOOR</p><h2>Six pieces worth seeing in person.</h2><Link href="/shop">View all 24 <ArrowUpRight size={16} /></Link></header><div className="fc-product-strip">{featuredProducts.slice(0, 6).map((product, index) => <Link href={`/products/${product.slug}`} className="fc-product" key={product.id}><span>0{index + 1}</span><div><Image src={product.images[0]} alt={product.name} fill sizes="(max-width: 700px) 76vw, 26vw" /></div><h3>{product.name}</h3><p>${product.price.toLocaleString("en-US")}</p></Link>)}</div></section>
    <section className="fc-visit"><p className="fc-label">MIAMI DESIGN DISTRICT</p><h2>Come touch the materials.</h2><p>Tuesday—Saturday. Private planning sessions available every week.</p><Link href="/studio" className="fc-arrow-button">Plan a visit <ArrowUpRight size={17} /></Link></section>
  </>;
}
