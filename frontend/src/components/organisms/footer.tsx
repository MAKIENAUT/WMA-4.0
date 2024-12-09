import Image from "next/image";
import FooterLogos from "../molecules/footer-logos";
import FooterLink from "../molecules/footer-link";
import FooterGroup from "../molecules/footer-group";
import FooterLinkGroup from "../molecules/footer-link-group";

export default function Footer() {
  return (
    <footer className="divide-wma-teal bg-wma-footer flex w-screen flex-col divide-y px-4 text-white sm:px-8 xl:px-20">
      <FooterGroup className="pb-8">
        <FooterLogos />
        <div className="flex flex-col gap-4 sm:basis-full">
          <Image
            src="/wma-logo.png"
            width={1000}
            height={1000}
            className="h-auto w-full max-w-[30rem]"
            alt="WMA logo"
          />
          <p className="sm:text-sm md:text-base">
            West Migration Agency LLC (“WMA”) is the parent company of West
            Migration Consultancy Inc.,(“WMC”) based in the Philippines. WMC and
            its state affiliates advance the corporation&apos;s interest to
            engage in immigration consultancy by providing expert advice to
            prospective clients for the USA through qualification assistance,
            processing of applications, and other related documents.
          </p>
        </div>
      </FooterGroup>

      <FooterGroup className="py-8 sm:gap-16">
        <FooterLinkGroup>
          <FooterLink url="/news" title="News" />
          <FooterLink url="/services" title="Services" />
          <FooterLink url="/about-us" title="About Us" />
          <FooterLink url="#" title="Administrator" />
        </FooterLinkGroup>
        <FooterLinkGroup>
          <FooterLink url="/services/family-based" title="Family Based" />
          <FooterLink
            url="/services/study-and-exchange"
            title="Study And Exchange"
          />
          <FooterLink
            url="/services/temporary-employment"
            title="Temporary Employment"
          />
        </FooterLinkGroup>
        <FooterLinkGroup>
          <FooterLink url="#" title="Facebook" />
          <FooterLink url="#" title="Instagram" />
        </FooterLinkGroup>
      </FooterGroup>

      <FooterGroup className="items-center justify-center py-8">
        <p className="text-center text-sm">
          West Migration Agency LLC © {new Date().getFullYear()}. All Rights
          Reserved. Design & Development by OrbWeaver
        </p>
      </FooterGroup>
    </footer>
  );
}
