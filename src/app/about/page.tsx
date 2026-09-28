import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About Franze & Co.",
  description: "Discover Franze & Co.'s warm, architectural approach to design-led furniture and modern living in Miami.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Franze & Co.",
    description: "Discover Franze & Co.'s warm, architectural approach to design-led furniture and modern living in Miami.",
    url: "/about",
    images: ["/editorial/kitchen-dining.jpg"],
  },
};

export default function AboutPage() {
  return (
    <>
      <header className="about-hero">
        <div className="about-hero-image"><Image src="/editorial/kitchen-dining.jpg" alt="Warm kitchen and dining setting" fill priority sizes="(max-width: 800px) 100vw, 55vw" /></div>
        <div className="about-hero-copy" data-reveal><p className="eyebrow">OUR FIELD NOTES</p><h1>Useful can still<br /><em>be unforgettable.</em></h1><p>Franze & Co. is a Miami furniture supply house for people who want character without the preciousness.</p></div>
      </header>
      <section className="about-statement shell" data-reveal><span>01 / OUR POINT OF VIEW</span><h2>We look for the moment where a sculptural form becomes comfortable, and a quiet room gains character.</h2></section>
      <section className="about-values shell">
        <div data-reveal><p className="eyebrow">CURATION</p><h3>Fewer, stronger choices.</h3><p>The collection is edited to work as a whole, with distinct pieces sharing a calm material language.</p></div>
        <div data-reveal><p className="eyebrow">MATERIAL</p><h3>Texture before ornament.</h3><p>Boucle, velvet, oak, ceramic, marble, and metal bring depth without relying on decorative noise.</p></div>
        <div data-reveal><p className="eyebrow">MIAMI</p><h3>Indoor ease, outdoor rhythm.</h3><p>Our point of view responds to light, open plans, terraces, and the informal elegance of South Florida homes.</p></div>
      </section>
      <section className="about-image-band"><Image src="/editorial/miami-living.jpg" alt="Open-air contemporary living setting" fill sizes="100vw" /></section>
      <section className="studio-next shell" data-reveal><p className="eyebrow">SEE IT IN PERSON</p><h2>Visit us in Miami.</h2><Link className="text-link" href="/studio">Explore the studio <ArrowRight size={16} /></Link></section>
    </>
  );
}
