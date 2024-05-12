import Icon from "@/components/assests";
import Image from "next/image";
import React from "react";

const Partners = () => {
  return (
    <div className="py-10 lg:py-16 px-4 lg:px-0 max-w-screen-xl mx-auto">
      <h2 className="text-center text-2xl lg:text-5xl font-dmSans matelic-text font-medium">
        Partner & Integration
      </h2>
      <div className="flex flex-wrap max-w-md mx-auto items-center justify-center gap-0 mt-10 lg:mt-16">
        <PartnersItem src="/images/eth.svg" alt="Ethereum" label="Ethereum" />
        <PartnersItem src="/images/safe.svg" alt="Safe" label="Safe" />
        <PartnersItem src="/images/aave.svg" alt="Aave" label="Aave" />
        <PartnersItem src="/images/morpho.svg" alt="Morpho" label="Morpho" />
        <PartnersItem src="/images/mkr.svg" alt="Maker" label="Maker" />
        <PartnersItem label="Coming Soon..." />
      </div>
    </div>
  );
};

export default Partners;

const PartnersItem = ({
  src,
  alt,
  isNew,
  label,
}: {
  src?: string;
  alt?: string;
  isNew?: boolean;
  label: string;
}) => {
  return (
    <div className="border border-light/20 flex flex-col items-center justify-between w-36 h-36 aspect-square p-1">
      <div className="h-4 w-full">
        {isNew && <p className="text-xs text-primary">new</p>}
      </div>
      <div className="h-16 w-16 relative">
        {src && alt ? (
          <Image
            src={src}
            fill={true}
            className="object-contain"
            loading="lazy"
            alt={alt}
          />
        ) : (
          <Icon name="HiSparkles" className="h-16 w-16" />
        )}
      </div>
      <div className="h-5">
        <p className="text-xs text-center text-light/70">{label}</p>
      </div>
    </div>
  );
};
