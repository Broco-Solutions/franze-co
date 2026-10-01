"use client";

import Link from "next/link";
import { Menu, Search, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { GlobalSearch, type SearchProduct } from "@/components/global-search";

const navigation = [{ label: "Sourcing", href: "/shop" }, { label: "Projects", href: "/collections" }, { label: "Studio", href: "/studio" }, { label: "About", href: "/about" }];

export function Header({ searchProducts }: { searchProducts: SearchProduct[] }) {
  const pathname = usePathname();
  const menuRef = useRef<HTMLDialogElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [compact, setCompact] = useState(false);
  useEffect(() => { const menu = menuRef.current; if (!menu) return; if (menuOpen && !menu.open) menu.showModal(); if (!menuOpen && menu.open) menu.close(); }, [menuOpen]);
  useEffect(() => {
    const update = () => setCompact(window.scrollY > 44);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  useEffect(() => { document.documentElement.dataset.headerCompact = String(compact); }, [compact]);
  return <>
    <div className="fc-ticker"><span>FRANZE &amp; CO. — MIAMI FURNITURE STUDIO</span><span>DELIVERY ACROSS SOUTH FLORIDA</span><Link href="/studio">PLAN A STUDIO VISIT ↗</Link></div>
    <header className={`fc-header ${compact ? "is-compact" : ""}`}><button className="fc-menu mobile-only" onClick={() => setMenuOpen(true)} aria-label="Open menu"><Menu size={22} /></button><Link className="fc-logo" href="/" aria-label="Franze & Co. home">FRANZE<span>&amp;</span>CO.</Link><nav>{navigation.map((item) => <Link key={item.href} href={item.href} className={pathname === item.href ? "active" : ""}>{item.label}</Link>)}</nav><button className="fc-search" onClick={() => setSearchOpen(true)} aria-label="Search site"><Search size={19} /><span>Search</span></button></header>
    <dialog className="fc-mobile-menu" ref={menuRef} onClose={() => setMenuOpen(false)}><div><button onClick={() => setMenuOpen(false)} aria-label="Close menu"><X /></button><p>FRANZE &amp; CO.</p>{navigation.map((item) => <Link key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</Link>)}<Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></div></dialog>
    <GlobalSearch open={searchOpen} onOpenChange={setSearchOpen} products={searchProducts} />
  </>;
}
