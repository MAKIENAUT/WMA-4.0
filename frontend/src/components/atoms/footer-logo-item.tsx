import Image from "next/image";
import { cn } from "@/lib/utils";

type FooterLogoItemProps = {
  alt: string;
  src: string;
  className: string;
};

export default function FooterLogoItem({
  alt,
  src,
  className,
}: FooterLogoItemProps) {
  return (
    <div className="flex items-center justify-center">
      <Image
        alt={alt}
        src={src}
        width={1000}
        height={1000}
        className={cn("h-auto max-h-28 w-auto xl:max-w-64", className)}
      />
    </div>
  );
}
