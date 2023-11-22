import Achievements from "@/app/components/about-us/achievements";
import Going from "@/app/components/about-us/going";
import AboutUsHero from "@/app/components/about-us/hero";
import Started from "@/app/components/about-us/started";
import Team from "@/app/components/about-us/team";
import NavbarSection from "@/app/components/navbar";
import React from "react";

type Props = {};

export default function page({}: Props) {
  return (
    <>
      <AboutUsHero />
      <Achievements />
      <Team />
      <Started />
      <Going />
    </>
  );
}
