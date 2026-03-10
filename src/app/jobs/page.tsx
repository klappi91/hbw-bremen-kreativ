"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowRight,
  Briefcase,
  Clock,
  MapPin,
  Users,
  Star,
  Wrench,
} from "lucide-react";
const benefits = [
  {
    icon: Clock,
    title: "Flexible Arbeitszeiten",
    description: "40h/Woche mit der Möglichkeit auf eine 4-Tage-Woche",
  },
  {
    icon: Users,
    title: "Familienbetrieb",
    description: "Kleines, eingespieltes Team mit kurzen Entscheidungswegen",
  },
  {
    icon: Star,
    title: "Abwechslungsreiche Projekte",
    description:
      "Von Terrassenüberdachungen über Wintergärten bis Großprojekte",
  },
  {
    icon: Wrench,
    title: "Modernes Equipment",
    description: "Hochwertige Werkzeuge und Materialien von Würth & Co.",
  },
];

export default function JobsPage() {
  const heroRef = useRef<HTMLElement>(null);
  const jobRef = useRef<HTMLElement>(null);
  const benefitsRef = useRef<HTMLElement>(null);
  const ctaRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Hero animations
      gsap.fromTo(
        ".jobs-hero-content > *",
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

      // Job card
      gsap.fromTo(
        ".job-card",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: jobRef.current,
            start: "top 75%",
          },
        }
      );

      // Benefits stagger
      gsap.fromTo(
        ".benefit-item",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.12,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: benefitsRef.current,
            start: "top 75%",
          },
        }
      );

      // CTA section
      gsap.fromTo(
        ".jobs-cta > *",
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
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/5 rounded-full translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-accent/5 rounded-full -translate-x-1/3 translate-y-1/3" />
        {/* Accent stripe */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-accent via-brand-primary to-brand-accent" />

        <div className="relative px-5 md:px-12 lg:px-20">
          <div className="max-w-5xl mx-auto jobs-hero-content">
            <p className="text-brand-accent font-semibold uppercase tracking-widest text-sm mb-4">
              Karriere
            </p>
            <h1 className="headline-xl text-white max-w-4xl mb-6">
              Aktuelle
              <br />
              <span className="text-brand-accent">Stellenangebote</span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 max-w-2xl font-light leading-relaxed">
              Sie sind Handwerker mit Leidenschaft? Werden Sie Teil der
              HB Wintergärten GmbH in Bremen und arbeiten Sie an spannenden
              Projekten mit einem eingespielten Team.
            </p>
          </div>
        </div>
      </section>

      {/* Job Listing Section */}
      <section ref={jobRef} className="py-16 md:py-24">
        <div className="px-5 md:px-12 lg:px-20">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-brand-accent font-semibold uppercase tracking-widest text-sm mb-4">
                Offene Stellen
              </p>
              <h2 className="headline-lg text-brand-secondary">
                Wir suchen <span className="text-brand-primary">Sie!</span>
              </h2>
            </div>

            {/* Job Card */}
            <div className="job-card relative bg-white border-2 border-brand-surface hover:border-brand-primary/30 transition-colors duration-300 overflow-hidden">
              {/* Accent top bar */}
              <div className="h-1 bg-gradient-to-r from-brand-primary via-brand-accent to-brand-primary" />

              <div className="p-8 md:p-12">
                <div className="flex flex-wrap items-start justify-between gap-6 mb-8">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-brand-accent/20 flex items-center justify-center">
                        <Briefcase className="w-6 h-6 text-brand-accent" />
                      </div>
                      <span className="bg-brand-accent/10 text-brand-accent text-xs font-bold px-3 py-1 uppercase tracking-wider">
                        Vollzeit
                      </span>
                    </div>
                    <h3 className="headline-md text-brand-secondary mb-2">
                      Monteure (m/w/d) und
                      <br />
                      Vertriebler (m/w/d)
                    </h3>
                  </div>
                  <Link
                    href="/kontakt"
                    className="group inline-flex items-center gap-3 bg-brand-accent text-brand-secondary px-8 py-4 font-semibold text-lg hover:bg-brand-secondary hover:text-white transition-colors duration-300 min-h-[44px] shrink-0"
                  >
                    Jetzt bewerben
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>

                {/* Details */}
                <div className="flex flex-wrap gap-6 mb-8 text-brand-muted">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-brand-primary" />
                    <span className="text-sm">Bremen</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-brand-primary" />
                    <span className="text-sm">40 Stunden / Woche</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-brand-primary" />
                    <span className="text-sm">
                      4-Tage-Woche möglich
                    </span>
                  </div>
                </div>

                <div className="border-t border-brand-surface pt-8">
                  <p className="text-brand-text leading-relaxed mb-4">
                    Wir suchen engagierte Monteure und Vertriebler, die unser
                    Team in Bremen verstärken. Ob Sie lieber auf der Baustelle
                    anpacken oder Kunden beraten — bei uns finden Sie die
                    passende Position.
                  </p>
                  <p className="text-brand-muted leading-relaxed">
                    Sie arbeiten an abwechslungsreichen Projekten — von
                    Terrassenüberdachungen über Wintergärten bis hin zu
                    Großprojekten. Flexible Arbeitszeiten mit der Möglichkeit
                    auf eine 4-Tage-Woche machen Ihren Alltag planbar.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section
        ref={benefitsRef}
        className="py-16 md:py-24 bg-brand-surface/50"
      >
        <div className="px-5 md:px-12 lg:px-20">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-brand-accent font-semibold uppercase tracking-widest text-sm mb-4">
                Vorteile
              </p>
              <h2 className="headline-lg text-brand-secondary">
                Warum <span className="text-brand-primary">HBW?</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {benefits.map((benefit) => (
                <div
                  key={benefit.title}
                  className="benefit-item bg-white p-8 border border-brand-surface hover:border-brand-primary/20 transition-colors duration-300 group"
                >
                  <div className="w-14 h-14 bg-brand-primary/10 flex items-center justify-center mb-5 group-hover:bg-brand-accent/20 transition-colors duration-300">
                    <benefit.icon className="w-7 h-7 text-brand-primary group-hover:text-brand-accent transition-colors duration-300" />
                  </div>
                  <h3 className="text-brand-secondary font-bold text-lg mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-brand-muted leading-relaxed">
                    {benefit.description}
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
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-secondary/20 rounded-full -translate-x-1/2 translate-y-1/2" />

        <div className="relative px-5 md:px-12 lg:px-20">
          <div className="max-w-4xl mx-auto text-center jobs-cta">
            <p className="text-white/70 font-semibold uppercase tracking-widest text-sm mb-6">
              Bereit?
            </p>
            <h2 className="headline-lg text-white mb-6">
              Werden Sie Teil
              <br />
              <span className="text-brand-accent">unseres Teams</span>
            </h2>
            <p className="text-xl text-white/80 font-light max-w-2xl mx-auto mb-10 leading-relaxed">
              Senden Sie uns Ihre Bewerbung über das Kontaktformular oder rufen
              Sie direkt an. Wir freuen uns auf Sie!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/kontakt"
                className="group inline-flex items-center gap-3 bg-brand-accent text-brand-secondary px-8 py-4 font-semibold text-lg hover:bg-white transition-colors duration-300 min-h-[44px]"
              >
                Jetzt bewerben
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href="tel:+4915207128739"
                className="group inline-flex items-center gap-3 border-2 border-white/30 text-white px-8 py-4 font-medium text-lg hover:border-white hover:bg-white/10 transition-all duration-300 min-h-[44px]"
              >
                <span>0152 07128739</span>
              </a>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
