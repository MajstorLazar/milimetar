export const FooterCopyright = () => {
  return (
    <div className="text-base box-border caret-transparent blur-[5px] leading-4 opacity-0 text-center translate-y-[50px] mt-5 md:text-xl md:leading-5 md:mt-10">
      <p className="text-white text-base font-medium box-border caret-transparent leading-[22.4px] font-ppneuemontreal md:text-lg md:leading-[25.2px]">
        © Homira - Made by{" "}
        <a
          href="https://webflow.com/templates/designers/mflowt"
          className="text-base box-border caret-transparent leading-[22.4px] md:text-lg md:leading-[25.2px] hover:text-white/60 hover:underline hover:border-white/60"
        >
          MFlowt{" "}
        </a>
        – Powered by Webflow
      </p>
    </div>
  );
};
