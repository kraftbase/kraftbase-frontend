import React from "react";

export default function GetInTouchSection() {
  return (
    <div className="flex flex-col items-center justify-center my-40 max-w-[50%] max-xl:max-w-[75%] max-md:max-w-[90%] mx-auto">
      <div className="font-righteous uppercase text-[70px] text-center leading-tight dark:text-white max-lg:text-[50px] max-md:text-[35px]">
        Get in touch with our friendly team.
      </div>
      <div className="flex flex-col gap-y-3 mt-10 w-full font-righteous">
        <div className="flex flex-row max-lg:flex-col justify-between gap-4">
          <input
            className="flex-grow border-solid border-black dark:border-white dark:bg-black border-4 rounded-full px-6 py-4"
            placeholder="Firstname"
          />
          <input
            className="flex-grow border-solid border-black dark:border-white dark:bg-black border-4 rounded-full px-6 py-4"
            placeholder="Lastname"
          />
        </div>
        <div className="flex flex-row max-lg:flex-col gap-4">
          <input
            className="flex-grow border-solid border-black dark:border-white dark:bg-black border-4 rounded-full px-6 py-4"
            placeholder="Email"
          />
          <input
            className="flex-grow border-solid border-black dark:border-white dark:bg-black border-4 rounded-full px-6 py-4"
            placeholder="Phone number"
          />
        </div>
        <textarea
          className="border-solid border-black dark:border-white dark:bg-black border-4 rounded-full max-lg:rounded-3xl px-6 py-4"
          placeholder="Message"
        ></textarea>
        <button className="bg-black dark:bg-white dark:text-black text-white rounded-full px-6 py-4 text-center">
          Send Us a Message
        </button>
      </div>
    </div>
  );
}
