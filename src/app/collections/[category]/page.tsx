import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CatalogIntake } from "@/components/catalog-intake";
import { categories, type Category } from "@/data/products";

const context: Record<Category, { title: string; copy: string; cues: string[] }> = {
  Residential: { title: "A home is a sequence of rituals.", copy: "We start with the daily moments that need to work: arrival, rest, gathering, and the things that stay visible.", cues: ["Room dimensions", "Material preferences", "Timing and delivery"] },
  Hospitality: { title: "Atmosphere needs operational clarity.", copy: "For guest-facing spaces, furniture must hold a strong point of view while meeting the practical requirements of the room.", cues: ["Use intensity", "Specification needs", "Project milestones"] },
  Outdoor: { title: "Outside has its own rules.", copy: "Light, weather, drainage, and maintenance shape every decision before a silhouette ever enters the conversation.", cues: ["Exposure and shade", "Climate resilience", "Seasonal use"] },
};
const getCategory = (slug: string) => categories.find((item) => item.toLowerCase() === slug);
export function generateStaticParams() { return categories.map((category) => ({ category: category.toLowerCase() })); }
export async function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata> { const category = getCategory((await params).category); return category ? { title: `${category} Furniture Sourcing`, description: context[category].copy, alternates: { canonical: `/collections/${category.toLowerCase()}` } } : {}; }
export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) { const category = getCategory((await params).category); if (!category) notFound(); const details = context[category]; return <><main className="project-detail shell"><p className="fc-label">PROJECT PATH / {category.toUpperCase()}</p><h1>{details.title}</h1><p>{details.copy}</p><ul>{details.cues.map((cue, index) => <li key={cue}><span>0{index + 1}</span>{cue}</li>)}</ul></main><CatalogIntake category={category} /></>; }
