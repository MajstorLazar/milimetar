export type BlogCardProps = {
  blogHref: string;
  imageSrc: string;
  categoryHref: string;
  categoryLabel: string;
  date: string;
  title: string;
};

export const BlogCard = (props: BlogCardProps) => {
  return (
    <div
      role="listitem"
      className="text-base box-border caret-transparent leading-4 min-h-[auto] min-w-[auto] md:text-xl md:leading-5"
    >
      <div className="text-base box-border caret-transparent leading-4 md:text-xl md:leading-5">
        <a
          aria-label="blogs"
          href={props.blogHref}
          className="relative text-blue-700 text-base box-border caret-transparent block leading-4 max-w-full overflow-hidden mb-5 rounded-[5px] md:text-xl md:leading-5 md:mb-6"
        >
          <img
            src={props.imageSrc}
            alt=""
            sizes="100vw"
            className="text-base box-border caret-transparent inline-block leading-4 max-w-full rounded-[5px] md:text-xl md:leading-5"
          />
        </a>
        <div className="text-base box-border caret-transparent leading-4 md:text-xl md:leading-5">
          <div className="text-base items-center box-border caret-transparent gap-x-[15px] flex leading-4 gap-y-[15px] mb-5 md:text-xl md:leading-5 md:mb-6">
            <div className="text-base box-border caret-transparent leading-4 min-h-[auto] min-w-[auto] md:text-xl md:leading-5">
              <a
                href={props.categoryHref}
                className="text-base font-bold box-border caret-transparent inline-block leading-[22.4px] md:text-lg md:leading-[25.2px]"
              >
                {props.categoryLabel}
              </a>
            </div>
            <div className="text-base box-border caret-transparent leading-[0.16px] min-h-[auto] min-w-[auto] md:text-xl md:leading-[0.2px]">
              <img
                src="https://c.animaapp.com/mn6pgklgyCd5dZ/assets/69160672596ff4e88ec5c527_icon-3.svg"
                alt="icon-3"
                className="text-base box-border caret-transparent inline-block leading-[0.16px] max-w-full md:text-xl md:leading-[0.2px]"
              />
            </div>
            <div className="text-base box-border caret-transparent leading-4 min-h-[auto] min-w-[auto] md:text-xl md:leading-5">
              <p className="text-base box-border caret-transparent leading-[22.4px] md:text-lg md:leading-[25.2px]">
                {props.date}
              </p>
            </div>
          </div>
          <div className="text-base box-border caret-transparent leading-4 mb-2.5 border-t-black/10 border-t md:text-xl md:leading-5 md:mb-[15px]"></div>
          <a
            aria-label="blogs"
            href={props.blogHref}
            className="text-blue-700 text-base box-border caret-transparent inline-block leading-4 max-w-full md:text-xl md:leading-5"
          >
            <p className="text-black text-lg font-bold box-border caret-transparent leading-[23.4px] md:text-2xl md:leading-[31.2px]">
              {props.title}
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};
