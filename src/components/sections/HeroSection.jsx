import { IntroImageCard } from "../IntroImageCard";
import { HeroSectionDetails } from "../HeroSectionDetails";

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <HeroSectionDetails />
        <IntroImageCard />
      </div>
    </section>
  );
}
