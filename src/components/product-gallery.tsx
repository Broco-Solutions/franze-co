import Image from "next/image";

const viewLabels = ["Room view", "Material detail", "Alternate angle"];

export function ProductGallery({ images, name }: { images: string[]; name: string }) {
  return <div className="franze-gallery" role="region" aria-label={`${name} image gallery`} tabIndex={0}>
    {images.map((image, index) => <figure className={`franze-gallery-frame franze-gallery-frame-${index + 1}`} key={image}>
      <Image src={image} alt={`${name}, ${viewLabels[index] ?? "additional view"}`} fill priority={index === 0} sizes="(max-width: 820px) 92vw, (max-width: 1200px) 58vw, 46vw" />
      <figcaption>{viewLabels[index] ?? "Additional view"}</figcaption>
    </figure>)}
  </div>;
}
