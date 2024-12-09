import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface HeaderGroupProps {
  children: ReactNode;
  className?: string;
}

export default function HeaderGroup({ children, className }: HeaderGroupProps) {
  return (
    <div
      className={cn(
        "mx-auto h-full w-full max-w-[1440px]",
        "sm:grid sm:grid-cols-[70%_auto] lg:grid-cols-[65%_auto] xl:grid-cols-[60%_auto]",
        className
      )}
    >
      {children}
    </div>
  );
}
