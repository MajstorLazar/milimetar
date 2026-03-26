const pageLinks = [
  { label: "Početna", href: "#hero" },
  { label: "Projekti", href: "#projects" },
  { label: "Usluge", href: "#services" },
  { label: "Blog", href: "#blog" },
  { label: "Prodavnica", href: "#" },
  { label: "Česta pitanja", href: "#faq" },
];

const utilityLinks = [
  { label: "Vodič za stil", href: "#" },
  { label: "Licence", href: "#" },
  { label: "Izmene", href: "#" },
];

const innerLinks = [
  { label: "Detalji projekta", href: "#projects" },
  { label: "Detalji usluge", href: "#services" },
  { label: "Detalji bloga", href: "#blog" },
  { label: "Detalji proizvoda", href: "#" },
  { label: "404 Nije pronađeno", href: "#" },
];

const LinkGroup = ({ title, links }: { title: string; links: { label: string; href: string }[] }) => (
  <div className="text-base box-border caret-transparent leading-4 min-h-[auto] min-w-[auto] reveal">
    <div className="text-base box-border caret-transparent leading-4 mb-3 md:text-xl md:leading-5">
      <p className="text-white/60 text-base box-border caret-transparent leading-[22.4px] md:text-xl md:leading-7">{title}</p>
    </div>
    <div className="text-base box-border caret-transparent gap-x-3 flex flex-col leading-4 gap-y-3 md:text-xl md:leading-5">
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          onClick={(e) => {
            if (link.href.startsWith("#") && link.href !== "#") {
              e.preventDefault();
              const el = document.querySelector(link.href);
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }
          }}
          className="text-white text-base box-border caret-transparent block h-5 leading-[19.2px] max-w-full min-h-[auto] min-w-[auto] overflow-hidden md:text-xl md:h-6 md:leading-6 hover:text-yellow-500 transition-colors duration-200"
        >
          {link.label}
        </a>
      ))}
    </div>
  </div>
);
export const FooterLinks = () => {
  return (
    <div className="text-base items-start box-border caret-transparent gap-x-5 grid shrink-0 auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] leading-4 max-w-[940px] min-h-[auto] min-w-[auto] gap-y-5 w-full md:text-xl md:[align-items:normal] md:gap-x-4 md:grid-cols-[1fr_1fr_1fr] md:leading-5 md:gap-y-4">
      <LinkGroup title="Stranice" links={pageLinks} />
      <LinkGroup title="Korisno" links={utilityLinks} />
      <LinkGroup title="Unutrašnje stranice" links={innerLinks} />
    </div>
  );
};