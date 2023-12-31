import { portfolio } from "../../../data.json";

type Props = {};

export default function Portfolio({}: Props) {
  return (
    <div className="mx-auto flex max-w-[1280px] flex-col gap-16 py-20 font-righteous uppercase text-white max-[1405px]:w-[92%] max-sm:gap-8">
      <div className="flex flex-col gap-8 text-center">
        <div className="text-7xl max-md:text-6xl max-sm:text-5xl max-xs:text-3xl">
          our portfolio
        </div>
        <div className="mx-auto w-[75%] max-md:w-[90%] max-sm:w-[95%] max-sm:text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor
          ex id imperdiet eleifend. Nam egestas, enim vitae aliquam egestas,
          tortor purus feugiat ipsum, quis semper sapien orci vitae lectus.
        </div>
      </div>
      <div className="grid grid-cols-2 items-center gap-8 max-[995px]:grid-cols-1">
        {portfolio.map((item, index) => (
          <div key={index} className="flex flex-col rounded-[50px] border-4">
            <div className="flex flex-col gap-4 p-7">
              <div className="text-4xl max-[1405px]:text-3xl max-xs:text-2xl">
                {item.title}
              </div>
              <div className="text-xl text-[#ADA8C3] max-[1405px]:text-lg max-xs:text-base">
                {item.description}
              </div>
              <div className="flex flex-row flex-wrap items-center justify-start gap-10 max-xl:gap-5 max-[442px]:gap-3">
                {item.tech.map((i, key) => (
                  <div
                    key={key}
                    className="aspect-square rounded-xl bg-[#252134]"
                  >
                    <img
                      src={i}
                      alt=""
                      className="h-14 p-3 px-4 max-[442px]:h-10 max-[442px]:p-2 max-[442px]:px-3"
                    />
                  </div>
                ))}
              </div>
            </div>
            <img
              src={item.cover}
              className="max-[442px]:rounded-[45px]"
              alt=""
            />
          </div>
        ))}
      </div>
    </div>
  );
}
