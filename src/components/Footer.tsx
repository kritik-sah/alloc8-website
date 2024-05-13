import Image from "next/image";
import React from "react";
import JoinWaitlist from "./Modals/JoinWaitlist";
import Icon from "./assests";

const Footer = () => {
  return (
    <div className="relative w-full max-w-screen-2xl mx-auto pt-[2px]">
      <Image
        src="/images/footer-grad-border.jpg"
        alt=""
        fill={true}
        className="object-cover rotate-180 absolute -top-[5px] rounded-b-3xl -z-10"
        loading="lazy"
      />
      <div className="w-full rounded-t-3xl bg-dark pt-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 py-4">
          <div className="flex items-center">
            <Image
              src="/images/main green transparent-01.svg"
              width={80}
              height={50}
              className="object-contain"
              alt="Alloc8 Logo"
            />
          </div>
          <div className="text-xs md:text-base flex items-center justify-end gap-4 px-6">
            {/* <JoinWaitlist>
              <span className="hover:text-primary">Join Waitlist</span>
            </JoinWaitlist> */}

            <a href="#Experience" className="hover:text-primary">
              Docs
            </a>
            <a
              href="https://twitter.com/alloc8_xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary"
            >
              <Icon name="FaXTwitter" className="h-5 w-5" />
            </a>
            <a
              href="https://github.com/devsxtra"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary"
            >
              <Icon name="FaGithub" className="h-5 w-5" />
            </a>
            {/* <a
              href="https://calendly.com/ayush-xtra"
              className="hover:text-primary"
            >
              Contact us
            </a> */}
          </div>
        </div>
        <div className="border-t border-light/30 p-4 lg:p-6">
          {/* <a
            href="https://calendly.com/ayush-xtra"
            className="px-4 lg:px-6 py-2 bg-midnight/80 hover:bg-midnight text-xs lg:text-sm border border-light/10 rounded-full"
          >
            Alloc8 is now on Testnet —{" "}
            <span className="text-primary">Learn more -&gt;</span>
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
