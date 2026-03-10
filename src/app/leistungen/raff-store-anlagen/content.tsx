"use client";

import { ServicePage } from "@/components/sections/service-page";

export function ServicePageContent() {
  return (
    <ServicePage
      title="Raffstore-Anlagen von HB Wintergärten GmbH"
      intro="Steuern Sie Licht und Schatten ganz nach Ihren Wünschen — mit maßgeschneiderten Raffstore-Anlagen. Unsere hochwertigen Systeme bieten Ihnen maximale Flexibilität: Von stufenloser Lichtregulierung über effektiven Wärmeschutz bis hin zu elegantem Design. Alle Anlagen werden individuell auf Ihre Fassade abgestimmt und von unseren Fachkräften fachgerecht montiert."
      image="/images/0-wcp-erb-0041-anemoscreen_large_KsTKhWzWP2.jpg"
      features={[
        "SmartScreen ZIP",
        "ProScreen Senkrechtmarkisen",
        "Außenjalousien 80mm",
        "Bis 90% Wärmeschutz",
        "Bis 97% Lichtschutz",
        "Windstabil",
      ]}
      ctaText="Raffstore-Anlagen für Ihr Gebäude — jetzt beraten lassen!"
    />
  );
}
