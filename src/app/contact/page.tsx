import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { OpeningHours } from "@/components/opening-hours";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Visit Franze & Co. Miami",
  description: "Plan a visit to Franze & Co. in Miami and explore design-led furniture in person.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Visit Franze & Co. Miami",
    description: "Plan a visit to Franze & Co. in Miami and explore design-led furniture in person.",
    url: "/contact",
    images: ["/editorial/lounge-wide.jpg"],
  },
};

export default function ContactPage() {
  return (
    <>
      <header className="contact-intro shell" data-reveal>
        <p className="eyebrow">VISIT / MIAMI</p>
        <h1>Visit Franze & Co.</h1>
        <p>See the collection in person in Miami, compare finishes, and understand each piece at room scale.</p>
      </header>
      <section className="contact-visit">
        <div className="contact-visit-image"><Image src="/editorial/lounge-wide.jpg" alt="Contemporary lounge interior" fill sizes="(max-width: 800px) 100vw, 55vw" /></div>
        <div className="contact-visit-details" data-reveal>
          <div className="contact-address">
            <div><p className="eyebrow">FRANZE & CO. LLC</p><p className="contact-location-note">Miami, Florida<br />Appointments by request.</p></div>
          </div>
          <div className="contact-hours"><p className="eyebrow">OPENING HOURS</p><OpeningHours /></div>
          {siteConfig.phone && <a href={`tel:${siteConfig.phone}`}>{siteConfig.phone}</a>}
          {siteConfig.email && <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>}
        </div>
      </section>
      <section className="contact-next shell" data-reveal>
        <div><p className="eyebrow">BEFORE YOUR VISIT</p><h2>Build a shortlist.</h2></div>
        <div><p>Save the names of the pieces you want to see, then bring the list with you to the studio.</p><Link className="text-link" href="/shop">Explore the collection <ArrowRight size={16} /></Link></div>
      </section>
    </>
  );
}
