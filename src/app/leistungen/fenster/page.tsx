import type { Metadata } from "next";
import { ServicePageContent } from "./content";

export const metadata: Metadata = {
  title:
    "Montage von Fenstern in Bremen und Umgebung | HB Wintergärten GmbH",
  description:
    "Maßgeschneiderte Fensterlösungen — präzise geplant, hochwertig gefertigt und professionell montiert. Kunststofffenster, Aluminiumfenster, Holz-Alu-Fenster mit RC2-Sicherheit.",
  keywords: [
    "Fenster Bremen",
    "Fenster montieren Bremen",
    "Kunststofffenster",
    "Aluminiumfenster",
    "Holz-Alu-Fenster",
    "HB Wintergärten",
  ],
  openGraph: {
    title: "Montage von Fenstern in Bremen und Umgebung",
    description:
      "Maßgeschneiderte Fensterlösungen von HB Wintergärten — hochwertig, langlebig, sicher.",
    locale: "de_DE",
    type: "website",
  },
};

export default function FensterPage() {
  return <ServicePageContent />;
}
