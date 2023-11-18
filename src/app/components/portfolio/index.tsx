import Image from "next/image";
import React from "react";
import image1 from "../../../../public/rectangle-33@2x.png";
import image2 from "../../../../public/rectangle-30@2x.png";
import image3 from "../../../../public/rectangle-32@2x.png";
import image4 from "../../../../public/rectangle-31@2x.png";

export default function PortfolioSection() {
  return (
    <div className="mx-4 px-4">
      <div className="font-righteous uppercase font-semibold text-[65px]">
        our portfolio
      </div>
      <div className="font-righteous uppercase text-[15px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor ex
        id imperdiet eleifend. Nam egestas, enim vitae aliquam egestas, tortor
        purus feugiat ipsum, quis semper sapien orci vitae lectus.
      </div>
      <div className="grid grid-cols-2 mt-4">
        <div className="flex flex-col gap-2 p-10">
          <div>
            <Image src={image1} alt="fas" />
          </div>
          <div className="font-righteous uppercase text-xl">
            Creative Design Agency Landing Page
          </div>
          <div className="flex flex-row gap-4 uppercase font-righteous text-white">
            <div className="bg-[#5A56EB] py-1 px-3 rounded-full">
              web-development
            </div>
            <div className="bg-black py-1 px-3 rounded-full">ui/ux</div>
            <div className="bg-black py-1 px-3 rounded-full">web design</div>
          </div>
        </div>
        <div className="flex flex-col gap-2 p-10">
          <div>
            <Image src={image2} alt="fas" />
          </div>
          <div className="font-righteous uppercase text-xl">
            Creative Design Agency Landing Page
          </div>
          <div className="flex flex-row gap-4 uppercase font-righteous text-white">
            <div className="bg-[#5A56EB] py-1 px-3 rounded-full">
              web-development
            </div>
            <div className="bg-black py-1 px-3 rounded-full">ui/ux</div>
            <div className="bg-black py-1 px-3 rounded-full">web design</div>
          </div>
        </div>{" "}
        <div className="flex flex-col gap-2 p-10">
          <div>
            <Image src={image3} alt="fas" />
          </div>
          <div className="font-righteous uppercase text-xl">
            Creative Design Agency Landing Page
          </div>
          <div className="flex flex-row gap-4 uppercase font-righteous text-white">
            <div className="bg-[#5A56EB] py-1 px-3 rounded-full">
              web-development
            </div>
            <div className="bg-black py-1 px-3 rounded-full">ui/ux</div>
            <div className="bg-black py-1 px-3 rounded-full">web design</div>
          </div>
        </div>{" "}
        <div className="flex flex-col gap-2 p-10">
          <div>
            <Image src={image4} alt="fas" />
          </div>
          <div className="font-righteous uppercase text-xl">
            Creative Design Agency Landing Page
          </div>
          <div className="flex flex-row gap-4 uppercase font-righteous text-white">
            <div className="bg-[#5A56EB] py-1 px-3 rounded-full">
              web-development
            </div>
            <div className="bg-black py-1 px-3 rounded-full">ui/ux</div>
            <div className="bg-black py-1 px-3 rounded-full">web design</div>
          </div>
        </div>
      </div>
    </div>
  );
}
