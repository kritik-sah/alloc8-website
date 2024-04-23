import Image from "next/image";
import Link from "next/link";
import React from "react";
import MobMenu from "./MobMenu";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <header className="w-full p-4 lg:p-6 max-w-screen-2xl mx-auto">
      <div className="relative bg-midnight rounded-2xl flex items-center justify-between gap-4">
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/images/alloc8-logo.png"
              width={110}
              height={73}
              alt="Alloc8 Logo"
            />
          </Link>
        </div>
        <nav className="hidden lg:flex items-center gap-4 px-4 text-sm">
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
        </nav>
        <MobMenu />
      </div>
    </header>
  );
};

export default Navbar;
