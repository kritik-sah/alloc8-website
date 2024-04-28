import Image from "next/image";
import React from "react";
import JoinWaitlist from "../Modals/JoinWaitlist";
import { Button } from "../ui/button";

const Hero = () => {
  return (
    <div className="w-full px-6 max-w-screen-2xl mx-auto">
      <div className="flex items-center justify-center">
        <a
          href="https://calendly.com/ayush-xtra"
          className="px-3 lg:px-6 py-2 bg-midnight/80 hover:bg-midnight text-xs lg:text-sm border border-light/10 rounded-full"
        >
          Alloc8 is now on Testnet —{" "}
          <span className="text-primary">Learn more -&gt;</span>
        </a>
      </div>
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-6 mt-12">
        <div className="w-full">
          <h1 className="text-4xl md:text-6xl font-bold font-dmSans mb-4">
            <span className="text-primary">Boosted Point Farming</span> across
            DeFi
          </h1>
          <p className="text-sm md:text-base mb-8">
            Maximize your points with non-custodial strategy vaults. Farm points
            & airdrops across multiple protocols effortlessly in one place.
            Powered by Safe.
          </p>
          <div className="flex flex-col md:flex-row md:items-center md:justify-start gap-6">
            <JoinWaitlist>
              <Button size={"lg"}>Join Waitlist</Button>
            </JoinWaitlist>

            <div className="flex items-center justify-start gap-2">
              Powered by
              <Image
                src="/images/safe.png"
                width={100}
                height={85}
                className="object-contain"
                loading="lazy"
                alt="Safe protcol"
              />
            </div>
          </div>
        </div>
        <div className="w-full">
          <Image
            src="/images/hero.svg"
            width={1300}
            height={880}
            alt="Alloc8 Logo"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
