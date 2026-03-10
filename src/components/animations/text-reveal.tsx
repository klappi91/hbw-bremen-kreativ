"use client";

import { useEffect, useRef, useMemo, type ElementType } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface TextRevealProps {
  text: string;
  as?: "h1" | "h2" | "h3" | "p";
  className?: string;
  splitBy?: "chars" | "words";
  stagger?: number;
}

export function TextReveal({
  text,
  as: Tag = "h2",
  className,
  splitBy = "words",
  stagger = 0.05,
}: TextRevealProps) {
  const containerRef = useRef<HTMLElement>(null);

  const segments = useMemo(() => {
    if (splitBy === "chars") {
      return text.split("").map((char, i) => ({
        key: `${char}-${i}`,
        content: char === " " ? "\u00A0" : char,
      }));
    }

    return text.split(" ").map((word, i) => ({
      key: `${word}-${i}`,
      content: word,
    }));
  }, [text, splitBy]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const container = containerRef.current;
    if (!container) return;

    const spans = container.querySelectorAll<HTMLSpanElement>("[data-animate]");

    gsap.fromTo(
      spans,
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger,
        ease: "power3.out",
        scrollTrigger: {
          trigger: container,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === container) t.kill();
      });
    };
  }, [segments, stagger]);

  const Component = Tag as ElementType;

  return (
    <Component
      ref={containerRef}
      className={className}
      style={{ display: "flex", flexWrap: "wrap", gap: splitBy === "words" ? "0.3em" : 0 }}
    >
      {segments.map(({ key, content }) => (
        <span key={key} data-animate style={{ display: "inline-block", willChange: "transform, opacity" }}>
          {content}
        </span>
      ))}
    </Component>
  );
}
