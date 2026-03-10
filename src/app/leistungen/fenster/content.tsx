"use client";

import {
  ServicePage,
  FaqAccordion,
  ImageGallery,
} from "@/components/sections/service-page";
import { Check } from "lucide-react";

/* ------------------------------------------------------------------ */
/* FAQ Data                                                            */
/* ------------------------------------------------------------------ */

const faqItems = [
  {
    question: "Welche Fenstertypen bieten Sie an?",
    answer:
      "Wir montieren Kunststofffenster, Aluminiumfenster und Holz-Alu-Fenster namhafter Hersteller wie Veka, Schüco und Kömmerling. Je nach Anforderung beraten wir Sie zum optimalen Profil für Neubau oder Altbausanierung.",
  },
  {
    question: "Wie lange dauert ein Fenstertausch?",
    answer:
      "Die Dauer hängt von der Anzahl und Größe der Fenster ab. In der Regel können wir pro Tag 4–6 Fenster tauschen. Bei einer kompletten Wohneinheit planen wir meist 2–3 Arbeitstage ein. Wir stimmen den genauen Zeitplan vorab mit Ihnen ab.",
  },
  {
    question: "Entsorgen Sie die alten Fenster?",
    answer:
      "Ja, die fachgerechte Demontage und Entsorgung der alten Fenster ist in unserem Leistungsumfang enthalten. Sie müssen sich um nichts kümmern — wir hinterlassen die Baustelle sauber und aufgeräumt.",
  },
  {
    question: "Was kostet ein neues Fenster inklusive Einbau?",
    answer:
      "Die Kosten variieren je nach Fenstertyp, Verglasung und Größe. Ein Standard-Kunststofffenster mit 3-fach-Verglasung und fachgerechter Montage beginnt bei ca. 400–600 € pro Fenster. Wir erstellen Ihnen gerne ein individuelles Angebot nach dem Aufmaß vor Ort.",
  },
  {
    question: "Bieten Sie auch Förderberatung an?",
    answer:
      "Ja, wir informieren Sie über aktuelle KfW-Förderprogramme und Zuschüsse für energetische Sanierung. In vielen Fällen können Sie beim Fenstertausch attraktive Fördermittel in Anspruch nehmen. Wir unterstützen Sie bei der Antragstellung.",
  },
];

/* ------------------------------------------------------------------ */
/* Gallery Data                                                        */
/* ------------------------------------------------------------------ */

const galleryImages = [
  {
    src: "/images/fenster_large_KVyjLqwfj5.jpg",
    alt: "Moderne Fenster von HB Wintergärten",
  },
  {
    src: "/images/fenster_135_large_YeF-4TxJQ8.jpg",
    alt: "Fenstermontage in Bremen",
  },
  {
    src: "/images/0-img-20250317-wa0042_large_Ppb5Qsw0T-.jpg",
    alt: "Fensterlösung mit Sicherheitsbeschlägen",
  },
  {
    src: "/images/0-img-20250317-wa0039_large_pkibzGcNxd.jpg",
    alt: "Fenstersanierung — Detailansicht Profil",
  },
  {
    src: "/images/0-img-20250317-wa0041_large_igtI4GSb.jpg",
    alt: "Neue Fenster in Altbausanierung",
  },
  {
    src: "/images/0-img-20250317-wa0044_large_NJcoR_WyEx.jpg",
    alt: "Fertig montierte Fensterfront",
  },
];

/* ------------------------------------------------------------------ */
/* Fensterarten                                                        */
/* ------------------------------------------------------------------ */

const fensterarten = [
  {
    title: "Kunststofffenster",
    description:
      "Kunststofffenster überzeugen durch hervorragende Wärmedämmung, Langlebigkeit und ein attraktives Preis-Leistungs-Verhältnis. Wir verbauen Profile von Veka und Kömmerling — bewährt in Qualität und Optik. Erhältlich in zahlreichen Farben und Dekoren.",
  },
  {
    title: "Aluminiumfenster",
    description:
      "Aluminiumfenster bieten maximale Stabilität und ein schlankes, modernes Design. Besonders geeignet für große Fensterformate und repräsentative Fassaden. Wir setzen auf Schüco-Profile mit thermisch getrennten Systemen für optimale Energieeffizienz.",
  },
  {
    title: "Holz-Alu-Fenster",
    description:
      "Die Kombination aus warmem Holz innen und witterungsbeständigem Aluminium außen vereint das Beste beider Welten. Holz-Alu-Fenster sind besonders langlebig, pflegeleicht und ästhetisch ansprechend — ideal für anspruchsvolle Bauvorhaben.",
  },
];

const zubehoer = [
  "Rollladenaufsatzkästen (Vorbau & Aufsatz)",
  "Insektenschutzgitter & -rahmen",
  "Pilzkopfverriegelung & RC2-Beschläge",
  "Verdeckt liegende Beschläge",
  "Fensterbank innen & außen",
];

/* ------------------------------------------------------------------ */
/* Leistungen als Fenstermonteur                                       */
/* ------------------------------------------------------------------ */

const leistungen = [
  "Aufmaß und persönliche Beratung vor Ort",
  "Demontage und fachgerechte Entsorgung alter Fenster",
  "Montage nach RAL-Richtlinien mit Kompribändern und Dichtfolien",
  "Einbau von Fensterbänken, Rollläden und Zubehör",
  "Endreinigung und Funktionsprüfung aller Fenster",
];

/* ------------------------------------------------------------------ */
/* Vorteile                                                            */
/* ------------------------------------------------------------------ */

const vorteile = [
  {
    title: "Markenqualität",
    description:
      "Profile von Veka, Schüco und Kömmerling — namhafte Hersteller mit jahrzehntelanger Erfahrung und höchsten Qualitätsstandards.",
  },
  {
    title: "Energieeffizienz",
    description:
      "3-fach-Verglasung und thermisch getrennte Profile sorgen für minimalen Wärmeverlust und senken Ihre Heizkosten nachhaltig.",
  },
  {
    title: "Sicherheit",
    description:
      "RC2-Sicherheitsbeschläge mit Pilzkopfverriegelung bieten wirksamen Einbruchschutz — auf Wunsch auch höhere Widerstandsklassen.",
  },
  {
    title: "RAL-Montage",
    description:
      "Fachgerechter Einbau nach RAL-Richtlinien mit normgerechter Abdichtung für dauerhaft dichte und funktionsfähige Fenster.",
  },
  {
    title: "Alles aus einer Hand",
    description:
      "Von der Beratung über Aufmaß und Fertigung bis zur Montage und Entsorgung der alten Fenster — ein Ansprechpartner für Ihr gesamtes Projekt.",
  },
  {
    title: "Regional & zuverlässig",
    description:
      "Als Bremer Fachbetrieb sind wir schnell vor Ort, halten Termine ein und stehen auch nach der Montage als Ansprechpartner zur Verfügung.",
  },
];

/* ------------------------------------------------------------------ */
/* Component                                                           */
/* ------------------------------------------------------------------ */

export function ServicePageContent() {
  return (
    <ServicePage
      title="Montage von Fenstern in Bremen und Umgebung"
      intro="Maßgeschneiderte Fensterlösungen von HB Wintergärten — präzise geplant, hochwertig gefertigt und professionell montiert. Wir verbauen ausschließlich Markenprofile von Veka, Schüco und Kömmerling. Ob Neubau oder Altbausanierung: Unsere Fenster überzeugen in Energieeffizienz, Sicherheit und Design. Von der persönlichen Beratung über das Aufmaß bis zur fachgerechten Montage nach RAL-Richtlinien erhalten Sie alles aus einer Hand."
      image="/images/fenster_large_KVyjLqwfj5.jpg"
      features={[
        "Kunststoff-, Alu- & Holz-Alu-Fenster",
        "Markenprofile (Veka, Schüco, Kömmerling)",
        "RC2-Sicherheitsbeschläge",
        "3-fach-Verglasung optional",
        "Montage nach RAL-Richtlinien",
        "Rollladenaufsatzkästen & Zubehör",
      ]}
      ctaText="Neue Fenster für Ihr Zuhause — jetzt beraten lassen!"
    >
      {/* ---- Fensterarten ---- */}
      <div className="mb-20">
        <p className="text-brand-accent font-semibold uppercase tracking-widest text-sm mb-4">
          Unser Sortiment
        </p>
        <h3 className="headline-md text-brand-secondary mb-10">
          Fensterarten im Überblick
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {fensterarten.map((typ) => (
            <div key={typ.title} className="bg-white p-8">
              <h4 className="text-lg font-semibold text-brand-secondary mb-3">
                {typ.title}
              </h4>
              <p className="text-brand-muted leading-relaxed font-light">
                {typ.description}
              </p>
            </div>
          ))}
        </div>

        {/* Zubehör */}
        <div className="bg-white p-8 max-w-2xl">
          <h4 className="text-lg font-semibold text-brand-secondary mb-4">
            Zubehör & Extras
          </h4>
          <ul className="space-y-3">
            {zubehoer.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-brand-accent flex items-center justify-center mt-0.5">
                  <Check className="w-4 h-4 text-brand-secondary" />
                </div>
                <span className="text-brand-muted font-light">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ---- Projekt-Showcase ---- */}
      <div className="mb-20">
        <p className="text-brand-accent font-semibold uppercase tracking-widest text-sm mb-4">
          Aus der Praxis
        </p>
        <h3 className="headline-md text-brand-secondary mb-6">
          Fenstersanierung mit moderner Optik
        </h3>
        <div className="max-w-3xl">
          <p className="text-lg text-brand-muted leading-relaxed font-light mb-4">
            Bei einer umfassenden Altbausanierung in Bremen haben wir sämtliche Fenster
            gegen moderne Kunststofffenster mit 3-fach-Verglasung ausgetauscht. Die neuen
            Veka-Profile in Anthrazitgrau verleihen der Fassade ein zeitgemäßes Erscheinungsbild
            und verbessern gleichzeitig die Energiebilanz des Gebäudes erheblich.
          </p>
          <p className="text-lg text-brand-muted leading-relaxed font-light">
            Die Montage erfolgte nach RAL-Richtlinien mit normgerechter Abdichtung.
            Zusätzlich wurden Rollladenaufsatzkästen und RC2-Sicherheitsbeschläge verbaut.
            Das Ergebnis: Ein rundum modernisiertes Gebäude mit spürbar besserem
            Wohnkomfort und deutlich reduzierten Heizkosten.
          </p>
        </div>
      </div>

      {/* ---- Leistungen als Fenstermonteur ---- */}
      <div className="mb-20">
        <p className="text-brand-accent font-semibold uppercase tracking-widest text-sm mb-4">
          Unser Service
        </p>
        <h3 className="headline-md text-brand-secondary mb-8">
          Unsere Leistungen als Fenstermonteur
        </h3>
        <div className="max-w-2xl">
          <ul className="space-y-4">
            {leistungen.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-brand-accent flex items-center justify-center mt-0.5">
                  <Check className="w-4 h-4 text-brand-secondary" />
                </div>
                <span className="text-brand-secondary font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ---- Vorteile auf einen Blick ---- */}
      <div className="mb-20">
        <p className="text-brand-accent font-semibold uppercase tracking-widest text-sm mb-4">
          Warum HB Wintergärten
        </p>
        <h3 className="headline-md text-brand-secondary mb-10">
          Ihre Vorteile auf einen Blick
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vorteile.map((vorteil) => (
            <div key={vorteil.title} className="bg-white p-8">
              <h4 className="text-lg font-semibold text-brand-secondary mb-3">
                {vorteil.title}
              </h4>
              <p className="text-brand-muted leading-relaxed font-light">
                {vorteil.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ---- Galerie ---- */}
      <div className="mb-20">
        <p className="text-brand-accent font-semibold uppercase tracking-widest text-sm mb-4">
          Unsere Projekte
        </p>
        <h3 className="headline-md text-brand-secondary mb-10">
          Referenzbilder
        </h3>
        <ImageGallery images={galleryImages} />
      </div>

      {/* ---- FAQ ---- */}
      <FaqAccordion items={faqItems} />
    </ServicePage>
  );
}
