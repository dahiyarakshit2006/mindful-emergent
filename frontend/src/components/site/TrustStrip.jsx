import { motion } from "framer-motion";

const ITEMS = [
  { k: "18+", v: "Years combined trade experience" },
  { k: "ISO", v: "9000-standard processes" },
  { k: "2023", v: "Established, Sector 63 Noida" },
  { k: "JP · KR", v: "Trusted by tech leaders" },
  { k: "8", v: "Industries actively served" },
];

export default function TrustStrip() {
  return (
    <section
      className="relative border-y border-black/10 bg-[#F7F6F2]"
      data-testid="trust-strip"
    >
      <div className="max-w-[1500px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-2 md:grid-cols-5">
          {ITEMS.map((it, i) => (
            <motion.div
              key={it.k}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className={`py-8 md:py-10 px-4 md:px-6 ${
                i !== ITEMS.length - 1 ? "md:border-r border-black/10" : ""
              } ${i < 3 ? "border-b md:border-b-0 border-black/10" : ""}`}
              data-testid={`trust-item-${i}`}
            >
              <div className="font-display text-3xl md:text-4xl font-bold tracking-tight text-[#0A0A0A]">
                {it.k}
              </div>
              <div className="mt-2 font-mono-ind text-[10.5px] uppercase tracking-[0.2em] text-[#0A0A0A]/60 leading-relaxed">
                {it.v}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
