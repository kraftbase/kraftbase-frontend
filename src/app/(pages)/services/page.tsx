import Image from "next/image";
import React from "react";
import object2 from "../../../public/Rectangle 39547.png";
import FlowerSvg from "@/svg/flower";
import Hero from "@/app/components/service/hero";
import TechStack from "@/app/components/service/techStack";
import Services from "@/app/components/service/services";

type Props = {};

export default function page({}: Props) {
  return (
    <>
      <Hero />
      <TechStack />
      <Services />
    </>
  );
}
