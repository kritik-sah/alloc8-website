import JoinWaitlist from "@/components/Modals/JoinWaitlist";
import { BorderBeam } from "@/components/ui/border-beam";
import { Button } from "@/components/ui/button";
import React from "react";

const CallToAction = () => {
  return (
    <section className="my-10 lg:my-16 max-w-screen-2xl mx-auto">
      <div className="mx-auto max-w-xs text-center">
        <h2 className="text-center text-2xl lg:text-5xl font-dmSans matelic-text font-medium">
          Join Us
        </h2>

        <p className="mt-4 text-lg text-center text-light/90 px-4 ">
          AI accounts to maximise points & yields. Powered by Safe.
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
    </section>
  );
};

export default CallToAction;
