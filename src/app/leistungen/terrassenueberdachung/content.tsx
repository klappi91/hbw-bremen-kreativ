"use client";

import {
  ServicePage,
  FaqAccordion,
  ImageGallery,
} from "@/components/sections/service-page";

const faqItems = [
  {
    question: "Welche Materialien werden für die Terrassenüberdachung verwendet?",
    answer:
      "Wir verwenden ausschließlich hochwertige Aluminium-Konstruktionen, die langlebig, pflegeleicht und witterungsbeständig sind. Die Dacheindeckung erfolgt in der Regel mit Verbundsicherheitsglas (VSG) oder Polycarbonat-Stegplatten — je nach Wunsch und Anforderung.",
  },
  {
    question: "Wie lange dauert die Montage einer Terrassenüberdachung?",
    answer:
      "Die Montagezeit hängt von der Größe und Komplexität des Projekts ab. In der Regel dauert die fachgerechte Montage einer Standard-Terrassenüberdachung 1–3 Arbeitstage. Wir informieren Sie im Voraus über den genauen Zeitplan.",
  },
  {
    question: "Benötige ich eine Baugenehmigung?",
    answer:
      "Die Genehmigungspflicht hängt von der Größe der Überdachung und den lokalen Bauvorschriften in Bremen ab. In vielen Fällen ist eine Terrassenüberdachung genehmigungsfrei. Wir beraten Sie hierzu ausführlich und unterstützen bei Bedarf beim Genehmigungsantrag.",
  },
  {
    question: "Kann die Terrassenüberdachung nachträglich erweitert werden?",
    answer:
      "Ja, unsere modularen Systeme sind erweiterbar. Sie können beispielsweise nachträglich Seitenelemente, Schiebetüren, Markisen oder Beleuchtung ergänzen. Sprechen Sie uns gerne auf die Möglichkeiten an.",
  },
  {
    question: "Bieten Sie auch Wartung und Pflege an?",
    answer:
      "Wir geben Ihnen individuelle Pflegetipps für Ihre Terrassenüberdachung. Aluminium ist grundsätzlich sehr pflegeleicht — eine regelmäßige Reinigung mit Wasser und mildem Reinigungsmittel reicht in den meisten Fällen aus.",
  },
];

const galleryImages = [
  {
    src: "/images/terrassendach_large_5xEvaZrLUb.jpg",
    alt: "Terrassenüberdachung mit Glasdach in Bremen",
  },
  {
    src: "/images/0-whatsapp-image-2021-07-19-at-21-43-24-3_large_UwnkcUR_pX.jpeg",
    alt: "Montierte Terrassenüberdachung — Seitenansicht",
  },
  {
    src: "/images/0-2c7aadb3-5583-48c0-883b-5f99016e2e20_large_6N_ydAI3Fj.jpg",
    alt: "Terrassenüberdachung mit Beleuchtung am Abend",
  },
];

export function ServicePageContent() {
  return (
    <ServicePage
      title="Terrassenüberdachung montieren lassen in Bremen"
      intro="HB Wintergärten GmbH bietet individuelle, langlebige Terrassenüberdachungen, exakt angepasst an Ihre Immobilie. Von der persönlichen Fachberatung über die präzise Aufmaßnahme bis hin zur professionellen Montage — wir begleiten Sie durch jeden Schritt. Unsere Aluminium-Konstruktionen vereinen modernste Technik mit ansprechendem Design und sind auf Langlebigkeit ausgelegt."
      image="/images/terrassendach_large_5xEvaZrLUb.jpg"
      features={[
        "Maßanfertigung",
        "Persönliche Fachberatung",
        "Aufmaßservice",
        "3D-Visualisierung",
        "Fachgerechte Montage",
        "Betreuung in Bremen und Umgebung",
      ]}
      ctaText="Lassen Sie uns Ihr Terrassendach planen!"
    >
      {/* Gallery */}
      <div className="mb-20">
        <p className="text-brand-accent font-semibold uppercase tracking-widest text-sm mb-4">
          Unsere Projekte
        </p>
        <h3 className="headline-md text-brand-secondary mb-10">
          Referenzbilder
        </h3>
        <ImageGallery images={galleryImages} />
      </div>

      {/* FAQ */}
      <FaqAccordion items={faqItems} />
    </ServicePage>
  );
}
