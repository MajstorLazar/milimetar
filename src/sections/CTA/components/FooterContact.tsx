export const FooterContact = () => {
  return (
    <div className="text-base box-border caret-transparent gap-x-6 flex blur-[5px] flex-col leading-4 min-h-[auto] min-w-[auto] opacity-0 order-last gap-y-6 translate-y-[50px] md:text-xl md:leading-5 md:order-none">
      <div className="text-base box-border caret-transparent leading-4 min-h-[auto] min-w-[auto] mb-2.5 md:text-xl md:leading-5">
        <div className="text-base box-border caret-transparent leading-4 mb-[5px] md:text-xl md:leading-5">
          <p className="text-white text-base font-bold box-border caret-transparent leading-[19.2px] md:text-xl md:leading-6">
            Imejl
          </p>
        </div>
        <div className="text-base box-border caret-transparent leading-4 md:text-xl md:leading-5">
          <a
            href="mailto://mailto:support@widflow.com"
            className="text-white text-base box-border caret-transparent leading-4 md:text-lg md:leading-5"
          >
            support@widflow.com
          </a>
        </div>
      </div>
      <div className="text-base box-border caret-transparent leading-4 min-h-[auto] min-w-[auto] mb-2.5 md:text-xl md:leading-5">
        <div className="text-base box-border caret-transparent leading-4 mb-[5px] md:text-xl md:leading-5">
          <p className="text-white text-base font-bold box-border caret-transparent leading-[19.2px] md:text-xl md:leading-6">
            Lokacija
          </p>
        </div>
        <div className="text-base box-border caret-transparent leading-4 md:text-xl md:leading-5">
          <p className="text-white text-base box-border caret-transparent leading-[22.4px] md:text-lg md:leading-[25.2px]">
            Beograd, Srbija
          </p>
        </div>
      </div>
    </div>
  );
};
