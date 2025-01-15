import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { ComponentPropsWithoutRef, ReactNode } from "react";

const formContentVariants = cva("flex w-full flex-col", {
  variants: {
    variant: {
      default: "items-center gap-2 sm:gap-4 md:gap-6",
      application: "",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

interface FormContentProps
  extends ComponentPropsWithoutRef<"div">,
    VariantProps<typeof formContentVariants> {
  children: ReactNode;
  className?: string;
}

export default function FormContent({
  children,
  className,
  variant,
}: FormContentProps) {
  return (
    <div className={cn(formContentVariants({ variant, className }))}>
      {children}
    </div>
  );
}
