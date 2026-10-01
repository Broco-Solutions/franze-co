"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { CatalogTile } from "@/components/catalog-tile";
import type { CatalogProduct } from "@/data/products";

export function FeaturedRail({ products }: { products: CatalogProduct[] }) {
  const railRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);

  const move = useCallback((direction: 1 | -1) => {
    const rail = railRef.current;
    const card = rail?.querySelector<HTMLElement>(".catalog-tile");
    if (!rail || !card) return;
    const distance = card.getBoundingClientRect().width + 18;
    const end = rail.scrollWidth - rail.clientWidth;
    const next = direction === 1 && rail.scrollLeft >= end - 4 ? 0 : direction === -1 && rail.scrollLeft <= 4 ? end : rail.scrollLeft + distance * direction;
    rail.scrollTo({ left: Math.max(0, next), behavior: "smooth" });
  }, []);

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const interval = window.setInterval(() => move(1), 4600);
    return () => window.clearInterval(interval);
  }, [move, paused]);

  return <>
    <div className="franze-pf-rail-tools shell"><p>Scroll to explore</p><div><button type="button" onClick={() => move(-1)} onFocus={() => setPaused(true)} aria-label="Previous featured pieces">Previous</button><button type="button" onClick={() => move(1)} onFocus={() => setPaused(true)} aria-label="Next featured pieces">Next</button></div></div>
    <div className="franze-pf-product-rail" ref={railRef} onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocus={() => setPaused(true)} onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false); }} tabIndex={0} aria-label="Featured pieces carousel">
      {products.map((product, index) => <CatalogTile product={product} priority={index < 3} key={product.id} />)}
    </div>
  </>;
}
