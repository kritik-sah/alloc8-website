"use client";
import Icon from "@/components/assests";
import React, { ReactNode } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const Roadmap = () => {
  var settings = {
    className: "center",
    centerMode: true,
    arrows: false,
    infinite: true,
    centerPadding: "250px",
    slidesToShow: 2,
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
          centerPadding: "150px",
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerPadding: "100px",
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerPadding: "50px",
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "50px",
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "50px",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "10px",
        },
      },
    ],
  };
  return (
    <div className="my-10 lg:my-16 max-w-screen-2xl mx-auto">
      <h2 className="text-center text-5xl font-dmSans matelic-text font-medium">
        Alloc8 Roadmap
      </h2>

      <div className="slider-container mt-10 lg:mt-16 p-4 lg:p-0">
        <Slider {...settings}>
          <div className="p-2 sm:p-4 md:pr-8 lg:pr-20">
            <h3 className="text-xl font-semibold">
              Self-liquidate a Compound (ETH/DAI) position
            </h3>
            <div className="space-y-1 my-6">
              <RoadmapItem
                icon={<Icon name="HiUser" className="h-5 w-5" />}
                title="points"
                description="Join waitlist"
              />
              <RoadmapItem
                icon={<Icon name="HiUser" className="h-5 w-5" />}
                title="points"
                description="Join waitlist"
              />
              <RoadmapItem
                icon={<Icon name="HiUser" className="h-5 w-5" />}
                title="points"
                description="Join waitlist"
              />
              <RoadmapItem
                icon={<Icon name="HiUser" className="h-5 w-5" />}
                title="points"
                description="Join waitlist"
              />
              <RoadmapItem
                icon={<Icon name="HiUser" className="h-5 w-5" />}
                title="points"
                description="Join waitlist"
              />
            </div>
          </div>
          <div className="p-2 sm:p-4 md:pr-8 lg:pr-20">
            <h3 className="text-xl font-semibold">
              Self-liquidate a Compound (ETH/DAI) position
            </h3>
            <div className="space-y-1 my-6">
              <RoadmapItem
                icon={<Icon name="HiUser" className="h-5 w-5" />}
                title="points"
                description="Join waitlist"
              />
              <RoadmapItem
                icon={<Icon name="HiUser" className="h-5 w-5" />}
                title="points"
                description="Join waitlist"
              />
              <RoadmapItem
                icon={<Icon name="HiUser" className="h-5 w-5" />}
                title="points"
                description="Join waitlist"
              />
              <RoadmapItem
                icon={<Icon name="HiUser" className="h-5 w-5" />}
                title="points"
                description="Join waitlist"
              />
              <RoadmapItem
                icon={<Icon name="HiUser" className="h-5 w-5" />}
                title="points"
                description="Join waitlist"
              />
            </div>
          </div>
          <div className="p-2 sm:p-4 md:pr-8 lg:pr-20">
            <h3 className="text-xl font-semibold">
              Self-liquidate a Compound (ETH/DAI) position
            </h3>
            <div className="space-y-1 my-6">
              <RoadmapItem
                icon={<Icon name="HiUser" className="h-5 w-5" />}
                title="points"
                description="Join waitlist"
              />
              <RoadmapItem
                icon={<Icon name="HiUser" className="h-5 w-5" />}
                title="points"
                description="Join waitlist"
              />
              <RoadmapItem
                icon={<Icon name="HiUser" className="h-5 w-5" />}
                title="points"
                description="Join waitlist"
              />
              <RoadmapItem
                icon={<Icon name="HiUser" className="h-5 w-5" />}
                title="points"
                description="Join waitlist"
              />
              <RoadmapItem
                icon={<Icon name="HiUser" className="h-5 w-5" />}
                title="points"
                description="Join waitlist"
              />
            </div>
          </div>
          <div className="p-2 sm:p-4 md:pr-8 lg:pr-20">
            <h3 className="text-xl font-semibold">
              Self-liquidate a Compound (ETH/DAI) position
            </h3>
            <div className="space-y-1 my-6">
              <RoadmapItem
                icon={<Icon name="HiUser" className="h-5 w-5" />}
                title="points"
                description="Join waitlist"
              />
              <RoadmapItem
                icon={<Icon name="HiUser" className="h-5 w-5" />}
                title="points"
                description="Join waitlist"
              />
              <RoadmapItem
                icon={<Icon name="HiUser" className="h-5 w-5" />}
                title="points"
                description="Join waitlist"
              />
              <RoadmapItem
                icon={<Icon name="HiUser" className="h-5 w-5" />}
                title="points"
                description="Join waitlist"
              />
              <RoadmapItem
                icon={<Icon name="HiUser" className="h-5 w-5" />}
                title="points"
                description="Join waitlist"
              />
            </div>
          </div>
          <div className="p-2 sm:p-4 md:pr-8 lg:pr-20">
            <h3 className="text-xl font-semibold">
              Self-liquidate a Compound (ETH/DAI) position
            </h3>
            <div className="space-y-1 my-6">
              <RoadmapItem
                icon={<Icon name="HiUser" className="h-5 w-5" />}
                title="points"
                description="Join waitlist"
              />
              <RoadmapItem
                icon={<Icon name="HiUser" className="h-5 w-5" />}
                title="points"
                description="Join waitlist"
              />
              <RoadmapItem
                icon={<Icon name="HiUser" className="h-5 w-5" />}
                title="points"
                description="Join waitlist"
              />
              <RoadmapItem
                icon={<Icon name="HiUser" className="h-5 w-5" />}
                title="points"
                description="Join waitlist"
              />
              <RoadmapItem
                icon={<Icon name="HiUser" className="h-5 w-5" />}
                title="points"
                description="Join waitlist"
              />
            </div>
          </div>
          <div className="p-2 sm:p-4 md:pr-8 lg:pr-20">
            <h3 className="text-xl font-semibold">
              Self-liquidate a Compound (ETH/DAI) position
            </h3>
            <div className="space-y-1 my-6">
              <RoadmapItem
                icon={<Icon name="HiUser" className="h-5 w-5" />}
                title="points"
                description="Join waitlist"
              />
              <RoadmapItem
                icon={<Icon name="HiUser" className="h-5 w-5" />}
                title="points"
                description="Join waitlist"
              />
              <RoadmapItem
                icon={<Icon name="HiUser" className="h-5 w-5" />}
                title="points"
                description="Join waitlist"
              />
              <RoadmapItem
                icon={<Icon name="HiUser" className="h-5 w-5" />}
                title="points"
                description="Join waitlist"
              />
              <RoadmapItem
                icon={<Icon name="HiUser" className="h-5 w-5" />}
                title="points"
                description="Join waitlist"
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
  title: string;
  description: string;
}) => {
  return (
    <div className="flex items-center justify-start gap-4 bg-gradient-to-r from-primary/20 via-midnight/60 to-midnight/60 border border-light/30 p-3">
      {icon}
      <span className="bg-midnight border border-light/10 py-2 px-4">
        {title}
      </span>
      <p>{description}</p>
    </div>
  );
};
