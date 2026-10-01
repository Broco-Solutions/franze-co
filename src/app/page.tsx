import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const pathways = [["01", "Residential", "Rooms that make ordinary days easier."], ["02", "Hospitality", "Spaces with a memorable, usable atmosphere."], ["03", "Outdoor", "Open-air settings made for their climate."]];

export default function Home() {
  return <>
    <section className="franze-graphic-hero"><div className="shell"><p className="fc-label">FRANZE &amp; CO. / MIAMI</p><h1>Furniture,<br /><em>considered in context.</em></h1><p>Room-specific sourcing for people who want more than a scrolling product grid.</p><Link href="/shop" className="fc-arrow-button">Start a project <ArrowUpRight size={17} /></Link></div><span className="hero-monogram" aria-hidden="true">F</span></section>
    <section className="franze-statement shell"><p className="fc-label">THE APPROACH</p><h2>We begin with the room, the rhythm, and the materials that need to last.</h2><p>Franze pairs a clear brief with a considered edit. No anonymous inventory, no borrowed product stories, and no decisions made from a thumbnail alone.</p></section>
    <section className="franze-pathways shell"><header><p className="fc-label">WAYS TO WORK TOGETHER</p><span>01—03</span></header>{pathways.map(([number, title, copy]) => <Link href={`/collections/${title.toLowerCase()}`} key={title}><span>{number}</span><div><h3>{title}</h3><p>{copy}</p></div><ArrowUpRight size={20} /></Link>)}</section>
    <section className="franze-commitment"><div className="shell"><p className="fc-label">THE RECORD MATTERS</p><h2>Every future listing starts with a verifiable source.</h2><p>We are rebuilding the catalog only from authorized product data and imagery. Until then, meet us with a brief and we will build the right edit together.</p><Link href="/contact">Plan a conversation <ArrowUpRight size={17} /></Link></div></section>
  </>;
}
