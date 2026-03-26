import { AboutImageGrid } from "@/sections/About/components/AboutImageGrid";

export const About = () => {
  return (
    <div className="text-base box-border caret-transparent leading-4 overflow-hidden pt-20 pb-10 md:text-xl md:leading-5 md:pt-[150px] md:pb-[75px]">
      <div className="text-base box-border caret-transparent leading-4 px-5 md:text-xl md:leading-5">
        <div className="text-base box-border caret-transparent leading-4 max-w-[1296px] w-full mx-auto md:text-xl md:leading-5">
          <div className="text-base items-start box-border caret-transparent gap-x-0 flex flex-col justify-between leading-4 gap-y-0 mb-10 md:text-xl md:gap-x-5 md:flex-row md:leading-5 md:gap-y-5 md:mb-20">
            <div className="text-base items-start box-border caret-transparent gap-x-5 blur-0 flex-col justify-between leading-4 min-h-[auto] min-w-[auto] gap-y-5 md:text-xl md:items-end md:gap-x-[30px] md:flex-row md:leading-5 md:gap-y-[30px]">
              <div className="text-base box-border caret-transparent leading-4 mb-[15px] md:text-xl md:leading-5">
                <div className="text-yellow-800 text-base box-border caret-transparent leading-[20.8px] uppercase md:text-xl md:leading-[26px]">
                  O NAMA
                </div>
              </div>
            </div>
            <div className="text-base box-border caret-transparent blur-0 leading-4 max-w-[880px] min-h-[auto] min-w-[auto] w-full md:text-xl md:leading-5">
              <div className="text-base box-border caret-transparent leading-4 mb-[30px] md:text-xl md:leading-5 md:mb-[50px]">
                <p className="text-2xl font-bold box-border caret-transparent leading-[28.8px] md:text-5xl md:leading-[57.6px]">
                  U Homiri, pronalaženje nekretnina činimo jednostavnim, glatkim i
                  uzbudljivim — povezujemo ljude s prostorima koji odražavaju njihovu ličnost.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AboutImageGrid />
    </div>
  );
};
