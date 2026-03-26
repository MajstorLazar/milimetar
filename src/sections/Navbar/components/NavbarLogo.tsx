import logoImg from "../../../../static/favicon.png";

export const NavbarLogo = () => {
  return (
    <a
      href="/"
      className="caret-transparent flex items-center gap-1 whitespace-nowrap"
    >
      <img src={logoImg} alt="" className="w-6 h-6 md:w-8 md:h-8 mr-2" />
      <span className="text-white font-bold text-lg tracking-tight md:text-2xl">Milimetar</span>
      <span className="text-white font-bold text-lg tracking-tight md:text-2xl">Craft</span>
    </a>
  );
};
