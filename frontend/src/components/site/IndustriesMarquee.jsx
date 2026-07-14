import { motion } from "framer-motion";
import {
  Pill,
  ShoppingBag,
  UtensilsCrossed,
  Wine,
  Droplets,
  Sprout,
  Signal,
  Plane,
} from "lucide-react";

const INDUSTRIES = [
  { k: "Pharma", d: "Compliance labels, tamper-evident closures, cold-chain stocks.", icon: Pill },
  { k: "FMCG", d: "Shelf-ready cartons, high-volume label runs, seasonal SKUs.", icon: ShoppingBag },
  { k: "Food & Beverage", d: "Freezer-grade adhesives, high-moisture BOPP, chilled-shelf print.", icon: UtensilsCrossed },
  { k: "Liquor", d: "Textured stocks, foil-stamped premium labels, gift boxing.", icon: Wine },
  { k: "Lubricants", d: "Chemical-resistant synthetics, high-tack drum labels.", icon: Droplets },
  { k: "Agro-Chemical", d: "Chemical-resistant PET, multi-layer piggyback for regulations.", icon: Sprout },
  { k: "Telecom", d: "IMEI barcode labels, Mylar and PCB constructions.", icon: Signal },
  { k: "Airlines", d: "Baggage tags, safety labels, cabin-service consumable packaging.", icon: Plane },
];

const MARQUEE = [
  "Pharma", "FMCG", "Food & Beverage", "Liquor",
  "Lubricants", "Agro-Chemical", "Telecom", "Airlines",
];

export default function IndustriesMarquee() {
  return (
    <section
      id="industries"
      className="relative bg-[#F7F6F2] py-24 md:py-40 overflow-hidden"
      data-testid="industries-section"
    >
      {/* Editorial marquee band */}
      <div className="relative border-y border-black/10 py-10 md:py-16 mb-20 md:mb-28">
        <div className="mp-marquee-track font-display font-bold text-[#0A0A0A] text-[12vw] md:text-[10vw] leading-[0.9] whitespace-nowrap tracking-[-0.04em]">
          {[0, 1].map((r) => (
            <div key={r} className="flex items-center pr-24">
              {MARQUEE.map((m, i) => (
                <span key={`${r}-${i}`} className="flex items-center pr-16">
                  <span
                    className={
                      i % 2 === 0 ? "mp-outline" : "text-[#0A0A0A]"
                    }
                  >
                    {m}
                  </span>
                  <span
                    className={`inline-block w-4 h-4 rounded-full mx-10 ${
                      i % 3 === 0
                        ? "bg-[#EC008C]"
                        : i % 3 === 1
                        ? "bg-[#00AEEF]"
                        : "bg-[#FFC800]"
                    }`}
                  />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-[1500px] mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <div className="font-mono-ind text-[11px] uppercase tracking-[0.22em] text-[#0A0A0A]/60 mb-4">
              §&nbsp;Industries Served
            </div>
            <h2 className="font-display font-bold tracking-[-0.035em] text-5xl md:text-6xl leading-[0.95] text-[#0A0A0A] max-w-3xl">
              Regulated. Retail. Repeatable.
            </h2>
          </div>
          <div className="font-mono-ind text-[11px] uppercase tracking-[0.22em] text-[#0A0A0A]/60 max-w-xs">
            Eight verticals — each with material, adhesive, and compliance choices matched to their reality.
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-black/10">
          {INDUSTRIES.map((it, i) => {
            const Icon = it.icon;
            return (
              <motion.div
                key={it.k}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: i * 0.05 }}
                className="group border-r border-b border-black/10 p-6 md:p-8 min-h-[220px] flex flex-col justify-between hover:bg-[#0A0A0A] transition-colors duration-500"
                data-testid={`industry-${it.k.toLowerCase().replace(/[^a-z]/g, "-")}`}
              >
                <div className="flex items-center justify-between">
                  <Icon
                    size={22}
                    className="text-[#0A0A0A] group-hover:text-[#FFF200] transition-colors"
                    strokeWidth={1.5}
                  />
                  <span className="font-mono-ind text-[10px] uppercase tracking-[0.22em] text-[#0A0A0A]/40 group-hover:text-[#F7F6F2]/50">
                    0{i + 1}
                  </span>
                </div>
                <div>
                  <h3 className="font-display text-2xl md:text-3xl font-semibold tracking-tight text-[#0A0A0A] group-hover:text-[#F7F6F2]">
                    {it.k}
                  </h3>
                  <p className="mt-2 text-sm text-[#0A0A0A]/65 group-hover:text-[#F7F6F2]/70 leading-snug">
                    {it.d}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
