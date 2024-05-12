import Image from "next/image";
import Link from "next/link";
import React from "react";
import MobMenu from "./MobMenu";
import JoinWaitlist from "./Modals/JoinWaitlist";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <header className="w-full p-4 lg:p-6 max-w-screen-2xl mx-auto">
      <div className="relative bg-midnight rounded-2xl flex items-center justify-between gap-4">
        <div className="flex items-center px-4">
          <Link href="/">
            <Image
              src="/images/main green transparent-01.svg"
              width={80}
              height={50}
              className="object-contain"
              alt="Alloc8 Logo"
            />
          </Link>
        </div>
        <nav className="hidden lg:flex items-center gap-4 px-4 text-sm">
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

          <JoinWaitlist>
            <Button>Join Waitlist</Button>
          </JoinWaitlist>
        </nav>
        <MobMenu />
      </div>
    </header>
  );
};

export default Navbar;
