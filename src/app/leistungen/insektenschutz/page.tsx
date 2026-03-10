import type { Metadata } from "next";
import { ServicePageContent } from "./content";

export const metadata: Metadata = {
  title: "Insektenschutz nach Maß in Bremen | HB Wintergärten GmbH",
  description:
    "Individuelle Insektenschutzlösungen, die genau auf Ihre Fenster und Türen abgestimmt sind. Spannrahmen, Drehtüren, Schiebetüren und elegante Rollos.",
  keywords: [
    "Insektenschutz Bremen",
    "Insektenschutz Fenster",
    "Fliegengitter nach Maß",
    "Spannrahmen",
    "Insektenschutzrollo",
    "HB Wintergärten",
  ],
  openGraph: {
    title: "Insektenschutz nach Maß in Bremen",
    description:
      "Maßgeschneiderte Insektenschutzlösungen von HB Wintergärten — für Fenster und Türen.",
    locale: "de_DE",
    type: "website",
  },
};

export default function InsektenschutzPage() {
  return <ServicePageContent />;
}
