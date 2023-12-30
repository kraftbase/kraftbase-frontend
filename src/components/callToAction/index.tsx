"use client";
import FlowerSvg from "@/svg/flower";
import React, { useEffect, useState } from "react";
import InfiniteRotation from "../animations/InfiniteRotation";

export default function CallToAction() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="mx-auto my-8 flex max-w-[70%] flex-col items-center justify-center gap-5 overflow-hidden rounded-2xl bg-royalblue p-5 px-8 dark:bg-fadedorange max-2xl:max-w-[80%] max-lg:py-16 max-md:max-w-[90%]">
      <div className="flex flex-row items-start justify-between gap-10 max-lg:flex-col-reverse max-lg:items-center max-lg:gap-14">
        <div className="flex flex-col gap-4">
          <div className="self-start font-righteous text-[50px] uppercase leading-tight text-white dark:text-black max-lg:text-center max-md:text-[35px]">
            Grow Your Business With Kraftbase
          </div>
          <div className="self-start font-righteous text-[20px] uppercase text-white dark:text-black max-lg:text-center max-md:text-[15px]">
            We can empower your business to thrive in the digital landscape.
            Whether you‘re looking to streamline your processes, enhance
            customer experiences, or drive growth through scalable software
            solutions, we‘ve got you covered.
          </div>
        </div>
        <div>
          <InfiniteRotation isClient={isClient}>
            <FlowerSvg
              classNames="w-[279px] max-xl:w-[259px] max-[500px]:w-[200px]"
              fill="#E7E51E"
            />
          </InfiniteRotation>
        </div>
      </div>
      <div className="self-start rounded-full bg-white px-10 py-3 font-righteous text-[30px] uppercase dark:bg-black dark:text-white max-lg:self-center">
        Let’s talk
      </div>
    </div>
  );
}
