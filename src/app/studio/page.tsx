import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FranzeHours } from "@/components/franze-hours";

export const metadata: Metadata = { title: "Studio Visits", description: "Plan a Franze & Co. project conversation in Miami.", alternates: { canonical: "/studio" } };

export default function StudioPage() {
  return <>
    <header className="franze-studio-intro shell"><div><p className="franze-kicker">FRANZE STUDIO / MIAMI</p><h1>Come with<br /><em>a room in mind.</em></h1></div><div className="franze-studio-image"><Image src="/editorial/studio-hero.webp" alt="Franze material studio in Miami" fill priority sizes="(max-width: 760px) 100vw, 40vw" unoptimized /></div><p>Bring dimensions, references, and the questions that do not fit in a product filter.</p></header>
    <section className="franze-studio-process shell"><p className="franze-kicker">A STUDIO VISIT</p><div><article><span>01</span><h2>Look</h2><p>Talk through the light, architecture, and daily use of the space.</p></article><article><span>02</span><h2>Handle</h2><p>Compare materials and finishes with their real-world context in view.</p></article><article><span>03</span><h2>Decide</h2><p>Leave with a practical next step and a documented shortlist.</p></article></div></section>
    <section className="franze-appointment"><div className="shell"><div><p className="franze-kicker">APPOINTMENTS</p><h2>Made for a<br /><em>slower decision.</em></h2><Link href="/contact" className="franze-cta franze-cta-light">Build the brief</Link></div><div><p className="franze-kicker">OPENING HOURS</p><FranzeHours /></div></div></section>
  </>;
}
