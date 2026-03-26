import { FooterLinks } from "@/sections/CTA/components/FooterLinks";

export const CTAFooter = () => {
  return (
    <div className="text-base items-start box-border caret-transparent gap-x-5 grid flex-wrap auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] justify-between leading-4 gap-y-5 mb-20 pb-10 md:text-xl md:flex md:flex-nowrap md:auto-cols-auto md:grid-cols-none md:grid-rows-none md:leading-5 md:pb-0">
      <div className="text-base box-border caret-transparent leading-4 max-w-[300px] min-h-[auto] min-w-[auto] w-full md:text-xl md:leading-5 md:max-w-[220px] reveal">
        <div className="text-base box-border caret-transparent leading-4 w-full md:text-xl md:leading-5 md:w-auto">
          <a
            href="#hero"
            onClick={(e) => { e.preventDefault(); document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" }); }}
            className="text-blue-700 text-base box-border caret-transparent inline-block leading-4 max-w-full mb-3 md:text-xl md:leading-5"
          >
            <span className="text-white font-bold text-lg tracking-tight">Milimetar Craft</span>
          </a>
          <div className="text-base box-border caret-transparent leading-4 max-w-full w-full md:text-xl md:leading-5 md:max-w-[220px]">
            <p className="text-white text-base box-border caret-transparent leading-[22.4px] md:text-lg md:leading-[25.2px]">
              Nameštaj po meri
            </p>
            <p className="text-white text-base box-border caret-transparent leading-[22.4px] md:text-lg md:leading-[25.2px]">
              Novi Sad
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
