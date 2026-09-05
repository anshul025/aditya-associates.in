import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sun, Menu, X, Languages } from "lucide-react";

export default function Navbar({ t, lang, toggleLang }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const links = [
    ["#services", t.nav.services],
    ["#polyhouse", t.nav.polyhouse],
    ["#work", t.nav.work],
    ["#contact", t.nav.contact],
  ];

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
        scrolled ? "bg-[#fbf9f5]/90 backdrop-blur-xl border-b border-[#0f382c]/10" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 h-16 sm:h-20 flex items-center justify-between">
        <a href="#top" data-testid="nav-brand-logo" className="flex items-center gap-2.5">
          <span className={`w-9 h-9 rounded-full grid place-items-center transition-colors duration-500 ${scrolled ? "bg-[#0f382c] text-[#e09f3e]" : "bg-[#e09f3e]/20 text-[#e09f3e]"}`}>
            <Sun size={18} strokeWidth={2.4} />
          </span>
          <span className={`font-display font-extrabold text-lg tracking-tight transition-colors duration-500 ${scrolled ? "text-[#0f382c]" : "text-[#fbf9f5]"}`}>
            Aditya <span className="text-[#d97706]">Associate</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map(([href, label]) => (
            <a
              key={href}
              href={href}
              data-testid={`nav-link-${href.slice(1)}`}
              className={`text-sm font-medium transition-colors duration-500 ${
                scrolled ? "text-[#0f382c]/70 hover:text-[#0f382c]" : "text-[#fbf9f5]/75 hover:text-[#fbf9f5]"
              }`}
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            data-testid="language-toggle-btn"
            onClick={toggleLang}
            className={`flex items-center gap-1.5 text-xs sm:text-sm font-semibold border rounded-full px-3 py-1.5 transition-colors duration-500 ${
              scrolled
                ? "border-[#0f382c]/25 text-[#0f382c] hover:bg-[#0f382c] hover:text-[#fbf9f5]"
                : "border-[#fbf9f5]/35 text-[#fbf9f5] hover:bg-[#fbf9f5] hover:text-[#0f382c]"
            }`}
          >
            <Languages size={14} />
            {lang === "en" ? "हिंदी" : "English"}
          </button>
          <a
            href="#apply"
            data-testid="nav-apply-register-btn"
            className={`hidden sm:inline-flex text-sm font-semibold rounded-full px-5 py-2.5 transition-colors duration-500 ${
              scrolled ? "bg-[#0f382c] text-[#fbf9f5] hover:bg-[#1b5e4b]" : "bg-[#d97706] text-[#131c18] hover:bg-[#e09f3e]"
            }`}
          >
            {t.nav.apply}
          </a>
          <button
            data-testid="mobile-menu-btn"
            className={`md:hidden p-2 transition-colors duration-500 ${scrolled ? "text-[#0f382c]" : "text-[#fbf9f5]"}`}
            onClick={() => setOpen(!open)}
            aria-label="menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-[#fbf9f5] border-t border-[#0f382c]/10 px-6 py-4 flex flex-col gap-4">
          {links.map(([href, label]) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="text-base font-medium text-[#0f382c]"
            >
              {label}
            </a>
          ))}
          <a
            href="#apply"
            onClick={() => setOpen(false)}
            data-testid="mobile-apply-btn"
            className="bg-[#0f382c] text-[#fbf9f5] text-center font-semibold rounded-full px-5 py-3"
          >
            {t.nav.apply}
          </a>
        </div>
      )}
    </motion.header>
  );
}
