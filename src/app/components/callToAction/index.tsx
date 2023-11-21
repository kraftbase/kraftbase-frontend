import FlowerSvg from "@/svg/flower";
import React from "react";

export default function CallToAction() {
  return (
    <div className="flex flex-col items-center justify-center max-w-[70%] max-2xl:max-w-[80%] max-lg:py-16 max-md:max-w-[90%] mx-auto gap-5 my-8 p-5 rounded-2xl px-8 bg-royalblue dark:bg-fadedorange overflow-hidden">
      <div className="flex flex-row items-start gap-10 max-lg:gap-14 justify-between max-lg:flex-col-reverse max-lg:items-center">
        <div className="flex flex-col gap-4">
          <div className="self-start text-white dark:text-black font-righteous uppercase text-[50px] max-md:text-[35px] leading-tight max-lg:text-center">
            Grow Your Business With Kraftbase
          </div>
          <div className="self-start text-white dark:text-black font-righteous uppercase text-[20px] max-md:text-[15px] max-lg:text-center">
            We can empower your business to thrive in the digital landscape.
            Whether you‘re looking to streamline your processes, enhance
            customer experiences, or drive growth through scalable software
            solutions, we‘ve got you covered.
          </div>
        </div>
        <div>
          <FlowerSvg width="279" fill="#E7E51E" />
        </div>
      </div>
      <div className="self-start text-[30px] bg-white dark:bg-black dark:text-white uppercase font-righteous py-3 px-10 rounded-full max-lg:self-center">
        Let’s talk
      </div>
    </div>
  );
}
