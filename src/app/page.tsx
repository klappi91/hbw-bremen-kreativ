import { Hero } from "@/components/sections/hero";
import { ServicesOverview } from "@/components/sections/services-overview";
import { AboutTeaser } from "@/components/sections/about-teaser";
import { ReferencesTeaser } from "@/components/sections/references-teaser";
import { Benefits } from "@/components/sections/benefits";
import { CtaSection } from "@/components/sections/cta-section";
import { Partners } from "@/components/sections/partners";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <AboutTeaser />
      <ReferencesTeaser />
      <Benefits />
      <Partners />
      <CtaSection />
    </>
  );
}
