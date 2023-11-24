import React from "react";

type Props = {};

export default function Services({}: Props) {
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
      <div className="mx-auto mt-14 flex w-[85%] flex-col gap-10 self-start font-righteous text-[30px] uppercase max-sm:w-full">
        <div className="text-slate-500">Application Development</div>

        <div className="text-slate-500">Development</div>

        <div className="text-slate-500">Web design</div>

        <div className="text-slate-500">UI UX Design</div>

        <div className="text-slate-500">Product Design</div>

        <div className="text-slate-500">Website Development</div>
      </div>
    </div>
  );
}
