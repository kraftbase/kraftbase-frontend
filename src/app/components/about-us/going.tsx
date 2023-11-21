import React from "react";
import { MdArrowOutward } from "react-icons/md";
import object1 from "../../../../public/Rectangle 39550.png";
import avatar1 from "../../../../public/Ellipse 8.png";
import avatar2 from "../../../../public/Ellipse 9.png";
import avatar3 from "../../../../public/Ellipse 10.png";
import avatar4 from "../../../../public/Ellipse 11.png";
import Image from "next/image";

type Props = {};

export default function Going({}: Props) {
  return (
    <div className="flex flex-row-reverse justify-between gap-x-6 my-40 max-w-[85%] max-2xl:max-w-[90%] max-sm:max-w-[95%] max-xl:flex-col max-xl:gap-y-8 overflow-hidden mx-auto text-black dark:text-white font-righteous">
      <div className="w-6/12 max-xl:w-full flex flex-col gap-4 pr-6 max-sm:pr-0 max-sm:px-2">
        <div className="text-[80px] max-2xl:text-[75px]  leading-tight uppercase max-sm:text-[40px] max-md:text-[65px]">
          How it’s going
        </div>
        <div className="text-[35px] max-2xl:text-[25px] max-md:text-[20px] max-sm:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut tortor
          mauris. Nullam gravida lectus orci, imperdiet fermentum massa
          vestibulum eu. Integer vel erat ipsum. Quisque rutrum lobortis sem,
          sed viverra lorem interdmagna,
        </div>
        <div className="text-[35px] max-2xl:text-[25px] max-md:text-[20px] max-sm:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut tortor
          mauris. Nullam gravida lectus orci, imperdiet fermentum massa
        </div>
      </div>
      <div className="max-w-[741px] max-2xl:max-w-[641px] max-xl:max-w-full">
        <div className="relative">
          <div className="absolute bottom-[4rem] max-xl:bottom-[4rem] max-lg:bottom-[3rem] max-lg:px-8 px-10 max-xl:px-14 max-sm:px-4 max-sm:bottom-[1.2rem] flex flex-row items-center justify-between gap-0">
            <div className="text-white w-5/6 text-xl dark:text-black max-xl:text-[30px] max-lg:text-[25px] max-md:text-[20px] max-sm:text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
              tortor mauris. Nullam gravida lectus orci, imperdiet fermentum
              massa
            </div>
            <div className="bg-white dark:bg-black w-16 h-16 max-sm:w-12 max-sm:h-12 rounded-full flex items-center justify-center text-black dark:text-white">
              <MdArrowOutward size={35} />
            </div>
          </div>
          <div>
            <img src={object1.src} className="max-xl:w-full" />
          </div>
        </div>
        <div className="flex flex-row justify-between gap-4 mt-4 max-sm:gap-2 max-sm:mt-2">
          <div className="bg-[#7B5EA7] border-[9px] px-6 py-6 flex flex-col items-start justify-between gap-4 max-xl:rounded-[4rem] max-xl:p-8 max-sm:rounded-[2rem] max-sm:border-[5px] max-sm:p-4 rounded-[2rem] w-6/12 max-sm:w-[40%]">
            <div>
              <span className="-space-x-6 max-xs:-space-x-5 overflow-hidden">
                <Image
                  alt="avatar"
                  src={avatar1}
                  className="inline-block w-16 max-lg:w-14 max-md:w-12 max-xs:w-10 rounded-full"
                />
                <Image
                  alt="avatar"
                  src={avatar2}
                  className="inline-block w-16 max-lg:w-14 max-md:w-12 max-xs:w-10 rounded-full"
                />
                <Image
                  alt="avatar"
                  src={avatar3}
                  className="inline-block w-16 max-lg:w-14 max-md:w-12 max-xs:w-10 rounded-full"
                />
                <Image
                  alt="avatar"
                  src={avatar4}
                  className="inline-block w-16 max-lg:w-14 max-md:w-12 max-xs:w-10 rounded-full"
                />
              </span>
            </div>
            <div className="bg-white text-black px-4 py-2 rounded-full text-2xl max-sm:text-xs">
              4.75 %
            </div>
            <div className="text-2xl max-xl:text-2xl max-sm:text-xs">
              Lorem ipsum dolor sit amet, con
            </div>
          </div>
          <div className="flex flex-col justify-between gap-4 border-[9px] w-6/12 bg-candyOrange px-6 py-6 rounded-[2rem] max-xl:p-8 max-sm:rounded-[2rem] max-sm:border-[5px] max-sm:p-4 max-xl:rounded-[4rem] max-sm:w-[60%]">
            <div className="flex flex-row items-center justify-between">
              <div className="uppercase text-3xl max-sm:text-2xl">Design</div>
              <div className="bg-white dark:bg-black w-14 h-14 max-sm:w-12 max-sm:h-12 rounded-full flex items-center justify-center text-black dark:text-white">
                <MdArrowOutward size={30} />
              </div>
            </div>
            <div className="text-xl max-xl:text-lg max-sm:text-xs">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
              tortor mauris. Nullam gravida lectus orci, imperdiet fermentum
              massa
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
