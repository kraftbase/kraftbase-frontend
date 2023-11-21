import Image from "next/image";
import React from "react";
import image1 from "../../../../public/rectangle-33@2x.png";
import image2 from "../../../../public/rectangle-30@2x.png";
import image3 from "../../../../public/rectangle-32@2x.png";
import image4 from "../../../../public/rectangle-31@2x.png";
import ProjectCard from "./projectCard";

export default function PortfolioSection() {
  const projectData = [
    {
      name: "Creative Design Agency Landing Page",
      image: image1,
      tags: ["Web development", "UI UX", "Web design"],
    },
    {
      name: "NFT Platform App Concept",
      image: image2,
      tags: ["Web development", "UI UX", "Web design"],
    },
    {
      name: "Stock Investment Mobile Version",
      image: image3,
      tags: ["Web development", "UI UX", "Web design"],
    },
    {
      name: "Architectural Agency Landing Page Website",
      image: image4,
      tags: ["Web development", "UI UX", "Web design"],
    },
  ];

  return (
    <div className="px-4 my-40 max-w-[65%] max-lg:max-w-[90%] max-md:max-w-[95%] max-md:px-2 mx-auto">
      <div className="font-righteous uppercase text-[65px] max dark:text-white max-md:text-[55px] leading-tight">
        our portfolio
      </div>
      <div className="font-righteous uppercase text-[20px] max-md:text-[18px] w-[95%] dark:text-white">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor ex
        id imperdiet eleifend. Nam egestas, enim vitae aliquam egestas, tortor
        purus feugiat ipsum, quis semper sapien orci vitae lectus.
      </div>
      <div className="grid grid-cols-2 mt-10 gap-10 max-md:gap-4">
        <div className="grid gap-10">
          {projectData.slice(0, 2).map((item, index) => (
            <ProjectCard
              key={index}
              image={item.image}
              name={item.name}
              tags={item.tags}
            />
          ))}
        </div>
        <div className="grid gap-10">
          {projectData.slice(2, 4).map((item, index) => (
            <ProjectCard
              key={index}
              image={item.image}
              name={item.name}
              tags={item.tags}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
