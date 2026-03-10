import type { Metadata } from "next";
import { ServicePageContent } from "./content";

export const metadata: Metadata = {
  title:
    "Montage von Kassetten- / Seitenmarkisen in Bremen | HB Wintergärten GmbH",
  description:
    "Hochwertige, langlebige Markisensysteme mit individueller Beratung und fachgerechter Montage in Bremen. Kassettenmarkisen, Seitenmarkisen, Pergolamarkisen und mehr.",
  keywords: [
    "Markisen Bremen",
    "Kassettenmarkise montieren",
    "Seitenmarkise Bremen",
    "Sonnenschutz Bremen",
    "Pergolamarkise",
    "HB Wintergärten",
  ],
  openGraph: {
    title: "Montage von Kassetten- / Seitenmarkisen in Bremen",
    description:
      "Hochwertige Markisensysteme von HB Wintergärten — individuelle Beratung und fachgerechte Montage.",
    locale: "de_DE",
    type: "website",
  },
};

export default function MarkisenPage() {
  return <ServicePageContent />;
}
