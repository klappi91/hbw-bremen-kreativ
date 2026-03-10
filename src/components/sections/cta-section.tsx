"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Phone } from "lucide-react";

export function CtaSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".cta-content > *",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.12,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-brand-primary overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-accent/10 skew-x-[-12deg] translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-secondary/20 rounded-full -translate-x-1/2 translate-y-1/2" />

      <div className="relative px-5 md:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto text-center cta-content">
          <p className="text-white/70 font-semibold uppercase tracking-widest text-sm mb-6">
            Jetzt starten
          </p>
          <h2 className="headline-lg text-white mb-6">
            Sprechen Sie uns an —<br />
            wir freuen uns auf{" "}
            <span className="text-brand-accent">Ihr Projekt!</span>
          </h2>
          <p className="text-xl text-white/80 font-light max-w-2xl mx-auto mb-10 leading-relaxed">
            Kontaktieren Sie uns für ein unverbindliches Beratungsgespräch.
            Wir besuchen Sie vor Ort und besprechen gemeinsam Ihre Wünsche.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/kontakt"
              className="group inline-flex items-center gap-3 bg-brand-accent text-brand-secondary px-8 py-4 font-semibold text-lg hover:bg-white transition-colors duration-300 min-h-[44px]"
            >
              Zum Kontaktformular
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href="tel:+4915207128739"
              className="group inline-flex items-center gap-3 border-2 border-white/30 text-white px-8 py-4 font-medium text-lg hover:border-white hover:bg-white/10 transition-all duration-300 min-h-[44px]"
            >
              <Phone className="w-5 h-5" />
              0152 07128739
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
