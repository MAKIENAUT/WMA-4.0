import { dm_sans } from "@/lib/fonts";
import { cn } from "@/lib/utils";

type ServicesHeadingProps = {
  text: string;
  level?: "h1" | "h2" | "h3";
  className?: string;
};

export default function ServicesHeading({
  text,
  level = "h2",
  className,
}: ServicesHeadingProps) {
  const Tag = level;
  return (
    <Tag
      className={cn(
        `text-wma-darkTeal text-2xl font-bold ${dm_sans.className} md:text-3xl xl:text-4xl`,
        className
      )}
    >
      {text}
    </Tag>
  );
}
