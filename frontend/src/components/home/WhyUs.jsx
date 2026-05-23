import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const features = [
  { icon: "◈", title: "Fast Delivery", desc: "Rapid turnaround without sacrificing quality. Production-ready builds delivered on schedule.", metric: "2–6 weeks", metricLabel: "avg. delivery" },
  { icon: "⬟", title: "Startup Focused", desc: "I understand MVPs, pivots, and lean builds. I help startups move fast and scale smart.", metric: "10+", metricLabel: "startups served" },
  { icon: "◎", title: "Scalable Solutions", desc: "Architecture designed to grow with you — from 100 to 100,000 users without breaking.", metric: "100%", metricLabel: "scalable builds" },
  { icon: "⬠", title: "International Experience", desc: "Projects built for markets in Africa, South Asia, and beyond. Global mindset, local understanding.", metric: "3+", metricLabel: "countries served" },
];

const trustBadges = [
  "Startup-ready MVPs", "SaaS Architecture", "On-time delivery",
  "Transparent process", "Post-launch support", "International clients",
];

export default function WhyChooseUs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const trustRef = useRef(null);
  const trustInView = useInView(trustRef, { once: true, margin: "-80px" });

  return (
    <>
      <section id="why" ref={ref} className="relative py-20 sm:py-28 bg-[#050508] text-white px-5 sm:px-6 overflow-hidden">
        <div className="absolute top-1/2 -translate-y-1/2 left-0 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(29,78,216,0.07) 0%, transparent 70%)" }} />

        <div className="relative max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}} className="flex items-center gap-3 mb-5">
            <span className="w-8 h-px bg-blue-500"></span>
            <span className="text-blue-400 text-[10px] sm:text-xs tracking-[0.3em] uppercase font-semibold">Why Choose Ninebyt</span>
          </motion.div>

          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 sm:mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight"
            >
              Built for businesses<br />
              <span className="text-blue-500">that expect more</span>
            </motion.h2>
            <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.3 }}
              className="text-white/40 max-w-xs text-sm leading-relaxed sm:text-right">
              Quality, performance, and long-term success — every project.
            </motion.p>
          </div>

          {/* 2-col on mobile, 4-col on md */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-5">
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="group relative rounded-2xl p-4 sm:p-6 border border-white/[0.07] hover:border-blue-500/25 transition-all duration-500 overflow-hidden"
                style={{ background: "rgba(255,255,255,0.02)" }}
              >
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: "radial-gradient(circle at 30% 30%, rgba(59,130,246,0.08), transparent 70%)" }} />
                <div className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full bg-gradient-to-r from-blue-500 to-transparent transition-all duration-700" />

                <span className="text-lg sm:text-xl text-blue-400/40 group-hover:text-blue-400/70 transition-colors duration-300 block mb-3 sm:mb-5">{f.icon}</span>

                <div className="mb-2 sm:mb-4">
                  <span className="text-xl sm:text-2xl font-black text-blue-500">{f.metric}</span>
                  <span className="text-white/20 text-[10px] ml-1 sm:ml-2 block sm:inline">{f.metricLabel}</span>
                </div>

                <h3 className="text-sm sm:text-base font-bold text-white/90 mb-1.5 sm:mb-2">{f.title}</h3>
                <p className="text-white/35 text-xs sm:text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section ref={trustRef} className="relative py-16 sm:py-20 bg-[#050508] overflow-hidden border-y border-white/[0.05]">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="relative max-w-7xl mx-auto px-5 sm:px-6">
          <motion.p initial={{ opacity: 0 }} animate={trustInView ? { opacity: 1 } : {}}
            className="text-white/20 text-[10px] tracking-[0.4em] uppercase text-center mb-8 sm:mb-12">
            What clients trust us for
          </motion.p>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
            {trustBadges.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={trustInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: i * 0.08 }}
                className="flex items-center gap-2 px-3 sm:px-5 py-2 sm:py-3 rounded-xl border border-white/[0.07] hover:border-blue-500/25 transition-all duration-300"
                style={{ background: "rgba(255,255,255,0.02)" }}
              >
                <span className="text-blue-500 text-xs">★</span>
                <span className="text-white/50 text-xs sm:text-sm">{t}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
