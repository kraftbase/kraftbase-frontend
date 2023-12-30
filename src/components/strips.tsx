"use client";
import FlowerSvg from "@/svg/flower";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/dist/css/splide.min.css";

const data = [
  "Product Design",
  "UI/UX Designing",
  "Web Development",
  "Marketing",
  "SEO",
];

export default function Strips() {
  return (
    <div className="max-md:py-18 mx-auto w-[100vw] overflow-hidden py-28">
      // First Strip
      <div className="relative -top-[17px] right-3 mb-2 w-[110vw] rotate-[-6deg] bg-sunflower py-4 font-righteous uppercase shadow-2xl dark:bg-white max-md:rotate-[-8deg] max-sm:py-2">
        <Splide
          options={{
            type: "loop",
            gap: "35px",
            drag: "free",
            arrows: false,
            pagination: false,
            perPage: 3,
            autoScroll: {
              pauseOnHover: false,
              pauseOnFocus: false,
              rewind: false,
              speed: 1,
            },
          }}
          extensions={{ AutoScroll }}
        >
          {data.map((item, index) => (
            <SplideSlide
              key={index}
              className="flex !w-fit flex-row items-center justify-between gap-[35px]"
            >
              <div className="whitespace-nowrap text-5xl max-sm:text-3xl">
                {item}
              </div>
              <FlowerSvg classNames="w-[40px] max-sm:w-[35px]" fill="black" />
            </SplideSlide>
          ))}
        </Splide>
      </div>
      // Second Strip
      <div className="relative -top-[90px] right-3 mb-2 w-[110vw] rotate-6 bg-sunflower py-4 font-righteous uppercase dark:bg-white max-lg:-top-[110px] max-md:-top-[100px] max-md:rotate-[8deg] max-sm:-top-[75px] max-sm:py-2 max-xs:rotate-[10deg]">
        <Splide
          options={{
            type: "loop",
            gap: "35px",
            drag: "free",
            arrows: false,
            pagination: false,
            perPage: 3,
            autoScroll: {
              pauseOnHover: false,
              pauseOnFocus: false,
              rewind: false,
              speed: 0.1,
            },
          }}
          extensions={{ AutoScroll }}
        >
          {data.map((item, index) => (
            <SplideSlide
              key={index}
              className="flex !w-fit flex-row-reverse items-center justify-between gap-[35px]"
            >
              <div className="whitespace-nowrap text-5xl max-sm:text-3xl">
                {item}
              </div>
              <FlowerSvg classNames="w-[40px] max-sm:w-[35px]" fill="black" />
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
}
