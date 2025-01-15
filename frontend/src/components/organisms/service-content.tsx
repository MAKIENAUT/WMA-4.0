import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export default function ServiceContent({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "mx-auto flex max-w-[1280px] flex-col gap-6 rounded-t-xl bg-white px-4 py-8 pb-32 sm:px-8 md:pb-40 lg:px-14 lg:py-10 lg:pb-44 xl:px-16 xl:py-12 xl:pb-60",
        className
      )}
    >
      {children}
    </div>
  );
}
