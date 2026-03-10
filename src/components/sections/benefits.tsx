"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Shield,
  MapPin,
  Wrench,
  Lightbulb,
  Award,
  HeadphonesIcon,
  Users,
  Settings,
} from "lucide-react";

const benefits = [
  {
    icon: Wrench,
    title: "Komplettservice",
    text: "Von der ersten Skizze bis zur finalen Montage — wir koordinieren alle Schritte für Sie.",
  },
  {
    icon: MapPin,
    title: "Regionale Nähe",
    text: "Als Bremer Handwerksbetrieb sind wir schnell vor Ort und jederzeit ansprechbar.",
  },
  {
    icon: Shield,
    title: "Hochwertige Materialien",
    text: "Wir setzen auf geprüfte Qualität und langlebige Produkte führender Hersteller.",
  },
  {
    icon: Lightbulb,
    title: "Erweiterbare Systeme",
    text: "Unsere Bauweisen lassen sich flexibel erweitern — auch Jahre später.",
  },
  {
    icon: Award,
    title: "HWK Bremen",
    text: "Als eingetragener Handwerksbetrieb stehen wir für geprüfte Qualität und Transparenz.",
  },
  {
    icon: HeadphonesIcon,
    title: "Persönlicher Service",
    text: "Wir begleiten Ihr Projekt in jeder Phase mit direktem Ansprechpartner.",
  },
  {
    icon: Users,
    title: "Eigene Fachkräfte",
    text: "Die Montage erfolgt ausschließlich durch unser eigenes, erfahrenes Team.",
  },
  {
    icon: Settings,
    title: "Wartung & Pflege",
    text: "Individuelle Tipps zur optimalen Pflege Ihrer neuen Elemente.",
  },
];

export function Benefits() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".benefit-card",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.08,
          duration: 0.6,
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
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 md:mb-20">
            <p className="text-brand-accent font-semibold uppercase tracking-widest text-sm mb-4">
              Warum wir
            </p>
            <h2 className="headline-lg text-brand-secondary mx-auto max-w-3xl">
              Ihre Vorteile mit
              <span className="text-brand-primary"> HB Wintergärten</span>
            </h2>
          </div>

          {/* Benefits grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, i) => (
              <div
                key={benefit.title}
                className={`benefit-card group p-6 md:p-8 border border-brand-surface hover:border-brand-primary/30 transition-all duration-300 hover:-translate-y-1 ${
                  i % 3 === 0 ? "bg-brand-secondary text-white" : "bg-white"
                }`}
              >
                <div
                  className={`w-12 h-12 flex items-center justify-center mb-5 ${
                    i % 3 === 0
                      ? "bg-brand-accent"
                      : "bg-brand-primary/10"
                  }`}
                >
                  <benefit.icon
                    className={`w-6 h-6 ${
                      i % 3 === 0
                        ? "text-brand-secondary"
                        : "text-brand-primary"
                    }`}
                  />
                </div>
                <h3
                  className={`font-semibold text-lg mb-2 ${
                    i % 3 === 0 ? "text-white" : "text-brand-secondary"
                  }`}
                >
                  {benefit.title}
                </h3>
                <p
                  className={`text-sm leading-relaxed font-light ${
                    i % 3 === 0 ? "text-white/70" : "text-brand-muted"
                  }`}
                >
                  {benefit.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
