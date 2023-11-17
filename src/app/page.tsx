import CallToAction from "./components/callToAction";
import FooterSection from "./components/footer";
import GetInTouchSection from "./components/getInTouch";
import HeroSection from "./components/hero";
import NavbarSection from "./components/navbar";
import PortfolioSection from "./components/portfolio";
import ProcessSection from "./components/process";
import ReviewsSection from "./components/reviews";
import ServicesSection from "./components/services";
import TrustedBySection from "./components/trustedBy";

export default function Home() {
  return (
    <div>
      <NavbarSection />
      <HeroSection />
      <TrustedBySection />
      <ProcessSection />
      <ServicesSection />
      <PortfolioSection />
      <ReviewsSection />
      <CallToAction />
      <GetInTouchSection />
      <FooterSection />
    </div>
  );
}
