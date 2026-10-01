"use client";

import { useEffect, useState } from "react";

const firstLine = "Furniture with";
const secondLine = "a point of view.";

export function HeroTitle() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (count >= firstLine.length + secondLine.length) return;
    const timer = window.setTimeout(() => setCount((value) => value + 1), count === 0 ? 420 : 58);
    return () => window.clearTimeout(timer);
  }, [count]);
  const firstCount = Math.min(count, firstLine.length);
  const secondCount = Math.max(0, count - firstLine.length);
  return <h1 className="franze-pf-hero-title"><span className="sr-only">Furniture with a point of view.</span><span aria-hidden="true">{firstLine.slice(0, firstCount)}<br /><em>{secondLine.slice(0, secondCount)}</em><i className="franze-typing-cursor" /></span></h1>;
}
