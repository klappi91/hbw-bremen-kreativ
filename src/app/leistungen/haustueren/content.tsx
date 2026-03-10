"use client";

import { ServicePage, ImageGallery } from "@/components/sections/service-page";

const galleryImages = [
  {
    src: "/images/0-img-20250317-wa0079_large_FLhWu5kHwp.jpg",
    alt: "Aluminium-Haustür von HB Wintergärten",
  },
  {
    src: "/images/0-img-20250317-wa0053_large_If_XACIO6x.jpg",
    alt: "Moderne Haustür — Front-Ansicht",
  },
  {
    src: "/images/0-img-20250317-wa0059_large_sBnURlD3i4.jpg",
    alt: "Haustür mit Seitenteil",
  },
  {
    src: "/images/0-img-20250317-wa0071_large_Qn5XuCxHEu.jpg",
    alt: "Klassische Haustür in Aluminium-Bauweise",
  },
];

export function ServicePageContent() {
  return (
    <ServicePage
      title="Haustüren von HB Wintergärten GmbH aus Bremen"
      intro="Hochwertige Haustüren namhafter Hersteller — maßgeschneidert nach Ihren individuellen Vorstellungen. Ihre Haustür ist die Visitenkarte Ihres Zuhauses. Deshalb bieten wir Ihnen ein breites Sortiment an Haustüren in verschiedenen Designs, Materialien und Sicherheitsstufen. Ob klassisch-elegant oder modern — wir beraten Sie persönlich und finden die perfekte Lösung für Ihren Eingangsbereich."
      image="/images/0-img-20250317-wa0079_large_FLhWu5kHwp.jpg"
      features={[
        "Klassisch-elegant",
        "Modern",
        "Besonders sicher",
        "Aluminium-Bauweise",
        "Individuelle Beratung",
      ]}
      ctaText="Ihre neue Haustür — stilvoll und sicher!"
    >
      {/* Gallery */}
      <div>
        <p className="text-brand-accent font-semibold uppercase tracking-widest text-sm mb-4">
          Unsere Haustüren
        </p>
        <h3 className="headline-md text-brand-secondary mb-10">
          Referenzbilder
        </h3>
        <ImageGallery images={galleryImages} />
      </div>
    </ServicePage>
  );
}
