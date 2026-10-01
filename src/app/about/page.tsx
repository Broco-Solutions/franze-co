import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = { title: "About Franze & Co.", description: "Franze & Co. is a Miami furniture sourcing practice centered on context, materials, and traceable records.", alternates: { canonical: "/about" } };

export default function AboutPage() {
  return <>
    <header className="franze-about-intro"><div className="shell"><p className="franze-kicker">OUR POSITION</p><h1>Useful can still<br /><em>be unforgettable.</em></h1><p>Franze & Co. is a Miami furniture sourcing practice for people who want character without the anonymous catalog.</p></div><div className="franze-about-image"><Image src="/editorial/about-hero.webp" alt="Franze material palette of stone, wood and linen" fill priority sizes="(max-width: 760px) 100vw, 46vw" unoptimized /></div></header>
    <section className="franze-about-values shell"><p className="franze-kicker">HOW WE WORK</p><div><article><span>01 / CONTEXT</span><h2>Start with life.</h2><p>We consider movement, light, use, and scale before a product enters the discussion.</p></article><article><span>02 / MATERIAL</span><h2>Know what lasts.</h2><p>A real finish, its care, and its provenance matter as much as its silhouette.</p></article><article><span>03 / RECORD</span><h2>Keep it traceable.</h2><p>Only documented sources can become public Franze listings.</p></article></div></section>
    <section className="franze-about-outro shell"><h2>Bring us<br />a room.</h2><Link href="/contact" className="franze-cta">Start a conversation</Link></section>
  </>;
}
