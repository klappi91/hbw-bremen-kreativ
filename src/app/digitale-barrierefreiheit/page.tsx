import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Digitale Barrierefreiheit",
  description:
    "Erkl\u00e4rung zur digitalen Barrierefreiheit der HB Winterg\u00e4rten GmbH gem\u00e4\u00df EU-Richtlinie 2016/2102.",
};

export default function DigitaleBarrierefreiheitPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="bg-brand-secondary pt-32 pb-16 sm:pt-40 sm:pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h1 className="headline-lg text-white">
            Erkl&auml;rung zur digitalen Barrierefreiheit
          </h1>
          <div className="mt-4 h-1 w-16 bg-brand-accent" />
        </div>
      </section>

      {/* Content */}
      <main className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="space-y-12 text-brand-text leading-relaxed">
            {/* Einleitung */}
            <section>
              <div className="space-y-4">
                <p>
                  Diese Erkl&auml;rung zur Barrierefreiheit gilt f&uuml;r
                  www.hbw-bremen.de.
                </p>
                <p>
                  Wir bem&uuml;hen uns, unseren Webauftritt oder seine mobile
                  Anwendung in Einklang mit den nationalen Rechtsvorschriften zur
                  Umsetzung der Richtlinie (EU) 2016/2102 des Europ&auml;ischen
                  Parlaments und des Rates barrierefrei zug&auml;nglich zu
                  machen. Die technischen Anforderungen zur Barrierefreiheit
                  ergeben sich aus der BITV (Barrierefreie-Informationstechnik-Verordnung)
                  2.0.
                </p>
              </div>
            </section>

            {/* Wann wurde die Erklärung erstellt? */}
            <section>
              <h2 className="text-2xl font-semibold text-brand-secondary">
                Wann wurde die Erkl&auml;rung zur Barrierefreiheit erstellt?
              </h2>
              <div className="mt-4 h-0.5 w-10 bg-brand-accent" />
              <div className="mt-6 space-y-4">
                <p>
                  Diese Erkl&auml;rung wurde am 01.07.2024 initial erstellt und
                  wird fortlaufend &uuml;berarbeitet.
                </p>
              </div>
            </section>

            {/* Wie barrierefrei ist das Angebot? */}
            <section>
              <h2 className="text-2xl font-semibold text-brand-secondary">
                Wie barrierefrei ist das Angebot?
              </h2>
              <div className="mt-4 h-0.5 w-10 bg-brand-accent" />
              <div className="mt-6 space-y-4">
                <p>
                  Es werden teilweise die Anforderungen der BITV
                  (Barrierefreie-Informationstechnik-Verordnung) 2.0
                  erf&uuml;llt.
                </p>
              </div>
            </section>

            {/* Barrierefrei */}
            <section>
              <h2 className="text-2xl font-semibold text-brand-secondary">
                Welche Bereiche sind nach der aktuellen BITV barrierefrei?
              </h2>
              <div className="mt-4 h-0.5 w-10 bg-brand-accent" />
              <div className="mt-6 space-y-4">
                <ul className="list-disc space-y-2 pl-6">
                  <li>
                    <strong>Gro&szlig;e Schrift.</strong> Die
                    Vergr&ouml;&szlig;erung der Seitendarstellung mit den
                    g&auml;ngigen Browsern erfolgt bei Windows mit
                    &bdquo;STRG&ldquo; und &bdquo;+&ldquo; und bei Apple mit
                    &bdquo;cmd&ldquo; und &bdquo;+&ldquo; sowie &uuml;ber das
                    entsprechende Symbol auf der Website.
                  </li>
                  <li>
                    <strong>Kleine Schrift.</strong> Die Verkleinerung der
                    Seitendarstellung erfolgt bei Windows mit &bdquo;STRG&ldquo;
                    und &bdquo;-&ldquo; und bei Apple mit &bdquo;cmd&ldquo; und
                    &bdquo;-&ldquo;.
                  </li>
                  <li>
                    <strong>Responsive Umsetzung.</strong> Die Inhalte des
                    Fensters passen sich der Bildschirmgr&ouml;&szlig;e des
                    Ger&auml;ts automatisch an.
                  </li>
                  <li>Browserseitige Vorlesefunktion von Texten</li>
                  <li>
                    Kontrastierung mittels Button f&uuml;r sehbehinderte
                    Besucher
                  </li>
                  <li>Untertitelfunktion bei Videos</li>
                </ul>
              </div>
            </section>

            {/* Teilweise barrierefrei */}
            <section>
              <h2 className="text-2xl font-semibold text-brand-secondary">
                Welche Bereiche sind teilweise barrierefrei?
              </h2>
              <div className="mt-4 h-0.5 w-10 bg-brand-accent" />
              <div className="mt-6 space-y-4">
                <ul className="list-disc space-y-2 pl-6">
                  <li>Dokumente und Formulare</li>
                  <li>Tabellen</li>
                  <li>Alternativtexte</li>
                </ul>
              </div>
            </section>

            {/* Nicht barrierefrei */}
            <section>
              <h2 className="text-2xl font-semibold text-brand-secondary">
                Welche Bereiche sind nicht barrierefrei?
              </h2>
              <div className="mt-4 h-0.5 w-10 bg-brand-accent" />
              <div className="mt-6 space-y-4">
                <ul className="list-disc space-y-3 pl-6">
                  <li>
                    <strong>Bedienelemente ohne Alternativtexte</strong>
                  </li>
                  <li>
                    <strong>Videos ohne Untertitel</strong>
                    <br />
                    Videos mit Ton verf&uuml;gen nicht &uuml;ber die notwendigen
                    Untertitel.
                  </li>
                  <li>
                    <strong>PDF-Dokumente</strong>
                    <br />
                    Nicht alle PDF-Dokumente sind barrierefrei. Neu eingestellte
                    PDF-Dokumente sollen in barrierefreier Version erstellt,
                    &auml;ltere durch solche ersetzt werden.
                  </li>
                  <li>
                    <strong>Gliederung der Inhalte</strong>
                    <br />
                    Durch falsche Formatierung von Texten kann der Lesefluss
                    negativ beeinflusst sein.
                  </li>
                  <li>
                    <strong>Anderssprachige W&ouml;rter und Abschnitte</strong>
                    <br />
                    Diese sind teilweise nicht ausgezeichnet.
                  </li>
                </ul>
              </div>
            </section>

            {/* Kontakt */}
            <section>
              <h2 className="text-2xl font-semibold text-brand-secondary">
                Kontakt bei Anmerkungen oder Fragen
              </h2>
              <div className="mt-4 h-0.5 w-10 bg-brand-accent" />
              <div className="mt-6 space-y-4">
                <p>
                  Ihnen sind M&auml;ngel beim barrierefreien Zugang zu unseren
                  Inhalten aufgefallen? Dann k&ouml;nnen Sie sich gerne bei uns
                  melden:
                </p>
                <div className="mt-4 space-y-1">
                  <p className="font-semibold text-brand-secondary">
                    HB Winterg&auml;rten GmbH
                  </p>
                  <p>Kl&uuml;verweg 8 d</p>
                  <p>28307 Bremen</p>
                  <p>
                    E-Mail:{" "}
                    <a
                      href="mailto:info@hbw-bremen.de"
                      className="text-brand-primary underline decoration-brand-primary/30 underline-offset-2 transition-colors hover:text-brand-accent"
                    >
                      info@hbw-bremen.de
                    </a>
                  </p>
                  <p>
                    Telefon:{" "}
                    <a
                      href="tel:+4915207128739"
                      className="text-brand-primary underline decoration-brand-primary/30 underline-offset-2 transition-colors hover:text-brand-accent"
                    >
                      0152 07128739
                    </a>
                  </p>
                </div>
                <p className="mt-4">
                  Oder nutzen Sie unser{" "}
                  <Link
                    href="/kontakt"
                    className="text-brand-primary underline decoration-brand-primary/30 underline-offset-2 transition-colors hover:text-brand-accent"
                  >
                    Kontaktformular
                  </Link>
                  .
                </p>
              </div>
            </section>

            {/* Links */}
            <section className="border-t border-brand-surface pt-8">
              <p>
                Zur&uuml;ck zum{" "}
                <Link
                  href="/impressum"
                  className="text-brand-primary underline decoration-brand-primary/30 underline-offset-2 transition-colors hover:text-brand-accent"
                >
                  Impressum
                </Link>
                {" "}&middot;{" "}
                <Link
                  href="/datenschutz"
                  className="text-brand-primary underline decoration-brand-primary/30 underline-offset-2 transition-colors hover:text-brand-accent"
                >
                  Datenschutzerkl&auml;rung
                </Link>
              </p>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
