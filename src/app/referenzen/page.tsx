"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";

const referenzen = [
  {
    title: "Aluminium-Haustür",
    location: "Bremen",
    description:
      "Moderne Haustür aus Aluminium mit schlichtem, elegantem Design. Hoechste Sicherheitsstandards und zeitlose Aesthetik.",
    image:
      "/images/referenzprojekt-aluminium-haustuer_large_6aMNz0iYWb.jpg",
  },
  {
    title: "Lungenklinik Großhansdorf",
    location: "Großhansdorf",
    description:
      "Großprojekt: 350 Raffstoranlagen für die Lungenklinik. Professionelle Abwicklung und termingerechte Montage.",
    image:
      "/images/referenzprojekt-lungenklinik-grosshansdorf_566_large_5YmEOV6GxA.jpg",
  },
  {
    title: "Zipp-Anlage Gnarrenburg",
    location: "Gnarrenburg",
    description:
      "16 Zipp-Anlagen auf Pfosten-Riegel-Fassade. Maßgeschneiderte Lösung für maximalen Sonnenschutz.",
    image:
      "/images/referenzprojekt-zipp-anlage-gnarrenburg_large_SJWYzF_Wnp.jpg",
  },
  {
    title: "Sommergarten Serie T",
    location: "Bremen",
    description:
      "Glasschiebetür, Kubus-Flachdach, ZIP-Store und Spotlights. Ein moderner Sommergarten mit allen Extras.",
    image:
      "/images/0-sommergarten-serie-t-glasschiebetuer-kubus-flachdach-zipstore-spotli.jpg",
  },
  {
    title: "Terrassendach Serie T",
    location: "Bremen",
    description:
      "Flachdach mit Unterglasmarkise und LED-Stripes. Stilvolle Beleuchtung für stimmungsvolle Abende.",
    image:
      "/images/0-terrassendach-serie-t-flachdach-unterglasmarkise-ledstripes-28_large.jpg",
  },
  {
    title: "Wintergarten mit Heizsystem",
    location: "Stuhr",
    description:
      "Ganzjahres-Wintergarten mit integriertem Heizsystem. Gemütlichkeit und Komfort zu jeder Jahreszeit.",
    image: "/images/wintergarten_476_large_5w1Nk9ZzWK.jpg",
  },
  {
    title: "Terrassenüberdachung mit Glas-Schiebeelementen",
    location: "Bremen",
    description:
      "Flexible Glas-Schiebeelemente für optimalen Wetterschutz. Offenheit und Schutz in perfekter Balance.",
    image:
      "/images/0-whatsapp-image-2021-07-19-at-21-43-24-3_large_UwnkcUR_pX.jpeg",
  },
];

// Bento grid layout classes for each card
const gridSpans = [
  "md:col-span-2 md:row-span-2", // Large feature card
  "md:col-span-1 md:row-span-1",
  "md:col-span-1 md:row-span-1",
  "md:col-span-1 md:row-span-2", // Tall card
  "md:col-span-2 md:row-span-1", // Wide card
  "md:col-span-1 md:row-span-1",
  "md:col-span-2 md:row-span-1", // Wide card
];

export default function ReferenzenPage() {
  const heroRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLElement>(null);
  const ctaRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Hero animations
      gsap.fromTo(
        ".ref-hero-content > *",
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

      // Grid cards stagger reveal
      gsap.fromTo(
        ".ref-card",
        { y: 80, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          stagger: 0.1,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 80%",
          },
        }
      );

      // CTA section
      gsap.fromTo(
        ".ref-cta > *",
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
        className="relative pt-40 pb-20 md:pb-28 bg-brand-secondary overflow-hidden"
      >
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/5 rounded-full translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-accent/5 rounded-full -translate-x-1/3 translate-y-1/3" />

        <div className="relative px-5 md:px-12 lg:px-20">
          <div className="max-w-5xl mx-auto ref-hero-content">
            <p className="text-brand-accent font-semibold uppercase tracking-widest text-sm mb-4">
              Referenzen
            </p>
            <h1 className="headline-xl text-white max-w-4xl mb-6">
              Lassen Sie sich
              <br />
              von uns{" "}
              <span className="text-brand-accent">inspirieren</span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 max-w-xl font-light leading-relaxed">
              Entdecken Sie eine Auswahl unserer erfolgreich abgeschlossenen
              Projekte — von Privatgaerten bis zu Großprojekten.
            </p>
          </div>
        </div>
      </section>

      {/* Bento Grid Section */}
      <section ref={gridRef} className="py-16 md:py-24 bg-brand-surface/30">
        <div className="px-5 md:px-12 lg:px-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[280px] md:auto-rows-[300px]">
              {referenzen.map((ref, i) => (
                <div
                  key={ref.title}
                  className={`ref-card relative group overflow-hidden cursor-pointer ${gridSpans[i]}`}
                >
                  <Image
                    src={ref.image}
                    alt={ref.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />

                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-secondary/90 via-brand-secondary/30 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />

                  {/* Content */}
                  <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      {/* Location badge */}
                      <span className="inline-block bg-brand-accent/90 text-brand-secondary text-xs font-bold px-3 py-1 mb-3 uppercase tracking-wider">
                        {ref.location}
                      </span>
                      <h3 className="text-white font-bold text-xl md:text-2xl mb-2 leading-tight">
                        {ref.title}
                      </h3>
                      <p className="text-white/70 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 max-w-md">
                        {ref.description}
                      </p>
                    </div>
                  </div>

                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 w-0 h-0 border-t-[40px] border-t-brand-accent border-l-[40px] border-l-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-secondary/20 rounded-full -translate-x-1/2 translate-y-1/2" />

        <div className="relative px-5 md:px-12 lg:px-20">
          <div className="max-w-4xl mx-auto text-center ref-cta">
            <p className="text-white/70 font-semibold uppercase tracking-widest text-sm mb-6">
              Ihr Projekt
            </p>
            <h2 className="headline-lg text-white mb-6">
              Überzeugt? Lassen Sie uns
              <br />
              <span className="text-brand-accent">gemeinsam starten</span>
            </h2>
            <p className="text-xl text-white/80 font-light max-w-2xl mx-auto mb-10 leading-relaxed">
              Jedes Projekt beginnt mit einem Gespräch. Kontaktieren Sie uns
              und wir finden die perfekte Lösung für Ihre Wuensche.
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
