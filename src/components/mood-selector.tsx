"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

const moods = [
  { id: "morning", label: "Morning light", title: "Slow starts", text: "Soft upholstery, warm oak, and a place for coffee before the day gets loud.", image: "/editorial/warm-living.jpg", href: "/collections/living" },
  { id: "dinner", label: "Dinner plans", title: "Stay a while", text: "A generous table, comfortable chairs, and enough room for one more guest.", image: "/editorial/dining-warm.jpg", href: "/collections/dining" },
  { id: "after-dark", label: "After dark", title: "Low light, good company", text: "Deep tones and rounded forms for the hours that become the best ones.", image: "/editorial/lounge-wide.jpg", href: "/collections/bedroom" },
] as const;

export function MoodSelector() {
  const [activeId, setActiveId] = useState<(typeof moods)[number]["id"]>("morning");
  const active = moods.find((mood) => mood.id === activeId) ?? moods[0];

  return (
    <section className="mood-selector" aria-label="Find your room mood">
      <div className="mood-selector-photo"><Image src={active.image} alt={active.label} fill sizes="(max-width: 800px) 100vw, 54vw" /></div>
      <div className="mood-selector-copy"><p className="fc-label">FIND YOUR ROOM MOOD</p><p className="mood-selector-count">0{moods.findIndex((mood) => mood.id === active.id) + 1} / 03</p><h2>{active.title}</h2><p>{active.text}</p><Link href={active.href}>Shop this mood <ArrowUpRight size={17} /></Link><div className="mood-selector-tabs" role="tablist" aria-label="Room moods">{moods.map((mood) => <button key={mood.id} role="tab" aria-selected={active.id === mood.id} className={active.id === mood.id ? "is-active" : ""} onClick={() => setActiveId(mood.id)}>{mood.label}</button>)}</div></div>
    </section>
  );
}
