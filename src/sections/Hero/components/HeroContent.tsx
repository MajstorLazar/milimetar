import { useEffect, useState } from "react";

export const HeroContent = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="relative text-base items-start box-border gap-x-5 flex flex-col justify-between leading-4 gap-y-5 z-[2] md:text-xl md:items-end md:flex-row md:leading-5">
      <div
        className={`text-base box-border leading-4 max-w-full min-h-[auto] min-w-[auto] w-full md:text-xl md:leading-5 md:max-w-[695px] transition-all duration-700 ease-out ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h1 className="text-white text-[32px] box-border leading-8 md:text-[90px] md:leading-[90px]">
          Unapredite Vaš Životni Prostor Nameštajem po Meri
        </h1>
      </div>
      <div
        className={`text-base box-border leading-4 max-w-full min-h-[auto] min-w-[auto] w-full md:text-xl md:leading-5 md:max-w-[308px] transition-all duration-700 ease-out delay-200 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <p className="text-white text-base box-border leading-[20.8px] md:text-lg md:leading-[23.4px]">
          Od stambenih prostora do komercijalnih objekata, svaki komad krećemo od Vaših potreba: merenje, dizajn, izbor materijala i precizna izrada. Bez kompromisa na kvalitetu - samo drvo, lepak i pažnja.
        </p>
      </div>
    </div>
  );
};
