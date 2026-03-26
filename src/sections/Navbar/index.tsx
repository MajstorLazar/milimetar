import { useState, useEffect } from "react";
import { NavbarLogo } from "@/sections/Navbar/components/NavbarLogo";
const NAV_LINKS = [
  { label: "Radionica", href: "#about" },
  { label: "Projekti", href: "#projects" },
  { label: "Usluge", href: "#services" },
  /*{ label: "Blog", href: "#blog" },*/
  { label: "Česta pitanja", href: "#faq" },
];

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    if (href.startsWith("#")) {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className={`fixed text-base box-border leading-4 w-full z-50 py-[15px] left-0 top-0 transition-all duration-500 md:text-xl md:leading-5 md:py-6 ${
        scrolled ? "bg-black/70 backdrop-blur-md py-2 md:py-3" : ""
      }`}
    >
      <div className="text-base box-border leading-4 px-5 md:text-xl md:leading-5">
        <div className="text-base box-border leading-4 max-w-[1296px] w-full mx-auto md:text-xl md:leading-5">
          <div
            className={`relative text-base items-center box-border flex justify-between leading-4 pl-3.5 pr-3 py-3 rounded-[10px] transition-all duration-300 md:text-xl md:leading-5 md:pl-[18px] ${
              scrolled
                ? "bg-black/50 border border-white/10"
                : "bg-neutral-100/10 border border-white/20"
            }`}
          >
          <NavbarLogo />
            {/* Desktop nav links */}
            <div className="hidden md:flex items-center gap-x-[34px]">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`text-white text-lg leading-[25.2px] transition-all duration-200 hover:text-yellow-600 relative after:absolute after:bottom-[-2px] after:left-0 after:h-[1px] after:w-0 after:bg-yellow-600 after:transition-all after:duration-300 hover:after:w-full ${
                    activeSection === link.href.slice(1) ? "text-yellow-600 after:w-full" : ""
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Desktop Book */}
            <div className="flex items-center gap-x-[15px]">
              <a
                href="tel:+381607120698"
                className="hidden md:flex relative font-bold items-center bg-white gap-x-2.5 justify-center leading-[17.6px] max-w-full gap-y-2.5 z-[1] overflow-hidden px-6 py-3 rounded-[5px] text-base hover:bg-yellow-600 transition-all duration-300 btn-press group"
              >
                <span className="relative z-[2] whitespace-nowrap font-bold text-sm">Pozovite Me</span>
              </a>

              {/* Mobile hamburger */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden flex flex-col items-center justify-center gap-y-1 w-10 h-10 bg-white rounded shrink-0 hover:bg-neutral-100 transition-colors duration-200"
                aria-label="Toggle menu"
              >
                <span
                  className={`block bg-black h-0.5 w-4 transition-all duration-300 ${
                    menuOpen ? "rotate-45 translate-y-[6px]" : ""
                  }`}
                />
                <span
                  className={`block bg-black h-0.5 w-4 transition-all duration-300 ${
                    menuOpen ? "opacity-0 scale-x-0" : ""
                  }`}
                />
                <span
                  className={`block bg-black h-0.5 w-4 transition-all duration-300 ${
                    menuOpen ? "-rotate-45 -translate-y-[6px]" : ""
                  }`}
                />
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          <div
            className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
              menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="absolute left-5 right-5 backdrop-blur-[20px] bg-black flex flex-col gap-y-2 p-5 rounded-[10px] top-[calc(100%+4px)] animate-slide-down shadow-xl z-50">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="text-white text-base leading-[22.4px] py-[5px] w-full hover:text-yellow-600 transition-colors duration-200 border-b border-white/10 last:border-0 pb-3"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="tel:+381607120698"
                className="relative font-bold items-center bg-white flex justify-center leading-[17.6px] gap-x-2.5 z-[1] overflow-hidden px-6 py-3.5 rounded-[5px] mt-2 hover:bg-yellow-600 transition-all duration-300 btn-press"
              >
                <span className="text-base font-bold whitespace-nowrap">Pozovite me</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
