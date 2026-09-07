import { IntroImageCard } from "../common/card/IntroImageCard";
import { HeroSectionDetails } from "../common/card/HeroSectionDetails";

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
