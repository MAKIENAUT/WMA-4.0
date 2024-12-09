import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export default function FooterGroup({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col gap-8 py-16 sm:flex-row", className)}>
      {children}
    </div>
  );
}
