"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

const projects = [
  {
    title: "Moderner Wintergarten",
    subtitle: "Privathaus Bremen-Schwachhausen",
    before: "/images/project1-before.png",
    after: "/images/project1-after.png",
  },
  {
    title: "Elegantes Terrassendach",
    subtitle: "Villa Bremen-Oberneuland",
    before: "/images/project2-before.png",
    after: "/images/project2-after.png",
  },
];

export function BeforeAfter() {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const afterImage1Ref = useRef<HTMLDivElement>(null);
  const afterImage2Ref = useRef<HTMLDivElement>(null);
  const splitLineRef = useRef<HTMLDivElement>(null);
  const labelBeforeRef = useRef<HTMLDivElement>(null);
  const labelAfterRef = useRef<HTMLDivElement>(null);
  const title1Ref = useRef<HTMLDivElement>(null);
  const title2Ref = useRef<HTMLDivElement>(null);
  const project1Ref = useRef<HTMLDivElement>(null);
  const project2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: containerRef.current,
          start: "top top",
          end: "+=250%",
          scrub: 0.5,
        },
      });

      // Phase 1: Wipe Project 1 (0–40%)
      tl.fromTo(
        afterImage1Ref.current,
        { clipPath: "inset(0 100% 0 0)" },
        { clipPath: "inset(0 0% 0 0)", ease: "none", duration: 40 },
        0
      )
        .fromTo(
          splitLineRef.current,
          { left: "0%" },
          { left: "100%", ease: "none", duration: 40 },
          0
        )
        .fromTo(
          labelBeforeRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 5 },
          2
        )
        .fromTo(
          labelAfterRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 5 },
          5
        )

        // Phase 2: Crossfade P1 → P2 (42–52%)
        .to(
          [labelBeforeRef.current, labelAfterRef.current],
          { opacity: 0, duration: 3 },
          38
        )
        .to(project1Ref.current, { opacity: 0, duration: 10 }, 42)
        .fromTo(
          project2Ref.current,
          { opacity: 0 },
          { opacity: 1, duration: 10 },
          42
        )
        .to(title1Ref.current, { opacity: 0, duration: 5 }, 42)
        .fromTo(
          title2Ref.current,
          { opacity: 0 },
          { opacity: 1, duration: 5 },
          47
        )
        .set(afterImage2Ref.current, { clipPath: "inset(0 100% 0 0)" }, 42)
        .set(splitLineRef.current, { left: "0%" }, 42)

        // Phase 3: Wipe Project 2 (55–95%)
        .fromTo(
          afterImage2Ref.current,
          { clipPath: "inset(0 100% 0 0)" },
          { clipPath: "inset(0 0% 0 0)", ease: "none", duration: 40 },
          55
        )
        .fromTo(
          splitLineRef.current,
          { left: "0%" },
          { left: "100%", ease: "none", duration: 40 },
          55
        )
        .fromTo(
          labelBeforeRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 5 },
          57
        )
        .fromTo(
          labelAfterRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 5 },
          60
        )
        .to(
          [labelBeforeRef.current, labelAfterRef.current],
          { opacity: 0, duration: 5 },
          90
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef}>
      <div ref={containerRef} className="relative h-screen w-full overflow-hidden">
        {/* Project 1 Layer */}
        <div ref={project1Ref} className="absolute inset-0">
          <Image
            src={projects[0].before}
            alt={`${projects[0].title} - Vorher`}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div
            ref={afterImage1Ref}
            className="absolute inset-0"
            style={{ clipPath: "inset(0 100% 0 0)" }}
          >
            <Image
              src={projects[0].after}
              alt={`${projects[0].title} - Nachher`}
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </div>

        {/* Project 2 Layer */}
        <div ref={project2Ref} className="absolute inset-0 opacity-0">
          <Image
            src={projects[1].before}
            alt={`${projects[1].title} - Vorher`}
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div
            ref={afterImage2Ref}
            className="absolute inset-0"
            style={{ clipPath: "inset(0 100% 0 0)" }}
          >
            <Image
              src={projects[1].after}
              alt={`${projects[1].title} - Nachher`}
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </div>

        {/* Split Line */}
        <div
          ref={splitLineRef}
          className="absolute top-0 bottom-0 z-20 w-[3px] bg-brand-accent"
          style={{ left: "0%" }}
        />

        {/* Labels */}
        <div
          ref={labelBeforeRef}
          className="absolute top-6 left-6 z-30 rounded-full bg-white/20 px-4 py-2 text-sm font-medium tracking-wide text-white backdrop-blur-sm opacity-0"
        >
          Vorher
        </div>
        <div
          ref={labelAfterRef}
          className="absolute top-6 right-6 z-30 rounded-full bg-brand-accent px-4 py-2 text-sm font-medium tracking-wide text-brand-secondary opacity-0"
        >
          Nachher
        </div>

        {/* Gradient Overlay for Readability */}
        <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-brand-secondary/60 via-transparent to-transparent" />

        {/* Title Overlay - Project 1 */}
        <div
          ref={title1Ref}
          className="absolute bottom-8 left-8 z-20 md:bottom-12 md:left-12"
        >
          <p className="text-sm font-medium tracking-wider text-brand-accent uppercase">
            {projects[0].subtitle}
          </p>
          <h3 className="mt-1 text-2xl font-bold text-white md:text-4xl">
            {projects[0].title}
          </h3>
        </div>

        {/* Title Overlay - Project 2 */}
        <div
          ref={title2Ref}
          className="absolute bottom-8 left-8 z-20 opacity-0 md:bottom-12 md:left-12"
        >
          <p className="text-sm font-medium tracking-wider text-brand-accent uppercase">
            {projects[1].subtitle}
          </p>
          <h3 className="mt-1 text-2xl font-bold text-white md:text-4xl">
            {projects[1].title}
          </h3>
        </div>
      </div>
    </section>
  );
}
