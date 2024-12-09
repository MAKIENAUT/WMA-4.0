import FooterLogoItem from "../atoms/footer-logo-item";

export default function NavbarLogos() {
  return (
    <div className="grid grid-cols-2 gap-4 px-4 sm:order-last sm:basis-full">
      {LOGOS.map((logo) => (
        <FooterLogoItem
          key={logo.src}
          alt={logo.alt}
          src={logo.src}
          className={logo.className}
        />
      ))}
    </div>
  );
}

const LOGOS = [
  { alt: "WMC logo", src: "/wmc-logo.png", className: "" },
  { alt: "USCIS logo", src: "/USCIS-logo.png", className: "bg-white p-2" },
  { alt: "DepEd logo", src: "/DepEd-logo.png", className: "bg-white p-2" },
  { alt: "DOL logo", src: "/DOL-logo.svg", className: "" },
];
