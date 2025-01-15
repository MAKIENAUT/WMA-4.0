import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { ComponentPropsWithoutRef, ReactNode } from "react";

const InputGroupVariants = cva("flex flex-col gap-4", {
  variants: {
    variant: {
      default: "",
      application: "md:grid md:grid-cols-2",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

interface InputGroupProps
  extends ComponentPropsWithoutRef<"div">,
    VariantProps<typeof InputGroupVariants> {
  children: ReactNode;
  className?: string;
}

export default function InputGroup({
  children,
  variant,
  className,
}: InputGroupProps) {
  return (
    <div className={cn(InputGroupVariants({ variant, className }))}>
      {children}
    </div>
  );
}
