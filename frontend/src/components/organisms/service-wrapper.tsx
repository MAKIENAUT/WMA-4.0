import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export default function ServiceWrapper({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("px-4 sm:px-8 xl:px-20", className)}>
      {children}
    </section>
  );
}
