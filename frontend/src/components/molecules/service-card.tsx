import { Button } from "@/components/atoms/ui/button";
import ServicesDescription from "../atoms/services-description";
import ServicesHeading from "../atoms/services-heading";
import ServicesImage from "../atoms/services-image";
import Link from "next/link";

type ServiceCardProps = {
  title: string;
  description: string;
  imageUrl: string;
  buttonLabel: string;
  route: string;
};

export default function ServiceCard({
  title,
  description,
  imageUrl,
  buttonLabel,
  route,
}: ServiceCardProps) {
  return (
    <div className="flex flex-col gap-2">
      <ServicesHeading text={title} level="h2" />
      <div className="from-wma-darkTeal to-wma-teal flex flex-col rounded-lg bg-gradient-to-r shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] sm:flex-row">
        <ServicesImage src={imageUrl} alt={title} />
        <div className="flex size-full flex-col gap-4 p-4 sm:gap-8 sm:overflow-y-auto lg:p-6">
          <ServicesDescription text={description} />
          <Button variant="default" className={`self-start`} asChild>
            <Link href={route}>{buttonLabel}</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
