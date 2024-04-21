import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

const Partners = () => {
  return (
    <div className="py-20">
      <h2 className="text-center text-5xl font-dmSans matelic-text font-medium">
        Trusted & Backed By
      </h2>
      <Marquee
        className=""
        pauseOnHover={true}
        gradient={true}
        gradientColor="#010101"
      >
        <PartnersLogo src="/images/alphawave.svg" alt="Alpha Wave Global" />
        <PartnersLogo src="/images/polygon.webp" alt="Polygon Ventures" />
        <PartnersLogo src="/images/longHash.png" alt="LonghashX" />
        <PartnersLogo src="/images/safe.png" alt="Safe" />
        <PartnersLogo
          src="/images/Aniket Jindal Founder, Biconomy.png"
          alt="Aniket Jindal, Cofounder, Biconomy"
        />
        <PartnersLogo
          src="/images/Sandeep Nailwal Founder, Polygon.png"
          alt="Sandeep Nailwal, Cofounder, Polygon"
        />
        <PartnersLogo
          src="/images/tarun-gupta.png"
          alt="Tarun Gupta, Founder, Coinshift"
        />
        <PartnersLogo
          src="/images/Harsh Rajat Founder, Push Protocol.png"
          alt="Harsh Rajat, Founder, Push Protocol"
        />
      </Marquee>
    </div>
  );
};

export default Partners;

const PartnersLogo = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <div className="flex items-center justify-center px-4">
      <Image
        src={src}
        width={180}
        height={45}
        className="object-contain"
        loading="lazy"
        alt={alt}
      />
    </div>
  );
};
