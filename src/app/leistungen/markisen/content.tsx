"use client";

import { ServicePage } from "@/components/sections/service-page";

export function ServicePageContent() {
  return (
    <ServicePage
      title="Montage von Kassetten- / Seitenmarkisen in Bremen"
      intro="Hochwertige, langlebige Markisensysteme mit individueller Beratung und fachgerechter Montage. Ob Kassettenmarkise für die Terrasse, Seitenmarkise als Wind- und Sichtschutz oder moderne Pergolamarkise — wir finden die optimale Lösung für Ihren Außenbereich. Alle Systeme werden präzise auf Ihre Gegebenheiten abgestimmt und von unserem eigenen Team montiert."
      image="/images/markise_large_PXweViOwUt.jpg"
      features={[
        "Kassettenmarkisen",
        "Halbkassettenmarkisen",
        "Seitenmarkisen",
        "Senkrechtmarkisen",
        "Pergolamarkisen",
        "Smart-Home Integration",
      ]}
      ctaText="Finden Sie die perfekte Markise für Ihr Zuhause!"
    />
  );
}
