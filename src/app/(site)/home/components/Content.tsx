"use client";
import Icon from "@/components/assests";
import { AnimatedList } from "@/components/ui/animated-list";
import React, { forwardRef, useRef, useState } from "react";

// Composable Leverage
export const ComposableLeverage = () => {
  return (
    <div className="w-full flex-1 h-full relative">
      <Image
        src="/images/point-os.png"
        alt="Point os"
        fill={true}
        className="object-cover"
      />
    </div>
  );
};
// Composable Leverage

const data = [
  {
    id: 0,
    title: "Composable Leverage",
    description:
      "Securely increase your exposure to boost your points farming by 5X",
    sideComponent: <ComposableLeverage />,
  },
  {
    id: 1,
    title: "Smart Accounts",
    description:
      "Setup automation like Compounding, Rebalancing, Stop loss, 1-click transactions, Health level calibration etc",
    sideComponent: <AnimatedListDemo />,
  },
  {
    id: 2,
    title: "1-Click Ape",
    description:
      "Intent-based bundling of cross-chain, multiple DeFi actions into a single transaction with ease",
    sideComponent: <AnimatedBeamDemo />,
  },
];

const Content = () => {
  const [content, setContent] = useState(0);
  return (
    <section className="px-6 my-10 lg:my-16 space-y-2 max-w-screen-2xl m-auto">
      <div
        className={`flex flex-col-reverse lg:flex-row p-1 items-center justify-between bg-midnight  rounded-3xl gap-4 `}
      >
        <div className="w-full lg:w-1/3 space-y-6 p-6">
          {data.map((item) => (
            <div
              key={item.id}
              className="space-y-4 border-b border-light/10 pb-4"
            >
              <div
                onClick={setContent.bind(null, item.id)}
                className="flex items-center justify-between gap-4 cursor-pointer"
              >
                <h3 className="text-2xl md:text-3xl font-dmSans matelic-text font-medium">
                  {item.title}
                </h3>
                <Icon
                  name={content === item.id ? "HiChevronUp" : "HiChevronDown"}
                  className="h-5 w-5 hover:text-light/60"
                />
              </div>
              <p
                className={`${
                  content === item.id
                    ? "block animate-accordion-down"
                    : "hidden animate-accordion-up"
                } text-light/60 transition-all duration-100 ease-linear`}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
        <div className="w-full lg:flex-1 bg-dark rounded-2xl h-96 overflow-hidden">
          {data[content].sideComponent}
        </div>
      </div>
    </section>
  );
};

// animate list component

import { AnimatedBeam } from "@/components/ui/animated-beam";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface Item {
  name: string;
  description: string;
  icon: string;
  color: string;
  time: string;
}

let notifications = [
  {
    name: "Payment received",
    description: "Magic UI",
    time: "15m ago",

    icon: "💸",
    color: "#00C9A7",
  },
  {
    name: "User signed up",
    description: "Magic UI",
    time: "10m ago",
    icon: "👤",
    color: "#FFB800",
  },
  {
    name: "New message",
    description: "Magic UI",
    time: "5m ago",
    icon: "💬",
    color: "#FF3D71",
  },
  {
    name: "New event",
    description: "Magic UI",
    time: "2m ago",
    icon: "🗞️",
    color: "#1E86FF",
  },
];

notifications = Array.from({ length: 10 }, () => notifications).flat();

const Notification = ({ name, description, icon, color, time }: Item) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full transform cursor-pointer overflow-hidden rounded-2xl p-2 md:p-4",
        // animation styles
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        // light styles
        "[box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        // dark styles
        "transform-gpu bg-transparent backdrop-blur-md [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex h-10 w-10 items-center justify-center rounded-2xl"
          style={{
            backgroundColor: color,
          }}
        >
          <span className="text-lg">{icon}</span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white ">
            <span className="text-sm sm:text-lg">{name}</span>
            <span className="mx-1">·</span>
            <span className="text-xs text-gray-500">{time}</span>
          </figcaption>
          <p className="text-sm font-normal dark:text-white/60">
            {description}
          </p>
        </div>
      </div>
    </figure>
  );
};

export function AnimatedListDemo() {
  return (
    <div className="relative w-full flex flex-col overflow-hidden bg-background p-3 md:p-6 shadow-lg">
      <AnimatedList>
        {notifications.map((item, idx) => (
          <Notification {...item} key={idx} />
        ))}
      </AnimatedList>
    </div>
  );
}

// animate list component

// animated beam
const Circle = React.forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(function Circle({ className, children }, ref) {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex h-12 w-12 items-center justify-center rounded-full border border-light/10 bg-midnight p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle"; // Assigning the display name

export function AnimatedBeamDemo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);

  return (
    <div className="max-w-screen-sm mx-auto flex items-center justify-center flex-shrink-0 flex-grow h-full">
      <div
        className="relative flex w-full items-center justify-center overflow-hidden rounded-lg bg-background p-3 md:p-10 md:shadow-xl"
        ref={containerRef}
      >
        <div className="flex h-full w-full flex-row items-stretch justify-between gap-10">
          <div className="flex flex-col justify-center">
            <Circle ref={div7Ref}>
              <Icon
                name="HiUser"
                className="h-6 w-6 text-light/80 hover:text-light/90"
              />
            </Circle>
          </div>
          <div className="flex flex-col justify-center">
            <Circle ref={div6Ref} className="h-16 w-16 overflow-hidden">
              <img
                src="/images/alloc8.png"
                alt="alloc8"
                className="h-20 w-20 max-w-none"
              />
            </Circle>
          </div>
          <div className="flex flex-col justify-center gap-2">
            <Circle ref={div1Ref}>
              <img
                src="/images/safe.svg"
                alt="alloc8"
                className="h-8 w-8 max-w-none"
              />
            </Circle>
            <Circle ref={div2Ref}>
              <img
                src="/images/mode.svg"
                alt="alloc8"
                className="h-8 w-8 max-w-none"
              />
            </Circle>
            <Circle ref={div3Ref}>
              <img
                src="/images/etherfi.png"
                alt="alloc8"
                className="h-8 w-8 max-w-none"
              />
            </Circle>
            <Circle ref={div4Ref}>
              <img
                src="/images/blast.svg"
                alt="alloc8"
                className="h-8 w-8 max-w-none"
              />
            </Circle>
            <Circle ref={div5Ref}>
              <div className="h-8 w-8 flex items-center justify-center aspect-square bg-light/80 rounded-full p-1">
                <img
                  src="/images/eigenlayer.png"
                  alt="alloc8"
                  className="h-5 w-5"
                />
              </div>
            </Circle>
          </div>
        </div>

        {/* AnimatedBeams */}
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div1Ref}
          toRef={div6Ref}
          duration={6}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div2Ref}
          toRef={div6Ref}
          duration={6}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div3Ref}
          toRef={div6Ref}
          duration={6}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div4Ref}
          toRef={div6Ref}
          duration={6}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div5Ref}
          toRef={div6Ref}
          duration={6}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div6Ref}
          toRef={div7Ref}
          duration={6}
        />
      </div>
    </div>
  );
}
// animated beam

export default Content;
