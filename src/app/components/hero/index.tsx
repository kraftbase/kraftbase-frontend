import React from "react";

export default function HeroSection() {
  return (
    <div className="my-16 flex flex-col items-center justify-center mx-8">
      <div className="text-5xl md:text-7xl text-center uppercase font-righteous">
        Crafting exceptional digital experiences for you and your audience.
      </div>
      <div className=" my-20 mx-6 flex flex-row items-center justify-between">
        <div className="w-6/12 text-sm">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum
          voluptatem corrupti nemo tenetur illum delectus hic eligendi ex
          perferendis tempore.
        </div>
        <div className=" flex flex-row items-center justify-center text-white text-sm font-semibold rounded-full px-4 py-2 bg-[#5A56EB] gap-3">
          Contact us
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
