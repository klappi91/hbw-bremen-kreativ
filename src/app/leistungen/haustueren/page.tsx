import type { Metadata } from "next";
import { ServicePageContent } from "./content";

export const metadata: Metadata = {
  title: "Haustüren von HB Wintergärten GmbH aus Bremen",
  description:
    "Hochwertige Haustüren namhafter Hersteller — maßgeschneidert nach Ihren individuellen Vorstellungen. Klassisch-elegant, modern oder besonders sicher.",
  keywords: [
    "Haustür Bremen",
    "Haustür montieren",
    "Aluminium Haustür",
    "Haustür nach Maß",
    "sichere Haustür",
    "HB Wintergärten",
  ],
  openGraph: {
    title: "Haustüren von HB Wintergärten GmbH aus Bremen",
    description:
      "Hochwertige Haustüren — maßgeschneidert und professionell montiert von HB Wintergärten.",
    locale: "de_DE",
    type: "website",
  },
};

export default function HaustuerenPage() {
  return <ServicePageContent />;
}
