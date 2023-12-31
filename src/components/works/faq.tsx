"use client";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { faq } from "../../../data.json";
import { useState } from "react";

type Props = {};

export default function FrequentyAskedQuestions({}: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  return (
    <div className="mx-auto flex max-w-[85%] flex-col gap-10 py-20 font-righteous text-white max-lg:max-w-full">
      <div className="flex flex-col gap-5 text-center">
        <div className="text-7xl max-md:text-6xl">FAQs</div>
        <div className="mx-auto w-[85%] text-2xl max-md:w-[90%] max-md:text-xl max-sm:text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor
          ex id imperdiet eleifend. Nam egestas, enim vitae aliquam stages
        </div>
      </div>
      <div className="mx-auto flex w-[85%] flex-col gap-5 max-md:w-[93%] max-xs:text-sm">
        {faq.map((item, index) => (
          <div
            key={index}
            className="flex flex-col rounded-[40px] bg-[#EAECEA] text-black"
          >
            <div
              onClick={() => toggleAccordion(index)}
              className="flex cursor-pointer flex-row items-center justify-between gap-3 rounded-[40px] bg-white px-5 py-5 transition-all"
            >
              {item.question}
              <div className="rounded-full bg-[#EAECEA] px-4 py-2">
                {openIndex === index ? <FaMinus /> : <FaPlus />}
              </div>
            </div>
            {openIndex === index && (
              <div
                className={`rounded-b-[40px] px-5 py-5 transition-all duration-500 ${
                  openIndex === index ? "max-h-[500px]" : "max-h-0"
                }`}
              >
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
