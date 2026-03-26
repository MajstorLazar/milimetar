import { NavbarLinks } from "@/sections/Navbar/components/NavbarLinks";
import { NavbarBookButton } from "@/sections/Navbar/components/NavbarBookButton";

export const NavbarMenu = () => {
  return (
    <div className="absolute text-base items-start backdrop-blur-[20px] bg-black box-border caret-transparent gap-x-5 hidden flex-col leading-4 min-h-0 min-w-0 opacity-0 gap-y-5 p-5 rounded-[10px] left-[0%] right-0 top-[108%] md:static md:text-xl md:[align-items:normal] md:bg-transparent md:gap-x-[normal] md:block md:flex-row md:leading-5 md:min-h-[auto] md:min-w-[auto] md:opacity-100 md:gap-y-[normal] md:p-0 md:rounded-none md:top-auto md:inset-x-auto">
      <NavbarLinks />
      <NavbarBookButton />
    </div>
  );
};
