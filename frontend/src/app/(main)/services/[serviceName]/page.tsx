import { Metadata } from "next";
import HeroTemplate from "@/components/templates/hero-template";
import ServiceTemplate, {
  immigrationServices,
} from "@/components/templates/ServiceTemplate";
import { notFound } from "next/navigation";
import heroConfigs from "@/data/hero-config.json";

// Adjusting the Params and SearchParams to be Promises
type Props = {
  params: Promise<{ serviceName: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const service = immigrationServices[resolvedParams.serviceName];

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: service.title,
    description: service.description,
  };
}

export default async function ServicePage({ params }: Props) {
  const resolvedParams = await params;
  const { serviceName } = resolvedParams;

  // Check if service exists
  if (!immigrationServices[serviceName]) {
    notFound();
  }

  // Type guard for valid hero route
  const isValidHeroRoute = (
    route: string
  ): route is keyof typeof heroConfigs.hero_config => {
    return route in heroConfigs.hero_config;
  };

  // Set the hero route, defaulting to 'home' if not found
  const heroRoute = isValidHeroRoute(serviceName) ? serviceName : "home";

  return (
    <>
      <HeroTemplate route={heroRoute} />
      <ServiceTemplate serviceName={serviceName} />
    </>
  );
}

// Generate static paths for all known services
export async function generateStaticParams() {
  return Object.keys(immigrationServices).map((service) => ({
    serviceName: service,
  }));
}
