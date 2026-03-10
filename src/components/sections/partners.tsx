"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const partners = [
  {
    name: "Lewens Sonnenschutz-Systeme",
    logo: "/images/logo213_large_GxNz0eoufh.png",
    url: "https://www.lewens-markisen.de/index.php/de/",
  },
  {
    name: "TS-Aluminium-Profilsysteme",
    logo: "/images/ts-logo-web-rgb-1_large_UNLDtbnn4Y.png",
    url: "https://www.ts-alu.com/",
  },
  {
    name: "Adolf Würth GmbH & Co. KG",
    logo: "/images/0-wrt-linie-rgb-pos_large_leVigDY_vr.jpg",
    url: "https://www.wuerth.de/",
  },
];

export function Partners() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".partner-logo",
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          stagger: 0.15,
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
    <section ref={sectionRef} className="py-16 md:py-20 bg-brand-surface/30">
      <div className="px-5 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-brand-muted font-medium uppercase tracking-widest text-xs mb-10">
            Unsere Partner
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
            {partners.map((partner) => (
              <a
                key={partner.name}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="partner-logo relative h-12 md:h-16 w-auto grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
                title={partner.name}
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={160}
                  height={64}
                  className="h-full w-auto object-contain"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
