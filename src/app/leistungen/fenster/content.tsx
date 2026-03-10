"use client";

import { ServicePage, ImageGallery } from "@/components/sections/service-page";

const galleryImages = [
  {
    src: "/images/fenster_large_KVyjLqwfj5.jpg",
    alt: "Moderne Fenster von HB Wintergärten",
  },
  {
    src: "/images/fenster_135_large_YeF-4TxJQ8.jpg",
    alt: "Fenstermontage in Bremen",
  },
  {
    src: "/images/0-img-20250317-wa0042_large_Ppb5Qsw0T-.jpg",
    alt: "Fensterlösung mit Sicherheitsbeschlägen",
  },
];

export function ServicePageContent() {
  return (
    <ServicePage
      title="Montage von Fenstern in Bremen und Umgebung"
      intro="Maßgeschneiderte Fensterlösungen — präzise geplant, hochwertig gefertigt und professionell montiert. Ob Neubau oder Sanierung: Wir bieten Ihnen Fenster führender Hersteller, die in Sachen Energieeffizienz, Sicherheit und Design keine Wünsche offen lassen. Von der Beratung über die Auswahl bis hin zur fachgerechten Montage erhalten Sie alles aus einer Hand."
      image="/images/fenster_large_KVyjLqwfj5.jpg"
      features={[
        "Kunststofffenster",
        "Aluminiumfenster",
        "Holz-Alu-Fenster",
        "Rollladenaufsatzkästen",
        "Verdeckt liegende Beschläge",
        "RC2-Sicherheitsbeschläge",
      ]}
      ctaText="Neue Fenster für Ihr Zuhause — jetzt beraten lassen!"
    >
      {/* Gallery */}
      <div>
        <p className="text-brand-accent font-semibold uppercase tracking-widest text-sm mb-4">
          Unsere Projekte
        </p>
        <h3 className="headline-md text-brand-secondary mb-10">
          Referenzbilder
        </h3>
        <ImageGallery images={galleryImages} />
      </div>
    </ServicePage>
  );
}
