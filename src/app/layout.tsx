import type { Metadata, Viewport } from "next";
import { DM_Mono, Space_Grotesk } from "next/font/google";
import { Footer } from "@/components/footer";
import type { SearchProduct } from "@/components/global-search";
import { Header } from "@/components/header";
import { PersistentVisit } from "@/components/persistent-visit";
import { ScrollMotion } from "@/components/scroll-motion";
import { siteConfig } from "@/config/site";
import { products } from "@/data/products";
import "./globals.css";

const sans = Space_Grotesk({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const mono = DM_Mono({ subsets: ["latin"], variable: "--font-display", weight: "400", display: "swap" });

const searchProducts: SearchProduct[] = products.map((product) => ({
  id: product.id,
  slug: product.slug,
  name: product.name,
  category: product.category,
  subcategory: product.subcategory,
  price: product.price,
  currency: product.currency,
  images: [product.images[0]],
  featured: product.featured,
}));

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: "Franze & Co. | Furniture Studio Miami", template: "%s | Franze & Co." },
  description: siteConfig.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: "Franze & Co. | Furniture Studio Miami",
    description: siteConfig.description,
    type: "website",
    locale: "en_US",
    siteName: siteConfig.businessName,
    url: "/",
    images: [{ url: "/editorial/blue-room.jpg", width: 1500, height: 1500 }],
  },
  twitter: { card: "summary_large_image", title: "Franze & Co.", description: siteConfig.description },
  icons: {
    icon: [{ url: "/brand/favicon.svg", type: "image/svg+xml" }],
    shortcut: "/brand/favicon.svg",
  },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#ff5f3d" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": ["FurnitureStore", "LocalBusiness"],
    name: siteConfig.businessName,
    legalName: siteConfig.legalName,
    description: siteConfig.description,
    url: siteConfig.url,
    areaServed: "Miami, FL",
    openingHoursSpecification: siteConfig.openingHours.map((item) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: item.day,
      opens: item.opens,
      closes: item.closes,
    })),
  };

  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`} data-scroll-behavior="smooth">
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <Header searchProducts={searchProducts} />
        <main id="main-content">{children}</main>
        <PersistentVisit />
        <Footer />
        <ScrollMotion />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
      </body>
    </html>
  );
}
