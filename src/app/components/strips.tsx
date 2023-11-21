import FlowerSvg from "@/svg/flower";
import React from "react";

export default function Strips() {
  return (
    <div className="w-[100vw] mx-auto py-40 max-md:py-18 overflow-hidden">
      <div className="bg-sunflower dark:bg-white w-[110vw] relative right-3 py-6 max-md:py-4 max-md:text-4xl -top-[17px] -rotate-6 mb-2 shadow-2xl font-righteous uppercase text-5xl">
        <div className="flex flex-row gap-8 max-lg:justify-between max-lg:gap-6 items-center">
          <div>Product Design</div>
          <div>
            <FlowerSvg width={50} fill="black" />
          </div>
          <div>UI/UX Designing</div>
          {/* <div>
            <FlowerSvg width={50} fill="black" />
          </div>{" "}
          <div>SEO</div> */}
          <div>
            <FlowerSvg width={50} fill="black" />
          </div>{" "}
          <div>Web Development</div>
          <div>
            <FlowerSvg width={50} fill="black" />
          </div>{" "}
          <div>Marketing</div>
          {/* <div>
            <FlowerSvg width={50} fill="black" />
          </div>{" "}
          <div>Product Design</div> */}
        </div>
      </div>
      <div
        style={{ boxShadow: "0px 4px 44px 33px rgba(0, 0, 0, 0.1)" }}
        className="bg-sunflower dark:bg-white w-[120vw] right-3 relative -top-28 py-6 max-md:py-4 max-md:text-4xl rotate-6 mb-2 font-righteous uppercase text-5xl"
      >
        <div className="flex flex-row gap-8 max-lg:justify-between max-lg:gap-6 items-center">
          <div>Web Development</div>
          <div>
            <FlowerSvg width={50} fill="black" />
          </div>{" "}
          <div>Product Design</div>
          {/* <div>
            <FlowerSvg width={50} fill="black" />
          </div>
          <div>UI/UX Designing</div> */}
          <div>
            <FlowerSvg width={50} fill="black" />
          </div>{" "}
          <div>Marketing</div>
          <div>
            <FlowerSvg width={50} fill="black" />
          </div>{" "}
          <div>SEO</div>
          <div>
            <FlowerSvg width={50} fill="black" />
          </div>{" "}
          <div>Product Design</div>
        </div>
      </div>
    </div>
  );
}
