import FlowerSvg from "@/svg/flower";
import React from "react";
import avatar1 from "../../../../public/Rectangle 38.png";
import avatar2 from "../../../../public/Rectangle 39.png";
import avatar3 from "../../../../public/Rectangle 40.png";
import avatar4 from "../../../../public/Rectangle 41.png";
import Image from "next/image";

type Props = {};

export default function Team({}: Props) {
  return (
    <div className="flex flex-col items-center gap-y-12 justify-center my-40 max-w-[80%] overflow-hidden mx-auto dark:bg-white rounded-t-[70px]">
      <div className="pt-10 px-10 flex flex-row">
        <div className="font-righteous uppercase">
          <div className="text-[75px]">Meet our team</div>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
            tortor mauris. Nullam gravida lectus orci, imperdiet fermentum massa
            vestibulum eu. Integer vel erat ipsum. Quisque rutrum lobortis sem,
            sed viverra lorem interdum sed.
          </div>
        </div>
        <div>
          <FlowerSvg fill="black" width={200} />
        </div>
      </div>
      <div className="flex flex-row w-full">
        <img src={avatar1.src} alt="avatar" />
        <img src={avatar2.src} alt="avatar" />
        <img src={avatar3.src} alt="avatar" />
        <img src={avatar4.src} alt="avatar" />
      </div>
    </div>
  );
}
