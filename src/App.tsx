import { useEffect } from "react";
import { Navbar } from "@/sections/Navbar";
import { Hero } from "@/sections/Hero";
import { CTA } from "@/sections/CTA";

export const App = () => {
  // Scroll reveal observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    const targets = document.querySelectorAll(".reveal");
    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="text-black text-base not-italic normal-nums font-normal accent-auto bg-white box-border caret-transparent block tracking-[normal] leading-4 list-outside list-disc min-h-full pointer-events-auto text-start indent-[0px] normal-case visible border-separate font-lato md:text-xl md:leading-5 overflow-x-hidden">
      <div className="text-base box-border caret-transparent leading-4 overflow-x-hidden md:text-xl md:leading-5">
        <Navbar />
        <Hero />
        <CTA />
      </div>
    </div>
  );
};
