import { useLenis } from "lenis/react";
import { LogoMark } from "./Logo";
import { Instagram, Linkedin, ArrowUp } from "lucide-react";

const LINKS = [
  { id: "capabilities", label: "Capabilities" },
  { id: "products", label: "Products" },
  { id: "industries", label: "Industries" },
  { id: "about", label: "Studio" },
  { id: "enquiry", label: "Contact" },
];

export default function Footer() {
  const lenis = useLenis();
  const scrollTop = () => lenis && lenis.scrollTo(0, { duration: 1.6 });
  const go = (id) => {
    const el = document.getElementById(id);
    if (el && lenis) lenis.scrollTo(el, { offset: -80, duration: 1.4 });
  };

  const now = new Date().getFullYear();

  return (
    <footer
      className="relative bg-[#0A0A0A] text-[#F7F6F2] border-t border-white/10"
      data-testid="site-footer"
    >
      {/* Massive display type */}
      <div className="max-w-[1500px] mx-auto px-6 md:px-10 pt-24 md:pt-32 pb-12">
        <div
          className="font-display font-bold text-[18vw] md:text-[13vw] leading-[0.85] tracking-[-0.045em] text-[#F7F6F2]"
          data-testid="footer-display"
        >
          Mindful
          <br />
          <span className="mp-outline" style={{ WebkitTextStroke: "1.5px #F7F6F2" }}>
            Prints
          </span>
          <span className="text-[#EC008C]">.</span>
        </div>
      </div>

      <div className="max-w-[1500px] mx-auto px-6 md:px-10 pb-16 grid md:grid-cols-12 gap-10 border-t border-white/10 pt-14">
        <div className="md:col-span-5">
          <div className="flex items-center gap-2.5">
            <LogoMark size={28} />
            <span className="font-display font-bold text-[#F7F6F2]">
              Mindful<span className="opacity-40">/</span>Prints
            </span>
          </div>
          <p className="mt-5 text-[#F7F6F2]/60 text-sm max-w-sm leading-relaxed">
            Precision printing and protective packaging, engineered from Sector 63, Noida for brands who measure quality in microns.
          </p>
        </div>

        <div className="md:col-span-3">
          <div className="font-mono-ind text-[11px] uppercase tracking-[0.22em] text-[#F7F6F2]/45 mb-5">
            Navigate
          </div>
          <ul className="space-y-3">
            {LINKS.map((l) => (
              <li key={l.id}>
                <button
                  data-testid={`footer-nav-${l.id}`}
                  onClick={() => go(l.id)}
                  className="mp-link text-[#F7F6F2]/85 hover:text-[#FFF200] text-sm"
                >
                  {l.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-4">
          <div className="font-mono-ind text-[11px] uppercase tracking-[0.22em] text-[#F7F6F2]/45 mb-5">
            Studio
          </div>
          <address className="not-italic text-sm text-[#F7F6F2]/80 leading-relaxed">
            B126, First Floor, B Block
            <br />
            Sector 63, Noida — India
            <br />
            <a href="mailto:info@mindfulprints.org" className="mp-link hover:text-[#FFF200]">
              info@mindfulprints.org
            </a>
            <br />
            <a href="tel:+917678352190" className="mp-link hover:text-[#FFF200]">
              +91 76783 52190
            </a>
          </address>

          <div className="mt-6 flex items-center gap-3">
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="footer-instagram"
              className="w-9 h-9 rounded-full border border-white/25 flex items-center justify-center text-[#F7F6F2] hover:bg-[#FFF200] hover:text-[#0A0A0A] hover:border-[#FFF200] transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={15} strokeWidth={1.6} />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="footer-linkedin"
              className="w-9 h-9 rounded-full border border-white/25 flex items-center justify-center text-[#F7F6F2] hover:bg-[#FFF200] hover:text-[#0A0A0A] hover:border-[#FFF200] transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={15} strokeWidth={1.6} />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-[1500px] mx-auto px-6 md:px-10 pb-10 border-t border-white/10 pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="font-mono-ind text-[10.5px] uppercase tracking-[0.22em] text-[#F7F6F2]/45">
          © {now} Mindful Prints · Sector 63, Noida · ISO 9000
        </div>
        <div className="font-mono-ind text-[10.5px] uppercase tracking-[0.22em] text-[#F7F6F2]/45 flex items-center gap-6">
          <span>C · M · Y · K — engineered in India</span>
          <button
            data-testid="footer-back-top"
            onClick={scrollTop}
            className="inline-flex items-center gap-2 text-[#F7F6F2] mp-link"
          >
            Back to top
            <ArrowUp size={13} />
          </button>
        </div>
      </div>
    </footer>
  );
}
