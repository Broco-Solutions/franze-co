import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { OpeningHours } from "@/components/opening-hours";
import { siteConfig } from "@/config/site";

export function Footer() {
  return <footer className="site-footer">
    <div className="footer-signoff shell">
      <p className="eyebrow">FRANZE &amp; CO. / MIAMI</p>
      <h2>Make room for the good stuff.</h2>
      <Link className="footer-signoff-link" href="/studio">Start a studio conversation <ArrowUpRight size={17} /></Link>
    </div>
    <div className="footer-index shell">
      <div className="footer-index-brand"><div className="footer-brand-lockup" aria-label="Franze & Co."><span className="footer-brand-symbol" aria-hidden="true">F<span>/</span>C</span><span className="footer-brand-name">FRANZE</span><span className="footer-brand-meta">&amp; CO. / MIAMI</span></div><p>{siteConfig.tagline}</p><p className="footer-location">Miami, Florida<br />By appointment</p></div>
      <div className="footer-column"><h3>Browse the house</h3><Link href="/shop">All furniture</Link><Link href="/collections">Room index</Link><Link href="/collections/living">Living</Link><Link href="/collections/dining">Dining</Link><Link href="/collections/outdoor">Outdoor</Link></div>
      <div className="footer-column"><h3>Work with us</h3><Link href="/about">Our point of view</Link><Link href="/studio">Studio appointments</Link><Link href="/contact">Contact the team</Link></div>
      <div className="footer-column footer-hours"><h3>Hours</h3><OpeningHours compact /><p className="footer-note">Private planning sessions available.</p></div>
    </div>
    <div className="footer-bottom shell"><span>© {new Date().getFullYear()} {siteConfig.legalName}</span><a className="broco-credit" href="https://www.brocosolutions.com/" target="_blank" rel="noopener noreferrer" aria-label="Powered by Broco Solutions"><span>Powered by</span><Image src="/brand/Logo BS - Negativo.svg" alt="" width={82} height={32} loading="eager" unoptimized /></a><span className="footer-bottom-location">Miami / by appointment</span></div>
  </footer>;
}
