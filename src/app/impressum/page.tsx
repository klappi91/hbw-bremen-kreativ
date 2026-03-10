import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Impressum | HB Wintergärten GmbH",
  description:
    "Impressum der HB Wintergärten GmbH – Ihr Fachbetrieb für Terrassenüberdachungen, Wintergärten und Sonnenschutz in Bremen.",
};

export default function ImpressumPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="bg-brand-secondary pt-32 pb-16 sm:pt-40 sm:pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h1 className="headline-lg text-white">Impressum</h1>
          <div className="mt-4 h-1 w-16 bg-brand-accent" />
        </div>
      </section>

      {/* Content */}
      <main className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="space-y-12 text-brand-text leading-relaxed">
            {/* Angaben gemäß § 5 TMG */}
            <section>
              <h2 className="text-2xl font-semibold text-brand-secondary">
                Angaben gem&auml;&szlig; &sect; 5 TMG
              </h2>
              <div className="mt-4 h-0.5 w-10 bg-brand-accent" />
              <div className="mt-6 space-y-1">
                <p className="font-semibold text-brand-secondary">
                  HB Winterg&auml;rten GmbH
                </p>
                <p>Kl&uuml;verweg 8</p>
                <p>28307 Bremen</p>
                <p>Deutschland</p>
              </div>
            </section>

            {/* Kontakt */}
            <section>
              <h2 className="text-2xl font-semibold text-brand-secondary">
                Kontakt
              </h2>
              <div className="mt-4 h-0.5 w-10 bg-brand-accent" />
              <div className="mt-6 space-y-2">
                <p>
                  Mobil:{" "}
                  <a
                    href="tel:+4915207128739"
                    className="text-brand-primary underline decoration-brand-primary/30 underline-offset-2 transition-colors hover:text-brand-accent"
                  >
                    0152 07128739
                  </a>
                </p>
                <p>
                  E-Mail:{" "}
                  <a
                    href="mailto:info@hbw-bremen.de"
                    className="text-brand-primary underline decoration-brand-primary/30 underline-offset-2 transition-colors hover:text-brand-accent"
                  >
                    info@hbw-bremen.de
                  </a>
                </p>
              </div>
            </section>

            {/* Vertretungsberechtigter Geschäftsführer */}
            <section>
              <h2 className="text-2xl font-semibold text-brand-secondary">
                Vertretungsberechtigter Gesch&auml;ftsf&uuml;hrer
              </h2>
              <div className="mt-4 h-0.5 w-10 bg-brand-accent" />
              <p className="mt-6">Veton Abazi</p>
            </section>

            {/* Registereintrag */}
            <section>
              <h2 className="text-2xl font-semibold text-brand-secondary">
                Registereintrag
              </h2>
              <div className="mt-4 h-0.5 w-10 bg-brand-accent" />
              <div className="mt-6 space-y-2">
                <p>Rechtsform: GmbH</p>
                <p>Registerort: Amtsgericht Bremen</p>
                <p>Registernummer: HRB 37840</p>
              </div>
            </section>

            {/* Umsatzsteuer-ID */}
            <section>
              <h2 className="text-2xl font-semibold text-brand-secondary">
                Umsatzsteuer-ID
              </h2>
              <div className="mt-4 h-0.5 w-10 bg-brand-accent" />
              <p className="mt-6">
                Umsatzsteuer-Identifikationsnummer gem&auml;&szlig; &sect; 27a
                Umsatzsteuergesetz: DE343217652
              </p>
            </section>

            {/* Zugehörige Kammer */}
            <section>
              <h2 className="text-2xl font-semibold text-brand-secondary">
                Kammerzugeh&ouml;rigkeit
              </h2>
              <div className="mt-4 h-0.5 w-10 bg-brand-accent" />
              <p className="mt-6">Handwerkskammer Bremen (HWK Bremen)</p>
            </section>

            {/* Streitschlichtung */}
            <section>
              <h2 className="text-2xl font-semibold text-brand-secondary">
                Streitschlichtung
              </h2>
              <div className="mt-4 h-0.5 w-10 bg-brand-accent" />
              <div className="mt-6 space-y-4">
                <p>
                  Die Europ&auml;ische Kommission stellt eine Plattform zur
                  Online-Streitbeilegung (OS) bereit:{" "}
                  <a
                    href="https://ec.europa.eu/consumers/odr/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-primary underline decoration-brand-primary/30 underline-offset-2 transition-colors hover:text-brand-accent"
                  >
                    https://ec.europa.eu/consumers/odr/
                  </a>
                </p>
                <p>
                  Wir sind nicht bereit oder verpflichtet, an
                  Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
                  teilzunehmen.
                </p>
              </div>
            </section>

            {/* Datenschutz-Link */}
            <section>
              <h2 className="text-2xl font-semibold text-brand-secondary">
                Datenschutz
              </h2>
              <div className="mt-4 h-0.5 w-10 bg-brand-accent" />
              <p className="mt-6">
                Informationen zum Umgang mit Ihren personenbezogenen Daten
                finden Sie in unserer{" "}
                <Link
                  href="/datenschutz"
                  className="text-brand-primary underline decoration-brand-primary/30 underline-offset-2 transition-colors hover:text-brand-accent"
                >
                  Datenschutzerkl&auml;rung
                </Link>
                .
              </p>
            </section>
          </div>
        </div>
      </main>

    </>
  );
}
