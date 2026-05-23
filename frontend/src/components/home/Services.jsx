import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const services = [
  { num: "01", icon: "⬡", title: "Web Development", desc: "Modern, fast, and scalable web applications built with React and Node.js. Designed to perform and convert.", tags: ["React", "Node.js", "REST APIs"] },
  { num: "02", icon: "◈", title: "SaaS Development", desc: "End-to-end SaaS platforms with auth, subscriptions, dashboards, and real-time features — production-ready.", tags: ["Architecture", "Auth", "Realtime"] },
  { num: "03", icon: "⬟", title: "Landing Pages", desc: "Premium, high-converting landing pages that make international clients say yes. Performance-optimized.", tags: ["Conversion", "Animation", "SEO"] },
  { num: "04", icon: "◎", title: "AI Integration", desc: "Embed AI capabilities into your product — chatbots, document analysis, smart automation, and API integrations.", tags: ["OpenAI", "Claude AI", "Automation"] },
  { num: "05", icon: "⬠", title: "Business Websites", desc: "Professional brand websites for growing businesses and startups that need a world-class online presence.", tags: ["Brand", "CMS", "Analytics"] },
  { num: "06", icon: "◇", title: "Digital Solutions", desc: "Social media management, digital strategy, and custom solutions — everything a business needs to grow.", tags: ["Strategy", "Social", "Growth"] },
];

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" ref={ref} className="relative py-20 sm:py-28 bg-[#050508] text-white px-5 sm:px-6 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(29,78,216,0.06) 0%, transparent 70%)" }} />

      <div className="relative max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}} className="flex items-center gap-3 mb-5">
          <span className="w-8 h-px bg-blue-500"></span>
          <span className="text-blue-400 text-[10px] sm:text-xs tracking-[0.3em] uppercase font-semibold">Services</span>
        </motion.div>

        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12 sm:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight"
          >
            What we<br /><span className="text-blue-500">deliver</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="text-white/40 max-w-xs text-sm leading-relaxed sm:text-right"
          >
            Premium digital solutions for startups, SaaS companies, and growing businesses worldwide.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.09, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="group relative rounded-2xl p-6 sm:p-7 border border-white/[0.07] hover:border-blue-500/30 transition-all duration-500 cursor-default overflow-hidden"
              style={{ background: "rgba(255,255,255,0.02)" }}
            >
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: "radial-gradient(circle at 20% 20%, rgba(59,130,246,0.08), transparent 60%)" }} />

              <div className="flex items-start justify-between mb-5 sm:mb-6">
                <span className="text-xl sm:text-2xl text-blue-500/60 group-hover:text-blue-400 transition-colors duration-300">{s.icon}</span>
                <span className="text-[10px] text-white/15 font-bold tracking-widest">{s.num}</span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-white/90 group-hover:text-white transition-colors duration-300">{s.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed mb-5 sm:mb-6 group-hover:text-white/50 transition-colors duration-300">{s.desc}</p>

              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {s.tags.map((tag, j) => (
                  <span key={j} className="text-[10px] sm:text-xs px-2 sm:px-2.5 py-1 rounded-md text-blue-400/60 border border-blue-500/15 group-hover:border-blue-500/30 group-hover:text-blue-400 transition-all duration-300">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full bg-gradient-to-r from-blue-600 to-transparent transition-all duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
