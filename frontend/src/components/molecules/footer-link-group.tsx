import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export default function FooterLinkGroup({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={cn("flex flex-col gap-4", className)}>{children}</div>;
}
