import { Metadata } from "next";
import { individual_services } from "../page";
import notFound from "@/app/not-found";
import ServiceWrapper from "@/components/organisms/service-wrapper";
import ServiceContent from "@/components/organisms/service-content";
import { orelega_one } from "@/lib/fonts";
import ServiceForm from "@/components/organisms/service-form";

interface FormPageProps {
  params: Promise<{
    serviceName:
      | "study-and-exchange"
      | "web-development"
      | "family-based"
      | "temporary-employment";
  }>;
}

export async function generateMetadata({
  params,
}: FormPageProps): Promise<Metadata> {
  const { serviceName } = await params;
  const service =
    individual_services[serviceName as keyof typeof individual_services];

  if (!service) {
    return { title: "Service not found" };
  }

  return {
    title: `${service.title} form | WMA`,
    description: service.description,
  };
}

export default async function FormPage({ params }: FormPageProps) {
  const { serviceName } = await params;
  const serviceData = individual_services[serviceName];

  if (!individual_services[serviceName]) {
    notFound();
  }

  return (
    <ServiceWrapper className="mt-8">
      <ServiceContent className="gap-4 md:gap-8">
        <h1
          className={`${orelega_one.className} text-wma-darkTeal text-4xl md:text-5xl xl:text-6xl`}
        >
          {serviceData.title} Form
        </h1>
        <ServiceForm />
      </ServiceContent>
    </ServiceWrapper>
  );
}
