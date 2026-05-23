import { FaTwitter, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Footer() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const scrollTo = (id) => document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer ref={ref} className="relative bg-[#050508] text-white border-t border-white/[0.06] overflow-hidden">
      <div className="absolute -top-40 right-0 w-[300px] h-[300px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(29,78,216,0.05) 0%, transparent 70%)" }} />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 py-14 sm:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12">
          {/* Logo - full width on mobile */}
          <div className="col-span-2 md:col-span-1">
            <motion.h2 initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
              Nine<span className="text-blue-500">byt</span>
            </motion.h2>
            <p className="text-white/30 text-xs sm:text-sm leading-relaxed mb-4">
              A digital studio building premium web products, SaaS platforms, and mobile apps for businesses worldwide.
            </p>
            <p className="text-white/15 text-xs">Lucknow, India</p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold mb-4 text-white/70 text-xs tracking-widest uppercase">Company</h3>
            <ul className="space-y-2.5 text-white/30 text-xs sm:text-sm">
              {[["Home", "#hero"], ["About", "#about"], ["Services", "#services"], ["Work", "#portfolio"], ["Contact", "#contact"]].map(([label, href]) => (
                <li key={href}>
                  <a href={href} onClick={e => { e.preventDefault(); scrollTo(href === "#work" ? "#portfolio" : href); }}
                    className="hover:text-blue-400 transition-colors duration-200">{label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4 text-white/70 text-xs tracking-widest uppercase">Contact</h3>
            <ul className="space-y-3 text-xs sm:text-sm">
              <li>
                <span className="text-white/20 text-[10px] block mb-0.5">EMAIL</span>
                <a href="mailto:ninebytteam@gmail.com" className="text-white/40 hover:text-blue-400 transition-colors break-all">ninebytteam@gmail.com</a>
              </li>
              <li>
                <span className="text-white/20 text-[10px] block mb-0.5">COLLAB</span>
                <a href="https://webieapp.com" target="_blank" rel="noopener noreferrer" className="text-blue-400/60 hover:text-blue-400 transition-colors">WebieApp Solutions ↗</a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold mb-4 text-white/70 text-xs tracking-widest uppercase">Follow</h3>
            <div className="flex gap-2 sm:gap-3 flex-wrap">
              {[{ icon: <FaTwitter />, href: "#" }, { icon: <FaInstagram />, href: "#" }, { icon: <FaLinkedin />, href: "#" }, { icon: <FaGithub />, href: "#" }].map((s, i) => (
                <a key={i} href={s.href}
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg border border-white/[0.08] flex items-center justify-center text-white/30 hover:border-blue-500/40 hover:text-blue-400 transition-all duration-300 text-xs"
                  style={{ background: "rgba(255,255,255,0.02)" }}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/[0.05]">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 py-5 sm:py-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-white/20 text-[10px] sm:text-xs">
          <p>© 2026 Ninebyt. All rights reserved.</p>
          <p className="tracking-widest">DESIGNED & DEVELOPED BY NINEBYT</p>
        </div>
      </div>
    </footer>
  );
}
