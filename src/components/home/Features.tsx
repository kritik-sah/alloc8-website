import Image from "next/image";
import React from "react";

const Features = () => {
  return (
    <div id="features" className="w-full px-6 max-w-screen-2xl mx-auto py-10">
      <h2 className="text-center text-5xl font-dmSans matelic-text font-medium">
        What is Alloc8?
      </h2>
      <p className="text-center mt-4 max-w-sm mx-auto">
        Built atop Safe {`{Core}`}, Alloc8 is a revolution in the on-chain asset
        management industry.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-6 px-4">
        <FeatureCard
          src="/images/self-costudy.svg"
          title="Self Custody"
          description="On-click allocation of on-chain assets to a skilled manager without
          losing self-custody."
        />
        <FeatureCard
          src="/images/ControlledRisk.svg"
          title="Controlled Risk"
          description="Configure risk parameters like max drawdown, profit targets, whitelisted tokens/protocols etc."
        />
        <FeatureCard
          src="/images/defi-integration.svg"
          title="DeFi Integrations"
          description="Integrated with the most trusted DeFi protocols for seamless experience for the managers."
        />
      </div>
    </div>
  );
};

export default Features;

const FeatureCard = ({
  src,
  title,
  description,
}: {
  src: string;
  title: string;
  description: string;
}) => {
  return (
    <div className="group">
      <div className="relative w-full h-72 rounded-2xl overflow-hidden">
        <div className="absolute w-full h-full hidden group-hover:block card-overlay transition-all duration-200 ease-in-out z-10"></div>
        <Image
          src={src}
          alt={title}
          fill={true}
          className="object-cover"
          loading="lazy"
        />
      </div>
      <div className="py-6">
        <h3 className="text-3xl font-medium text-center matelic-text pb-2">
          {title}
        </h3>
        <p className="text-center text-light/70">{description}</p>
      </div>
    </div>
  );
};
