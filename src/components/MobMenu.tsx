"use client";
import React, { useState } from "react";
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
          <a href="/" className="hover:text-primary">
            Join Waitlist
          </a>
          <a href="#features" className="hover:text-primary">
            Features
          </a>
          <a href="#Experience" className="hover:text-primary">
            Docs
          </a>
          <a
            href="https://twitter.com/alloc8_xyz"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary"
          >
            Twitter
          </a>
          <a href="https://calendly.com/ayush-xtra" className="">
            <Button>Contact us</Button>
          </a>
        </div>
      </div>
    </>
  );
};

export default MobMenu;
