import HeroTemplate from "@/components/templates/hero-template";
import PromiseSection from "@/components/organisms/promise-section";
import StatementSection from "@/components/organisms/statement-section";
import ServiceOverviewTemplate from "@/components/templates/ServiceOverviewTemplate";

export default function Home() {
  return (
    <>
      <HeroTemplate route="home" />
      <StatementSection />
      <ServiceOverviewTemplate type="section" />
      <PromiseSection />
    </>
  );
}
