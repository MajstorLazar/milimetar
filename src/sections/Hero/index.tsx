import { useState } from "react";
import { HeroContent } from "./components/HeroContent";

const faqItems = [
  {
    q: "Koje usluge nudite za stambene enterijerе?",
    a: "Nudim izradu nameštaja po meri u Novom Sadu i okolini, što uključuje planiranje prostora, izbor nameštaja, dizajn i konsultacije o materijalima.",
  },
  {
    q: "Da li možete da ostvarite sve što zamislim?",
    a: "Svaki projekat počinjemo detaljnom konsultacijom kako bismo razumeli vašu ideju, preferencije i estetske ciljeve - zatim izrađujemo prilagođeni dizajn koji stavlja vaš životni stil u centar.",
  },
  {
    q: "Možete li raditi sa mojim postojećim nameštajem ili dekorom?",
    a: "Apsolutno. Možemo raditi uz vaše postojeće komade, integrisati ih u nov koherentan dizajn, predložiti unapređenja gde je to potrebno ili uraditi reparaciju i osvežavanje.",
  },
  {
    q: "Koliko dugo traje projekat?",
    a: "Rokovi variraju u zavisnosti od obima. Jedan manji projekat obično zahteva 1–2 nedelje, dok izrada nekih većih komada kao kompletne kuhinje ili dnevne sobe 1 mesec uključujući nabavku i ugradnju.",
  },
  {
    q: "Da li se bavite i dizajnom i izvođenjem radova?",
    a: "Da - upravljam celim životnim ciklusom projekta od koncepta do konačnog otkrivanja, koordinišući sa pouzdanim dobavljačima materijala za besprekorno iskustvo.",
  },
];

const services = [
  {
    num: "01",
    title: "Planiranje prostora i optimizacija rasporeda",
    desc: "Transformišite svoje stambene prostore planiranim rasporedom koji poboljšava funkcionalnost, uzdižе udobnost i stvara prirodan tok - pretvara svaki kutak u prostor koji deluje lepo i svrsishodono.",
    img: "https://c.animaapp.com/mn6pgklgyCd5dZ/assets/69188175b6ca75d20e5cf2eb_thumb-1.webp",
    href: "#services",
  },
  {
    num: "02",
    title: "Nameštaj po meri i izbor materijala",
    desc: "Izrađujem nameštaj po meri i biram materijale po vašoj želji koji savršeno dopunjuju vaš prostor. Spajamo lepotu, udobnost i funkcionalnost za bezvremenski personalizovan enterijer.",
    img: "https://c.animaapp.com/mn6pgklgyCd5dZ/assets/6919945d1f65c4e67a7baa6d_thumb-2.webp",
    href: "#services",
  },
  {
    num: "03",
    title: "Ugradnja izrađenog nameštaja",
    desc: "Po završetku ostvarenja vaše ideje moguća je i dostava i ugradnja nameštaja - sa Vama od početka do kraja procesa. ",
    img: "https://c.animaapp.com/mn6pgklgyCd5dZ/assets/6919947bfe1a30d3f0d4874c_thumb-3.webp",
    href: "#services",
  },
  {
    num: "04",
    title: "3D vizualizacija i dizajn po meri",
    desc: "Na početku svakog projekta dobićete 3D crtež vašeg novog nameštaja, omogućavajući vam da jasno i pouzdano vidite lepotu ostvarenja vaše zamisli.",
    img: "https://c.animaapp.com/mn6pgklgyCd5dZ/assets/6919949decfe9dd8e3ff9df2_thumb-4.webp",
    href: "#services",
  },
];

export const Hero = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [openService, setOpenService] = useState<number | null>(null);

  const toggleFaq = (i: number) => {
    setOpenFaq(openFaq === i ? null : i);
  };

  const toggleService = (i: number) => {
    setOpenService(openService === i ? null : i);
  };

  return (
    <div className="text-base box-border caret-transparent leading-4 md:text-xl md:leading-5">

      {/* ── HERO BANNER ── */}
      <div
        id="hero"
        className="relative text-base box-border caret-transparent flex flex-col h-[1000px] justify-end leading-4 pt-[250px] pb-10 md:text-xl md:leading-5 md:pt-[420px] md:pb-[120px]"
      >
        <div className="text-base box-border caret-transparent leading-4 min-h-[auto] min-w-[auto] px-5 md:text-xl md:leading-5">
          <div className="text-base box-border caret-transparent leading-4 max-w-[1296px] w-full mx-auto md:text-xl md:leading-5">
          <HeroContent />
          </div>
        </div>
        <div className="absolute text-base items-center box-border caret-transparent flex h-full justify-center leading-4 w-full inset-[0%] md:text-xl md:leading-5">
          <div className="text-base items-center box-border caret-transparent flex h-full justify-center leading-4 min-h-[auto] min-w-[auto] w-full md:text-xl md:leading-5">
            <img
              src="https://c.animaapp.com/mn6pgklgyCd5dZ/assets/69158242d3a4d61ac864b4f6_backgraound-1.webp"
              alt="bg-1"
              className="text-base box-border caret-transparent h-full leading-4 max-w-full min-h-[auto] min-w-[auto] object-cover w-full md:text-xl md:leading-5"
            />
          </div>
        </div>
      </div>

      {/* ── ABOUT ── */}
      <div
        id="about"
        className="text-base box-border caret-transparent leading-4 overflow-hidden pt-20 pb-10 md:text-xl md:leading-5 md:pt-[150px] md:pb-[75px]"
      >
        <div className="text-base box-border caret-transparent leading-4 px-5 md:text-xl md:leading-5">
          <div className="text-base box-border caret-transparent leading-4 max-w-[1296px] w-full mx-auto md:text-xl md:leading-5">
            <div className="text-base items-start box-border caret-transparent gap-x-0 flex flex-col justify-between leading-4 gap-y-0 mb-10 md:text-xl md:gap-x-5 md:flex-row md:leading-5 md:gap-y-5 md:mb-20">
              <div className="text-base items-start box-border caret-transparent gap-x-5 flex-col justify-between leading-4 min-h-[auto] min-w-[auto] gap-y-5 md:text-xl md:items-end md:gap-x-[30px] md:flex-row md:leading-5 md:gap-y-[30px]">
                <div className="text-base box-border caret-transparent leading-4 mb-[15px] md:text-xl md:leading-5">
                  <div className="text-yellow-800 text-base box-border caret-transparent leading-[20.8px] uppercase md:text-xl md:leading-[26px]">
                    O MENI
                  </div>
                </div>
              </div>
              <div className="text-base box-border caret-transparent leading-4 max-w-[880px] min-h-[auto] min-w-[auto] w-full md:text-xl md:leading-5 reveal">
                <div className="text-base box-border caret-transparent leading-4 mb-[30px] md:text-xl md:leading-5 md:mb-[50px]">
                  <p className="text-2xl font-bold box-border caret-transparent leading-[28.8px] md:text-5xl md:leading-[57.6px]">
                    Ne koristim šablone. Svaka spojnica, svaki završni sloj i svaka ivica prolaze kroz ruke majstora. To je razlika između 'može' i 'savršeno'.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Image strip */}
        <div className="text-base box-border caret-transparent leading-4 mx-5 md:text-xl md:leading-5 md:mx-0 overflow-hidden">
          <div className="flex gap-x-5 md:gap-x-6">
            {[
              "https://c.animaapp.com/mn6pgklgyCd5dZ/assets/692b17869c6572f49a217381_about-thumb-1.webp",
              "https://c.animaapp.com/mn6pgklgyCd5dZ/assets/691592bc6d8a45976bcde5cd_thumb-2.webp",
              "https://c.animaapp.com/mn6pgklgyCd5dZ/assets/691592bc2ea14d2f41f4f6c5_thumb-3.webp",
              "https://c.animaapp.com/mn6pgklgyCd5dZ/assets/691592bcf160b4adf02795a9_thumb-4.webp",
              "https://c.animaapp.com/mn6pgklgyCd5dZ/assets/692b17867a8721db61f649d9_about-thumb-2.webp",
            ].map((src, i) => (
              <div
                key={i}
                className="shrink-0 h-[250px] w-[200px] overflow-hidden rounded-[5px] md:h-auto md:w-1/5 hover:scale-[1.02] transition-transform duration-500"
              >
                <img
                  src={src}
                  alt={`thumb-${i + 1}`}
                  className="h-full w-full object-cover rounded-[5px] md:min-h-[430px] md:max-h-[750px]"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── PROJECTS ── */}
      <div
        id="projects"
        className="text-base box-border caret-transparent leading-4 py-10 md:text-xl md:leading-5 md:py-[75px]"
      >
        <div className="text-base box-border caret-transparent leading-4 px-5 md:text-xl md:leading-5">
          <div className="text-base box-border caret-transparent leading-4 max-w-[1296px] w-full mx-auto md:text-xl md:leading-5">
            <div className="text-base items-start box-border caret-transparent gap-x-5 flex flex-col justify-between leading-4 gap-y-5 mb-10 md:text-xl md:items-end md:gap-x-[30px] md:flex-row md:leading-5 md:gap-y-[30px] md:mb-20">
              <div className="reveal">
                <div className="text-base box-border leading-4 mb-[15px] md:text-xl md:leading-5">
                  <div className="text-yellow-800 text-base box-border leading-[20.8px] uppercase md:text-xl md:leading-[26px]">
                    MOJI PROJEKTI
                  </div>
                </div>
                <h2 className="text-[26px] font-bold box-border leading-[30.16px] md:text-[64px] md:leading-[74.24px]">
                  Odabrani Projekti
                </h2>
              </div>
              <div className="text-base box-border caret-transparent flex leading-4 min-h-[auto] min-w-[auto] md:text-xl md:leading-5">
              </div>
            </div>
            <div
              role="list"
              className="text-base box-border caret-transparent gap-x-5 grid auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] leading-4 gap-y-5 md:text-xl md:gap-x-6 md:grid-cols-[1fr_1fr] md:leading-5 md:gap-y-6"
            >
              {[
                { href: "#projects", img: "https://c.animaapp.com/mn6pgklgyCd5dZ/assets/69178b09aa56e11bb14ac785_thumb-1.webp", title: "Moćni mali sto za studio apartman" },
                { href: "#projects", img: "https://c.animaapp.com/mn6pgklgyCd5dZ/assets/69199670c079ee11bf97d6b5_thumb-2.webp", title: "Šarmantni klub sto za dnevnu sobu" },
                { href: "#projects", img: "https://c.animaapp.com/mn6pgklgyCd5dZ/assets/6919969d44e8b10312ed6ff5_thumb-3.webp", title: "Sto za izvršnu kancelariju" },
                { href: "#projects", img: "https://c.animaapp.com/mn6pgklgyCd5dZ/assets/691996c5d8b594e5e8f984f8_thumb-4.webp", title: "Klupica uklopljena u okruženje" },
              ].map((p, i) => (
                <div key={i} role="listitem" className="reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
                  <div className="relative text-base box-border caret-transparent leading-4 md:text-xl md:leading-5 group overflow-hidden rounded-[5px]">
                    <a href={p.href} onClick={(e) => e.preventDefault()} className="relative block leading-4 max-w-full overflow-hidden rounded-[5px]">
                      <img
                        src={p.img}
                        alt={p.title}
                        className="inline-block leading-4 max-w-full w-full transition-transform duration-500 group-hover:scale-105"
                      />
                    </a>
                    <div className="absolute text-base backdrop-blur-[30px] bg-white/20 box-border caret-transparent leading-4 max-w-[260px] text-center translate-x-[-50%] translate-y-[-50%] w-full z-[99] px-[18px] py-3 rounded left-2/4 top-2/4 transition-all duration-300 group-hover:bg-white/30 md:max-w-[282px]">
                      <a href={p.href} onClick={(e) => e.preventDefault()} className="font-bold inline-block leading-4 max-w-full">
                        <p className="text-white text-base box-border leading-[20.8px] md:text-xl md:leading-[26px]">{p.title}</p>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── SERVICES ── */}
      <div
        id="services"
        className="text-base bg-yellow-800 box-border caret-transparent leading-4 my-10 py-20 md:text-xl md:leading-5 md:my-[75px] md:py-[150px]"
      >
        <div className="text-base box-border caret-transparent leading-4 px-5 md:text-xl md:leading-5">
          <div className="text-base box-border caret-transparent leading-4 max-w-[1296px] w-full mx-auto md:text-xl md:leading-5">
            <div className="text-base items-start box-border caret-transparent gap-x-5 flex flex-col justify-between leading-4 gap-y-5 mb-10 md:text-xl md:items-end md:gap-x-[30px] md:flex-row md:leading-5 md:gap-y-[30px] md:mb-20">
              <div className="reveal">
                <div className="text-base box-border leading-4 mb-[15px] md:text-xl md:leading-5">
                  <div className="text-white text-base box-border leading-[20.8px] uppercase md:text-xl md:leading-[26px]">MOJE USLUGE</div>
                </div>
                <h2 className="text-white text-[26px] font-bold box-border leading-[30.16px] md:text-[64px] md:leading-[74.24px]">
                  Odabrane Usluge
                </h2>
              </div>
            </div>
            <div role="list" className="flex flex-col gap-y-5 md:gap-y-[30px]">
              {services.map((svc, i) => (
                <div key={i} role="listitem" className="reveal" style={{ transitionDelay: `${i * 0.08}s` }}>
                  <div className="text-base box-border leading-4 pb-5 border-b border-white/20 md:pb-[30px]">
                    <div className="text-base box-border leading-4 z-[1] overflow-hidden rounded-[10px]">
                      {/* Header row */}
                      <button
                        onClick={() => toggleService(i)}
                        className="w-full relative text-base items-center box-border gap-x-5 flex justify-between leading-4 gap-y-5 z-[2] pt-5 pb-[5px] px-5 text-left md:items-start md:pt-10 md:pb-[15px] md:px-10 group"
                      >
                        <div className="text-base items-start box-border gap-x-[5px] flex flex-col justify-start leading-4 min-h-[auto] min-w-[auto] gap-y-[5px] md:items-center md:gap-x-[140px] md:flex-row md:gap-y-[140px]">
                          <p className="text-white text-lg box-border leading-[23.4px] min-h-[auto] min-w-[auto] md:text-2xl md:leading-[31.2px]">
                            {svc.num}
                          </p>
                          <span className="text-white text-xl font-bold box-border block leading-[26px] min-h-[auto] min-w-[auto] md:text-[32px] md:leading-[41.6px] group-hover:text-white/80 transition-colors duration-200">
                            {svc.title}
                          </span>
                        </div>
                        <div className="relative shrink-0 w-3 h-3 md:w-[15px] md:h-[15px]">
                          <span
                            className={`absolute block w-full h-[1.5px] bg-white top-1/2 left-0 transition-transform duration-300 ${
                              openService === i ? "rotate-0" : "rotate-0"
                            }`}
                          />
                          <span
                            className={`absolute block w-[1.5px] bg-white left-1/2 top-0 h-full transition-all duration-300 origin-center ${
                              openService === i ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
                            }`}
                          />
                        </div>
                      </button>
                      {/* Expandable content */}
                      <div
                        className="relative text-base box-border leading-4 z-[2] overflow-hidden transition-all duration-500 ease-in-out"
                        style={{ maxHeight: openService === i ? "600px" : "0px" }}
                      >
                        <div className="text-base bg-white box-border leading-4 px-5 md:px-10">
                          <div className="text-base box-border leading-4 max-w-[420px] w-full mx-auto pt-[5px] md:max-w-[826px] md:pt-[15px]">
                            <div className="text-base box-border leading-4 mb-5 md:mb-[30px]">
                              <p className="text-base box-border leading-[22.4px] md:text-lg md:leading-[25.2px]">{svc.desc}</p>
                            </div>
                            <div className="text-base box-border leading-4 md:text-xl md:leading-5">
                              <img
                                src={svc.img}
                                alt={svc.title}
                                className="inline-block leading-4 max-w-full mb-5 rounded-[5px] w-full md:mb-10"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── PROCESS ── */}
      <div
        id="process"
        className="relative text-base box-border caret-transparent leading-4 py-10 md:text-xl md:leading-5 md:py-[75px]"
      >
        <div className="text-base box-border caret-transparent leading-4 px-5 md:text-xl md:leading-5">
          <div className="text-base box-border caret-transparent leading-4 max-w-[1296px] w-full mx-auto md:text-xl md:leading-5">
            <div className="text-center mb-10 md:mb-20 reveal">
              <div className="text-yellow-800 text-base uppercase leading-[20.8px] mb-[15px] md:text-xl md:leading-[26px]">NAŠ PROCES</div>
              <h2 className="text-[26px] font-bold leading-[30.16px] md:text-[64px] md:leading-[74.24px]">Proces Izrade</h2>
            </div>
            <div className="grid grid-cols-1 gap-5 md:flex md:flex-nowrap md:gap-x-6">
              {[
                { num: "01", title: "Početna konsultacija", desc: "Razgovaramo o vašoj viziji, životnom stilu i preferencijama kako bismo kreirali jasne smernice za dizajn nameštaja." },
                { num: "02", title: "Koncept i planiranje", desc: "Izrađujemo skice, rasporede i 3D preglede kako bismo oživeli vaše ideje." },
                { num: "03", title: "Realizacija dizajna", desc: "Realizujemo dizajn s preciznošću, kvalitetnim materijalima i pažnjom na svaki detalj." },
                { num: "04", title: "Finalna prezentacija i predaja", desc: "Prolazimo kroz završen nameštaj, osiguravajući da svaki element odražava vaš stil i udobnost." },
              ].map((step, i) => (
                <div
                  key={i}
                  className="reveal bg-yellow-800 flex flex-col items-start justify-start border border-neutral-100 p-5 rounded-[10px] md:max-w-[306px] md:px-6 md:py-[30px] hover:bg-yellow-700 transition-all duration-300 hover:-translate-y-1"
                  style={{ transitionDelay: `${i * 0.1}s` }}
                >
                  <div className="flex items-center justify-center h-10 w-10 border border-white rounded-full mb-[60px] md:h-[42px] md:w-[42px] md:mb-[120px]">
                    <p className="text-white text-base font-bold leading-[22.4px] md:text-lg md:leading-[25.2px]">{step.num}</p>
                  </div>
                  <p className="text-white text-lg font-bold leading-[21.6px] mb-[15px] md:text-2xl md:leading-[28.8px]">{step.title}</p>
                  <p className="text-white text-base leading-[22.4px] md:text-lg md:leading-[25.2px]">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── LUXURY BANNER ── */}
      <div
        className="text-base bg-fixed bg-[url('https://cdn.prod.website-files.com/69155df8219de2cb7924d494/6916082221c3edfa3b60b0a9_bg-3.webp')] bg-no-repeat bg-cover box-border caret-transparent leading-4 bg-center my-10 pt-[280px] pb-10 md:text-xl md:leading-5 md:my-[75px] md:pt-[580px] md:pb-[50px]"
      >
        <div className="text-base box-border caret-transparent leading-4 px-5 md:text-xl md:leading-5">
          <div className="text-base box-border caret-transparent leading-4 max-w-[1296px] w-full mx-auto md:text-xl md:leading-5">
            <div className="text-base items-start box-border caret-transparent gap-x-[30px] flex flex-col justify-between leading-4 gap-y-[30px] md:text-xl md:items-end md:flex-row md:leading-5">
              <div className="text-base box-border caret-transparent flex flex-col leading-4 max-w-[792px] min-h-[auto] min-w-[auto] gap-y-0 w-full md:text-xl md:leading-5">
                <div className="text-white text-base box-border leading-[20.8px] uppercase mb-[15px] md:text-xl md:leading-[26px]">
                  SVAKI MILIMETAR JE VAŽAN
                </div>
                <h2
                  aria-label="Utonite u novi stil iz vaše mašte koji spaja "
                  className="text-white text-[26px] font-bold box-border leading-[30.16px] md:text-[64px] md:leading-[74.24px] reveal"
                >
                  Utonite u novi stil iz vaše mašte koji spaja ideju sa preciznom izradom
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* ── FAQ ── */}
      <div
        id="faq"
        className="text-base box-border caret-transparent leading-4 py-10 md:text-xl md:leading-5 md:py-[75px]"
      >
        <div className="text-base box-border caret-transparent leading-4 px-5 md:text-xl md:leading-5">
          <div className="text-base box-border caret-transparent leading-4 max-w-[1296px] w-full mx-auto md:text-xl md:leading-5">
            <div className="mb-10 md:mb-20 reveal">
              <div className="text-yellow-800 text-base box-border leading-[20.8px] uppercase mb-[15px] md:text-xl md:leading-[26px]">PITANJA I ODGOVORI</div>
              <h2 className="text-[26px] font-bold box-border leading-[30.16px] md:text-[64px] md:leading-[74.24px]">Direktni Odgovori</h2>
            </div>
            <div className="gap-x-6 flex flex-col leading-4 max-w-[920px] gap-y-6 w-full mx-auto md:text-xl md:leading-5">
              {faqItems.map((item, i) => (
                <div
                  key={i}
                  className="reveal bg-neutral-100 box-border leading-4 min-h-[auto] min-w-[auto] p-5 rounded-[5px] md:p-6 hover:shadow-md transition-shadow duration-300"
                  style={{ transitionDelay: `${i * 0.08}s` }}
                >
                  <button
                    onClick={() => toggleFaq(i)}
                    className="w-full items-center box-border gap-x-5 flex justify-between leading-4 gap-y-5 text-left"
                  >
                    <h2 className="text-xl font-bold box-border leading-6 min-h-[auto] min-w-[auto] md:text-[32px] md:leading-[38.4px]">
                      {item.q}
                    </h2>
                    <div className="relative shrink-0 h-[18px] w-[18px] z-[1]">
                      <div
                        className={`absolute bg-black h-full w-0.5 left-2/4 top-2/4 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
                          openFaq === i ? "opacity-0 rotate-90" : "opacity-100"
                        }`}
                      />
                      <div className="absolute bg-black h-0.5 w-full left-2/4 top-2/4 -translate-x-1/2 -translate-y-1/2" />
                    </div>
                  </button>
                  <div
                    className="overflow-hidden transition-all duration-400 ease-in-out"
                    style={{ maxHeight: openFaq === i ? "300px" : "0px", opacity: openFaq === i ? 1 : 0 }}
                  >
                    <p className="text-base box-border leading-[20.8px] pt-5 md:text-lg md:leading-[23.4px] md:pt-6">
                      {item.a}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};
