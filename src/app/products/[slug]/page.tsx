import { notFound } from "next/navigation";

// Former catalog routes intentionally return 404 until a product has a
// documented Franze source record and authorized imagery.
export default async function ProductPage() {
  notFound();
}
