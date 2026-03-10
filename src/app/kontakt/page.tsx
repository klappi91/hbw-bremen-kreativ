"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  CheckCircle,
  Send,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const produktOptions = [
  "Terrassenüberdachungen",
  "Markisen",
  "Wintergarten",
  "Fenster",
  "Haustüren",
  "Insektenschutz",
  "Raff-Store-Anlagen",
  "Sonstiges",
];

export default function KontaktPage() {
  const heroRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [datenschutz, setDatenschutz] = useState(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Hero content
      gsap.fromTo(
        ".kontakt-hero-content > *",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 0.9,
          delay: 0.2,
          ease: "power3.out",
        }
      );

      // Form reveal
      gsap.fromTo(
        ".kontakt-form",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: formRef.current,
            start: "top 80%",
          },
        }
      );

      // Info panel reveal
      gsap.fromTo(
        ".kontakt-info > *",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: infoRef.current,
            start: "top 80%",
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative pt-40 pb-16 md:pb-20 bg-brand-secondary overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/5 rounded-full translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-accent/5 rounded-full -translate-x-1/3 translate-y-1/3" />

        <div className="relative px-5 md:px-12 lg:px-20">
          <div className="max-w-5xl mx-auto kontakt-hero-content">
            <p className="text-brand-accent font-semibold uppercase tracking-widest text-sm mb-4">
              Kontakt
            </p>
            <h1 className="headline-xl text-white max-w-4xl mb-6">
              Sprechen Sie
              <br />
              <span className="text-brand-accent">uns an</span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 max-w-xl font-light leading-relaxed">
              Wir freuen uns auf Ihre Nachricht. Lassen Sie uns gemeinsam Ihr
              nächstes Projekt planen.
            </p>
          </div>
        </div>
      </section>

      {/* Form + Info Section */}
      <section ref={formRef} className="py-16 md:py-24">
        <div className="px-5 md:px-12 lg:px-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-[1.2fr,1fr] gap-12 lg:gap-20">
              {/* Form Side */}
              <div className="kontakt-form">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-20 text-center">
                    <div className="w-20 h-20 bg-brand-accent/20 flex items-center justify-center rounded-full mb-6">
                      <CheckCircle className="w-10 h-10 text-brand-accent" />
                    </div>
                    <h2 className="headline-md text-brand-secondary mb-4">
                      Vielen Dank!
                    </h2>
                    <p className="text-brand-muted text-lg max-w-md mb-8">
                      Ihre Nachricht wurde erfolgreich gesendet. Wir melden uns
                      schnellstmöglich bei Ihnen zurück.
                    </p>
                    <Link
                      href="/"
                      className="group inline-flex items-center gap-3 bg-brand-secondary text-white px-8 py-4 font-semibold hover:bg-brand-primary transition-colors duration-300 min-h-[44px]"
                    >
                      Zurück zur Startseite
                      <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                ) : (
                  <>
                    <h2 className="headline-md text-brand-secondary mb-2">
                      Nachricht senden
                    </h2>
                    <p className="text-brand-muted mb-8">
                      Felder mit * sind Pflichtfelder.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Name + Email row */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label
                            htmlFor="name"
                            className="block text-sm font-semibold text-brand-secondary mb-2"
                          >
                            Name *
                          </label>
                          <Input
                            id="name"
                            name="name"
                            required
                            placeholder="Ihr vollständiger Name"
                            className="h-12 px-4 border-brand-surface focus-visible:border-brand-primary focus-visible:ring-brand-primary/30"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="email"
                            className="block text-sm font-semibold text-brand-secondary mb-2"
                          >
                            E-Mail *
                          </label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            required
                            placeholder="ihre@email.de"
                            className="h-12 px-4 border-brand-surface focus-visible:border-brand-primary focus-visible:ring-brand-primary/30"
                          />
                        </div>
                      </div>

                      {/* Phone + Product row */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label
                            htmlFor="telefon"
                            className="block text-sm font-semibold text-brand-secondary mb-2"
                          >
                            Telefon
                          </label>
                          <Input
                            id="telefon"
                            name="telefon"
                            type="tel"
                            placeholder="Ihre Telefonnummer"
                            className="h-12 px-4 border-brand-surface focus-visible:border-brand-primary focus-visible:ring-brand-primary/30"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="produkt"
                            className="block text-sm font-semibold text-brand-secondary mb-2"
                          >
                            Angefragtes Produkt
                          </label>
                          <select
                            id="produkt"
                            name="produkt"
                            className="h-12 w-full rounded-lg border border-brand-surface bg-transparent px-4 text-sm text-brand-text transition-colors outline-none focus-visible:border-brand-primary focus-visible:ring-3 focus-visible:ring-brand-primary/30"
                          >
                            <option value="">Bitte wählen...</option>
                            {produktOptions.map((opt) => (
                              <option key={opt} value={opt}>
                                {opt}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      {/* Available space + Extras row */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label
                            htmlFor="flaeche"
                            className="block text-sm font-semibold text-brand-secondary mb-2"
                          >
                            Verfügbare Fläche
                          </label>
                          <Input
                            id="flaeche"
                            name="flaeche"
                            placeholder="z.B. 4m x 3m"
                            className="h-12 px-4 border-brand-surface focus-visible:border-brand-primary focus-visible:ring-brand-primary/30"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="extras"
                            className="block text-sm font-semibold text-brand-secondary mb-2"
                          >
                            Gewünschte Extras
                          </label>
                          <Input
                            id="extras"
                            name="extras"
                            placeholder="z.B. LED, Heizstrahler..."
                            className="h-12 px-4 border-brand-surface focus-visible:border-brand-primary focus-visible:ring-brand-primary/30"
                          />
                        </div>
                      </div>

                      {/* Message */}
                      <div>
                        <label
                          htmlFor="nachricht"
                          className="block text-sm font-semibold text-brand-secondary mb-2"
                        >
                          Nachricht *
                        </label>
                        <Textarea
                          id="nachricht"
                          name="nachricht"
                          required
                          rows={5}
                          placeholder="Beschreiben Sie Ihr Projekt oder Ihre Frage..."
                          className="px-4 py-3 border-brand-surface focus-visible:border-brand-primary focus-visible:ring-brand-primary/30"
                        />
                      </div>

                      {/* Datenschutz */}
                      <div className="flex items-start gap-3">
                        <input
                          type="checkbox"
                          id="datenschutz"
                          name="datenschutz"
                          required
                          checked={datenschutz}
                          onChange={(e) => setDatenschutz(e.target.checked)}
                          className="mt-1 h-5 w-5 accent-brand-primary rounded border-brand-surface"
                        />
                        <label
                          htmlFor="datenschutz"
                          className="text-sm text-brand-muted leading-relaxed"
                        >
                          Ich stimme der Verarbeitung meiner Daten gemäß der{" "}
                          <Link
                            href="/datenschutz"
                            className="text-brand-primary underline hover:text-brand-secondary"
                          >
                            Datenschutzerklärung
                          </Link>{" "}
                          zu. *
                        </label>
                      </div>

                      {/* Submit */}
                      <Button
                        type="submit"
                        className="w-full sm:w-auto bg-brand-accent text-brand-secondary hover:bg-brand-accent/90 px-10 py-6 text-lg font-bold rounded-none min-h-[52px] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                      >
                        <Send className="w-5 h-5 mr-2" />
                        Nachricht abschicken
                      </Button>
                    </form>
                  </>
                )}
              </div>

              {/* Info Side */}
              <div ref={infoRef} className="kontakt-info">
                {/* Company Info Card */}
                <div className="bg-brand-secondary p-8 md:p-10 mb-6">
                  <h3 className="text-white font-bold text-xl mb-6">
                    HB Wintergärten GmbH
                  </h3>

                  <div className="space-y-5">
                    <a
                      href="https://maps.google.com/?q=Klüverweg+8d+28307+Bremen"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-start gap-4 text-white/70 hover:text-brand-accent transition-colors"
                    >
                      <MapPin className="w-5 h-5 mt-0.5 text-brand-primary group-hover:text-brand-accent shrink-0" />
                      <span>
                        Klüverweg 8 d
                        <br />
                        28307 Bremen
                      </span>
                    </a>

                    <a
                      href="mailto:info@hbw-bremen.de"
                      className="group flex items-center gap-4 text-white/70 hover:text-brand-accent transition-colors"
                    >
                      <Mail className="w-5 h-5 text-brand-primary group-hover:text-brand-accent shrink-0" />
                      <span>info@hbw-bremen.de</span>
                    </a>

                    <a
                      href="tel:+4915207128739"
                      className="group flex items-center gap-4 text-white/70 hover:text-brand-accent transition-colors"
                    >
                      <Phone className="w-5 h-5 text-brand-primary group-hover:text-brand-accent shrink-0" />
                      <span>0152 07128739</span>
                    </a>
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/10">
                    <p className="text-white/50 text-sm font-medium uppercase tracking-widest mb-3">
                      Geschäftsführer
                    </p>
                    <p className="text-white font-semibold">Veton Abazi</p>
                  </div>
                </div>

                {/* Map Placeholder */}
                <div className="relative bg-brand-surface aspect-[4/3] flex items-center justify-center overflow-hidden group">
                  <div className="absolute inset-0 bg-brand-secondary/5" />
                  <div className="text-center z-10">
                    <MapPin className="w-10 h-10 text-brand-primary mx-auto mb-3" />
                    <p className="text-brand-secondary font-semibold">
                      Klüverweg 8 d
                    </p>
                    <p className="text-brand-muted text-sm">28307 Bremen</p>
                    <a
                      href="https://maps.google.com/?q=Klüverweg+8d+28307+Bremen"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-4 text-brand-primary text-sm font-semibold hover:text-brand-secondary transition-colors"
                    >
                      In Google Maps öffnen
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                  {/* Decorative grid pattern */}
                  <div className="absolute inset-0 opacity-[0.03]">
                    <div
                      className="w-full h-full"
                      style={{
                        backgroundImage:
                          "linear-gradient(#0B3554 1px, transparent 1px), linear-gradient(90deg, #0B3554 1px, transparent 1px)",
                        backgroundSize: "40px 40px",
                      }}
                    />
                  </div>
                </div>

                {/* Quick CTA */}
                <div className="mt-6 bg-brand-accent p-6">
                  <p className="text-brand-secondary font-bold text-lg mb-1">
                    Lieber direkt sprechen?
                  </p>
                  <p className="text-brand-secondary/70 text-sm mb-4">
                    Rufen Sie uns an — wir beraten Sie gerne.
                  </p>
                  <a
                    href="tel:+4915207128739"
                    className="group inline-flex items-center gap-3 bg-brand-secondary text-white px-6 py-3 font-semibold hover:bg-brand-primary transition-colors duration-300 min-h-[44px]"
                  >
                    <Phone className="w-5 h-5" />
                    0152 07128739
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
