export const NavbarDropdown = () => {
  return (
    <div className="relative text-base box-border caret-transparent shrink-0 leading-4 min-h-0 min-w-0 text-left w-full z-[900] mx-auto md:text-xl md:shrink md:leading-5 md:min-h-[auto] md:min-w-[auto] md:w-auto">
      <div
        role="button"
        className="relative text-white text-base items-center box-border caret-transparent gap-x-1 flex justify-between leading-6 gap-y-1 text-nowrap align-top mx-auto py-[5px] md:text-lg md:leading-[27px] md:pt-px md:pb-0 hover:text-white/60 hover:border-white/60"
      >
        <div className="text-base box-border caret-transparent leading-6 min-h-0 min-w-0 text-nowrap md:text-lg md:leading-[27px] md:min-h-[auto] md:min-w-[auto]">
          Stranice
        </div>
        <div className="text-base box-border caret-transparent h-3 leading-[1px] min-h-0 min-w-0 text-nowrap w-3 md:text-lg md:min-h-[auto] md:min-w-[auto] before:accent-auto before:caret-transparent before:text-white before:table before:text-base before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-[1px] before:list-outside before:list-disc before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:text-nowrap before:visible before:border-separate before:font-lato before:md:text-lg after:accent-auto after:caret-transparent after:clear-both after:text-white after:table after:text-base after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-[1px] after:list-outside after:list-disc after:pointer-events-auto after:text-left after:no-underline after:indent-[0px] after:normal-case after:text-nowrap after:visible after:border-separate after:font-lato after:md:text-lg">
          <img
            src="https://c.animaapp.com/mn6pgklgyCd5dZ/assets/icon-1.svg"
            alt="Icon"
            className="text-base box-border caret-transparent inline h-full text-nowrap align-baseline w-full md:text-lg"
          />
        </div>
      </div>
    </div>
  );
};
