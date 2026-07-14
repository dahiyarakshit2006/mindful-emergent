import { motion } from "framer-motion";
import { useLenis } from "lenis/react";
import { ArrowUpRight } from "lucide-react";

const TILES = [
  {
    id: "labels",
    n: "01",
    title: "Labels",
    lead: "PCB, Mylar, water-sensitive, chromo, piggyback, ultra-destructible vinyl & void.",
    accent: "#00AEEF",
    span: "md:col-span-8 md:row-span-2",
    img: "https://images.unsplash.com/photo-1569725730478-a2f4a1809bb4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHw0fHxwcm9kdWN0JTIwbGFiZWxzJTIwcm9sbHN8ZW58MHx8fHwxNzg0MDUzODY2fDA&ixlib=rb-4.1.0&q=85",
    target: "product-labels",
  },
  {
    id: "ribbons",
    n: "02",
    title: "Thermal Transfer Ribbons",
    lead: "Wax · Resin · Wax-Resin. Fasfilm & Fastrans stocks for barcode-critical print.",
    accent: "#EC008C",
    span: "md:col-span-4",
    target: "product-ribbons",
  },
  {
    id: "boxes",
    n: "03",
    title: "Rigid Boxes",
    lead: "Structural gift, cosmetics and electronics boxes with foil, deboss, spot-UV.",
    accent: "#FFC800",
    span: "md:col-span-4",
    img: "https://images.unsplash.com/photo-1570658847330-708619301f21?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2OTF8MHwxfHNlYXJjaHw0fHxwcmVtaXVtJTIwcHJvZHVjdCUyMHBhY2thZ2luZyUyMGJveGVzfGVufDB8fHx8MTc4NDA1Mzg2Nnww&ixlib=rb-4.1.0&q=85",
    target: "product-boxes",
  },
  {
    id: "film",
    n: "04",
    title: "Protective Film",
    lead: "PE, static-cling, low/high-tack. Screen, appliance & automotive surface guard.",
    accent: "#0A0A0A",
    span: "md:col-span-4",
    target: "product-film",
  },
  {
    id: "phone",
    n: "05",
    title: "Phone Packaging",
    lead: "Retail box + IMEI label + tamper film — engineered as one integrated system.",
    accent: "#EC008C",
    span: "md:col-span-4",
    img: "https://images.unsplash.com/photo-1760225529221-841ebb8e7867?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzNTl8MHwxfHNlYXJjaHw0fHxzbWFydHBob25lJTIwYm94JTIwcGFja2FnaW5nfGVufDB8fHx8MTc4NDA1Mzg2Nnww&ixlib=rb-4.1.0&q=85",
    target: "product-phone",
  },
  {
    id: "barcoding",
    n: "06",
    title: "Barcoding & Die-Cutting",
    lead: "Serialised barcode print + verification, plus precision die-cutting for any shape.",
    accent: "#00AEEF",
    span: "md:col-span-8",
    target: "product-barcoding",
  },
];

export default function Capabilities() {
  const lenis = useLenis();
  const go = (id) => {
    const el = document.getElementById(id);
    if (el && lenis) lenis.scrollTo(el, { offset: -80, duration: 1.4 });
  };
  return (
    <section
      id="capabilities"
      className="relative bg-[#F7F6F2] pt-24 md:pt-40 pb-16 md:pb-24"
      data-testid="capabilities-section"
    >
      <div className="max-w-[1500px] mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 md:mb-20">
          <div>
            <div className="font-mono-ind text-[11px] uppercase tracking-[0.22em] text-[#0A0A0A]/60 mb-4">
              §&nbsp;What we do
            </div>
            <h2 className="font-display font-bold tracking-[-0.035em] text-5xl md:text-7xl leading-[0.95] max-w-3xl text-[#0A0A0A]">
              Six disciplines.
              <br />
              One accountable partner.
            </h2>
          </div>
          <div className="font-mono-ind text-[11px] uppercase tracking-[0.22em] text-[#0A0A0A]/60 max-w-xs">
            Every capability is produced in-house from our Sector 63 facility — no outsourcing on the critical path.
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 md:auto-rows-[220px] border-t border-l border-black/10">
          {TILES.map((t, i) => (
            <motion.button
              key={t.id}
              onClick={() => go(t.target)}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
              data-testid={`capability-tile-${t.id}`}
              className={`mp-tile group text-left relative overflow-hidden border-r border-b border-black/10 p-6 md:p-8 bg-[#F7F6F2] hover:bg-[#0A0A0A] transition-colors duration-700 ${t.span}`}
            >
              {t.img && (
                <div className="absolute inset-0 opacity-15 group-hover:opacity-30 transition-opacity duration-700">
                  <img
                    src={t.img}
                    alt={t.title}
                    className="w-full h-full object-cover mp-tile-image"
                    loading="lazy"
                  />
                </div>
              )}
              <div className="relative flex flex-col justify-between h-full min-h-[180px]">
                <div className="flex items-start justify-between">
                  <span
                    className="font-mono-ind text-[11px] uppercase tracking-[0.22em] text-[#0A0A0A]/70 group-hover:text-[#F7F6F2]/70"
                  >
                    {t.n}
                  </span>
                  <span
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: t.accent }}
                  />
                </div>
                <div>
                  <h3 className="font-display text-3xl md:text-4xl font-semibold tracking-[-0.02em] text-[#0A0A0A] group-hover:text-[#F7F6F2] leading-[0.95]">
                    {t.title}
                  </h3>
                  <p className="mt-3 max-w-md text-sm md:text-base text-[#0A0A0A]/65 group-hover:text-[#F7F6F2]/70 leading-snug">
                    {t.lead}
                  </p>
                  <div className="mt-6 inline-flex items-center gap-2 font-mono-ind text-[11px] uppercase tracking-[0.22em] text-[#0A0A0A] group-hover:text-[#FFF200] transition-colors">
                    Deep-dive
                    <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
