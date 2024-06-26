"use client";
import Icon from "@/components/assests";
import React, { ReactNode } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const Roadmap = () => {
  var settings = {
    // centerMode: true,
    arrows: false,
    // centerPadding: "150px",
    slidesToShow: 3,
    infinite: false,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          // centerPadding: "150px",
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          // centerPadding: "100px",
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          // centerPadding: "50px",
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          // centerPadding: "50px",
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          // centerPadding: "50px",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          // centerPadding: "10px",
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          // centerPadding: "1px",
        },
      },
    ],
  };
  return (
    <div className="my-10 lg:my-16 max-w-screen-xl mx-auto">
      <h2 className="text-center text-2xl lg:text-5xl font-dmSans matelic-text font-medium">
        Technical Roadmap
      </h2>

      <div className="slider-container mt-10 lg:mt-16 p-4 lg:p-0">
        <Slider {...settings}>
          <div className="p-2 sm:p-4 md:pr-8 lg:pr-10 ">
            <h3 className="text-xl font-semibold">Q2/2024-Q3/2024</h3>
            <p className="text-sm text-primary/80 mt-1">Going LIVE</p>
            <div className="min-h-[340px] bg-gradient-to-r from-primary/20 via-midnight/60 to-midnight/60 border border-light/30 rounded-2xl space-y-1 p-4 space-y-6 my-6">
              <RoadmapItem
                icon={
                  <Icon
                    name="HiCheckBadge"
                    className="text-primary h-5 w-5 flex-shrink-0"
                  />
                }
                description="Beta Launch"
              />
              <RoadmapItem
                icon={
                  <Icon
                    name="HiOutlineBadgeCheck"
                    className="h-5 w-5 flex-shrink-0"
                  />
                }
                description="Points Maximising strategies"
              />
              <RoadmapItem
                icon={
                  <Icon
                    name="HiOutlineBadgeCheck"
                    className="h-5 w-5 flex-shrink-0"
                  />
                }
                description="Invite-only Mainnet launch"
              />
              <RoadmapItem
                icon={
                  <Icon
                    name="HiOutlineBadgeCheck"
                    className="h-5 w-5 flex-shrink-0"
                  />
                }
                description="Bots for Automation"
              />
              <RoadmapItem
                icon={
                  <Icon
                    name="HiOutlineBadgeCheck"
                    className="h-5 w-5 flex-shrink-0"
                  />
                }
                description="Full Audit & Public launch"
              />
              <RoadmapItem
                icon={
                  <Icon
                    name="HiOutlineBadgeCheck"
                    className="h-5 w-5 flex-shrink-0"
                  />
                }
                description="Fee sharing mechanism"
              />
            </div>
          </div>
          <div className="p-2 sm:p-4 md:pr-8 lg:pr-10 ">
            <h3 className="text-xl font-semibold">Q4/2024-Q1/2025</h3>
            <p className="text-sm text-primary/80 mt-1">1-Click with Intents</p>
            <div className="min-h-[340px] bg-gradient-to-r from-primary/20 via-midnight/60 to-midnight/60 border border-light/30 rounded-2xl space-y-1 p-4 space-y-6 my-6">
              <RoadmapItem
                icon={
                  <Icon
                    name="HiOutlineBadgeCheck"
                    className="h-5 w-5 flex-shrink-0"
                  />
                }
                description="EVM chains expansion"
              />
              <RoadmapItem
                icon={
                  <Icon
                    name="HiOutlineBadgeCheck"
                    className="h-5 w-5 flex-shrink-0"
                  />
                }
                description="Partnership with intent-centric infra"
              />
              <RoadmapItem
                icon={
                  <Icon
                    name="HiOutlineBadgeCheck"
                    className="h-5 w-5 flex-shrink-0"
                  />
                }
                description="Introduce the “1-Click Ape” mechanism"
              />
              <RoadmapItem
                icon={
                  <Icon
                    name="HiOutlineBadgeCheck"
                    className="h-5 w-5 flex-shrink-0"
                  />
                }
                description="Yield Maximising vaults (Looping, Interest Arbitrage)"
              />

              <RoadmapItem
                icon={
                  <Icon
                    name="HiOutlineBadgeCheck"
                    className="h-5 w-5 flex-shrink-0"
                  />
                }
                description="Bitcoin ecosystem expansion"
              />
            </div>
          </div>
          <div className="p-2 sm:p-4 md:pr-8 lg:pr-10 ">
            <h3 className="text-xl font-semibold">Q2/2025-Q3/2025</h3>
            <p className="text-sm text-primary/80 mt-1">
              Interoperability & AI Agents
            </p>
            <div className="min-h-[340px] bg-gradient-to-r from-primary/20 via-midnight/60 to-midnight/60 border border-light/30 rounded-2xl space-y-1 p-4 space-y-6 my-6">
              <RoadmapItem
                icon={
                  <Icon
                    name="HiOutlineBadgeCheck"
                    className="h-5 w-5 flex-shrink-0"
                  />
                }
                description="Aptos & Solana ecosystem expansion"
              />
              <RoadmapItem
                icon={
                  <Icon
                    name="HiOutlineBadgeCheck"
                    className="h-5 w-5 flex-shrink-0"
                  />
                }
                description="Introduce AI Agents for execution & optimization"
              />
              <RoadmapItem
                icon={
                  <Icon
                    name="HiOutlineBadgeCheck"
                    className="h-5 w-5 flex-shrink-0"
                  />
                }
                description="Automation for Cross-chain Rebalancing & Arbitrage"
              />
              <RoadmapItem
                icon={
                  <Icon
                    name="HiOutlineBadgeCheck"
                    className="h-5 w-5 flex-shrink-0"
                  />
                }
                description="DAO setup & framework for DAO-functioning"
              />
              <RoadmapItem
                icon={
                  <Icon
                    name="HiOutlineBadgeCheck"
                    className="h-5 w-5 flex-shrink-0"
                  />
                }
                description="Introduce Launchpad for projects & DAOs"
              />
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Roadmap;

const RoadmapItem = ({
  icon,
  title,
  description,
}: {
  icon: ReactNode;
  title?: string;
  description: string;
}) => {
  return (
    <div className="flex items-center justify-start gap-4">
      {icon}
      {title && (
        <span className="bg-midnight border border-light/10 py-2 px-4">
          {title}
        </span>
      )}
      <p className="">{description}</p>
    </div>
  );
};
