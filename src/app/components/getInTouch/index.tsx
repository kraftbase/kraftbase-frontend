import React from "react";

export default function GetInTouchSection() {
  return (
    <div className="flex flex-col items-center justify-center my-16">
      <div className="font-righteous uppercase text-[50px]">
        Get in touch with our friendly team.
      </div>
      <div className="flex flex-col gap-y-3 mt-6 items-center justify-center font-righteous">
        <div className="flex flex-row gap-4">
          <div className="border-solid border-black border-4 rounded-full px-6 py-4">
            Full name
          </div>
          <div className="border-solid border-black border-4 rounded-full px-6 py-4">
            Last name
          </div>
        </div>
        <div className="flex flex-row gap-4">
          <div className="border-solid border-black border-4 rounded-full px-6 py-4">
            Email
          </div>
          <div className="border-solid border-black border-4 rounded-full px-6 py-4">
            Phone number
          </div>
        </div>
        <div className="border-solid border-black border-4 rounded-full px-6 py-4">
          Message
        </div>
        <div className="bg-black text-white rounded-full px-6 py-4">
          Send Us a Message
        </div>
      </div>
    </div>
  );
}
