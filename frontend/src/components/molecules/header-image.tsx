import Image from "next/image";
import { cn } from "@/lib/utils";

interface HeaderImageProps {
  imageSrc: string;
  alt: string;
  className?: string;
  imageClassName?: string;
}

export default function HeaderImage({
  imageSrc,
  alt,
  className,
  imageClassName,
}: HeaderImageProps) {
  return (
    <div
      className={cn(
        "relative right-[5.5rem] hidden h-full max-h-[256px] w-[350px]",
        "sm:block",
        "md:right-[7.5rem] md:max-h-[308px] md:w-[480px]",
        "lg:right-[8.5rem] lg:max-h-[376px] lg:w-[630px]",
        "xl:right-[9rem] xl:max-h-[488px] xl:w-[780px]",
        "min-[1440px]:w-[900px]",
        className
      )}
    >
      <Image
        src={imageSrc}
        alt={alt}
        width={2000}
        height={2000}
        className={cn("size-full object-cover object-center", imageClassName)}
      />
    </div>
  );
}
