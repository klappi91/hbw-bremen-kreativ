import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Datenschutzerklärung | HB Wintergärten GmbH",
  description:
    "Datenschutzerklärung der HB Wintergärten GmbH – Informationen zum Umgang mit Ihren personenbezogenen Daten.",
};

export default function DatenschutzPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="bg-brand-secondary pt-32 pb-16 sm:pt-40 sm:pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h1 className="headline-lg text-white">
            Datenschutzerkl&auml;rung
          </h1>
          <div className="mt-4 h-1 w-16 bg-brand-accent" />
        </div>
      </section>

      {/* Content */}
      <main className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="space-y-12 text-brand-text leading-relaxed">
            {/* 1. Verantwortlicher */}
            <section>
              <h2 className="text-2xl font-semibold text-brand-secondary">
                1. Verantwortlicher
              </h2>
              <div className="mt-4 h-0.5 w-10 bg-brand-accent" />
              <div className="mt-6 space-y-1">
                <p>
                  Verantwortlicher im Sinne der Datenschutz-Grundverordnung
                  (DSGVO) ist:
                </p>
                <div className="mt-4 space-y-1">
                  <p className="font-semibold text-brand-secondary">
                    HB Winterg&auml;rten GmbH
                  </p>
                  <p>Kl&uuml;verweg 8 d</p>
                  <p>28307 Bremen</p>
                  <p>
                    Gesch&auml;ftsf&uuml;hrer: Veton Abazi
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
              </div>
            </section>

            {/* 2. Allgemeines zur Datenverarbeitung */}
            <section>
              <h2 className="text-2xl font-semibold text-brand-secondary">
                2. Allgemeines zur Datenverarbeitung
              </h2>
              <div className="mt-4 h-0.5 w-10 bg-brand-accent" />
              <div className="mt-6 space-y-4">
                <p>
                  Wir verarbeiten personenbezogene Daten unserer Nutzer
                  grunds&auml;tzlich nur, soweit dies zur Bereitstellung einer
                  funktionsf&auml;higen Website sowie unserer Inhalte und
                  Leistungen erforderlich ist. Die Verarbeitung
                  personenbezogener Daten unserer Nutzer erfolgt
                  regelm&auml;&szlig;ig nur nach Einwilligung des Nutzers. Eine
                  Ausnahme gilt in solchen F&auml;llen, in denen eine vorherige
                  Einholung einer Einwilligung aus tats&auml;chlichen
                  Gr&uuml;nden nicht m&ouml;glich ist und die Verarbeitung der
                  Daten durch gesetzliche Vorschriften gestattet ist.
                </p>
              </div>
            </section>

            {/* 3. Rechtsgrundlage */}
            <section>
              <h2 className="text-2xl font-semibold text-brand-secondary">
                3. Rechtsgrundlage f&uuml;r die Verarbeitung personenbezogener
                Daten
              </h2>
              <div className="mt-4 h-0.5 w-10 bg-brand-accent" />
              <div className="mt-6 space-y-4">
                <p>
                  Soweit wir f&uuml;r Verarbeitungsvorg&auml;nge
                  personenbezogener Daten eine Einwilligung der betroffenen
                  Person einholen, dient Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;a
                  DSGVO als Rechtsgrundlage.
                </p>
                <p>
                  Bei der Verarbeitung personenbezogener Daten, die zur
                  Erf&uuml;llung eines Vertrages erforderlich ist, dient
                  Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;b DSGVO als
                  Rechtsgrundlage. Dies gilt auch f&uuml;r
                  Verarbeitungsvorg&auml;nge, die zur Durchf&uuml;hrung
                  vorvertraglicher Ma&szlig;nahmen erforderlich sind.
                </p>
                <p>
                  Soweit eine Verarbeitung personenbezogener Daten zur
                  Erf&uuml;llung einer rechtlichen Verpflichtung erforderlich
                  ist, dient Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;c DSGVO als
                  Rechtsgrundlage.
                </p>
                <p>
                  Ist die Verarbeitung zur Wahrung eines berechtigten Interesses
                  unseres Unternehmens oder eines Dritten erforderlich und
                  &uuml;berwiegen die Interessen, Grundrechte und
                  Grundfreiheiten des Betroffenen das erstgenannte Interesse
                  nicht, so dient Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;f DSGVO als
                  Rechtsgrundlage f&uuml;r die Verarbeitung.
                </p>
              </div>
            </section>

            {/* 4. Bereitstellung der Website / Server-Logfiles */}
            <section>
              <h2 className="text-2xl font-semibold text-brand-secondary">
                4. Bereitstellung der Website und Erstellung von
                Server-Logfiles
              </h2>
              <div className="mt-4 h-0.5 w-10 bg-brand-accent" />
              <div className="mt-6 space-y-4">
                <p>
                  Bei jedem Aufruf unserer Internetseite erfasst unser System
                  automatisiert Daten und Informationen vom Computersystem des
                  aufrufenden Rechners. Folgende Daten werden hierbei erhoben:
                </p>
                <ul className="list-disc space-y-1 pl-6">
                  <li>Browsertyp und verwendete Browserversion</li>
                  <li>Betriebssystem des Nutzers</li>
                  <li>Internet-Service-Provider des Nutzers</li>
                  <li>IP-Adresse des Nutzers</li>
                  <li>Datum und Uhrzeit des Zugriffs</li>
                  <li>
                    Websites, von denen das System des Nutzers auf unsere
                    Internetseite gelangt (Referrer)
                  </li>
                  <li>
                    Websites, die vom System des Nutzers &uuml;ber unsere
                    Website aufgerufen werden
                  </li>
                </ul>
                <p>
                  Die Daten werden in den Logfiles unseres Systems gespeichert.
                  Eine Speicherung dieser Daten zusammen mit anderen
                  personenbezogenen Daten des Nutzers findet nicht statt. Die
                  Rechtsgrundlage f&uuml;r die vor&uuml;bergehende Speicherung
                  der Daten und der Logfiles ist Art.&nbsp;6 Abs.&nbsp;1
                  lit.&nbsp;f DSGVO.
                </p>
              </div>
            </section>

            {/* 5. Kontaktformular und E-Mail-Kontakt */}
            <section>
              <h2 className="text-2xl font-semibold text-brand-secondary">
                5. Kontaktformular und E-Mail-Kontakt
              </h2>
              <div className="mt-4 h-0.5 w-10 bg-brand-accent" />
              <div className="mt-6 space-y-4">
                <p>
                  Auf unserer Internetseite ist ein Kontaktformular vorhanden,
                  welches f&uuml;r die elektronische Kontaktaufnahme genutzt
                  werden kann. Nimmt ein Nutzer diese M&ouml;glichkeit wahr, so
                  werden die in der Eingabemaske eingegeben Daten an uns
                  &uuml;bermittelt und gespeichert. Diese Daten sind:
                </p>
                <ul className="list-disc space-y-1 pl-6">
                  <li>Name</li>
                  <li>E-Mail-Adresse</li>
                  <li>Telefonnummer (optional)</li>
                  <li>Nachricht</li>
                </ul>
                <p>
                  Im Zeitpunkt der Absendung der Nachricht werden zudem folgende
                  Daten gespeichert: Datum und Uhrzeit der Kontaktaufnahme.
                </p>
                <p>
                  Alternativ ist eine Kontaktaufnahme &uuml;ber die
                  bereitgestellte E-Mail-Adresse{" "}
                  <a
                    href="mailto:info@hbw-bremen.de"
                    className="text-brand-primary underline decoration-brand-primary/30 underline-offset-2 transition-colors hover:text-brand-accent"
                  >
                    info@hbw-bremen.de
                  </a>{" "}
                  m&ouml;glich. In diesem Fall werden die mit der E-Mail
                  &uuml;bermittelten personenbezogenen Daten des Nutzers
                  gespeichert.
                </p>
                <p>
                  Die Rechtsgrundlage f&uuml;r die Verarbeitung der Daten ist
                  bei Vorliegen einer Einwilligung Art.&nbsp;6 Abs.&nbsp;1
                  lit.&nbsp;a DSGVO. Die Rechtsgrundlage f&uuml;r die
                  Verarbeitung der Daten, die im Zuge einer Kontaktaufnahme
                  &uuml;bermittelt werden, ist Art.&nbsp;6 Abs.&nbsp;1
                  lit.&nbsp;f DSGVO. Zielt der Kontakt auf den Abschluss eines
                  Vertrages ab, so ist zus&auml;tzliche Rechtsgrundlage
                  Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;b DSGVO.
                </p>
                <p>
                  Die Daten werden gel&ouml;scht, sobald sie f&uuml;r die
                  Erreichung des Zweckes ihrer Erhebung nicht mehr erforderlich
                  sind. Dies ist dann der Fall, wenn die jeweilige Konversation
                  mit dem Nutzer beendet ist.
                </p>
              </div>
            </section>

            {/* 6. Cookies */}
            <section>
              <h2 className="text-2xl font-semibold text-brand-secondary">
                6. Verwendung von Cookies
              </h2>
              <div className="mt-4 h-0.5 w-10 bg-brand-accent" />
              <div className="mt-6 space-y-4">
                <p>
                  Unsere Website verwendet Cookies. Bei Cookies handelt es sich
                  um Textdateien, die im Internetbrowser bzw. vom
                  Internetbrowser auf dem Computersystem des Nutzers gespeichert
                  werden. Ruft ein Nutzer eine Website auf, so kann ein Cookie
                  auf dem Betriebssystem des Nutzers gespeichert werden. Dieser
                  Cookie enth&auml;lt eine charakteristische Zeichenfolge, die
                  eine eindeutige Identifizierung des Browsers beim erneuten
                  Aufrufen der Website erm&ouml;glicht.
                </p>
                <p>
                  Wir setzen Cookies ein, um unsere Website nutzerfreundlicher
                  zu gestalten. Einige Elemente unserer Internetseite erfordern
                  es, dass der aufrufende Browser auch nach einem Seitenwechsel
                  identifiziert werden kann. Die Rechtsgrundlage f&uuml;r die
                  Verarbeitung personenbezogener Daten unter Verwendung
                  technisch notwendiger Cookies ist Art.&nbsp;6 Abs.&nbsp;1
                  lit.&nbsp;f DSGVO.
                </p>
                <p>
                  Die Nutzer k&ouml;nnen die Verwendung von Cookies &uuml;ber
                  die Browsereinstellungen einschr&auml;nken oder verhindern.
                  Bereits gespeicherte Cookies k&ouml;nnen jederzeit
                  gel&ouml;scht werden. Dies kann auch automatisiert erfolgen.
                  Werden Cookies f&uuml;r unsere Website deaktiviert, k&ouml;nnen
                  m&ouml;glicherweise nicht mehr alle Funktionen der Website
                  vollumf&auml;nglich genutzt werden.
                </p>
              </div>
            </section>

            {/* 7. Google Maps */}
            <section>
              <h2 className="text-2xl font-semibold text-brand-secondary">
                7. Google Maps
              </h2>
              <div className="mt-4 h-0.5 w-10 bg-brand-accent" />
              <div className="mt-6 space-y-4">
                <p>
                  Diese Website nutzt m&ouml;glicherweise den Kartendienst
                  Google Maps. Anbieter ist die Google Ireland Limited
                  (&bdquo;Google&ldquo;), Gordon House, Barrow Street, Dublin 4,
                  Irland.
                </p>
                <p>
                  Zur Nutzung der Funktionen von Google Maps ist es notwendig,
                  Ihre IP-Adresse zu speichern. Diese Informationen werden in
                  der Regel an einen Server von Google in den USA
                  &uuml;bertragen und dort gespeichert. Der Anbieter dieser
                  Seite hat keinen Einfluss auf diese Daten&uuml;bertragung.
                </p>
                <p>
                  Die Nutzung von Google Maps erfolgt im Interesse einer
                  ansprechenden Darstellung unserer Online-Angebote und an einer
                  leichten Auffindbarkeit der von uns auf der Website
                  angegebenen Orte. Dies stellt ein berechtigtes Interesse im
                  Sinne von Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;f DSGVO dar.
                </p>
                <p>
                  Mehr Informationen zum Umgang mit Nutzerdaten finden Sie in
                  der Datenschutzerkl&auml;rung von Google:{" "}
                  <a
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-primary underline decoration-brand-primary/30 underline-offset-2 transition-colors hover:text-brand-accent"
                  >
                    https://policies.google.com/privacy
                  </a>
                </p>
              </div>
            </section>

            {/* 8. Rechte der betroffenen Person */}
            <section>
              <h2 className="text-2xl font-semibold text-brand-secondary">
                8. Rechte der betroffenen Person
              </h2>
              <div className="mt-4 h-0.5 w-10 bg-brand-accent" />
              <div className="mt-6 space-y-4">
                <p>
                  Werden personenbezogene Daten von Ihnen verarbeitet, sind Sie
                  Betroffener im Sinne der DSGVO und es stehen Ihnen folgende
                  Rechte gegen&uuml;ber dem Verantwortlichen zu:
                </p>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-brand-secondary">
                      a) Auskunftsrecht (Art.&nbsp;15 DSGVO)
                    </h3>
                    <p className="mt-1">
                      Sie k&ouml;nnen von dem Verantwortlichen eine
                      Best&auml;tigung dar&uuml;ber verlangen, ob
                      personenbezogene Daten, die Sie betreffen, von uns
                      verarbeitet werden. Liegt eine solche Verarbeitung vor,
                      k&ouml;nnen Sie &uuml;ber folgende Informationen Auskunft
                      verlangen: Verarbeitungszwecke, Kategorien der
                      verarbeiteten Daten, Empf&auml;nger, geplante
                      Speicherdauer, Bestehen eines Rechts auf Berichtigung oder
                      L&ouml;schung, Beschwerderecht bei einer
                      Aufsichtsbeh&ouml;rde.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-secondary">
                      b) Recht auf Berichtigung (Art.&nbsp;16 DSGVO)
                    </h3>
                    <p className="mt-1">
                      Sie haben ein Recht auf Berichtigung und/oder
                      Vervollst&auml;ndigung gegen&uuml;ber dem
                      Verantwortlichen, sofern die verarbeiteten
                      personenbezogenen Daten, die Sie betreffen, unrichtig oder
                      unvollst&auml;ndig sind.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-secondary">
                      c) Recht auf L&ouml;schung (Art.&nbsp;17 DSGVO)
                    </h3>
                    <p className="mt-1">
                      Sie k&ouml;nnen von dem Verantwortlichen verlangen, dass
                      die Sie betreffenden personenbezogenen Daten
                      unverz&uuml;glich gel&ouml;scht werden. Der
                      Verantwortliche ist verpflichtet, diese Daten
                      unverz&uuml;glich zu l&ouml;schen, sofern einer der
                      gesetzlich geregelten Gr&uuml;nde zutrifft.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-secondary">
                      d) Recht auf Einschr&auml;nkung der Verarbeitung
                      (Art.&nbsp;18 DSGVO)
                    </h3>
                    <p className="mt-1">
                      Unter bestimmten Voraussetzungen k&ouml;nnen Sie die
                      Einschr&auml;nkung der Verarbeitung der Sie betreffenden
                      personenbezogenen Daten verlangen.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-secondary">
                      e) Recht auf Daten&uuml;bertragbarkeit (Art.&nbsp;20
                      DSGVO)
                    </h3>
                    <p className="mt-1">
                      Sie haben das Recht, die Sie betreffenden
                      personenbezogenen Daten, die Sie dem Verantwortlichen
                      bereitgestellt haben, in einem strukturierten,
                      g&auml;ngigen und maschinenlesbaren Format zu erhalten.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-secondary">
                      f) Widerspruchsrecht (Art.&nbsp;21 DSGVO)
                    </h3>
                    <p className="mt-1">
                      Sie haben das Recht, aus Gr&uuml;nden, die sich aus Ihrer
                      besonderen Situation ergeben, jederzeit gegen die
                      Verarbeitung der Sie betreffenden personenbezogenen Daten,
                      die aufgrund von Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;e oder
                      f DSGVO erfolgt, Widerspruch einzulegen.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-secondary">
                      g) Recht auf Widerruf der datenschutzrechtlichen
                      Einwilligungserkl&auml;rung (Art.&nbsp;7 Abs.&nbsp;3
                      DSGVO)
                    </h3>
                    <p className="mt-1">
                      Sie haben das Recht, Ihre datenschutzrechtliche
                      Einwilligungserkl&auml;rung jederzeit zu widerrufen. Durch
                      den Widerruf der Einwilligung wird die
                      Rechtm&auml;&szlig;igkeit der aufgrund der Einwilligung
                      bis zum Widerruf erfolgten Verarbeitung nicht
                      ber&uuml;hrt.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-secondary">
                      h) Recht auf Beschwerde bei einer Aufsichtsbeh&ouml;rde
                      (Art.&nbsp;77 DSGVO)
                    </h3>
                    <p className="mt-1">
                      Unbeschadet eines anderweitigen verwaltungsrechtlichen
                      oder gerichtlichen Rechtsbehelfs steht Ihnen das Recht auf
                      Beschwerde bei einer Aufsichtsbeh&ouml;rde, insbesondere
                      in dem Mitgliedstaat Ihres Aufenthaltsorts, Ihres
                      Arbeitsplatzes oder des Orts des mutma&szlig;lichen
                      Versto&szlig;es zu.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* 9. Aktualität */}
            <section>
              <h2 className="text-2xl font-semibold text-brand-secondary">
                9. Aktualit&auml;t und &Auml;nderung dieser
                Datenschutzerkl&auml;rung
              </h2>
              <div className="mt-4 h-0.5 w-10 bg-brand-accent" />
              <div className="mt-6 space-y-4">
                <p>
                  Diese Datenschutzerkl&auml;rung ist aktuell g&uuml;ltig und
                  hat den Stand M&auml;rz 2026.
                </p>
                <p>
                  Durch die Weiterentwicklung unserer Website und Angebote oder
                  aufgrund ge&auml;nderter gesetzlicher beziehungsweise
                  beh&ouml;rdlicher Vorgaben kann es notwendig werden, diese
                  Datenschutzerkl&auml;rung zu &auml;ndern.
                </p>
              </div>
            </section>

            {/* Link to Impressum */}
            <section className="border-t border-brand-surface pt-8">
              <p>
                Zur&uuml;ck zum{" "}
                <Link
                  href="/impressum"
                  className="text-brand-primary underline decoration-brand-primary/30 underline-offset-2 transition-colors hover:text-brand-accent"
                >
                  Impressum
                </Link>
              </p>
            </section>
          </div>
        </div>
      </main>

    </>
  );
}
