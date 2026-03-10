import type { Metadata } from "next";
import { ServicePageContent } from "./content";

export const metadata: Metadata = {
  title:
    "Wintergärten nach Maß bauen lassen im Raum Bremen | HB Wintergärten GmbH",
  description:
    "HB Wintergärten plant, fertigt und montiert Ihren Wintergarten passgenau — auf Ihre Wünsche und Ihre Immobilie abgestimmt. Kaltwintergarten, Wohnwintergarten und Sonderlösungen.",
  keywords: [
    "Wintergarten Bremen",
    "Wintergarten bauen lassen",
    "Kaltwintergarten",
    "Wohnwintergarten",
    "Wintergarten nach Maß",
    "HB Wintergärten",
  ],
  openGraph: {
    title: "Wintergärten nach Maß bauen lassen im Raum Bremen",
    description:
      "Maßgeschneiderte Wintergärten von HB Wintergärten GmbH — passgenau geplant und professionell montiert.",
    locale: "de_DE",
    type: "website",
  },
};

export default function WintergartenPage() {
  return <ServicePageContent />;
}
