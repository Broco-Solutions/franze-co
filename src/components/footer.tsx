import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { OpeningHours } from "@/components/opening-hours";
import { siteConfig } from "@/config/site";

export function Footer() {
  return <footer className="site-footer">
    <div className="footer-signoff shell">
      <p className="eyebrow">COLLECTED FURNITURE / BY APPOINTMENT</p>
      <h2>Make room for the good stuff.</h2>
      <Link className="footer-signoff-link" href="/studio">Start a studio conversation <ArrowUpRight size={17} /></Link>
    </div>
    <div className="footer-index shell">
      <div className="footer-index-brand"><div className="fc-logo footer-wordmark-lockup" aria-label="Franze & Co.">FRANZE<span>&amp;</span>CO.</div><p>{siteConfig.tagline}</p></div>
      <div className="footer-column"><h3>Browse the house</h3><Link href="/shop">All furniture</Link><Link href="/collections">Room index</Link><Link href="/collections/living">Living</Link><Link href="/collections/outdoor">Outdoor</Link></div>
      <div className="footer-column"><h3>Work with us</h3><Link href="/about">Our point of view</Link><Link href="/studio">Studio appointments</Link><Link href="/contact">Contact the team</Link></div>
      <div className="footer-column footer-hours"><h3>Hours</h3><OpeningHours compact /></div>
    </div>
    <div className="footer-bottom shell"><span>© {new Date().getFullYear()} {siteConfig.legalName}</span><a className="broco-credit" href="https://www.brocosolutions.com/" target="_blank" rel="noopener noreferrer" aria-label="Powered by Broco Solutions"><span>Powered by</span><Image src="/brand/Logo BS - Negativo.svg" alt="" width={82} height={32} loading="eager" unoptimized /></a><span className="footer-bottom-location">Miami / by appointment</span></div>
  </footer>;
}
