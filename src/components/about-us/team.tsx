import FlowerSvg from "@/svg/flower";
import React from "react";
import avatar1 from "../../../public/Rectangle 38.png";
import avatar2 from "../../../public/Rectangle 39.png";
import avatar3 from "../../../public/Rectangle 40.png";
import avatar4 from "../../../public/Rectangle 41.png";
import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";

type Props = {};

export default function Team({}: Props) {
  return (
    <div className="flex flex-col items-center gap-y-12 justify-center my-40 max-w-[80%] max-xl:max-w-[90%] overflow-hidden mx-auto dark:bg-white rounded-t-[70px]">
      <div className="pt-10 px-10 max-md:px-6 max-md:pt-6 flex flex-row">
        <div className="font-righteous uppercase flex flex-col gap-4">
          <div className="text-[75px] max-lg:text-[65px] max-md:text-[55px] max-xs:text-[45px] leading-none">
            Meet our team
          </div>
          <div className="flex flex-row">
            <div className="w-[80%] max-md:w-[90%] text-xl max-lg:text-base max-md:text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
              tortor mauris. Nullam gravida lectus orci, imperdiet fermentum
              massa vestibulum eu. Integer vel erat ipsum. Quisque rutrum
              lobortis sem, sed viverra lorem interdum sed.
            </div>
            <div className="bg-candyOrange dark:bg-candyOrange w-16 h-16 max-lg:w-14 max-lg:h-14 max-sm:h-12 max-sm:w-12 rounded-full flex items-center justify-center text-white dark:text-white">
              <MdArrowOutward size={35} className="max-sm:w-30" />
            </div>
          </div>
        </div>
        <div className="max-xs:hidden">
          <FlowerSvg
            fill="black"
            classNames="h-[250px] max-lg:h-[200px] max-md:h-[150px] max-md:h-[100px]"
          />
        </div>
      </div>
      <div className="grid grid-cols-4 max-md:grid-cols-2 items-baseline w-full">
        <img src={avatar1.src} alt="avatar" />
        <img src={avatar2.src} alt="avatar" />
        <img src={avatar3.src} alt="avatar" />
        <img src={avatar4.src} alt="avatar" />
      </div>
    </div>
  );
}
