"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    title: "Terrassendächer",
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
    title: "Wintergärten",
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
];

export function ServicesOverview() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Stagger the service cards
      gsap.fromTo(
        ".service-card",
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-white">
      <div className="px-5 md:px-12 lg:px-20">
        {/* Section header - asymmetric */}
        <div className="max-w-7xl mx-auto mb-16 md:mb-24">
          <p className="text-brand-accent font-semibold uppercase tracking-widest text-sm mb-4">
            Unsere Leistungen
          </p>
          <h2 className="headline-lg text-brand-secondary max-w-3xl">
            Wintergärten, Überdachungen
            <br />
            <span className="text-brand-primary">und mehr.</span>
          </h2>
        </div>

        {/* Service grid - kreativ asymmetric */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {services.map((service, i) => (
            <Link
              key={service.title}
              href={service.href}
              className={`service-card group relative overflow-hidden bg-brand-secondary ${
                i === 0
                  ? "md:row-span-2 min-h-[400px] md:min-h-[600px]"
                  : "min-h-[300px]"
              }`}
            >
              {/* Image */}
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 50vw"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-secondary via-brand-secondary/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3
                      className={`font-semibold text-white mb-2 ${
                        i === 0
                          ? "text-3xl md:text-4xl"
                          : "text-2xl md:text-3xl"
                      }`}
                    >
                      {service.title}
                    </h3>
                    <p className="text-white/70 font-light max-w-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-accent flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
                    <ArrowUpRight className="w-5 h-5 text-brand-secondary" />
                  </div>
                </div>
              </div>

              {/* Accent line */}
              <div className="absolute bottom-0 left-0 h-1 bg-brand-accent w-0 group-hover:w-full transition-all duration-500" />
            </Link>
          ))}
        </div>

        {/* More services link */}
        <div className="max-w-7xl mx-auto mt-12 flex justify-center">
          <Link
            href="/leistungen"
            className="group inline-flex items-center gap-2 text-brand-secondary font-semibold text-lg hover:text-brand-primary transition-colors"
          >
            Alle Leistungen entdecken
            <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
