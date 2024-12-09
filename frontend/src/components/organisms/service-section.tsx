import { ServiceProps } from "@/types/service-type";
import ServiceCard from "../molecules/service-card";
import { orelega_one } from "@/lib/fonts";

type Service = {
  title: string;
  description: string;
  imageUrl: string;
  buttonLabel: string;
  route: string;
};

type ServiceSectionProps = {
  services: Service[];
  type: ServiceProps;
};

export default function ServiceSection({
  services,
  type,
}: ServiceSectionProps) {
  return (
    <section
      className={
        type === "section"
          ? "mb-32 px-4 sm:px-8 xl:px-20"
          : "px-4 pt-10 sm:px-8 md:pt-12 xl:px-20"
      }
    >
      <div
        className={
          type === "section"
            ? "mx-auto flex max-w-[1280px] flex-col gap-6 rounded-xl bg-white px-4 py-8 sm:px-8 md:gap-10 lg:px-14 lg:py-10 xl:px-16 xl:py-12"
            : "mx-auto flex max-w-[1280px] flex-col gap-6 rounded-t-xl bg-white px-4 py-8 pb-32 sm:px-8 md:gap-10 md:pb-40 lg:px-14 lg:py-10 lg:pb-44 xl:px-16 xl:py-12 xl:pb-60"
        }
      >
        <h2
          className={`${orelega_one.className} text-4xl text-black md:text-5xl xl:text-6xl`}
        >
          Our Services
        </h2>
        <div className="flex flex-col gap-8 md:gap-10 lg:gap-12">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              imageUrl={service.imageUrl}
              buttonLabel={service.buttonLabel}
              route={service.route}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
