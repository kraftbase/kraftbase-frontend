"use client";
import React, { useState } from "react";
import image1 from "../../../public/rectangle-30@2x.png";
import image2 from "../../../public/rectangle-31@2x.png";
import image3 from "../../../public/rectangle-32@2x.png";
import image4 from "../../../public/rectangle-33@2x.png";
import image5 from "../../../public/Ellipse 10.png";
import image6 from "../../../public/Ellipse 9.png";

type Props = {};

export default function Services({}: Props) {
  const [hoveredItems, setHoveredItems] = useState({
    item1: false,
    item2: false,
    item3: false,
    item4: false,
    item5: false,
    item6: false,
  });
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const handleMouseEnter = (item: any) => {
    setHoveredItems((prev) => ({ ...prev, [item]: true }));
  };

  const handleMouseLeave = (item: any) => {
    setHoveredItems((prev) => ({ ...prev, [item]: false }));
  };

  const handleMouseMove = (e: any) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };
  return (
    <div className="mx-auto mb-40 flex max-w-[80%] flex-col items-center max-sm:max-w-[85%]">
      <div className="text-center font-righteous text-black dark:text-white">
        <div className="text-[50px] uppercase max-sm:text-[40px]">
          Our services
        </div>
        <div className="mx-auto w-[65%] text-[18px] max-sm:w-full max-sm:text-[15px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac
          tellus nec nisi rutrum vehicula. In eu molestie augue. Cras posuere
          tincidunt lectus, sed iaculis mauris varius at.
        </div>
      </div>
      <div className=" relative mx-auto mt-14 flex w-[85%] cursor-pointer flex-col gap-10 self-start font-righteous text-[30px] uppercase max-sm:hidden">
        <div
          className=" text-slate-500"
          onMouseEnter={() => handleMouseEnter("item1")}
          onMouseLeave={() => handleMouseLeave("item1")}
          onMouseMove={handleMouseMove}
        >
          {hoveredItems.item1 && (
            <img
              className="absolute z-50 -m-12 w-[150px] object-cover shadow-xl"
              src={image1.src}
              alt="Hovered Image"
              style={{
                left: cursorPosition.x - 150,
                top: cursorPosition.y - 300,
              }}
            />
          )}
          <h1>Application Development</h1>
        </div>

        <div
          className="relative text-slate-500"
          onMouseEnter={() => handleMouseEnter("item2")}
          onMouseLeave={() => handleMouseLeave("item2")}
          onMouseMove={handleMouseMove}
        >
          {hoveredItems.item2 && (
            <img
              className="w-200 absolute w-[150px] object-cover shadow-xl"
              src={image2.src}
              alt="Hovered Image"
              style={{
                left: cursorPosition.x - 150,
                top: cursorPosition.y - 300,
              }}
            />
          )}
          Development
        </div>

        <div
          className="relative text-slate-500"
          onMouseEnter={() => handleMouseEnter("item3")}
          onMouseLeave={() => handleMouseLeave("item3")}
          onMouseMove={handleMouseMove}
        >
          {hoveredItems.item3 && (
            <img
              className="w-200 absolute w-[150px] object-cover shadow-xl"
              src={image3.src}
              alt="Hovered Image"
              style={{
                left: cursorPosition.x - 150,
                top: cursorPosition.y - 300,
              }}
            />
          )}
          Web design
        </div>

        <div
          className="relative text-slate-500"
          onMouseEnter={() => handleMouseEnter("item4")}
          onMouseLeave={() => handleMouseLeave("item4")}
          onMouseMove={handleMouseMove}
        >
          {hoveredItems.item4 && (
            <img
              className="w-200 absolute w-[150px] object-cover shadow-xl"
              src={image4.src}
              alt="Hovered Image"
              style={{
                left: cursorPosition.x - 150,
                top: cursorPosition.y - 300,
              }}
            />
          )}
          UI UX Design
        </div>

        <div
          className="relative text-slate-500"
          onMouseEnter={() => handleMouseEnter("item5")}
          onMouseLeave={() => handleMouseLeave("item5")}
          onMouseMove={handleMouseMove}
        >
          {hoveredItems.item5 && (
            <img
              className="w-200 absolute w-[150px] object-cover shadow-xl"
              src={image5.src}
              alt="Hovered Image"
              style={{
                left: cursorPosition.x - 150,
                top: cursorPosition.y - 300,
              }}
            />
          )}
          Product Design
        </div>

        <div
          className="relative text-slate-500"
          onMouseEnter={() => handleMouseEnter("item6")}
          onMouseLeave={() => handleMouseLeave("item6")}
          onMouseMove={handleMouseMove}
        >
          {hoveredItems.item6 && (
            <img
              className="w-200 absolute w-[150px] object-cover shadow-xl"
              src={image6.src}
              alt="Hovered Image"
              style={{
                left: cursorPosition.x - 150,
                top: cursorPosition.y - 300,
              }}
            />
          )}
          Website Development
        </div>
      </div>
      <div className="mx-auto mt-14 hidden items-center font-righteous text-[30px] font-normal uppercase max-sm:block max-sm:w-full">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="text-black dark:text-white">Strategy</div>
          <div className="text-[18px] capitalize text-slate-500">
            <div>Strategy</div>
            <div>Discovery & Research</div>
            <div>User Experience</div>
            <div>Content Strategy</div>
          </div>
        </div>
        <div className="mt-16 flex flex-col items-center gap-4 text-center">
          <div className="text-black dark:text-white">Design</div>
          <div className="text-[18px] capitalize text-slate-500">
            <div>Brand Development & Rebranding</div>
            <div>Logo & ID Systems</div>
            <div>Brand Style Guides</div>
            <div>Collateral, Print & Packaging</div>
            <div>User Interface</div>
            <div>Website Design</div>
            <div>UX/UI</div>
          </div>
        </div>
        <div className="mt-16 flex flex-col items-center gap-4 text-center">
          <div className="text-black dark:text-white">Development</div>
          <div className="text-[18px] capitalize text-slate-500">
            <div>Website Design & Development</div>
            <div>Web Applications</div>
            <div>Android Applications</div>
            <div>Blockchain Development</div>
            <div>Ecommerce</div>
          </div>
        </div>
      </div>
    </div>
  );
}
