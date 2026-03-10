"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";

const references = [
  {
    title: "Aluminium-Haustür",
    location: "Bremen",
    description:
      "Moderne Haustür aus Aluminium mit schlichtem, elegantem Design — klare Linien und seitliches Glaselement.",
    image: "/images/referenzprojekt-aluminium-haustuer_large_6aMNz0iYWb.jpg",
  },
  {
    title: "350 Raffstoranlagen",
    location: "Lungenklinik Großhansdorf",
    description:
      "Anspruchsvolles Großprojekt mit 350 Raffstoranlagen für den Neubau der renommierten Lungenklinik.",
    image:
      "/images/referenzprojekt-lungenklinik-grosshansdorf_566_large_5YmEOV6GxA.jpg",
  },
  {
    title: "16 Zipp-Anlagen",
    location: "Gnarrenburg",
    description:
      "Moderne Zipp-Anlage mit 16 einzelnen Anlagen auf Pfosten-Riegel-Fassade installiert.",
    image:
      "/images/referenzprojekt-zipp-anlage-gnarrenburg_large_SJWYzF_Wnp.jpg",
  },
];

export function ReferencesTeaser() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".ref-card",
        { y: 80, opacity: 0, rotateY: 5 },
        {
          y: 0,
          opacity: 1,
          rotateY: 0,
          stagger: 0.2,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 65%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 md:py-32 bg-brand-secondary text-white clip-angled"
    >
      <div className="px-5 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div>
              <p className="text-brand-accent font-semibold uppercase tracking-widest text-sm mb-4">
                Referenzen
              </p>
              <h2 className="headline-lg">
                Lassen Sie sich
                <br />
                <span className="text-brand-accent">inspirieren.</span>
              </h2>
            </div>
            <Link
              href="/referenzen"
              className="group inline-flex items-center gap-2 text-white/70 hover:text-brand-accent transition-colors font-medium self-start md:self-auto"
            >
              Alle Referenzen
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Reference cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {references.map((ref) => (
              <div
                key={ref.title}
                className="ref-card group relative overflow-hidden"
              >
                <div className="aspect-[3/4] relative overflow-hidden">
                  <Image
                    src={ref.image}
                    alt={ref.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-brand-accent text-xs font-semibold uppercase tracking-wider mb-2">
                    {ref.location}
                  </p>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {ref.title}
                  </h3>
                  <p className="text-white/60 text-sm font-light leading-relaxed">
                    {ref.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
