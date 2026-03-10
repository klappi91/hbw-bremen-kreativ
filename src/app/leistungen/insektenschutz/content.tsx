"use client";

import { ServicePage } from "@/components/sections/service-page";

export function ServicePageContent() {
  return (
    <ServicePage
      title="Insektenschutz nach Maß in Bremen"
      intro="Individuelle Lösungen, die genau auf Ihre Fenster und Türen abgestimmt sind. Genießen Sie frische Luft ohne ungebetene Gäste — mit maßgefertigtem Insektenschutz von HB Wintergärten. Unsere Systeme fügen sich nahtlos in Ihre bestehenden Fenster und Türen ein und überzeugen durch Langlebigkeit, einfache Bedienung und dezentes Design."
      image="/images/fenster_135_large_YeF-4TxJQ8.jpg"
      features={[
        "Spannrahmen",
        "Dreh- und Schiebetüren",
        "Elegante Rollos",
        "Maßanfertigung",
        "Langlebige Qualität",
        "Fachgerechte Montage",
      ]}
      ctaText="Insektenschutz nach Maß — jetzt anfragen!"
    />
  );
}
