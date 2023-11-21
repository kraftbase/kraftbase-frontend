"use client";
import useDarkMode from "@/app/DarkMode";
import React, { useState } from "react";
import { IoSunny } from "react-icons/io5";
import { MdDarkMode } from "react-icons/md";

export default function NavbarSection() {
  const [state, setState] = useState(false);
  const [colorTheme, setTheme] = useDarkMode();

  const navigation = [
    { title: "Home", path: "javascript:void(0)" },
    { title: "Portfolio", path: "javascript:void(0)" },
    { title: "Services", path: "javascript:void(0)" },
    { title: "Blog", path: "javascript:void(0)" },
  ];

  return (
    <div className="sticky top-6 shadow-xl border-2 z-50  max-w-[85%] max-lg:max-w-[95%] max-lg:top-4 max-lg:h-[60px] mx-auto rounded-full h-[70px] flex flex-row justify-between items-center px-8 bg-royalblue dark:bg-white">
      <div className="text-white dark:text-black font-semibold text-2xl">
        KraftBase
      </div>
      <div className="flex flex-row gap-x-8 text-white dark:text-black text-md font-medium">
        <button className="">
          {colorTheme == "light" ? (
            <IoSunny size={20} onClick={() => setTheme("light")} />
          ) : (
            <MdDarkMode size={20} onClick={() => setTheme("dark")} />
          )}
        </button>

        {navigation.map((item, index) => (
          <div key={index} className="hidden sm:block">
            {item.title}
          </div>
        ))}
        <div className="sm:hidden">
          <button
            className=" outline-none p-2 rounded-md"
            onClick={() => setState(!state)}
          >
            {state ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 8h16M4 16h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
