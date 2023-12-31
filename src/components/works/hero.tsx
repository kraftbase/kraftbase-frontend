export default function HeroSection() {
  return (
    <div className="mx-auto my-20 flex max-w-[85%] flex-col items-center justify-center gap-10 rounded-3xl px-20 py-10 text-black dark:bg-white max-xl:px-10 max-lg:max-w-[95%] max-lg:px-10 max-md:px-0 max-md:px-5 max-sm:mt-10 max-xs:py-5">
      <div className="text-center font-righteous text-[85px] uppercase leading-tight max-[1283px]:text-[80px] max-[1232px]:text-[75px] max-[1044px]:text-[65px] max-[843px]:text-[55px] max-[649px]:text-[50px] max-sm:text-[40px] max-xs:text-[35px] max-[438px]:text-[30px]">
        <span className="inline flex-col items-center">
          <span>see</span>{" "}
          <span className="rounded-br-3xl rounded-tl-3xl bg-royalblue px-5 text-white max-md:px-2">
            projects
          </span>{" "}
          that <br /> we&apos;ve{" "}
          <span className="inline">
            <img
              alt="object"
              className="inline-block py-6 max-xl:h-[140px] max-xl:py-3 max-[843px]:h-[100px] max-[843px]:py-2 max-[664px]:h-[90px] max-sm:h-[70px] max-[438px]:h-[60px]"
              src="https://res.cloudinary.com/drlzyudik/image/upload/v1703958567/KraftBase/asset/ru7ebe3tjwlh3rnulqs1.png"
            />
          </span>{" "}
          done, and <br />
          <span className="rounded-br-3xl rounded-tl-3xl bg-candyOrange px-5 text-white max-md:px-2">
            companies
          </span>{" "}
          we&apos;ve help
        </span>
      </div>

      <div className="flex flex-col items-center justify-between gap-10 max-lg:mx-0 max-md:mt-0 max-md:flex-col max-md:items-center max-md:gap-y-10 max-md:px-6 max-xs:gap-5 max-xs:px-0">
        <div className="text-center font-righteous text-lg max-[1044px]:text-sm max-md:text-sm max-xs:text-xs">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias
          veniam pariatur voluptate praesentium, ex, perspiciatis adipisci
          ducimus eveniet quisquam inventore doloribus quae consectetur ipsum
          labore asperiores tempore dicta veritatis officiis magnam quis beatae
          nisi eligendi nemo! Nobis cumque alias voluptatibus et aspernatur quo
          ad, rem modi consectetur qui distinctio obcaecati!
        </div>
        <div className="flex flex-row items-center justify-center gap-3 rounded-full bg-royalblue px-8 py-4 font-righteous text-3xl uppercase text-white dark:bg-candyOrange max-lg:text-xl max-[843px]:px-6 max-[843px]:py-3 max-md:text-lg max-xs:px-3 max-xs:py-2 max-xs:text-base">
          Contact us
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2.5"
            stroke="currentColor"
            className="h-8 w-8 max-xs:h-5 max-xs:w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
