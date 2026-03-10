"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Shield, Users, Wrench } from "lucide-react";

export function AboutTeaser() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Parallax on the image
      gsap.to(".about-image", {
        yPercent: -15,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });

      // Content reveal
      gsap.fromTo(
        ".about-content > *",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".about-content",
            start: "top 75%",
          },
        }
      );

      // Stats counter animation
      gsap.fromTo(
        ".stat-item",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".stats-row",
            start: "top 80%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-brand-surface/50 overflow-hidden"
    >
      <div className="px-5 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image side - kreativ with overlapping elements */}
            <div className="relative">
              <div className="relative overflow-hidden aspect-[4/5] md:aspect-[3/4]">
                <Image
                  src="/images/0-sommergarten-serie-t-glasschiebetuer-kubus-flachdach-zipstore-spotli.jpg"
                  alt="Sommergarten Serie T - HB Wintergärten"
                  fill
                  className="about-image object-cover scale-110"
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
            <div className="about-content">
              <p className="text-brand-accent font-semibold uppercase tracking-widest text-sm mb-4">
                Über uns
              </p>
              <h2 className="headline-lg text-brand-secondary mb-6">
                Ihr zuverlässiger Partner
                <span className="text-brand-primary"> vor Ort</span>
              </h2>
              <p className="text-lg text-brand-muted leading-relaxed mb-6">
                HB Wintergärten ist ein Familienunternehmen, das hohen Wert auf
                Qualität und Kundenzufriedenheit legt. Jeder Kunde hat
                individuelle Vorstellungen und Wünsche — diese herauszufinden
                und professionell umzusetzen ist unser täglicher Anspruch.
              </p>
              <p className="text-lg text-brand-muted leading-relaxed mb-10">
                Der gesamte Ablauf — von der ersten Planung bis zur finalen
                Montage — erfolgt durch erfahrene Fachkräfte direkt aus dem
                eigenen Team. Keine Subunternehmer.
              </p>

              {/* USP icons row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
                {[
                  {
                    icon: Users,
                    title: "Eigenes Team",
                    text: "Keine Subunternehmer",
                  },
                  {
                    icon: Shield,
                    title: "HWK Bremen",
                    text: "Geprüfte Qualität",
                  },
                  {
                    icon: Wrench,
                    title: "Alles aus einer Hand",
                    text: "Beratung bis Montage",
                  },
                ].map((usp) => (
                  <div key={usp.title} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-brand-primary/10 flex items-center justify-center">
                      <usp.icon className="w-5 h-5 text-brand-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-brand-secondary text-sm">
                        {usp.title}
                      </p>
                      <p className="text-brand-muted text-xs">{usp.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link
                href="/ueber-uns"
                className="group inline-flex items-center gap-3 bg-brand-secondary text-white px-8 py-4 font-semibold hover:bg-brand-primary transition-colors duration-300 min-h-[44px]"
              >
                Mehr über uns
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
