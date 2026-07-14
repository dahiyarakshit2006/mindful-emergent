import { motion } from "framer-motion";

const PRODUCTS = [
  {
    id: "product-labels",
    n: "01",
    title: "Labels",
    lede: "Custom pressure-sensitive labels engineered for surface, climate and end-of-life.",
    body: "PCB labels, Mylar labels, water-sensitive labels, chromo (removable, hi-tech, white), piggyback labels, ultra-destructible vinyl and void-evident constructions.",
    image: "https://images.unsplash.com/photo-1569725730478-a2f4a1809bb4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHw0fHxwcm9kdWN0JTIwbGFiZWxzJTIwcm9sbHN8ZW58MHx8fHwxNzg0MDUzODY2fDA&ixlib=rb-4.1.0&q=85",
    figLabel: "Fig. 002 — Roll stock",
    specs: [
      ["Materials", "BOPP (clear/matt/2mil), PE85, PET (silver/matte-chrome), synthetic matt paper"],
      ["Constructions", "PCB · Mylar · Water-sensitive · Piggyback · Ultra-destructible · Void"],
      ["Adhesives", "Permanent, removable, low-tack, freezer, high-tack"],
      ["Industries", "Pharma · FMCG · F&B · Liquor · Lubricants · Agro-Chem · Telecom · Airlines"],
    ],
  },
  {
    id: "product-ribbons",
    n: "02",
    title: "Thermal Transfer Ribbons",
    lede: "Barcode-grade ribbons matched to substrate, printhead and read-rate targets.",
    body: "Wax, Resin, and Wax-Resin variants including Fasfilm TT Matt Silver / White, TT Superior, TTE, and Fastrans PET Matte Chrome — compatible with all major thermal-transfer printers.",
    image: "https://images.unsplash.com/photo-1610891015188-5369212db097?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NTJ8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwcHJpbnRpbmclMjBmYWN0b3J5fGVufDB8fHx8MTc4NDA1Mzg2NXww&ixlib=rb-4.1.0&q=85",
    figLabel: "Fig. 003 — Ribbon path",
    specs: [
      ["Wax", "Paper labels, high throughput, low cost per print"],
      ["Wax-Resin", "Semi-gloss synthetics, smudge & scratch resistance"],
      ["Resin", "Full synthetics — chemicals, autoclave, deep-freeze, outdoor"],
      ["Printer compatibility", "Zebra · Datamax · TSC · Sato · Toshiba · Argox · Postek"],
    ],
    reverse: true,
  },
  {
    id: "product-boxes",
    n: "03",
    title: "Rigid Boxes",
    lede: "Structural presentation packaging for premium, gifting and electronics categories.",
    body: "Custom die-cut structural design with board 1.5–3.5 mm, wrapped in matte / gloss / textured / leatherette stocks. Foil stamping, deboss, spot-UV, magnetic closures and paper-pulp inserts — MOQ-flexible for launches to scaled runs.",
    image: "https://images.unsplash.com/photo-1570658847330-708619301f21?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2OTF8MHwxfHNlYXJjaHw0fHxwcmVtaXVtJTIwcHJvZHVjdCUyMHBhY2thZ2luZyUyMGJveGVzfGVufDB8fHx8MTc4NDA1Mzg2Nnww&ixlib=rb-4.1.0&q=85",
    figLabel: "Fig. 004 — Structural mock",
    specs: [
      ["Board", "1.5 mm · 2.0 mm · 2.5 mm · 3.0 mm · 3.5 mm greyboard"],
      ["Wraps", "Matte / gloss / textured / leatherette / soft-touch"],
      ["Finishes", "Foil stamp · emboss · deboss · spot-UV · UV varnish"],
      ["Inserts", "EVA foam · paper pulp · flocked · custom die-cut"],
      ["Use cases", "Cosmetics · Electronics · Liquor gift sets · Corporate & festive"],
    ],
  },
  {
    id: "product-film",
    n: "04",
    title: "Protective Film",
    lede: "Surface guard films for manufacturing, transit and retail display.",
    body: "PE protective film, static-cling film and low/high-tack adhesive variants. Custom-printed for tamper-evidence and QC batch marking. Residue-free removal, UV-stable for indicated durations, adhesion levels matched to substrate.",
    image: "https://images.unsplash.com/photo-1503694978374-8a2fa686963a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1OTN8MHwxfHNlYXJjaHwxfHxwcmludGluZyUyMHByZXNzJTIwbWFjaGluZXxlbnwwfHx8fDE3ODQwNTM4NjV8MA&ixlib=rb-4.1.0&q=85",
    figLabel: "Fig. 005 — Surface guard",
    specs: [
      ["Types", "PE film · static-cling · low-tack · high-tack"],
      ["Adhesion", "Calibrated per substrate — brushed metal, glass, acrylic, ABS, laminate"],
      ["UV / Outdoor", "Indoor short-term to 6-month outdoor-stable variants"],
      ["Custom print", "Tamper-evident, QC batch, brand marking"],
      ["Applications", "Screens · Appliances · Automotive trim · Furniture laminates"],
    ],
    reverse: true,
  },
  {
    id: "product-phone",
    n: "05",
    title: "Phone Packaging",
    lede: "End-to-end packaging systems for phone OEMs, wholesalers and refurbished sellers.",
    body: "Retail rigid box + inner protective packaging + IMEI/QC label + tamper-evident seal — designed as one integrated system so your brand looks identical on unit 1 and unit 100,000. A cross-line solution combining our rigid box, label and protective film capabilities.",
    image: "https://images.unsplash.com/photo-1760225529221-841ebb8e7867?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzNTl8MHwxfHNlYXJjaHw0fHxzbWFydHBob25lJTIwYm94JTIwcGFja2FnaW5nfGVufDB8fHx8MTc4NDA1Mzg2Nnww&ixlib=rb-4.1.0&q=85",
    figLabel: "Fig. 006 — Retail system",
    specs: [
      ["Retail box", "Rigid or reverse-tuck, foil / soft-touch / spot-UV"],
      ["Inner", "EVA foam / paper-pulp inserts, protective film sleeves"],
      ["Compliance", "IMEI serialised barcode labels · warranty seals"],
      ["Tamper", "Void-evident seals, brand-consistent across SKUs"],
      ["Buyers", "OEMs · Importers/Wholesalers · Refurb sellers"],
    ],
  },
  {
    id: "product-barcoding",
    n: "06",
    title: "Barcoding & Die-Cutting",
    lede: "Serialised barcode printing, verification and precision die-cut geometries.",
    body: "1D and 2D barcode printing with verification, variable-data workflows for IMEI / batch / lot, and precision die-cutting for bespoke label and box shapes at production tolerance.",
    image: "https://images.unsplash.com/photo-1610891015188-5369212db097?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NTJ8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwcHJpbnRpbmclMjBmYWN0b3J5fGVufDB8fHx8MTc4NDA1Mzg2NXww&ixlib=rb-4.1.0&q=85",
    figLabel: "Fig. 007 — Precision cut",
    specs: [
      ["Barcodes", "Code-128, EAN-13, UPC, QR, Data Matrix, PDF417"],
      ["Verification", "Grade A/B verification available on request"],
      ["Variable data", "IMEI, lot, batch, serial, unique QR"],
      ["Die-cutting", "Rotary and flatbed, custom tooling from CAD"],
    ],
    reverse: true,
  },
];

function Spec({ rows }) {
  return (
    <div className="border-t border-black/15">
      {rows.map(([k, v]) => (
        <div
          key={k}
          className="grid grid-cols-12 gap-4 border-b border-black/10 py-3.5"
        >
          <div className="col-span-4 font-mono-ind text-[10.5px] uppercase tracking-[0.2em] text-[#0A0A0A]/50">
            {k}
          </div>
          <div className="col-span-8 text-sm text-[#0A0A0A]/85 leading-snug">
            {v}
          </div>
        </div>
      ))}
    </div>
  );
}

export default function ProductDeepDives() {
  return (
    <section
      id="products"
      className="relative bg-[#0A0A0A] text-[#F7F6F2] py-24 md:py-40"
      data-testid="products-section"
    >
      <div className="max-w-[1500px] mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 md:mb-24">
          <div>
            <div className="font-mono-ind text-[11px] uppercase tracking-[0.22em] text-[#F7F6F2]/60 mb-4">
              §&nbsp;Product Deep-Dives
            </div>
            <h2 className="font-display font-bold tracking-[-0.035em] text-5xl md:text-7xl leading-[0.95] text-[#F7F6F2]">
              Read the spec.
              <br />
              <span className="mp-outline" style={{ WebkitTextStroke: "1.5px #F7F6F2" }}>
                Not the sales sheet.
              </span>
            </h2>
          </div>
        </div>

        <div className="space-y-24 md:space-y-40">
          {PRODUCTS.map((p) => (
            <motion.article
              key={p.id}
              id={p.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
              className="grid md:grid-cols-12 gap-8 md:gap-12"
              data-testid={p.id}
            >
              <div
                className={`md:col-span-6 relative aspect-[4/3] overflow-hidden border border-white/10 ${
                  p.reverse ? "md:order-2" : ""
                }`}
              >
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover mp-tile-image"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute left-3 top-3 font-mono-ind text-[10px] uppercase tracking-[0.24em] bg-[#F7F6F2] text-[#0A0A0A] px-2 py-1">
                  {p.figLabel}
                </div>
                <div className="absolute right-3 bottom-3 font-mono-ind text-[10px] uppercase tracking-[0.24em] bg-[#0A0A0A] text-[#F7F6F2] px-2 py-1 border border-white/20">
                  {p.n} / 06
                </div>
              </div>

              <div
                className={`md:col-span-6 flex flex-col justify-center ${
                  p.reverse ? "md:order-1" : ""
                }`}
              >
                <div className="font-mono-ind text-[11px] uppercase tracking-[0.22em] text-[#F7F6F2]/50 mb-4">
                  {p.n} — {p.title}
                </div>
                <h3 className="font-display text-4xl md:text-6xl font-bold tracking-[-0.03em] leading-[0.98] mb-6 text-[#F7F6F2]">
                  {p.lede}
                </h3>
                <p className="text-[#F7F6F2]/70 text-base md:text-lg leading-relaxed max-w-2xl mb-10">
                  {p.body}
                </p>
                <div className="text-[#F7F6F2]">
                  <div className="border-t border-white/20">
                    {p.specs.map(([k, v]) => (
                      <div
                        key={k}
                        className="grid grid-cols-12 gap-4 border-b border-white/15 py-3.5"
                      >
                        <div className="col-span-4 font-mono-ind text-[10.5px] uppercase tracking-[0.2em] text-[#F7F6F2]/50">
                          {k}
                        </div>
                        <div className="col-span-8 text-sm text-[#F7F6F2]/90 leading-snug">
                          {v}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
