import React from "react";
import Icon from "../assests";

const Docs = () => {
  return (
    <div id="Experience" className="w-full px-6 max-w-screen-2xl mx-auto py-10">
      <h2 className="text-center text-5xl font-dmSans matelic-text font-medium">
        Who is it for?
      </h2>
      <p className="text-center mt-4 max-w-sm mx-auto">
        Whether you&apos;re a Pro-manager, Degen, or a 1000x spotter, Alloc8
        offers you the most trustless and seamless way to create vaults & raise
        fund allocation.
      </p>
      <div className="flex flex-wrap w-full items-center justify-center gap-6 my-6 lg:px-4">
        <div className="w-full md:w-1/4 h-44 rounded-2xl p-4 bg-midnight border border-light/10 hover:border-light/30 transition-all ease-in-out duration-150 delay-75 space-y-4">
          <Icon
            name="FaHandHoldingDroplet"
            className="text-light/50 text-4xl"
          />
          <h3 className="text-xl lg:text-3xl matelic-text">
            Pro-Airdrop Farmers
          </h3>
        </div>
        <div className="w-full md:w-1/4 h-44 rounded-2xl p-4 bg-midnight border border-light/10 hover:border-light/30 transition-all ease-in-out duration-150 delay-75 space-y-4">
          <Icon name="FaHandSparkles" className="text-light/50 text-4xl" />
          <h3 className="text-xl lg:text-3xl matelic-text">
            Influencer Traders (Social Trading)
          </h3>
        </div>
        <div className="w-full md:w-1/4 h-44 rounded-2xl p-4 bg-midnight border border-light/10 hover:border-light/30 transition-all ease-in-out duration-150 delay-75 space-y-4">
          <Icon name="FaFireFlameCurved" className="text-light/50 text-4xl" />
          <h3 className="text-xl lg:text-3xl matelic-text">
            Yield Optimisation Strategies
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Docs;
