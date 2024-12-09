import { cn } from "@/lib/utils";
import HeaderGroup from "../molecules/header-group";
import HeaderImage from "../molecules/header-image";
import HeaderText from "../molecules/header-text";
import hero_configs from "@/data/hero-config.json";

export interface HeroConfig {
  title: string;
  highlightedText: string;
  imageSrc: string;
  imageAlt: string;
}

interface HeroTemplateProps {
  route: keyof typeof hero_configs.hero_config;
  className?: string;
  customConfig?: HeroConfig;
}

export default function HeroTemplate({
  route,
  className,
  customConfig,
}: HeroTemplateProps) {
  const config =
    customConfig ||
    hero_configs.hero_config[route] ||
    hero_configs.hero_config.home;

  return (
    <header
      className={cn(
        "from-wma-darkTeal to-wma-teal sm:bg-wma-darkTeal relative flex min-h-[200px] items-center overflow-hidden bg-gradient-to-r",
        "mb-8 sm:mb-10 md:mb-12 lg:mb-16",
        className
      )}
    >
      <HeaderGroup>
        <HeaderText
          title={config.title}
          highlightedText={config.highlightedText}
        />
        <HeaderImage imageSrc={config.imageSrc} alt={config.imageAlt} />
      </HeaderGroup>
    </header>
  );
}
