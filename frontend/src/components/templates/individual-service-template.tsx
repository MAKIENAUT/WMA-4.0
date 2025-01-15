// ServiceTemplate.tsx
import React from "react";
import ServiceProcess from "../organisms/service-details";
import { notFound } from "next/navigation";
import { individual_services } from "@/app/(main)/services/[serviceName]/page";

interface ServiceTemplateProps {
  serviceName:
    | "study-and-exchange"
    | "web-development"
    | "family-based"
    | "temporary-employment";
}

export default function IndividualServiceTemplate({
  serviceName,
}: ServiceTemplateProps) {
  const serviceData = individual_services[serviceName];

  if (!serviceData) {
    notFound();
  }

  return <ServiceProcess serviceData={serviceData} serviceName={serviceName} />;
}
