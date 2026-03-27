import { useState, useEffect } from "react";
import { NavbarLogo } from "@/sections/Navbar/components/NavbarLogo";

const NAV_LINKS = [
  { label: "Radionica", href: "#about" },
  { label: "Projekti", href: "#projects" },
  { label: "Usluge", href: "#services" },
  { label: "Česta pitanja", href: "#faq" },
];

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] w-full">
      <div className="px-5 pt-5 pb-3">
        <div style={{ 
          maxWidth: '1296px', 
          margin: '0 auto',
          padding: '12px 20px',
          backgroundColor: scrolled ? '#000' : 'rgba(255, 255, 255, 0.1)',
          borderRadius: '12px',
          border: scrolled ? 'none' : '1px solid rgba(255, 255, 255, 0.2)',
        }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            {/* Logo */}
            <NavbarLogo />

            {!isMobile && (
              /* Desktop Navigation + CTA - Grouped together, pushed right */
              <div style={{ marginLeft: 'auto', display: 'flex', gap: '34px', alignItems: 'center' }}>
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    style={{ 
                      color: '#fff', 
                      fontSize: '18px',
                      lineHeight: '25.2px',
                      textDecoration: 'none'
                    }}
                    className="hover:text-yellow-600 transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                ))}
                {/* Desktop CTA Button */}
                <a
                  href="tel:+381607120698"
                  className="bg-white hover:bg-yellow-600 text-black font-bold px-6 py-3 rounded transition-colors duration-300"
                  style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    fontSize: '14px',
                    lineHeight: '17.6px'
                  }}
                >
                  Pozovite Me
                </a>
              </div>
            )}

            {isMobile && (
              /* Mobile Menu Toggle Button */
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="bg-white rounded p-2 hover:bg-neutral-100 transition-colors flex items-center justify-center"
                style={{ width: '36px', height: '36px', marginLeft: 'auto' }}
                aria-label={menuOpen ? "Close menu" : "Open menu"}
              >
                {menuOpen ? (
                  // X Close Button - SVG Icon
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 6L18 18M6 18L18 6" stroke="#000" strokeWidth="2.5" strokeLinecap="round"/>
                  </svg>
                ) : (
                  // Hamburger Icon - SVG Icon
                  <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.5 2H16.5M1.5 7H16.5M1.5 12H16.5" stroke="#000" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                )}
              </button>
            )}
          </div>

          {isMobile && menuOpen && (
            /* Mobile Menu - Separated from navbar */
            <div style={{ 
              position: 'absolute', 
              top: '100%', 
              left: '20px',
              right: '20px',
              backgroundColor: '#000',
              padding: '20px',
              borderRadius: '12px',
              zIndex: 99
            }}>
              {NAV_LINKS.map((link, index) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block hover:text-yellow-600 transition-colors"
                  style={{ 
                    color: '#fff', 
                    fontSize: '18px',
                    lineHeight: '25.2px',
                    textDecoration: 'none',
                    padding: '12px 0',
                    borderBottom: index < NAV_LINKS.length - 1 ? '1px solid rgba(255, 255, 255, 0.2)' : 'none'
                  }}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="tel:+381607120698"
                className="block bg-white hover:bg-yellow-600 text-black font-bold px-6 py-3.5 rounded transition-colors duration-300 mt-4"
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  fontSize: '18px',
                  lineHeight: '25.2px'
                }}
              >
                Pozovite me
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};