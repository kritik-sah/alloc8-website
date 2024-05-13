"use client";
import React, { useState } from "react";
import JoinWaitlist from "./Modals/JoinWaitlist";
import Icon from "./assests";
import { Button } from "./ui/button";

const MobMenu = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button
        onClick={() => setOpen((prev) => !prev)}
        size={"icon"}
        className="lg:hidden mx-4"
        variant={"ghost"}
      >
        <Icon name="HiBars3" className="text-xl text-light/70" />
      </Button>
      <div
        className={`absolute bg-midnight/90 border border-light/10 ${
          open ? "top-[103%] block" : "-top-[100000px] hidden"
        } w-full rounded-lg p-4 transition-all ease-in-out duration-150`}
      >
        <div className="flex flex-col gap-4">
          <JoinWaitlist>
            <span className="hover:text-primary">Join Waitlist</span>
          </JoinWaitlist>
          <a href="#features" className="hover:text-primary">
            Features
          </a>

          <a
            href="https://twitter.com/alloc8_xyz"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary"
          >
            Twitter
          </a>
        </div>
      </div>
    </>
  );
};

export default MobMenu;
