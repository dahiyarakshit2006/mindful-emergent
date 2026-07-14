import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section
      id="about"
      ref={ref}
      className="relative bg-[#F7F6F2] py-24 md:py-40 overflow-hidden"
      data-testid="about-section"
    >
      <div className="max-w-[1500px] mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-5 md:sticky md:top-32 self-start">
          <div className="font-mono-ind text-[11px] uppercase tracking-[0.22em] text-[#0A0A0A]/60 mb-4">
            §&nbsp;The Studio
          </div>
          <h2 className="font-display font-bold tracking-[-0.035em] text-5xl md:text-6xl leading-[0.95] text-[#0A0A0A]">
            A modern
            <br />
            production
            <br />
            facility with a<br />
            <span className="text-[#EC008C]">studio-mind.</span>
          </h2>
          <div className="mt-10 font-mono-ind text-[11px] uppercase tracking-[0.22em] text-[#0A0A0A]/50 space-y-2">
            <div>B126, First Floor, B Block</div>
            <div>Sector 63, Noida — India</div>
            <div>Established 2023 · ISO 9000</div>
          </div>
        </div>

        <div className="md:col-span-7 space-y-10">
          <motion.div
            style={{ y }}
            className="relative aspect-[4/3] overflow-hidden border border-black/10"
          >
            <img
              src="https://images.unsplash.com/photo-1610891015188-5369212db097?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NTJ8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwcHJpbnRpbmclMjBmYWN0b3J5fGVufDB8fHx8MTc4NDA1Mzg2NXww&ixlib=rb-4.1.0&q=85"
              alt="Mindful Prints production facility"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute left-3 top-3 font-mono-ind text-[10px] uppercase tracking-[0.24em] bg-[#F7F6F2] text-[#0A0A0A] px-2 py-1">
              Fig. 008 — Facility
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6 text-lg md:text-xl leading-relaxed text-[#0A0A0A]/80 max-w-2xl"
          >
            <p>
              Mindful Prints was founded in 2023 by a team with{" "}
              <strong className="text-[#0A0A0A]">
                eighteen-plus years of combined experience
              </strong>{" "}
              in global industrial trade — spending years exporting
              precision-print materials to buyers across{" "}
              <strong className="text-[#0A0A0A]">Japan and Korea</strong>, two of the most exacting markets in the world.
            </p>
            <p>
              We brought that discipline home. Our Sector 63 facility runs
              ISO 9000-compliant processes across labels, thermal ribbons,
              rigid boxes, protective films, phone packaging and barcoding —
              all under one roof, one document control system, and one
              accountable team.
            </p>
            <p>
              The name is deliberate. <em>Mindful</em> for the intention we
              put into every material choice and every micron of registration.{" "}
              <em>Prints</em> for the outcome — reliable, repeatable, beautiful.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-black/10 pt-8"
          >
            {[
              ["JP", "Trusted"],
              ["KR", "Trusted"],
              ["ISO", "9000"],
              ["8", "Industries"],
            ].map(([k, v]) => (
              <div key={k}>
                <div className="font-display text-3xl md:text-4xl font-bold text-[#0A0A0A]">
                  {k}
                </div>
                <div className="font-mono-ind text-[10px] uppercase tracking-[0.22em] text-[#0A0A0A]/50 mt-1">
                  {v}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
