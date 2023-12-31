import { works } from "../../../data.json";

type Props = {};

export default function WeMakeDifference({}: Props) {
  return (
    <div className="flex flex-col items-center gap-16 py-14 font-righteous">
      <div className="text-7xl uppercase text-white max-xl:text-6xl max-lg:text-5xl max-md:text-4xl max-sm:text-3xl max-xs:text-2xl">
        we make a difference
      </div>
      <div className="mx-auto grid max-w-[85%] grid-cols-4 items-center gap-10 max-lg:max-w-[95%] max-[850px]:grid-cols-2 max-md:max-w-[85%]">
        {works.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-3 text-center text-white"
          >
            <div
              className="text-6xl font-semibold max-xl:text-5xl max-xs:text-4xl"
              style={{
                background: "linear-gradient(180deg, #1A63D0 0%, #57C3FA 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              {item.number}
            </div>
            <div className="text-2xl uppercase max-xl:text-xl max-xs:text-lg">
              {item.title}
            </div>
            <div className=" max-xl:text-sm max-xs:text-xs">
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
