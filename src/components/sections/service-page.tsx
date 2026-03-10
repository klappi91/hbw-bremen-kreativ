"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Check, ChevronDown } from "lucide-react";

/* ------------------------------------------------------------------ */
/* FAQ Accordion                                                       */
/* ------------------------------------------------------------------ */

interface FaqItem {
  question: string;
  answer: string;
}

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".faq-item",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="max-w-3xl">
      <p className="text-brand-accent font-semibold uppercase tracking-widest text-sm mb-4">
        Häufige Fragen
      </p>
      <h3 className="headline-md text-brand-secondary mb-10">
        FAQ
      </h3>
      <div className="space-y-3">
        {items.map((item, i) => {
          const isOpen = openIndex === i;
          return (
            <div
              key={i}
              className="faq-item border border-brand-surface overflow-hidden transition-colors hover:border-brand-primary/30"
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left font-semibold text-brand-secondary transition-colors hover:text-brand-primary min-h-[44px]"
                aria-expanded={isOpen}
              >
                <span>{item.question}</span>
                <ChevronDown
                  className={`w-5 h-5 flex-shrink-0 text-brand-primary transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`grid transition-all duration-300 ${
                  isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-6 pb-5 text-brand-muted leading-relaxed font-light">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Image Gallery                                                       */
/* ------------------------------------------------------------------ */

export function ImageGallery({
  images,
}: {
  images: { src: string; alt: string }[];
}) {
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
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
    }, galleryRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={galleryRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {images.map((img, i) => (
        <div
          key={i}
          className={`gallery-item relative overflow-hidden group ${
            i === 0 ? "md:col-span-2 md:row-span-2 aspect-[4/3]" : "aspect-[3/2]"
          }`}
        >
          <Image
            src={img.src}
            alt={img.alt}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes={i === 0 ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 100vw, 33vw"}
          />
          <div className="absolute inset-0 bg-brand-secondary/0 group-hover:bg-brand-secondary/20 transition-colors duration-500" />
        </div>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* ServicePage — Main Layout Component                                 */
/* ------------------------------------------------------------------ */

interface ServicePageProps {
  title: string;
  intro: string;
  image: string;
  features: string[];
  ctaText: string;
  children?: ReactNode;
}

export function ServicePage({
  title,
  intro,
  image,
  features,
  ctaText,
  children,
}: ServicePageProps) {
  const heroRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      /* Hero parallax */
      gsap.to(imageRef.current, {
        yPercent: 25,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      /* Hero title reveal */
      gsap.fromTo(
        ".service-hero-title",
        { y: 60, opacity: 0, clipPath: "inset(100% 0 0 0)" },
        {
          y: 0,
          opacity: 1,
          clipPath: "inset(0% 0 0 0)",
          duration: 1,
          delay: 0.2,
          ease: "power3.out",
        }
      );

      /* Intro content reveal */
      gsap.fromTo(
        ".service-intro > *",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.12,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 75%",
          },
        }
      );

      /* Features stagger */
      gsap.fromTo(
        ".feature-item",
        { x: -30, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          stagger: 0.08,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: featuresRef.current,
            start: "top 80%",
          },
        }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* ---- Hero Banner ---- */}
      <section
        ref={heroRef}
        className="relative h-[70vh] min-h-[480px] max-h-[720px] flex items-end overflow-hidden bg-brand-secondary"
      >
        {/* Parallax image */}
        <div ref={imageRef} className="absolute inset-0 -top-[15%] bottom-0">
          <Image
            src={image}
            alt={title}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-secondary via-brand-secondary/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-secondary/70 to-transparent" />
        </div>

        {/* Title overlay */}
        <div className="relative z-10 w-full px-5 pb-12 md:px-12 lg:px-20 lg:pb-16">
          <div className="max-w-5xl">
            {/* Breadcrumb */}
            <nav className="mb-6 text-sm text-white/50 font-medium">
              <Link href="/" className="hover:text-brand-accent transition-colors">
                Startseite
              </Link>
              <span className="mx-2">/</span>
              <Link href="/leistungen" className="hover:text-brand-accent transition-colors">
                Leistungen
              </Link>
              <span className="mx-2">/</span>
              <span className="text-white/80">{title.split(" ")[0]}</span>
            </nav>

            <h1 className="service-hero-title headline-lg text-white max-w-4xl">
              {title}
            </h1>
          </div>
        </div>

        {/* Bottom accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-accent via-brand-primary to-brand-accent" />
      </section>

      {/* ---- Intro + Features ---- */}
      <section className="py-20 md:py-28 bg-white">
        <div className="px-5 md:px-12 lg:px-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
              {/* Intro text */}
              <div ref={contentRef} className="lg:col-span-7 service-intro">
                <p className="text-brand-accent font-semibold uppercase tracking-widest text-sm mb-4">
                  Unsere Leistung
                </p>
                <h2 className="headline-md text-brand-secondary mb-6 max-w-xl">
                  {title}
                </h2>
                <p className="text-lg text-brand-muted leading-relaxed font-light">
                  {intro}
                </p>
              </div>

              {/* Features */}
              <div ref={featuresRef} className="lg:col-span-5">
                <div className="bg-brand-surface/50 p-8 md:p-10">
                  <h3 className="font-semibold text-brand-secondary text-lg mb-6">
                    Ihre Vorteile
                  </h3>
                  <ul className="space-y-4">
                    {features.map((feature) => (
                      <li
                        key={feature}
                        className="feature-item flex items-start gap-3"
                      >
                        <div className="flex-shrink-0 w-6 h-6 bg-brand-accent flex items-center justify-center mt-0.5">
                          <Check className="w-4 h-4 text-brand-secondary" />
                        </div>
                        <span className="text-brand-secondary font-medium">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---- Children slot (FAQ, gallery, extra content) ---- */}
      {children && (
        <section className="py-20 md:py-28 bg-brand-surface/30">
          <div className="px-5 md:px-12 lg:px-20">
            <div className="max-w-7xl mx-auto">{children}</div>
          </div>
        </section>
      )}

      {/* ---- CTA Section ---- */}
      <section className="relative py-20 md:py-28 bg-brand-primary overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-accent/10 skew-x-[-12deg] translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-brand-secondary/20 rounded-full -translate-x-1/2 translate-y-1/2" />

        <div className="relative px-5 md:px-12 lg:px-20">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-white/70 font-semibold uppercase tracking-widest text-sm mb-6">
              Interesse geweckt?
            </p>
            <h2 className="headline-lg text-white mb-6">
              {ctaText}
            </h2>
            <p className="text-xl text-white/80 font-light max-w-2xl mx-auto mb-10 leading-relaxed">
              Kontaktieren Sie uns für ein unverbindliches Beratungsgespräch.
              Wir besuchen Sie vor Ort in Bremen und Umgebung.
            </p>
            <Link
              href="/kontakt"
              className="group inline-flex items-center gap-3 bg-brand-accent text-brand-secondary px-8 py-4 font-semibold text-lg hover:bg-white transition-colors duration-300 min-h-[44px]"
            >
              Jetzt Beratungstermin buchen
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
