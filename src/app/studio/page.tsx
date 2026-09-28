import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, MapPin } from "lucide-react";
import { OpeningHours } from "@/components/opening-hours";
import { formattedAddress, siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Furniture Studio Miami",
  description: "Visit Franze & Co., a Miami furniture studio for sculptural indoor and outdoor pieces.",
  alternates: { canonical: "/studio" },
  openGraph: {
    title: "Furniture Studio Miami",
    description: "Visit Franze & Co., a Miami furniture studio for sculptural indoor and outdoor pieces.",
    url: "/studio",
    images: ["/editorial/green-salon.jpg"],
  },
};

export default function StudioPage() {
  return (
    <>
      <section className="studio-hero">
        <Image src="/editorial/green-salon.jpg" alt="Colorful contemporary living setting" fill priority sizes="100vw" />
        <div className="hero-shade" />
        <div className="studio-hero-copy shell">
          <p className="eyebrow light-text">OUR STUDIO / MIAMI</p>
          <h1>Design is best<br /><em>experienced.</em></h1>
        </div>
      </section>

      <section className="studio-invitation shell">
        <div data-reveal><p className="eyebrow">VISIT FRANZE & CO.</p><h2>A closer look<br />changes everything.</h2></div>
        <div data-reveal>
          <p>Online images introduce a piece. Material, finish, and true scale become clearer when considered in person.</p>
          <p>Book time with the Miami studio to explore the Franze edit and plan a contemporary interior with confidence.</p>
        </div>
      </section>

      <section className="studio-collage shell">
        <div className="studio-collage-main" data-reveal><Image src="/editorial/warm-living.jpg" alt="Warm living room setting" fill sizes="(max-width: 800px) 100vw, 62vw" /></div>
        <div className="studio-collage-side" data-reveal><Image src="/editorial/bath-stone.jpg" alt="Calm stone interior" fill sizes="(max-width: 800px) 100vw, 38vw" /></div>
        <p className="studio-collage-note">Explore scale, upholstery, finish, and proportion in person.</p>
      </section>

      <section className="visit-band">
        <div className="visit-grid shell">
          <div data-reveal>
            <p className="eyebrow">MIAMI, FLORIDA</p>
            <h2>Come spend time<br /><em>with the collection.</em></h2>
            <div className="visit-address">
              <MapPin size={20} strokeWidth={1.4} />
              <address>{formattedAddress}<br />USA</address>
            </div>
            <a className="button light" href={siteConfig.directionsUrl} target="_blank" rel="noreferrer">Get directions <ArrowUpRight size={17} /></a>
          </div>
          <div className="visit-hours" data-reveal>
            <p className="eyebrow">OPENING HOURS</p>
            <OpeningHours />
          </div>
        </div>
      </section>

      <section className="studio-next shell" data-reveal>
        <p className="eyebrow">EXPLORE BEFORE YOU VISIT</p>
        <h2>Start with the complete edit.</h2>
        <Link className="text-link" href="/shop">Shop all 24 pieces <ArrowRight size={16} /></Link>
      </section>
    </>
  );
}
