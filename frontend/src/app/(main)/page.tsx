import HeroTemplate from "@/components/templates/hero-template";
import PromiseSection from "@/components/organisms/promise-section";
import Image from "next/image";
import ServiceTemplate from "@/components/templates/service-template";

function StatementSection() {
  return (
    <section className="mb-12 px-4 sm:px-8 md:mb-16 lg:mb-24 xl:px-20">
      <div className="mx-auto flex max-w-[1280px] flex-col items-center justify-center gap-6 rounded-xl bg-white px-4 py-8 sm:flex-row sm:px-8 md:gap-8 md:p-12 lg:px-20 lg:py-10 xl:gap-20 xl:px-24 xl:py-12">
        <StatementImage />
        <p className="text-wma-darkTeal font-semibold sm:w-full md:text-lg xl:text-2xl">
          Welcome to our employment agency! (West Migration Agency “ WMA”). We
          are dedicated to providing high-quality services to help individuals
          achieve their career goals and reunite with loved ones. Our agency
          offers various services, including study and exchange programs,
          family-based petitions, and temporary employment.
        </p>
      </div>
    </section>
  );
}

function StatementImage() {
  return (
    <div className="relative w-9/12 max-w-[260px] sm:order-last sm:w-full sm:max-w-[400px]">
      <div className="from-wma-darkTeal to-wma-teal absolute left-0 top-0 ml-2 mt-2 aspect-[1/1] w-full rounded-sm bg-gradient-to-r" />
      <Image
        alt="Image of a woman"
        src="/statement-image.jpg"
        width={2000}
        height={2000}
        className="relative z-10 aspect-[1/1] w-full rounded-sm object-cover object-[70%_0]"
      />
    </div>
  );
}

export default function Home() {
  return (
    <>
      <HeroTemplate route="home" />
      <StatementSection />
      <ServiceTemplate type="section" />
      <PromiseSection />
    </>
  );
}
