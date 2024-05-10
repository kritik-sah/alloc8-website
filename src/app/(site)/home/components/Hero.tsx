import JoinWaitlist from "@/components/Modals/JoinWaitlist";
import Icon from "@/components/assests";
import { BorderBeam } from "@/components/ui/border-beam";
import { Button } from "@/components/ui/button";
import ShimmerButton from "@/components/ui/shimmer-button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:py-28 flex flex-col items-center justify-center gap-6">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-3xl sm:text-7xl text-primary font-inter font-extrabold">
            HyperFarm OS
            {/* <strong className="sm:block matelic-text"> Points OS </strong> */}
          </h1>

          <p className="mt-4 text-light/90 ">
            A revolutionary way to supercharge your points farming DeFi.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <JoinWaitlist>
              <Button className="relative rounded-full" size={"lg"}>
                Join Waitlist
                <BorderBeam size={250} duration={12} delay={9} />
              </Button>
            </JoinWaitlist>
          </div>
        </div>
        {/* <div className="relative rounded-2xl mt-10">
          <picture>
            <img
              src="/images/hero.svg"
              alt="Hero Image"
              className="w-full lg:w-[800px] max-w-screen-lg rounded-[inherit] object-contain shadow-lg"
            />
          </picture>

          <BorderBeam duration={12} delay={9} className="" />
        </div> */}
      </div>
    </section>
  );
};

export default Hero;
