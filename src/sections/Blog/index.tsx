import { BlogCard } from "@/sections/Blog/components/BlogCard";

export const Blog = () => {
  return (
    <div className="text-base box-border caret-transparent leading-4 py-10 md:text-xl md:leading-5 md:py-[75px]">
      <div className="text-base box-border caret-transparent leading-4 px-5 md:text-xl md:leading-5">
        <div className="text-base box-border caret-transparent leading-4 max-w-[1296px] w-full mx-auto md:text-xl md:leading-5">
          <div className="text-base items-start box-border caret-transparent gap-x-5 flex-col justify-between leading-4 gap-y-5 text-center mb-10 md:text-xl md:items-end md:gap-x-[30px] md:flex-row md:leading-5 md:gap-y-[30px] md:mb-20">
            <div className="text-base box-border caret-transparent blur-0 leading-4 md:text-xl md:leading-5">
              <div className="text-base box-border caret-transparent leading-4 mb-[15px] md:text-xl md:leading-5">
                <div className="text-yellow-800 text-base box-border caret-transparent leading-[20.8px] uppercase md:text-xl md:leading-[26px]">
                  BLOG &amp; ARTICLES
                </div>
              </div>
              <div className="text-base box-border caret-transparent leading-4 md:text-xl md:leading-5">
                <h2 className="text-[26px] font-bold box-border caret-transparent leading-[30.16px] md:text-[64px] md:leading-[74.24px]">
                  Our Latest Blog
                </h2>
              </div>
            </div>
          </div>
          <div className="text-base box-border caret-transparent leading-4 md:text-xl md:leading-5">
            <div
              role="list"
              className="text-base box-border caret-transparent gap-x-5 grid blur-0 auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] leading-4 gap-y-[30px] md:text-xl md:gap-x-6 md:grid-cols-[1fr_1fr_1fr] md:leading-5 md:gap-y-[50px]"
            >
              <BlogCard
                blogHref="/blogs/transform-your-home-effortlessly-with-modern-interior-design-tips"
                imageSrc="https://c.animaapp.com/mn6pgklgyCd5dZ/assets/6917617de173f872cfcd1194_thumb-1.webp"
                categoryHref="/blogs-categories/interior"
                categoryLabel="Interior"
                date="November 14, 2025"
                title="Transform your home effortlessly with modern interior design tips"
              />
              <BlogCard
                blogHref="/blogs/luxury-living-redefined-elegant-style-for-the-modern-home"
                imageSrc="https://c.animaapp.com/mn6pgklgyCd5dZ/assets/691786630786859378892930_thumb-2.webp"
                categoryHref="/blogs-categories/luxury"
                categoryLabel="Luxury"
                date="November 15, 2025"
                title="Luxury living redefined: Elegant style for the modern home"
              />
              <BlogCard
                blogHref="/blogs/modern-materials-designed-to-elevate-your-homes-functionality"
                imageSrc="https://c.animaapp.com/mn6pgklgyCd5dZ/assets/691788183ec75d78a5db8942_thumb-3.webp"
                categoryHref="/blogs-categories/minimalist"
                categoryLabel="Minimalist"
                date="November 15, 2025"
                title="Modern materials designed to elevate your home’s functionality"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
