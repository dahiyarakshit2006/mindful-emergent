import { motion } from "framer-motion";

const CHAPTERS = [
  {
    n: "01",
    tag: "Discipline",
    title: "Every micron is a decision.",
    body: "Adhesion, gloss, tack, and tear-strength are not accidents. We tune each material to your application, your climate, and your line-speed — then document it so batch #4,000 matches batch #1.",
  },
  {
    n: "02",
    tag: "Convergence",
    title: "Label, box and film — as one system.",
    body: "Most vendors sell one piece. We engineer the entire consumer-touch surface: the retail carton, the tamper seal, the barcode, the protective film for transit. One accountable partner for every layer.",
  },
  {
    n: "03",
    tag: "Trust",
    title: "Built for regulated buyers.",
    body: "ISO 9000 processes, IMEI-grade barcoding, void-evident constructions and pharma-ready synthetic stocks. When QA asks the hard questions, we already have the answer written down.",
  },
];

export default function Manifesto() {
  return (
    <section
      id="manifesto"
      className="relative bg-[#F7F6F2] py-24 md:py-40"
      data-testid="manifesto-section"
    >
      <div className="max-w-[1500px] mx-auto px-6 md:px-10">
        <div className="flex items-center justify-between mb-16 md:mb-24">
          <div className="font-mono-ind text-[11px] uppercase tracking-[0.22em] text-[#0A0A0A]/60">
            §&nbsp;Manifesto
          </div>
          <div className="font-mono-ind text-[11px] uppercase tracking-[0.22em] text-[#0A0A0A]/60 hidden md:block">
            Three chapters
          </div>
        </div>

        <div className="space-y-24 md:space-y-40">
          {CHAPTERS.map((c, i) => (
            <motion.article
              key={c.n}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="grid md:grid-cols-12 gap-6 md:gap-10 border-t border-black/10 pt-10 md:pt-14"
              data-testid={`manifesto-chapter-${c.n}`}
            >
              <div className="md:col-span-3 flex md:flex-col justify-between md:justify-start items-start gap-2">
                <div className="font-mono-ind text-[11px] uppercase tracking-[0.24em] text-[#0A0A0A]/50">
                  Chapter {c.n}
                </div>
                <div className="font-mono-ind text-[11px] uppercase tracking-[0.24em] text-[#0A0A0A]">
                  — {c.tag}
                </div>
              </div>
              <h3 className="md:col-span-6 font-display text-4xl md:text-6xl font-bold tracking-[-0.03em] leading-[0.98] text-[#0A0A0A]">
                {c.title}
              </h3>
              <p className="md:col-span-3 text-[#0A0A0A]/70 text-base md:text-lg leading-relaxed">
                {c.body}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
