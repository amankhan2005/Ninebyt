import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const trustBadges = ["Startups", "SaaS", "Logistics", "Property Tech", "Business Platforms"];

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section id="hero" ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050508]">
      <div className="absolute inset-0 grid-bg opacity-60" />

      {/* Glow orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[900px] md:h-[900px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(29,78,216,0.12) 0%, transparent 70%)" }} />
      <div className="absolute top-1/4 left-1/4 w-[200px] h-[200px] md:w-[400px] md:h-[400px] rounded-full pulse-glow"
        style={{ background: "radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)" }} />
      <div className="absolute bottom-1/4 right-1/4 w-[150px] h-[150px] md:w-[300px] md:h-[300px] rounded-full pulse-glow"
        style={{ background: "radial-gradient(circle, rgba(6,182,212,0.06) 0%, transparent 70%)", animationDelay: "1.5s" }} />

      {/* Floating shapes — hidden on small screens */}
      <div className="hidden md:block absolute top-1/3 right-[10%] w-16 h-16 border border-blue-500/20 rounded-xl float opacity-40 rotate-12" />
      <div className="hidden md:block absolute bottom-1/3 left-[8%] w-10 h-10 border border-blue-400/20 rounded-lg float opacity-30" style={{ animationDelay: "1s" }} />
      <div className="hidden sm:block absolute top-1/4 left-[15%] w-4 h-4 bg-blue-500/30 rounded-full float" style={{ animationDelay: "2s" }} />
      <div className="hidden sm:block absolute bottom-1/4 right-[15%] w-6 h-6 bg-cyan-500/20 rounded-full float" style={{ animationDelay: "0.5s" }} />

      <motion.div style={{ y, opacity }} className="relative z-10 w-full max-w-5xl mx-auto px-5 sm:px-8 text-center pt-24 pb-16">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8"
        >
          <span className="w-6 sm:w-8 h-px bg-blue-500"></span>
          <span className="text-blue-400 text-[10px] sm:text-xs tracking-[0.25em] sm:tracking-[0.3em] uppercase font-semibold">
            Ninebyt Software Solutions
          </span>
          <span className="w-6 sm:w-8 h-px bg-blue-500"></span>
        </motion.div>

        {/* Headline */}
        <div className="overflow-hidden mb-3 sm:mb-4">
          <motion.h1
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[88px] font-extrabold leading-[0.95] tracking-tight text-white"
          >
            We craft
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-3 sm:mb-4">
          <motion.h1
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[88px] font-extrabold leading-[0.95] tracking-tight"
          >
            <span className="text-shimmer">digital experiences</span>
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-8 sm:mb-10">
          <motion.h1
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[88px] font-extrabold leading-[0.95] tracking-tight text-white/20"
          >
            that convert.
          </motion.h1>
        </div>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="text-white/50 text-base sm:text-lg md:text-xl max-w-xl mx-auto leading-relaxed mb-10 sm:mb-12 px-2"
        >
          Custom software, SaaS platforms & digital solutions — engineered for international startups and growing businesses.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.6 }}
          className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-12 sm:mb-16 px-4 sm:px-0"
        >
          <a
            href="#portfolio"
            onClick={e => { e.preventDefault(); document.querySelector("#portfolio")?.scrollIntoView({ behavior: "smooth" }); }}
            className="group relative px-7 py-4 bg-blue-600 rounded-xl font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105 text-sm sm:text-base"
            style={{ boxShadow: "0 0 30px rgba(59,130,246,0.3)" }}
          >
            <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span className="relative flex items-center justify-center gap-2">View Work <span className="group-hover:translate-x-1 transition-transform">→</span></span>
          </a>
          <a
            href="#contact"
            onClick={e => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}
            className="group px-7 py-4 rounded-xl font-semibold text-white border border-white/10 hover:border-blue-500/50 backdrop-blur-sm transition-all duration-300 hover:scale-105 text-sm sm:text-base"
            style={{ background: "rgba(255,255,255,0.03)" }}
          >
            <span className="flex items-center justify-center gap-2">Contact Me <span className="group-hover:translate-x-1 transition-transform">→</span></span>
          </a>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="flex items-center justify-center gap-2 flex-wrap px-4"
        >
          <span className="text-white/20 text-[10px] uppercase tracking-widest">Trusted for</span>
          {trustBadges.map((b, i) => (
            <span key={i} className="text-[10px] sm:text-xs text-white/40 border border-white/10 rounded-full px-2.5 sm:px-3 py-1 hover:border-blue-500/40 hover:text-blue-400 transition-all duration-300">
              {b}
            </span>
          ))}
        </motion.div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050508] to-transparent" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="hidden sm:flex absolute bottom-10 left-1/2 -translate-x-1/2 flex-col items-center gap-2"
      >
        <span className="text-white/20 text-[10px] tracking-widest uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-blue-500/50 to-transparent" />
      </motion.div>
    </section>
  );
}
