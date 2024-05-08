import TextShimmer from "@/components/ui/animated-shiny-text";
import { MagicCard, MagicContainer } from "@/components/ui/magic-card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

const Partners = () => {
  return (
    <div className="py-20 px-4 lg:px-0 max-w-screen-xl m-auto">
      <h2 className="text-center text-5xl font-dmSans matelic-text font-medium">
        Trusted & Backed By
      </h2>
      <MagicContainer className={"grid grid-cols-2 md:grid-cols-4 gap-0 mt-10"}>
        <PartnersLogo
          src="/images/alphawave.svg"
          alt="Alpha Wave Global"
          type="✨ VC"
        />
        <PartnersLogo
          src="/images/polygon.png"
          alt="Polygon Ventures"
          type="✨ VC"
        />
        <PartnersLogo src="/images/longHash.png" alt="LonghashX" type="✨ VC" />
        <PartnersLogo src="/images/safe.png" alt="Safe" type="✨ Partner" />
        <PartnersLogo
          src="/images/Aniket Jindal Founder, Biconomy.png"
          alt="Aniket Jindal, Cofounder, Biconomy"
          type="✨ Angle"
        />
        <PartnersLogo
          src="/images/Sandeep Nailwal Founder, Polygon.png"
          alt="Sandeep Nailwal, Cofounder, Polygon"
          type="✨ Angle"
        />
        <PartnersLogo
          src="/images/tarun-gupta.png"
          alt="Tarun Gupta, Founder, Coinshift"
          type="✨ Angle"
        />
        <PartnersLogo
          src="/images/Harsh Rajat Founder, Push Protocol.png"
          alt="Harsh Rajat, Founder, Push Protocol"
          type="✨ Angle"
        />
      </MagicContainer>
    </div>
  );
};

export default Partners;

const PartnersLogo = ({
  src,
  alt,
  type,
}: {
  src: string;
  alt: string;
  type: string;
}) => {
  return (
    <MagicCard className=" cursor-pointer overflow-hidden shadow-2xl">
      <div className="flex flex-col items-center justify-center space-y-4">
        <div
          className={cn(
            "group rounded-full border border-light/10 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-light/10"
          )}
        >
          <TextShimmer className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:duration-300 hover:text-light/70">
            <span>{type}</span>
          </TextShimmer>
        </div>

        <div className="relative w-48 h-12">
          <Image
            src={src}
            fill={true}
            className="object-contain"
            loading="lazy"
            alt={alt}
          />
        </div>
      </div>
    </MagicCard>
  );
};
