"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    title: "Terrassenüberdachung",
    description:
      "Robuste Alu-Überdachungen nach Maß — langlebig, wetterfest und passgenau für Ihre Terrasse.",
    image: "/images/terrassendach_large_5xEvaZrLUb.jpg",
    href: "/leistungen/terrassenueberdachung",
  },
  {
    title: "Markisen",
    description:
      "Individuell wählbare Markisenarten — ob Gelenkarm- oder Kassettenmarkisen — für optimalen Sonnenschutz.",
    image: "/images/markise_large_PXweViOwUt.jpg",
    href: "/leistungen/markisen",
  },
  {
    title: "Wintergarten",
    description:
      "Ein Wintergarten ganz nach Wunsch: Von der ersten Idee bis zur schlüsselfertigen Umsetzung.",
    image: "/images/wintergarten_476_large_5w1Nk9ZzWK.jpg",
    href: "/leistungen/wintergarten",
  },
  {
    title: "Fenster",
    description:
      "Moderne Fensterlösungen führender Marken — effizient, langlebig und exakt auf Ihre Anforderungen abgestimmt.",
    image: "/images/fenster_large_KVyjLqwfj5.jpg",
    href: "/leistungen/fenster",
  },
  {
    title: "Haustüren",
    description:
      "Hochwertige Haustüren namhafter Hersteller — maßgeschneidert nach Ihren individuellen Vorstellungen.",
    image: "/images/0-img-20250317-wa0079_large_FLhWu5kHwp.jpg",
    href: "/leistungen/haustueren",
  },
  {
    title: "Insektenschutz",
    description:
      "Individuelle Lösungen, die genau auf Ihre Fenster und Türen abgestimmt sind.",
    image: "/images/fenster_135_large_YeF-4TxJQ8.jpg",
    href: "/leistungen/insektenschutz",
  },
  {
    title: "Raff-Store-Anlagen",
    description:
      "Steuern Sie Licht und Schatten ganz nach Ihren Wünschen — mit maßgeschneiderten Raffstore-Anlagen.",
    image: "/images/0-wcp-erb-0041-anemoscreen_large_KsTKhWzWP2.jpg",
    href: "/leistungen/raff-store-anlagen",
  },
];

export default function LeistungenPage() {
  const heroRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      /* Hero text reveal */
      gsap.fromTo(
        ".leistungen-hero-content > *",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 0.9,
          delay: 0.2,
          ease: "power3.out",
        }
      );

      /* Service cards stagger */
      gsap.fromTo(
        ".leistung-card",
        { y: 80, opacity: 0, scale: 0.96 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          stagger: 0.1,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 75%",
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* Hero */}
      <section
        ref={heroRef}
        className="relative bg-brand-secondary pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden"
      >
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-primary/5 skew-x-[-12deg] translate-x-1/4" />
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-brand-accent/10 rounded-full" />

        <div className="relative px-5 md:px-12 lg:px-20">
          <div className="max-w-5xl leistungen-hero-content">
            {/* Breadcrumb */}
            <nav className="mb-8 text-sm text-white/50 font-medium">
              <Link
                href="/"
                className="hover:text-brand-accent transition-colors"
              >
                Startseite
              </Link>
              <span className="mx-2">/</span>
              <span className="text-white/80">Leistungen</span>
            </nav>

            <p className="text-brand-accent font-semibold uppercase tracking-widest text-sm mb-4">
              Unsere Leistungen
            </p>
            <h1 className="headline-xl text-white max-w-4xl mb-6">
              Produkte und{" "}
              <span className="text-brand-accent">Sortiment</span>
            </h1>
            <p className="text-xl text-white/70 max-w-2xl font-light leading-relaxed">
              Wintergärten und Terrassenüberdachungen in Bremen — von der
              Beratung bis zur Montage, alles aus einer Hand.
            </p>
          </div>
        </div>

        {/* Bottom accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-accent via-brand-primary to-brand-accent" />
      </section>

      {/* Services Grid */}
      <section ref={gridRef} className="py-20 md:py-28 bg-white">
        <div className="px-5 md:px-12 lg:px-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {services.map((service, i) => (
                <Link
                  key={service.title}
                  href={service.href}
                  className={`leistung-card group relative overflow-hidden bg-brand-secondary ${
                    i === 0
                      ? "md:col-span-2 lg:col-span-2 min-h-[400px] md:min-h-[480px]"
                      : "min-h-[320px]"
                  }`}
                >
                  {/* Image */}
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes={
                      i === 0
                        ? "(max-width: 768px) 100vw, 66vw"
                        : "(max-width: 768px) 100vw, 33vw"
                    }
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-secondary via-brand-secondary/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

                  {/* Arrow button */}
                  <div className="absolute top-4 right-4 md:top-auto md:bottom-8 md:right-8 flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-brand-accent flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12 z-10">
                    <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 text-brand-secondary" />
                  </div>

                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                    <div>
                      <h2
                        className={`font-semibold text-white mb-2 ${
                          i === 0
                            ? "text-2xl md:text-4xl"
                            : "text-2xl md:text-3xl"
                        }`}
                      >
                        {service.title}
                      </h2>
                      <p className="text-white/70 font-light max-w-md leading-relaxed text-sm md:text-base">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  {/* Accent line */}
                  <div className="absolute bottom-0 left-0 h-1 bg-brand-accent w-0 group-hover:w-full transition-all duration-500" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
