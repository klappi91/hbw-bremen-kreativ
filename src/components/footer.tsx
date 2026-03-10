import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";

const leistungenLinks = [
  { label: "Terrassenüberdachung", href: "/leistungen/terrassenueberdachung" },
  { label: "Markisen", href: "/leistungen/markisen" },
  { label: "Wintergarten", href: "/leistungen/wintergarten" },
  { label: "Fenster", href: "/leistungen/fenster" },
  { label: "Haustüren", href: "/leistungen/haustueren" },
  { label: "Insektenschutz", href: "/leistungen/insektenschutz" },
  { label: "Raff-Store-Anlagen", href: "/leistungen/raff-store-anlagen" },
];

const unternehmenLinks = [
  { label: "Über uns", href: "/ueber-uns" },
  { label: "Referenzen", href: "/referenzen" },
  { label: "Jobs", href: "/jobs" },
  { label: "Kontakt", href: "/kontakt" },
];

const rechtlichesLinks = [
  { label: "Impressum", href: "/impressum" },
  { label: "Datenschutz", href: "/datenschutz" },
  { label: "Digitale Barrierefreiheit", href: "/digitale-barrierefreiheit" },
];

const partners = [
  {
    name: "Lewens",
    src: "/images/logo213_large_GxNz0eoufh.png",
  },
  {
    name: "TS-Aluminium",
    src: "/images/ts-logo-web-rgb-1_large_UNLDtbnn4Y.png",
  },
  {
    name: "Würth",
    src: "/images/0-wrt-linie-rgb-pos_large_leVigDY_vr.jpg",
  },
];

export function Footer() {
  return (
    <footer className="bg-brand-secondary text-white">
      {/* Partner Logos */}
      <div className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
          <p className="mb-6 text-center text-sm font-semibold uppercase tracking-[0.2em] text-white/50">
            Unsere Partner
          </p>
          <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="relative h-10 w-28 opacity-70 brightness-0 invert transition-opacity hover:opacity-100 md:h-12 md:w-36"
              >
                <Image
                  src={partner.src}
                  alt={partner.name}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Company Info */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block">
              <span className="headline-md text-white">
                HB<span className="text-brand-accent">W</span>
              </span>
            </Link>
            <p className="mt-4 text-lg font-light leading-relaxed text-white/70">
              Ihr Spezialist für Wintergärten, Terrassenüberdachungen und mehr in
              Bremen und Umgebung.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href="https://maps.google.com/?q=Klüverweg+8d+28307+Bremen"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-3 text-white/70 transition-colors hover:text-brand-accent"
              >
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand-primary group-hover:text-brand-accent" />
                <span>
                  Klüverweg 8 d<br />
                  28307 Bremen
                </span>
              </a>

              <a
                href="tel:+4915207128739"
                className="group flex items-center gap-3 text-white/70 transition-colors hover:text-brand-accent"
              >
                <Phone className="h-5 w-5 shrink-0 text-brand-primary group-hover:text-brand-accent" />
                <span>0152 07128739</span>
              </a>

              <a
                href="mailto:info@hbw-bremen.de"
                className="group flex items-center gap-3 text-white/70 transition-colors hover:text-brand-accent"
              >
                <Mail className="h-5 w-5 shrink-0 text-brand-primary group-hover:text-brand-accent" />
                <span>info@hbw-bremen.de</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="mt-8 flex gap-4">
              <a
                href="https://www.facebook.com/Veton2210/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white/70 transition-all hover:border-brand-accent hover:bg-brand-accent hover:text-brand-secondary"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/hbw.bremen/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white/70 transition-all hover:border-brand-accent hover:bg-brand-accent hover:text-brand-secondary"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Leistungen */}
          <div className="lg:col-span-3">
            <h3 className="text-lg font-semibold tracking-wide text-white">
              Leistungen
            </h3>
            <div className="mt-1 h-0.5 w-8 bg-brand-accent" />
            <ul className="mt-6 space-y-3">
              {leistungenLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-brand-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Unternehmen */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold tracking-wide text-white">
              Unternehmen
            </h3>
            <div className="mt-1 h-0.5 w-8 bg-brand-accent" />
            <ul className="mt-6 space-y-3">
              {unternehmenLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-brand-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Rechtliches */}
          <div className="lg:col-span-3">
            <h3 className="text-lg font-semibold tracking-wide text-white">
              Rechtliches
            </h3>
            <div className="mt-1 h-0.5 w-8 bg-brand-accent" />
            <ul className="mt-6 space-y-3">
              {rechtlichesLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-brand-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-sm text-white/40 sm:flex-row lg:px-8">
          <p>&copy; 2026 HB Winterg&auml;rten GmbH. Alle Rechte vorbehalten.</p>
          <p className="font-light">
            Mit <span className="text-brand-accent">&hearts;</span> in Bremen
          </p>
        </div>
      </div>
    </footer>
  );
}
