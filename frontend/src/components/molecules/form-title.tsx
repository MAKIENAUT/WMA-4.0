import { orelega_one } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { ComponentPropsWithoutRef, ReactNode } from "react";

const formTitleVariants = cva("", {
  variants: {
    variant: {
      default: `${orelega_one.className} text-3xl sm:text-4xl md:text-5xl`,
      application: "",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

interface FormTitleProps
  extends ComponentPropsWithoutRef<"h1">,
    VariantProps<typeof formTitleVariants> {
  children: ReactNode;
  className?: string;
}

export default function FormTitle({
  children,
  className,
  variant,
}: FormTitleProps) {
  return (
    <h1 className={cn(formTitleVariants({ variant, className }))}>
      {children}
    </h1>
  );
}
