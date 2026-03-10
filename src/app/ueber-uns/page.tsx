"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Shield, Users, Wrench, Award } from "lucide-react";

export default function UeberUnsPage() {
  const heroRef = useRef<HTMLElement>(null);
  const splitRef = useRef<HTMLElement>(null);
  const geschaeftsfuehrerRef = useRef<HTMLElement>(null);
  const galleryRef = useRef<HTMLElement>(null);
  const ctaRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Hero overlay reveal
      gsap.fromTo(
        ".ueber-hero-overlay",
        { scaleX: 1 },
        {
          scaleX: 0,
          duration: 1.2,
          ease: "power3.out",
          transformOrigin: "right center",
        }
      );

      gsap.fromTo(
        ".ueber-hero-content > *",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 0.9,
          delay: 0.4,
          ease: "power3.out",
        }
      );

      // Split section - image parallax
      gsap.to(".split-image", {
        yPercent: -15,
        ease: "none",
        scrollTrigger: {
          trigger: splitRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });

      // Split section - content reveal
      gsap.fromTo(
        ".split-content > *",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".split-content",
            start: "top 75%",
          },
        }
      );

      // USP items stagger
      gsap.fromTo(
        ".usp-item",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.12,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".usp-grid",
            start: "top 80%",
          },
        }
      );

      // Geschaeftsfuehrer section
      gsap.fromTo(
        ".gf-content > *",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.12,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: geschaeftsfuehrerRef.current,
            start: "top 70%",
          },
        }
      );

      // Gallery stagger
      gsap.fromTo(
        ".gallery-item",
        { y: 60, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          stagger: 0.15,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: galleryRef.current,
            start: "top 75%",
          },
        }
      );

      // CTA section
      gsap.fromTo(
        ".ueber-cta > *",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.12,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ctaRef.current,
            start: "top 75%",
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-[70vh] flex items-end overflow-hidden bg-brand-secondary"
      >
        <div className="absolute inset-0">
          <Image
            src="/images/0-sommergarten-serie-t-glasschiebetuer-kubus-flachdach-zipstore-spotli.jpg"
            alt="Sommergarten von HB Wintergarten - Qualität aus Bremen"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-secondary via-brand-secondary/70 to-brand-secondary/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-secondary/80 to-transparent" />
        </div>

        <div className="ueber-hero-overlay absolute inset-0 bg-brand-secondary z-10" />

        <div className="relative z-20 w-full px-5 pb-16 pt-40 md:px-12 lg:px-20 lg:pb-24">
          <div className="max-w-5xl ueber-hero-content">
            <p className="text-brand-accent font-semibold uppercase tracking-widest text-sm mb-4">
              Über uns
            </p>
            <h1 className="headline-xl text-white max-w-4xl mb-6">
              Ihr zuverlässiger
              <br />
              <span className="text-brand-accent">Partner</span> vor Ort
              <br />
              in Bremen
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-xl font-light leading-relaxed">
              Familienunternehmen mit Leidenschaft für Qualität,
              Kundenzufriedenheit und handwerkliche Exzellenz.
            </p>
          </div>
        </div>
      </section>

      {/* Split Section: Image left, Text right */}
      <section
        ref={splitRef}
        className="relative py-24 md:py-32 overflow-hidden"
      >
        <div className="px-5 md:px-12 lg:px-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Image side with parallax */}
              <div className="relative">
                <div className="relative overflow-hidden aspect-[4/5] md:aspect-[3/4]">
                  <Image
                    src="/images/0-terrassendach-serie-t-flachdach-unterglasmarkise-ledstripes-28_large.jpg"
                    alt="Terrassendach Serie T mit LED-Stripes"
                    fill
                    className="split-image object-cover scale-110"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                {/* Overlapping accent block */}
                <div className="absolute -bottom-6 -right-4 md:-right-8 w-48 md:w-64 bg-brand-accent p-6 md:p-8 z-10">
                  <p className="text-brand-secondary font-bold text-4xl md:text-5xl">
                    20+
                  </p>
                  <p className="text-brand-secondary/80 font-medium text-sm mt-1">
                    Jahre Erfahrung
                  </p>
                </div>
                {/* Decorative line */}
                <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-brand-primary/30" />
              </div>

              {/* Content side */}
              <div className="split-content">
                <p className="text-brand-accent font-semibold uppercase tracking-widest text-sm mb-4">
                  Wer wir sind
                </p>
                <h2 className="headline-lg text-brand-secondary mb-6">
                  Ein Familienunternehmen
                  <span className="text-brand-primary"> mit Herz</span>
                </h2>
                <p className="text-lg text-brand-muted leading-relaxed mb-6">
                  HB Wintergärten ist ein Familienunternehmen, das hohen Wert
                  auf Qualität und Kundenzufriedenheit legt. Jeder Kunde hat
                  individuelle Vorstellungen und Wünsche — diese herauszufinden
                  und professionell umzusetzen ist unser täglicher Anspruch.
                </p>
                <p className="text-lg text-brand-muted leading-relaxed mb-6">
                  Wir begleiten Sie von der ersten Planung über die
                  Baugenehmigung bis hin zum fertigen Bau. Der gesamte Ablauf
                  erfolgt durch erfahrene Fachkräfte direkt aus dem eigenen
                  Team — keine Subunternehmer.
                </p>
                <p className="text-lg text-brand-muted leading-relaxed mb-10">
                  Als Partner von Würth Befestigungstechnik setzen wir auf
                  hochwertigste Materialien. Mit unserer
                  Mini-Musterüberdachung können Sie sich bereits vor dem Bau
                  ein Bild von Ihrem Projekt machen.
                </p>

                {/* USP Grid */}
                <div className="usp-grid grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    {
                      icon: Users,
                      title: "Eigenes Team",
                      text: "Keine Subunternehmer",
                    },
                    {
                      icon: Shield,
                      title: "Geprüfte Qualität",
                      text: "HWK Bremen zertifiziert",
                    },
                    {
                      icon: Wrench,
                      title: "Alles aus einer Hand",
                      text: "Beratung bis Montage",
                    },
                    {
                      icon: Award,
                      title: "Würth Partner",
                      text: "Premium Befestigungstechnik",
                    },
                  ].map((usp) => (
                    <div key={usp.title} className="usp-item flex items-start gap-3">
                      <div className="flex-shrink-0 w-12 h-12 bg-brand-primary/10 flex items-center justify-center">
                        <usp.icon className="w-6 h-6 text-brand-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-brand-secondary">
                          {usp.title}
                        </p>
                        <p className="text-brand-muted text-sm">{usp.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Geschaeftsfuehrer Section */}
      <section
        ref={geschaeftsfuehrerRef}
        className="relative py-24 md:py-32 bg-brand-secondary overflow-hidden"
      >
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-primary/5 skew-x-[-12deg] translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-accent/5 rounded-full -translate-x-1/2 translate-y-1/3" />

        <div className="relative px-5 md:px-12 lg:px-20">
          <div className="max-w-5xl mx-auto gf-content">
            <p className="text-brand-accent font-semibold uppercase tracking-widest text-sm mb-4">
              Geschäftsführung
            </p>
            <h2 className="headline-lg text-white mb-8">
              Veton <span className="text-brand-accent">Abazi</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-[1fr,2px,2fr] gap-8 md:gap-12 items-start">
              <div>
                <p className="text-brand-primary font-semibold text-lg mb-2">
                  Geschäftsführer
                </p>
                <p className="text-white/50 text-sm uppercase tracking-widest">
                  HB Wintergärten GmbH
                </p>
              </div>
              <div className="hidden md:block w-[2px] h-full bg-brand-accent/30" />
              <div>
                <p className="text-white/80 text-lg leading-relaxed mb-6">
                  Mit ueber 20 Jahren Erfahrung im Handwerk und Bauwesen
                  verbindet Veton Abazi meisterliches Know-how mit moderner
                  Technik und innovativen Loesungen. Seine Leidenschaft fuer
                  Praezision und Kundenzufriedenheit praeagt jedes Projekt.
                </p>
                <p className="text-white/80 text-lg leading-relaxed">
                  Von der persoenlichen Beratung bis zur finalen Abnahme — Veton
                  Abazi stellt sicher, dass jedes Detail stimmt und Ihre
                  Vorstellungen Realitaet werden.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section ref={galleryRef} className="py-24 md:py-32 bg-brand-surface/50">
        <div className="px-5 md:px-12 lg:px-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-brand-accent font-semibold uppercase tracking-widest text-sm mb-4">
                Einblicke
              </p>
              <h2 className="headline-lg text-brand-secondary">
                Unsere <span className="text-brand-primary">Arbeit</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                {
                  src: "/images/0-sommergarten-serie-t-glasschiebetuer-kubus-flachdach-zipstore-spotli.jpg",
                  alt: "Sommergarten Serie T",
                  span: "lg:col-span-2 lg:row-span-2",
                  aspect: "aspect-[4/3] lg:aspect-auto lg:h-full",
                },
                {
                  src: "/images/0-terrassendach-serie-t-flachdach-unterglasmarkise-ledstripes-28_large.jpg",
                  alt: "Terrassendach Serie T",
                  span: "",
                  aspect: "aspect-square",
                },
                {
                  src: "/images/wintergarten_476_large_5w1Nk9ZzWK.jpg",
                  alt: "Wintergarten Projekt",
                  span: "",
                  aspect: "aspect-square",
                },
                {
                  src: "/images/0-whatsapp-image-2021-07-19-at-21-43-24-3_large_UwnkcUR_pX.jpeg",
                  alt: "Terrassenueberdachung mit Glas-Schiebeelementen",
                  span: "",
                  aspect: "aspect-[4/3]",
                },
                {
                  src: "/images/referenzprojekt-aluminium-haustuer_large_6aMNz0iYWb.jpg",
                  alt: "Aluminium Haustuer",
                  span: "lg:col-span-2",
                  aspect: "aspect-[21/9]",
                },
              ].map((img) => (
                <div
                  key={img.src}
                  className={`gallery-item relative overflow-hidden group ${img.span} ${img.aspect}`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-secondary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <p className="absolute bottom-4 left-4 text-white font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {img.alt}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        ref={ctaRef}
        className="relative py-24 md:py-32 bg-brand-primary overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-accent/10 skew-x-[-12deg] translate-x-1/4" />

        <div className="relative px-5 md:px-12 lg:px-20">
          <div className="max-w-4xl mx-auto text-center ueber-cta">
            <p className="text-white/70 font-semibold uppercase tracking-widest text-sm mb-6">
              Jetzt starten
            </p>
            <h2 className="headline-lg text-white mb-6">
              Lassen Sie uns Ihr
              <br />
              <span className="text-brand-accent">Projekt besprechen</span>
            </h2>
            <p className="text-xl text-white/80 font-light max-w-2xl mx-auto mb-10 leading-relaxed">
              Kontaktieren Sie uns fuer ein unverbindliches Beratungsgespraech.
              Wir besuchen Sie vor Ort und besprechen gemeinsam Ihre Wuensche.
            </p>
            <Link
              href="/kontakt"
              className="group inline-flex items-center gap-3 bg-brand-accent text-brand-secondary px-8 py-4 font-semibold text-lg hover:bg-white transition-colors duration-300 min-h-[44px]"
            >
              Kontakt aufnehmen
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
