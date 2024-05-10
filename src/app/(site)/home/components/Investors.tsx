import TextShimmer from "@/components/ui/animated-shiny-text";
import { MagicCard, MagicContainer } from "@/components/ui/magic-card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

const Investors = () => {
  return (
    <div className="py-10 lg:py-16 px-4 lg:px-0 max-w-screen-xl mx-auto">
      <h2 className="text-center text-5xl font-dmSans matelic-text font-medium">
        Trusted & Backed By
      </h2>
      <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 mt-10 lg:mt-16">
        <PartnersLogo src="/images/alphawave.svg" alt="Alpha Wave Global" />
        <PartnersLogo src="/images/polygon.png" alt="Polygon Ventures" />
        <PartnersLogo src="/images/longHash.png" alt="LonghashX" />
        <PartnersLogo src="/images/safe.png" alt="Safe" />
      </div>
      <div
        className={
          "flex flex-wrap items-center justify-center gap-4 md:gap-6 mt-10 lg:mt-16 md:px-4 hidden"
        }
      >
        <AnglesLogo
          src="/images/Aniket Jindal.png"
          alt="Aniket Jindal, Cofounder, Biconomy"
          name="Aniket Jindal"
          title="Cofounder, Biconomy"
        />
        <AnglesLogo
          src="/images/Sandeep Nailwal.jpeg"
          alt="Sandeep Nailwal, Cofounder, Polygon"
          name="Sandeep Nailwal"
          title="Cofounder, Polygon"
        />
        <AnglesLogo
          src="/images/tarun-gupta.jpeg"
          alt="Tarun Gupta, Founder, Coinshift"
          name="Tarun Gupta"
          title="Founder, Coinshift"
        />
        <AnglesLogo
          src="/images/Harsh Rajat.jpeg"
          alt="Harsh Rajat, Founder, Push Protocol"
          name="Harsh Rajat"
          title="Founder, Push Protocol"
        />
      </div>
    </div>
  );
};

export default Investors;

const AnglesLogo = ({
  src,
  alt,
  name,
  title,
}: {
  src: string;
  alt: string;
  name: string;
  title: string;
}) => {
  return (
    <div className="flex items-center justify-center">
      <div className="min-w-[200px] flex items-center justify-start md:justify-start gap-2 md:gap-3 border-2 border-primary rounded-full p-1">
        <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-full bg-yellow-400 overflow-hidden">
          <Image
            src={src}
            fill={true}
            className="object-cover"
            loading="lazy"
            alt={alt}
          />
        </div>
        <div className="flex flex-col items-start justify-center pr-4">
          <h3 className="text-primary text-sm lg:text-base font-medium">
            {name}
          </h3>
          <p className="text-xs md:text-sm">{title}</p>
        </div>
      </div>
    </div>
  );
};
const PartnersLogo = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <div className="relative w-32 h-16 lg:w-48 lg:h-16">
        <Image
          src={src}
          fill={true}
          className="object-contain"
          loading="lazy"
          alt={alt}
        />
      </div>
    </div>
  );
};
