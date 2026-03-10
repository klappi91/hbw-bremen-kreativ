"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ArrowRight } from "lucide-react";

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        overlayRef.current,
        { scaleX: 1 },
        { scaleX: 0, duration: 1.2, transformOrigin: "right center" }
      )
        .fromTo(
          imageRef.current,
          { scale: 1.3 },
          { scale: 1, duration: 1.8 },
          0
        )
        .fromTo(
          headlineRef.current,
          { y: 80, opacity: 0, clipPath: "inset(100% 0 0 0)" },
          { y: 0, opacity: 1, clipPath: "inset(0% 0 0 0)", duration: 1 },
          0.4
        )
        .fromTo(
          subRef.current,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          0.8
        )
        .fromTo(
          ctaRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7 },
          1.0
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-end overflow-hidden bg-brand-secondary"
    >
      {/* Background Image */}
      <div ref={imageRef} className="absolute inset-0">
        <Image
          src="/images/0-sommergarten-serie-t-glasschiebetuer-kubus-flachdach-zipstore-spotli.jpg"
          alt="Sommergarten Serie T mit Glasschiebetür, Kubus-Flachdach und Spotlights"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-secondary via-brand-secondary/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-secondary/80 to-transparent" />
      </div>

      {/* Color overlay for reveal animation */}
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-brand-secondary z-10"
      />

      {/* Content */}
      <div className="relative z-20 w-full px-5 pb-16 pt-32 md:px-12 lg:px-20 lg:pb-24">
        <div className="max-w-6xl">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-brand-accent/20 px-4 py-2 text-sm font-medium text-brand-accent backdrop-blur-sm border border-brand-accent/30">
            <span className="h-2 w-2 rounded-full bg-brand-accent animate-pulse" />
            HB Wintergärten GmbH — Bremen
          </div>

          <h1
            ref={headlineRef}
            className="headline-xl text-white max-w-4xl mb-6"
          >
            Qualität, die
            <br />
            <span className="text-brand-accent">Maßstäbe</span> setzt.
          </h1>

          <p
            ref={subRef}
            className="text-lg md:text-xl text-white/80 max-w-xl mb-10 font-light leading-relaxed"
          >
            Maßgeschneiderte Terrassenüberdachungen, Wintergärten und
            Sonnenschutz — von der Beratung bis zur Montage, alles aus einer
            Hand.
          </p>

          <div ref={ctaRef} className="flex flex-wrap gap-4">
            <Link
              href="/kontakt"
              className="group inline-flex items-center gap-3 bg-brand-accent text-brand-secondary px-8 py-4 font-semibold text-lg rounded-none hover:bg-white transition-colors duration-300 min-h-[44px]"
            >
              Termin vereinbaren
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/referenzen"
              className="inline-flex items-center gap-3 border-2 border-white/30 text-white px-8 py-4 font-medium text-lg rounded-none hover:border-brand-accent hover:text-brand-accent transition-colors duration-300 min-h-[44px]"
            >
              Referenzen ansehen
            </Link>
          </div>

          {/* Process steps */}
          <div className="mt-16 flex flex-wrap gap-8 md:gap-12 text-white/60 text-sm font-medium uppercase tracking-widest">
            {["Beratung", "Aufmaß", "Planung", "Montage"].map((step, i) => (
              <div key={step} className="flex items-center gap-3">
                <span className="text-brand-accent text-2xl font-bold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>{step}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
