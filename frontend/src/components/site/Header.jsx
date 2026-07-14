import { useEffect, useState } from "react";
import { useLenis } from "lenis/react";
import { motion } from "framer-motion";
import LogoLockup from "./Logo";
import { Menu, X } from "lucide-react";

const NAV = [
  { id: "capabilities", label: "Capabilities" },
  { id: "products", label: "Products" },
  { id: "industries", label: "Industries" },
  { id: "about", label: "Studio" },
  { id: "enquiry", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const lenis = useLenis();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    if (lenis) {
      lenis.scrollTo(el, { offset: -80, duration: 1.4 });
    } else {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-500 ${
        scrolled ? "mp-header-scrolled" : ""
      }`}
      data-testid="site-header"
    >
      <div className="max-w-[1500px] mx-auto px-6 md:px-10 h-[72px] flex items-center justify-between">
        <button
          onClick={() => go("hero")}
          data-testid="header-logo-btn"
          className="flex items-center"
        >
          <LogoLockup />
        </button>

        <nav className="hidden md:flex items-center gap-9">
          {NAV.map((n) => (
            <button
              key={n.id}
              data-testid={`nav-${n.id}`}
              onClick={() => go(n.id)}
              className="font-mono-ind text-[11px] uppercase tracking-[0.18em] text-[#0A0A0A]/80 mp-link hover:text-[#0A0A0A]"
            >
              {n.label}
            </button>
          ))}
        </nav>

        <div className="hidden md:block">
          <button
            data-testid="header-quote-btn"
            onClick={() => go("enquiry")}
            className="mp-pill inline-flex items-center gap-2 rounded-full bg-[#0A0A0A] text-[#F7F6F2] px-5 py-2.5 text-[12px] font-mono-ind uppercase tracking-[0.16em]"
          >
            Get a Quote
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#FFF200]" />
          </button>
        </div>

        <button
          className="md:hidden text-[#0A0A0A]"
          onClick={() => setOpen((v) => !v)}
          data-testid="mobile-menu-toggle"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden mp-header-scrolled px-6 pb-6 pt-2 space-y-4 border-t border-black/5">
          {NAV.map((n) => (
            <button
              key={n.id}
              data-testid={`mobile-nav-${n.id}`}
              onClick={() => go(n.id)}
              className="block font-display text-2xl font-semibold text-left"
            >
              {n.label}
            </button>
          ))}
          <button
            data-testid="mobile-quote-btn"
            onClick={() => go("enquiry")}
            className="mp-pill w-full rounded-full bg-[#0A0A0A] text-[#F7F6F2] px-5 py-3 text-sm font-mono-ind uppercase tracking-[0.16em]"
          >
            Get a Quote
          </button>
        </div>
      )}
    </motion.header>
  );
}
