import React, { ReactNode } from "react";
import { Button } from "@/components/atoms/ui/button";
import Link from "next/link";

function Content({ children }: { children: ReactNode }) {
  return (
    <div className="inline-flex flex-col items-center gap-4 sm:gap-6">
      {children}
    </div>
  );
}

function Header({ children }: { children: ReactNode }) {
  return (
    <div className="inline-flex flex-col text-center sm:gap-2">{children}</div>
  );
}

function Title({ children }: { children: ReactNode }) {
  return (
    <h4 className="text-2xl font-bold text-teal-800 sm:text-3xl lg:text-4xl">
      {children}
    </h4>
  );
}
function Description({ children }: { children: ReactNode }) {
  return <p className="lg:text-lg">{children}</p>;
}

function CTAButton({ children, link }: { children: ReactNode; link: string }) {
  return (
    <Button asChild>
      <Link href={link}>{children}</Link>
    </Button>
  );
}
export default function CallToAction({ children }: { children: ReactNode }) {
  return (
    <footer className="flex flex-col gap-12 border-t border-gray-200 pt-6 sm:grid sm:grid-cols-2 sm:gap-8">
      {children}
    </footer>
  );
}

CallToAction.Title = Title;
CallToAction.Content = Content;
CallToAction.Header = Header;
CallToAction.Description = Description;
CallToAction.CTAButton = CTAButton;
