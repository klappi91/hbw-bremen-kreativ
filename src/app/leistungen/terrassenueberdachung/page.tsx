import type { Metadata } from "next";
import { ServicePageContent } from "./content";

export const metadata: Metadata = {
  title:
    "Terrassenüberdachung montieren lassen in Bremen | HB Wintergärten GmbH",
  description:
    "Individuelle, langlebige Terrassenüberdachungen aus Aluminium — exakt angepasst an Ihre Immobilie. Persönliche Fachberatung, Aufmaßservice und fachgerechte Montage in Bremen.",
  keywords: [
    "Terrassenüberdachung Bremen",
    "Terrassendach montieren",
    "Alu Terrassenüberdachung",
    "Terrassendach nach Maß",
    "HB Wintergärten",
  ],
  openGraph: {
    title: "Terrassenüberdachung montieren lassen in Bremen",
    description:
      "Maßgeschneiderte Terrassenüberdachungen von HB Wintergärten GmbH — Beratung, Planung und Montage aus einer Hand.",
    locale: "de_DE",
    type: "website",
  },
};

export default function TerrassenueberdachungPage() {
  return <ServicePageContent />;
}
