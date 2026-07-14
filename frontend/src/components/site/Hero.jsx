import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import { useLenis } from "lenis/react";

const HEADLINE_LINES = [
  "Precision Printing",
  "& Protective",
  "Packaging.",
];

const revealParent = {
  initial: {},
  animate: { transition: { staggerChildren: 0.12, delayChildren: 0.25 } },
};
const revealChild = {
  initial: { y: "110%" },
  animate: {
    y: "0%",
    transition: { duration: 1.2, ease: [0.19, 1, 0.22, 1] },
  },
};

export default function Hero() {
  const ref = useRef(null);
  const lenis = useLenis();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  const yImg = useTransform(scrollYProgress, [0, 1], ["0%", "-14%"]);
  const opacityImg = useTransform(scrollYProgress, [0, 0.8], [1, 0.4]);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el && lenis) lenis.scrollTo(el, { offset: -60, duration: 1.6 });
    else if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-[100svh] w-full overflow-hidden bg-[#F7F6F2] pt-[72px]"
      data-testid="hero-section"
    >
      {/* CMYK offset dot field */}
      <motion.div
        style={{ y: yBg }}
        className="absolute inset-0 mp-dotfield pointer-events-none"
        aria-hidden="true"
      />
      <div className="absolute inset-0 mp-grain pointer-events-none" aria-hidden="true" />

      {/* Grid framing lines */}
      <div className="absolute inset-x-0 top-[72px] h-px bg-black/10" />
      <div className="absolute left-6 md:left-10 top-[72px] bottom-0 w-px bg-black/8 hidden md:block" />
      <div className="absolute right-6 md:right-10 top-[72px] bottom-0 w-px bg-black/8 hidden md:block" />

      <div className="relative max-w-[1500px] mx-auto px-6 md:px-10 pt-10 md:pt-14">
        {/* Meta row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex items-center justify-between font-mono-ind text-[11px] uppercase tracking-[0.22em] text-[#0A0A0A]/60 mb-14 md:mb-20"
        >
          <span data-testid="hero-meta-index">Index 00 — Ø Mindful Prints</span>
          <span className="hidden md:inline">Est. 2023 · Sector 63, Noida IN</span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#EC008C] inline-block" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#00AEEF] inline-block" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#FFC800] inline-block" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#0A0A0A] inline-block" />
          </span>
        </motion.div>

        {/* Kinetic headline */}
        <motion.h1
          variants={revealParent}
          initial="initial"
          animate="animate"
          className="font-display font-bold text-[#0A0A0A] leading-[0.92] tracking-[-0.045em] text-[16vw] md:text-[10.5vw] lg:text-[9.2vw]"
          data-testid="hero-headline"
        >
          {HEADLINE_LINES.map((line, i) => (
            <span
              key={i}
              className="block overflow-hidden"
              style={{ paddingBottom: "0.08em" }}
            >
              <motion.span variants={revealChild} className="block">
                {i === 2 ? (
                  <>
                    <span>Packaging</span>
                    <span className="text-[#EC008C]">.</span>
                  </>
                ) : (
                  line
                )}
              </motion.span>
            </span>
          ))}
        </motion.h1>

        {/* Sub row */}
        <div className="mt-10 md:mt-14 grid md:grid-cols-12 gap-6 md:gap-10 items-end">
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-6 text-[#0A0A0A]/75 text-lg md:text-xl leading-snug max-w-xl"
            data-testid="hero-subheadline"
          >
            Labels · Thermal Transfer Ribbons · Rigid Boxes · Protective
            Films · Phone Packaging · Barcoding &amp; Die-Cutting. Engineered
            in Noida for brands that measure quality in microns.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.25, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-6 flex flex-col md:items-end gap-4"
          >
            <div className="flex flex-wrap gap-3">
              <button
                data-testid="hero-cta-quote"
                onClick={() => scrollTo("enquiry")}
                className="mp-pill inline-flex items-center gap-3 rounded-full bg-[#0A0A0A] text-[#F7F6F2] pl-6 pr-4 py-3.5 text-sm font-mono-ind uppercase tracking-[0.16em]"
              >
                Request a Quote
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#F7F6F2] text-[#0A0A0A]">
                  <ArrowUpRight size={14} />
                </span>
              </button>
              <button
                data-testid="hero-cta-explore"
                onClick={() => scrollTo("capabilities")}
                className="inline-flex items-center gap-3 rounded-full border border-[#0A0A0A]/25 text-[#0A0A0A] pl-6 pr-4 py-3.5 text-sm font-mono-ind uppercase tracking-[0.16em] hover:bg-[#0A0A0A] hover:text-[#F7F6F2] transition-colors duration-500"
              >
                Explore Products
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full border border-current">
                  <ArrowDownRight size={14} />
                </span>
              </button>
            </div>
            <div className="font-mono-ind text-[11px] uppercase tracking-[0.2em] text-[#0A0A0A]/50">
              ISO 9000 · 18+ Yrs Combined · JP · KR Trusted
            </div>
          </motion.div>
        </div>

        {/* Editorial image + registration ticker */}
        <div className="mt-16 md:mt-24 grid md:grid-cols-12 gap-6 md:gap-10 items-end">
          <motion.div
            style={{ y: yImg, opacity: opacityImg }}
            className="md:col-span-8 relative aspect-[16/8] overflow-hidden border border-black/10 bg-black/5"
          >
            <img
              src="https://images.unsplash.com/photo-1503694978374-8a2fa686963a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1OTN8MHwxfHNlYXJjaHwxfHxwcmludGluZyUyMHByZXNzJTIwbWFjaGluZXxlbnwwfHx8fDE3ODQwNTM4NjV8MA&ixlib=rb-4.1.0&q=85"
              alt="Industrial printing press rollers at close range"
              className="absolute inset-0 w-full h-full object-cover"
              loading="eager"
              data-testid="hero-image"
            />
            <div className="absolute left-3 top-3 font-mono-ind text-[10px] uppercase tracking-[0.24em] bg-[#F7F6F2] text-[#0A0A0A] px-2 py-1">
              Fig. 001 — Registration
            </div>
            <div className="absolute right-3 bottom-3 font-mono-ind text-[10px] uppercase tracking-[0.24em] bg-[#0A0A0A] text-[#F7F6F2] px-2 py-1">
              12,000 impressions / hr
            </div>
          </motion.div>
          <div className="md:col-span-4 flex flex-col justify-end gap-6">
            <div className="font-mono-ind text-[11px] uppercase tracking-[0.22em] text-[#0A0A0A]/60">
              Scroll ↓ Manifesto
            </div>
            <div className="h-px bg-black/15 w-full" />
            <div className="font-display text-3xl md:text-4xl leading-[0.95] tracking-tight text-[#0A0A0A]">
              A factory that reads like <em className="text-[#EC008C] not-italic">a design studio</em>.
            </div>
          </div>
        </div>

        <div className="h-16 md:h-24" />
      </div>
    </section>
  );
}
