import { motion } from "framer-motion";

const PILLARS = [
  {
    n: "01",
    k: "Innovative Technology",
    v: "Flexographic and digital hybrid presses, verified barcode print, and structural CAD for boxes — the equipment behind our tolerances.",
  },
  {
    n: "02",
    k: "Quality Assurance",
    v: "ISO 9000-aligned processes with documented in-line checks. What you receive matches what you signed off.",
  },
  {
    n: "03",
    k: "Customer Support",
    v: "Named account owner, on-shore in Noida. Not a ticket queue.",
  },
  {
    n: "04",
    k: "Customization",
    v: "Bespoke materials, adhesives, dies and finishes — MOQ flexibility from launch batches to full-scale.",
  },
];

const VALUES = [
  "Passion",
  "Integrity",
  "Innovation",
  "Service",
  "Team",
  "Discipline",
];

export default function WhyChooseUs() {
  return (
    <section
      id="why"
      className="relative bg-[#F7F6F2] py-24 md:py-40"
      data-testid="why-section"
    >
      <div className="max-w-[1500px] mx-auto px-6 md:px-10">
        <div className="mb-16 md:mb-20">
          <div className="font-mono-ind text-[11px] uppercase tracking-[0.22em] text-[#0A0A0A]/60 mb-4">
            §&nbsp;Why Mindful Prints
          </div>
          <h2 className="font-display font-bold tracking-[-0.035em] text-5xl md:text-7xl leading-[0.95] text-[#0A0A0A] max-w-4xl">
            Four pillars, held up by <em className="text-[#00AEEF] not-italic">six values</em>.
          </h2>
        </div>

        <div className="grid md:grid-cols-4 border-t border-l border-black/10 mb-20 md:mb-28">
          {PILLARS.map((p, i) => (
            <motion.div
              key={p.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: i * 0.08 }}
              className="border-r border-b border-black/10 p-8 md:p-10 min-h-[300px] flex flex-col justify-between bg-[#F7F6F2]"
              data-testid={`pillar-${p.n}`}
            >
              <div className="font-mono-ind text-[11px] uppercase tracking-[0.24em] text-[#0A0A0A]/50">
                {p.n}
              </div>
              <div>
                <h3 className="font-display text-2xl md:text-3xl font-semibold tracking-tight text-[#0A0A0A] leading-tight mb-4">
                  {p.k}
                </h3>
                <p className="text-sm md:text-base text-[#0A0A0A]/65 leading-snug">
                  {p.v}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-x-8 gap-y-5">
          <div className="font-mono-ind text-[11px] uppercase tracking-[0.22em] text-[#0A0A0A]/60">
            Our six values →
          </div>
          {VALUES.map((v, i) => (
            <motion.span
              key={v}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              className="font-display text-2xl md:text-4xl font-semibold tracking-tight text-[#0A0A0A]"
              data-testid={`value-${v.toLowerCase()}`}
            >
              {v}
              <span className="text-[#EC008C]">.</span>
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
