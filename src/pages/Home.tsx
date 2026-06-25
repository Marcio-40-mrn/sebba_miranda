import { useReveal } from "../hooks/useReveal";
import { Hero } from "../sections/Hero";
import { ServicesPreview } from "../sections/ServicesPreview";
import { Models } from "../sections/Models";
import { WhyChooseUs } from "../sections/WhyChooseUs";
import { CtaBanner } from "../sections/CtaBanner";

export function Home() {
  useReveal("home");
  return (
    <>
      <Hero />
      <ServicesPreview />
      <Models />
      <WhyChooseUs />
      <CtaBanner />
    </>
  );
}
