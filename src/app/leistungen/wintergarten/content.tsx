"use client";

import { ServicePage } from "@/components/sections/service-page";

export function ServicePageContent() {
  return (
    <ServicePage
      title="Wintergärten nach Maß bauen lassen im Raum Bremen"
      intro="Plant, fertigt und montiert Ihren Wintergarten passgenau — auf Ihre Wünsche und Ihre Immobilie abgestimmt. Ob lichtdurchfluteter Kaltwintergarten für die wärmeren Monate oder komfortabler Ganzjahreswintergarten mit Wärmeschutzverglasung — wir realisieren Ihren Traum vom erweiterten Wohnraum. Jedes Projekt wird individuell geplant und von unseren erfahrenen Fachkräften umgesetzt."
      image="/images/wintergarten_476_large_5w1Nk9ZzWK.jpg"
      features={[
        "Kaltwintergarten",
        "Wohnwintergarten",
        "Ganzjahreswintergarten",
        "Sonderlösungen",
        "Wärmeschutzverglasung",
        "Schiebeelemente",
      ]}
      ctaText="Ihr Wintergarten — individuell nach Maß!"
    />
  );
}
