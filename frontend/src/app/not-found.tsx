import { Button } from "@/components/atoms/ui/button";
import { orelega_one } from "@/lib/fonts";
import { AlertCircle, ChevronLeft } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Not Found | WMA",
  description: "",
};

export default function NotFound() {
  return (
    <section className="text-wma-darkTeal mx-auto flex h-screen max-w-[768px] flex-col items-center justify-center px-4 sm:px-8 lg:px-0">
      <AlertCircle className="size-12 md:mb-4 md:size-20" />
      <h3
        className={`${orelega_one.className} mb-4 text-center text-4xl md:text-5xl lg:mb-8 lg:text-6xl`}
      >
        Sorry, we couldn&apos;t find that page
      </h3>
      <Button asChild variant="link" className="gap-0">
        <Link href="/">
          <ChevronLeft />
          Go back home
        </Link>
      </Button>
    </section>
  );
}
