import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const handleNav = (href) => {
    setOpen(false);
    setTimeout(() => {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 10);
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 w-full z-50"
    >
      <div className={`absolute inset-0 transition-all duration-500 ${
        scrolled ? "bg-[#050508]/92 backdrop-blur-xl border-b border-white/[0.06]" : "bg-transparent"
      }`} />

      <div className="relative max-w-7xl mx-auto flex items-center justify-between px-5 sm:px-6 py-4 sm:py-5">
        {/* Logo */}
        <a href="#hero" onClick={e => { e.preventDefault(); handleNav("#hero"); }}
          className="text-lg sm:text-xl font-bold tracking-tight text-white z-50">
          Nine<span className="relative">
            <span className="text-blue-500">byt</span>
            <span className="absolute -bottom-0.5 left-0 w-full h-px bg-blue-500/50"></span>
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-7 lg:gap-8 text-white/70 text-sm font-medium">
          {navLinks.map(link => (
            <a key={link.href} href={link.href}
              onClick={e => { e.preventDefault(); handleNav(link.href); }}
              className="relative group hover:text-white transition-colors duration-200">
              {link.label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-blue-500 group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <a href="#contact" onClick={e => { e.preventDefault(); handleNav("#contact"); }}
          className="hidden md:inline-flex items-center gap-2 relative overflow-hidden px-5 py-2.5 rounded-lg text-sm font-semibold text-white transition-all duration-300 group">
          <span className="absolute inset-0 bg-blue-600 group-hover:bg-blue-500 transition-colors duration-300"></span>
          <span className="relative">Start a Project</span>
          <span className="relative group-hover:translate-x-0.5 transition-transform">→</span>
        </a>

        {/* Mobile Toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-white z-50 p-2 -mr-2" aria-label="Toggle menu">
          <div className="w-6 flex flex-col gap-[5px]">
            <span className={`block h-px bg-white transition-all duration-300 origin-center ${open ? "rotate-45 translate-y-[7px]" : ""}`}></span>
            <span className={`block h-px bg-white transition-all duration-300 ${open ? "opacity-0 scale-x-0" : ""}`}></span>
            <span className={`block h-px bg-white transition-all duration-300 origin-center ${open ? "-rotate-45 -translate-y-[7px]" : ""}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="md:hidden fixed inset-0 top-[64px] bg-[#050508]/98 backdrop-blur-2xl z-40 flex flex-col"
          >
            <div className="flex flex-col px-6 pt-10 pb-8 gap-1 flex-1">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                  onClick={e => { e.preventDefault(); handleNav(link.href); }}
                  className="text-white/70 hover:text-white text-2xl font-semibold py-4 border-b border-white/[0.05] flex items-center justify-between group transition-colors"
                >
                  {link.label}
                  <span className="text-white/20 group-hover:text-blue-500 transition-colors text-base">→</span>
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                onClick={e => { e.preventDefault(); handleNav("#contact"); }}
                className="mt-8 bg-blue-600 text-white px-6 py-4 rounded-xl font-semibold text-center text-sm active:scale-[0.98] transition-transform"
              >
                Start a Project →
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
