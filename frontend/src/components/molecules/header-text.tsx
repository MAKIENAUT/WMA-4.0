import { orelega_one } from "@/lib/fonts";
import { cn } from "@/lib/utils";

interface HeaderTextProps {
  title: string;
  highlightedText: string;
  className?: string;
  titleClassName?: string;
  highlightClassName?: string;
  backgroundGradient?: string;
  fontFamily?: string;
}

export default function HeaderText({
  title,
  highlightedText,
  className,
  titleClassName,
  highlightClassName = "text-wma-gold",
}: HeaderTextProps) {
  return (
    <div
      className={cn(
        "relative z-10",
        "px-6 py-10",
        `sm:from-wma-darkTeal sm:to-wma-teal sm:bg-gradient-to-r sm:px-8 sm:py-14 sm:[clip-path:polygon(0_0,100%_0,86%_100%,0%_100%)]`,
        "md:py-16",
        "lg:px-12 lg:py-20",
        "xl:px-20 xl:py-28",
        className
      )}
    >
      <h1
        className={cn(
          orelega_one.className,
          "max-w-[400px] text-4xl",
          "sm:text-5xl",
          "md:max-w-[420px] md:text-6xl",
          "lg:max-w-[500px] lg:text-7xl",
          "xl:max-w-[640px] xl:text-[5.5rem]",
          "text-white",
          titleClassName
        )}
      >
        {title} <span className={highlightClassName}>{highlightedText}</span>
      </h1>
    </div>
  );
}
