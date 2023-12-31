import FlowerSvg from "@/svg/flower";
import { client_countries } from "../../../data.json";

type Props = {};

export default function WorkedWithClients({}: Props) {
  return (
    <div className="mx-auto flex max-w-[85%] flex-col gap-10 py-20 font-righteous text-white max-lg:max-w-[90%]">
      <div className="flex flex-row gap-5">
        <div className="flex flex-col gap-3">
          <div className="text-5xl uppercase max-sm:text-4xl">
            Worked with clients across
          </div>
          <div className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            tempor ex id imperdiet eleifend. Nam egestas, enim vitae aliquam
            stages
          </div>
        </div>
        {/* <FlowerSvg width={120} classNames="text-current" /> */}
      </div>
      <div className="flex w-full flex-row flex-wrap items-center justify-start gap-14 max-md:gap-8 max-sm:justify-start max-sm:gap-4 max-sm:gap-y-2">
        {client_countries.map((item, index) => (
          <div key={index} className="uppercase max-xs:text-sm">
            {item}
          </div>
        ))}
      </div>
      <div>
        <img
          src="https://res.cloudinary.com/drlzyudik/image/upload/v1703958703/KraftBase/asset/p6czoyjz6kslutc0e9ru.png"
          className="h-full w-full bg-cover"
        />
      </div>
    </div>
  );
}
