import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import { notFound } from "next/navigation";
import { CatalogTile } from "@/components/catalog-tile";
import { ProductGallery } from "@/components/product-gallery";
import { formatPrice, getProductBySlug, getProductsByCategory, getProductsBySubcategory, products, toCatalogProduct } from "@/data/products";

export function generateStaticParams() { return products.map((product) => ({ slug: product.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const product = getProductBySlug((await params).slug); return product ? { title: product.name, description: product.shortDescription, alternates: { canonical: `/products/${product.slug}` }, openGraph: { images: [{ url: product.images[0] }] } } : {}; }

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const product = getProductBySlug((await params).slug);
  if (!product) notFound();
  const related = getProductsBySubcategory(product.subcategory).filter((item) => item.id !== product.id).slice(0, 3);
  const complements = getProductsByCategory(product.category).filter((item) => item.id !== product.id && item.subcategory !== product.subcategory).slice(0, 3);
  return <>
    <nav className="franze-product-crumbs shell"><Link href="/shop">Collection</Link><ChevronRight size={12} /><Link href={`/collections/${product.category.toLowerCase()}`}>{product.category}</Link><ChevronRight size={12} /><span>{product.name}</span></nav>
    <main className="franze-product-detail shell">
      <ProductGallery images={product.images} name={product.name} />
      <aside className="franze-product-info">
        <div className="franze-product-kicker"><span>{product.category}</span><span>{product.subcategory}</span></div>
        <h1>{product.name}</h1>
        <p className="franze-product-price">{formatPrice(product.price)}</p>
        <div className="franze-product-copy"><p className="franze-product-lede">{product.shortDescription}</p><p>{product.description}</p></div>
        <section className="franze-product-facts" aria-label="Product specifications">
          <div><span>Finish</span><strong>{product.colors.join(" / ")}</strong></div>
          <div><span>Material palette</span><strong>{product.materials.join(" / ")}</strong></div>
          <div><span>Scale</span><strong>{product.dimensions}</strong></div>
        </section>
        <p className="franze-product-reference">Studio reference · {product.dateCaptured}<br />Availability is confirmed with the Franze team.</p>
        <Link href="/contact" className="franze-product-enquiry">Ask about this piece <ArrowRight size={15} /></Link>
      </aside>
    </main>
    <section className="franze-related"><div className="shell"><div className="franze-related-head"><div><p>CONTINUE THE EDIT</p><h2>Pieces that belong nearby.</h2></div><Link href={`/collections/${product.category.toLowerCase()}`}>Browse {product.category} <ArrowRight size={15} /></Link></div><div className="catalog-tile-grid">{(related.length ? related : complements).map((item) => <CatalogTile product={toCatalogProduct(item)} key={item.id} />)}</div></div></section>
  </>;
}
