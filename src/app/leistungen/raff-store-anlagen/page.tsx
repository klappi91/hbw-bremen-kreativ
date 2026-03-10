import type { Metadata } from "next";
import { ServicePageContent } from "./content";

export const metadata: Metadata = {
  title:
    "Raffstore-Anlagen von HB Wintergärten GmbH | Sonnenschutz Bremen",
  description:
    "Steuern Sie Licht und Schatten ganz nach Ihren Wünschen — mit maßgeschneiderten Raffstore-Anlagen. Bis 90% Wärmeschutz und 97% Lichtschutz.",
  keywords: [
    "Raffstore Bremen",
    "Raffstore-Anlagen",
    "Außenjalousien",
    "Sonnenschutz Bremen",
    "Senkrechtmarkise",
    "HB Wintergärten",
  ],
  openGraph: {
    title: "Raffstore-Anlagen von HB Wintergärten GmbH",
    description:
      "Maßgeschneiderte Raffstore-Anlagen für optimalen Licht- und Wärmeschutz — von HB Wintergärten.",
    locale: "de_DE",
    type: "website",
  },
};

export default function RaffStoreAnlagenPage() {
  return <ServicePageContent />;
}
