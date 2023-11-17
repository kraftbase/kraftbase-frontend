import React from "react";

export default function FooterSection() {
  return (
    <div className="flex flex-col items-center justify-center mx-4 my-8 p-5 rounded-2xl px-8 bg-[#5A56EB]">
      <div className="flex flex-col items-center justify-center gap-y-2 text-white text-sm">
        <div>Subscribe For Offers</div>
        <div className="flex flex-row">
          <div className="w-72 bg-white"></div>
          <div className="bg-black">Subscribe</div>
        </div>
      </div>
      <div className="text-sm text-white flex flex-row justify-evenly w-full my-8">
        <div className="flex-1">
          <div className="font-semibold">About Us</div>
          <div className="text-xs flex flex-col gap-y-2 mt-3">
            <div>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry
            </div>
            <div>2346 Lakeshore Rd W, Oakville, ON L6L 1H5, Canada</div>
            <div>Email: contact@kraftbase.com</div>
          </div>
        </div>
        <div className="flex-1 pl-24">
          <div className="font-semibold">Quick Links</div>
          <div className="text-xs mt-3 flex flex-col gap-y-1">
            <div>Blog</div>
            <div>Portfolio</div>
            <div>Services</div>
            <div>Contact</div>
          </div>
        </div>
        <div className="flex-1">Follow Us</div>
      </div>
      <div className="flex flex-row items-center justify-between w-full text-xs text-white">
        <div>© kraftbase. All rights reserved.</div>
        <div className="flex flex-row gap-x-4">
          <div>Privacy</div>
          <div>Terms</div>
        </div>
      </div>
    </div>
  );
}
