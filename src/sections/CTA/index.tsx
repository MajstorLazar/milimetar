import { CTAFooter } from "@/sections/CTA/components/CTAFooter";

export const CTA = () => {
  return (
    <div
      id="contact"
      className="text-base bg-[url('https://cdn.prod.website-files.com/69155df8219de2cb7924d494/691584844dbe1533aad039a4_bg-2.webp')] bg-no-repeat bg-cover box-border caret-transparent leading-4 bg-center mt-10 pt-20 pb-5 md:text-xl md:leading-5 md:mt-[75px] md:pt-[150px] md:pb-[60px]"
    >
      <div className="text-base box-border caret-transparent leading-4 px-5 md:text-xl md:leading-5">
        <div className="text-base box-border caret-transparent leading-4 max-w-[1296px] w-full mx-auto md:text-xl md:leading-5">
          <div className="text-base box-border caret-transparent leading-4 max-w-[868px] text-center w-full mb-10 mx-auto md:text-xl md:leading-5 md:mb-[150px] reveal">
            <div className="text-base box-border caret-transparent leading-4 mb-[30px] md:text-xl md:leading-5 md:mb-[50px]">
              <h1 className="text-white text-[32px] font-bold box-border caret-transparent leading-8 md:text-[90px] md:leading-[90px]">
                Imate projekat na umu?
              </h1>
            </div>
            <div className="text-base items-center box-border caret-transparent gap-x-[15px] flex flex-col justify-center leading-4 gap-y-[15px] md:text-xl md:flex-row md:leading-5">
              <a
                href="tel:+381607120698"
                className="relative text-base font-bold items-center bg-white box-border caret-transparent gap-x-2.5 flex justify-center leading-[17.6px] max-w-full min-h-[auto] min-w-[auto] gap-y-2.5 z-[1] overflow-hidden px-6 py-3.5 rounded-[5px] md:text-lg md:leading-[19.8px] md:px-8 md:py-[18px] hover:bg-yellow-600 hover:text-white transition-all duration-300 btn-press"
              >
                <img src="https://c.animaapp.com/mn6pgklgyCd5dZ/assets/icon-2.svg" alt="" className="inline h-4 w-4" />
                <span className="font-bold">Pozovite me</span>
              </a>
            </div>
          </div>
          <CTAFooter />
          <div className="text-base box-border caret-transparent leading-4 mt-5 md:text-xl md:leading-5 md:mt-10 text-center reveal">
            <p className="text-white text-base font-medium box-border caret-transparent leading-[22.4px] font-ppneuemontreal md:text-lg md:leading-[25.2px]">
              © 2026 Milimetar Craft. Sva prava zadržana.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
