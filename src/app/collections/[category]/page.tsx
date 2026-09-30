import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CollectionNav } from "@/components/collection-nav";
import { ShopCatalog } from "@/components/shop-catalog";
import { categories, getProductsByCategory, toCatalogProduct, type Category } from "@/data/products";

const content: Record<Category, { title: string; description: string; image: string; position?: string }> = {
  Living: {
    title: "Low forms.\nLasting comfort.",
    description: "Sculptural seating and grounded tables for rooms built around conversation, quiet mornings, and long evenings.",
    image: "/products/brunello-sectional-sofa-brown-velvet/02.webp",
  },
  Dining: {
    title: "Gather around\ngood design.",
    description: "Tables with architectural presence and chairs that make lingering feel natural, from everyday meals to full-house evenings.",
    image: "/products/bloom-round-dining-table-brown-marble/02.webp",
  },
  Bedroom: {
    title: "A softer kind\nof architecture.",
    description: "Upholstered planes, warm oak, and quiet storage for a bedroom that feels composed from every angle.",
    image: "/products/oxford-bed-greige-oak/02.webp",
  },
  Outdoor: {
    title: "Open-air rooms,\nfully considered.",
    description: "Weather-ready seating and dining pieces shaped for terraces, gardens, and the year-round rhythm of South Florida.",
    image: "/products/solea-outdoor-sofa/02.webp",
  },
};

const getCategory = (slug: string) => categories.find((item) => item.toLowerCase() === slug);

export function generateStaticParams() {
  return categories.map((category) => ({ category: category.toLowerCase() }));
}

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata> {
  const { category: slug } = await params;
  const category = getCategory(slug);
  if (!category) return {};
  const title = `${category} Furniture Miami`;
  const description = `Explore Franze & Co.'s curated ${category.toLowerCase()} furniture collection in Miami, including contemporary ${getProductsByCategory(category).map((item) => item.subcategory).filter((value, index, array) => array.indexOf(value) === index).join(" and ").toLowerCase()}.`;
  return {
    title,
    description,
    alternates: { canonical: `/collections/${slug}` },
    openGraph: { title, description, url: `/collections/${slug}`, images: [content[category].image] },
  };
}

export default async function CategoryPage({ params, searchParams }: { params: Promise<{ category: string }>; searchParams: Promise<{ type?: string }> }) {
  const { category: slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();
  const categoryProducts = getProductsByCategory(category);
  const details = content[category];
  const { type } = await searchParams;
  const subcategories = [...new Set(categoryProducts.map((product) => product.subcategory))];
  const selectedType = type && subcategories.includes(type) ? type : undefined;

  return (
    <>
      <header className="collection-hero">
        <div className="collection-hero-copy" data-reveal>
          <p className="eyebrow">{category.toUpperCase()} / {categoryProducts.length} PIECES</p>
          <h1>{details.title.split("\n").map((line, index) => <span key={line}>{index === 1 ? <em>{line}</em> : line}</span>)}</h1>
          <p>{details.description}</p>
          <nav className="category-types" aria-label={`Browse ${category} by type`}>
            {subcategories.map((subcategory) => <Link href={`/collections/${slug}?type=${encodeURIComponent(subcategory)}#catalog`} key={subcategory}>{subcategory}</Link>)}
          </nav>
        </div>
        <div className="collection-hero-image">
          <Image src={details.image} alt={`${category} collection setting`} fill priority sizes="(max-width: 780px) 100vw, 50vw" />
        </div>
      </header>
      <CollectionNav active={category} />
      <div id="catalog"><ShopCatalog initialProducts={categoryProducts.map(toCatalogProduct)} initialCategory={category} initialSubcategory={selectedType} /></div>
    </>
  );
}
