import React from "react";
import type { ServiceData } from "@/types/services";
import SectionTitle from "@/components/atoms/section-title";
import ProcessSteps from "@/components/molecules/process-steps";
import CallToAction from "@/components/molecules/call-to-action";

interface ServiceProcessProps {
  serviceData: ServiceData;
}

// Assuming ServiceData has this shape for processSteps
interface ProcessSteps {
  step: string | number; // Update your type definition if needed
  title: string;
  description: string;
}

export default function ServiceProcess({ serviceData }: ServiceProcessProps) {
  return (
    <section className="px-4 sm:px-8 xl:px-20">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-8 rounded-t-xl bg-white px-4 py-8 pb-32 sm:px-8 md:gap-10 md:pb-40 lg:px-14 lg:py-10 lg:pb-44 xl:px-16 xl:py-12 xl:pb-60">
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
        <CallToAction
          title="Ready to Get Started?"
          description={`Take the first step towards ${serviceData.title.toLowerCase()} by applying now.`}
          buttonText="Apply Now"
        />
      </div>
    </section>
  );
}
