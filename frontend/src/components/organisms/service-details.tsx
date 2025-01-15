import React from "react";
import type { ServiceData } from "@/types/services";
import SectionTitle from "@/components/atoms/section-title";
import ProcessSteps from "@/components/molecules/process-steps";
import CallToAction from "@/components/molecules/call-to-action";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  ServiceCarouselDots,
} from "./carousel";
import ServiceWrapper from "./service-wrapper";
import ServiceContent from "./service-content";

interface ServiceProcessProps {
  serviceData: ServiceData;
  serviceName: string;
}

// Assuming ServiceData has this shape for processSteps
interface ProcessSteps {
  step: string | number; // Update your type definition if needed
  title: string;
  description: string;
}

export default function ServiceProcess({
  serviceData,
  serviceName,
}: ServiceProcessProps) {
  return (
    <ServiceWrapper>
      <ServiceContent>
        {serviceName === "temporary-employment" ? (
          <>
            <SectionTitle prefix="Process of:" title={serviceData.title} />
            <Carousel className="p-0 max-[420px]:w-[300px] md:p-0 lg:p-0">
              <ServiceCarouselDots data={serviceData.category!} />
              <CarouselContent>
                {serviceData.category!.map((service, index) => (
                  <CarouselItem key={index} className="flex flex-col">
                    <p className="lg:text-lg" key={index}>
                      {service.description}
                    </p>
                    {service.processSteps?.map((process, i) => (
                      <ProcessSteps
                        key={i}
                        stepNumber={
                          typeof process.step === "string"
                            ? parseInt(process.step, 10)
                            : process.step
                        }
                        title={process.title}
                        description={process.description}
                      />
                    ))}
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </>
        ) : (
          <>
            <SectionTitle prefix="Process of:" title={serviceData.title} />
            <p className="lg:text-lg">{serviceData.description}</p>
            {serviceData.processSteps && (
              <div className="flex flex-col gap-6 lg:gap-10">
                {serviceData.processSteps.map((step, index) => (
                  <ProcessSteps
                    key={index}
                    stepNumber={
                      typeof step.step === "string"
                        ? parseInt(step.step, 10)
                        : step.step
                    }
                    title={step.title}
                    description={step.description}
                  />
                ))}
              </div>
            )}
          </>
        )}
        <CallToAction>
          <CallToAction.Content>
            <CallToAction.Header>
              <CallToAction.Title>Got any questions?</CallToAction.Title>
              <CallToAction.Description>
                Feel free to reach out to us on FB messenger.
              </CallToAction.Description>
            </CallToAction.Header>
            <CallToAction.CTAButton link="#">
              Send questions
            </CallToAction.CTAButton>
          </CallToAction.Content>

          <CallToAction.Content>
            <CallToAction.Header>
              <CallToAction.Title>Ready to Get Started?</CallToAction.Title>
              <CallToAction.Description>
                Take the first step towards {serviceData.title.toLowerCase()} by
                applying now.
              </CallToAction.Description>
            </CallToAction.Header>
            <CallToAction.CTAButton link={`${serviceName}/form`}>
              Apply Now
            </CallToAction.CTAButton>
          </CallToAction.Content>
        </CallToAction>
      </ServiceContent>
    </ServiceWrapper>
  );
}
