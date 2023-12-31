import WorkedWithClients from "@/components/works/clients";
import WeMakeDifference from "@/components/works/difference";
import FrequentyAskedQuestions from "@/components/works/faq";
import HeroSection from "@/components/works/hero";
import Portfolio from "@/components/works/portfolio";

type Props = {};

export default function page({}: Props) {
  return (
    <>
      <HeroSection />
      <WeMakeDifference />
      <WorkedWithClients />
      <Portfolio />
      <FrequentyAskedQuestions />
    </>
  );
}
