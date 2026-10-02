import Image from "next/image";
import Link from "next/link";
import { formatPrice, type CatalogProduct } from "@/data/products";

export function CatalogTile({ product, priority = false }: { product: CatalogProduct; priority?: boolean }) {
  return <article className="catalog-tile">
    <Link href={`/products/${product.slug}`} className="catalog-tile-image">
      <Image src={product.images[0]} alt={`${product.name} in room`} fill preload={priority} sizes="(max-width: 680px) 76vw, (max-width: 1100px) 42vw, 29vw" />
      <span className="catalog-tile-marker" aria-hidden="true" />
    </Link>
    <div className="catalog-tile-details"><div><p>{product.category} / {product.subcategory}</p><h3><Link href={`/products/${product.slug}`}>{product.name}</Link></h3></div><strong>{formatPrice(product.price)}</strong></div>
  </article>;
}
