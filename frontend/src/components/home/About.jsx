import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { number: "20+", label: "Projects Delivered" },
  { number: "10+", label: "Happy Clients" },
  { number: "100%", label: "Satisfaction" },
];

const skills = [
  "React / React Native", "Node.js & Express", "MongoDB & PostgreSQL",
  "Firebase & Auth", "SaaS Architecture", "AI Integration",
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" ref={ref} className="relative py-20 sm:py-28 bg-[#050508] text-white px-5 sm:px-6 overflow-hidden">
      <div className="absolute top-0 right-0 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(29,78,216,0.07) 0%, transparent 70%)" }} />

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-12 sm:mb-16"
        >
          <span className="w-8 h-px bg-blue-500"></span>
          <span className="text-blue-400 text-[10px] sm:text-xs tracking-[0.3em] uppercase font-semibold">About</span>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 sm:gap-20 items-start">
          {/* Left */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6 sm:mb-8 tracking-tight"
            >
              Freelance Developer &{" "}
              <span className="text-blue-500 block">Digital Solutions</span>
              <span className="block text-white/30">Creator</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-white/50 text-base sm:text-lg leading-relaxed mb-5"
            >
              I'm a full-stack developer and founder of{" "}
              <span className="text-white font-semibold">Ninebyt</span> — building high-performance digital products for startups and growing companies across Africa, Asia, and beyond.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-white/40 text-sm sm:text-base leading-relaxed mb-10 sm:mb-12"
            >
              From logistics apps to property platforms, SaaS products to business websites — I build scalable, production-grade software that international clients trust.
            </motion.p>

            {/* Skills */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-wrap gap-2"
            >
              {skills.map((s, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.5 + i * 0.07 }}
                  className="text-xs font-semibold px-3 py-1.5 rounded-lg border border-white/10 text-white/60 hover:border-blue-500/50 hover:text-blue-400 transition-all duration-300"
                  style={{ background: "rgba(255,255,255,0.02)" }}
                >
                  {s}
                </motion.span>
              ))}
            </motion.div>
          </div>

          {/* Right */}
          <div>
            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-8 sm:mb-10">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.12, duration: 0.6 }}
                  className="group relative p-4 sm:p-6 rounded-2xl border border-white/[0.07] hover:border-blue-500/30 transition-all duration-500 text-center"
                  style={{ background: "rgba(255,255,255,0.02)" }}
                >
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: "radial-gradient(circle at 50% 50%, rgba(59,130,246,0.07), transparent 70%)" }} />
                  <h3 className="text-2xl sm:text-3xl font-black text-blue-500 mb-1">{stat.number}</h3>
                  <p className="text-white/30 text-[10px] sm:text-xs leading-tight">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="group relative rounded-3xl p-6 sm:p-8 border border-white/[0.07] hover:border-blue-500/20 transition-all duration-500"
              style={{ background: "rgba(255,255,255,0.02)" }}
            >
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                style={{ background: "radial-gradient(circle at 30% 30%, rgba(59,130,246,0.06), transparent 60%)" }} />

              <h3 className="text-lg sm:text-xl font-bold mb-5 sm:mb-6 text-white/80">
                What I build at <span className="text-blue-500">Ninebyt</span>
              </h3>

              <ul className="space-y-3 sm:space-y-4">
                {[
                  "Production-ready web & mobile applications",
                  "SaaS platforms with real-time features",
                  "Logistics & property listing platforms",
                  "AI-powered digital products",
                  "High-converting business websites",
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.6 + i * 0.08 }}
                    className="flex items-start gap-3 text-white/50 text-sm"
                  >
                    <span className="mt-1 w-4 h-4 rounded border border-blue-500/40 flex items-center justify-center flex-shrink-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                    </span>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
