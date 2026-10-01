import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";

const steps = [
  ["01", "Brief", "Tell us how the room is used, its dimensions, and the feeling you want to keep."],
  ["02", "Edit", "We assemble a considered shortlist from records we can verify with you."],
  ["03", "Review", "Compare finishes, lead times, and placement before any order is made."],
];

export function CatalogIntake({ category }: { category?: string }) {
  const label = category ? `${category} sourcing` : "Private sourcing";
  return (
    <section className="catalog-intake shell" aria-label={label}>
      <div className="catalog-intake-intro">
        <p className="fc-label">{label.toUpperCase()}</p>
        <h2>No generic catalog.<br /><em>A room-specific edit.</em></h2>
        <p>Franze is rebuilding its public product records with authorized sources. Until then, each project begins with a direct conversation rather than a copied inventory feed.</p>
        <Link href="/contact" className="fc-arrow-button">Start a project <ArrowUpRight size={17} /></Link>
      </div>
      <ol className="catalog-intake-steps">
        {steps.map(([number, title, copy]) => <li key={number}><span>{number}</span><div><h3>{title}</h3><p>{copy}</p></div></li>)}
      </ol>
      <aside className="catalog-policy"><Check size={17} /><p>Every future listing will identify its supplier, source record, image-rights status, and last verification date.</p></aside>
    </section>
  );
}
