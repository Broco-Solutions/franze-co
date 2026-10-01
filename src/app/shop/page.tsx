import type { Metadata } from "next";
import { CatalogIntake } from "@/components/catalog-intake";

export const metadata: Metadata = {
  title: "Private Furniture Sourcing",
  description: "Franze & Co. creates room-specific furniture edits from documented, authorized sources.",
  alternates: { canonical: "/shop" },
};

export default function ShopPage() {
  return <>
    <header className="shop-intro shell" data-reveal>
      <p className="fc-label">FRANZE / PRIVATE SOURCING</p>
      <div><span className="shop-intro-number">01</span><h1>Start with<br /><em>your room.</em></h1></div>
      <p>We are deliberately not publishing a generic product grid while our catalog is rebuilt from traceable, authorized records.</p>
    </header>
    <section className="shop-principles"><div className="shell"><p>MEASURED / MATERIAL-LED / VERIFIED</p><span aria-hidden="true">F&amp;CO</span></div></section>
    <CatalogIntake />
  </>;
}
