import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import project1 from "../../assets/project1.png";
import project2 from "../../assets/project2.png";
import project3 from "../../assets/project3.png";

const projects = [
  {
    title: "Safe Delivery",
    category: "Logistics Platform",
    desc: "Porter-like logistics app for Liberia/Kenya. React Native rider & customer apps, real-time tracking, OTP auth.",
    image: project1,
    tags: ["React Native", "Node.js", "MongoDB", "Firebase"],
    url: "https://www.saferidedelivery.com/",
  },
  {
    title: "AutismViolet",
    category: "Healthcare & Support",
    desc: "Digital support platform for autism caregivers and organizations — clean, accessible, and premium UI designed with empathy.",
    image: project2,
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    url: "https://www.autismviolet.com/",
  },
  {
    title: "Know Liberia",
    category: "Property Listing",
    desc: "Premium property listing platform for the Liberian real estate market — search, listings, and agent management.",
    image: project3,
    tags: ["React", "Node.js", "PostgreSQL"],
    url: "https://knowliberia.com/",
  },
];

function ProjectCard({ project, index, inView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="group relative rounded-2xl sm:rounded-3xl overflow-hidden border border-white/[0.07] hover:border-blue-500/25 transition-all duration-700 flex flex-col"
      style={{ background: "rgba(255,255,255,0.02)" }}
    >
      {/* Image */}
      <div className="relative overflow-hidden h-48 sm:h-56 bg-[#0a0a12]">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050508] via-[#050508]/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-5 sm:p-7 flex flex-col flex-1">
        <span className="text-blue-400/60 text-[10px] uppercase tracking-widest mb-2 block">{project.category}</span>
        <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">{project.title}</h3>
        <p className="text-white/40 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-5 flex-1">{project.desc}</p>

        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-5 sm:mb-6">
          {project.tags.map((tag, i) => (
            <span key={i} className="text-[10px] sm:text-xs px-2 sm:px-2.5 py-1 rounded-md text-white/30 border border-white/[0.08]">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-2 sm:gap-3">
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white border border-white/10 hover:border-blue-500/40 transition-all duration-300 relative overflow-hidden group/btn text-center"
          >
            <span className="absolute inset-0 bg-blue-500/0 group-hover/btn:bg-blue-500/5 transition-colors duration-300" />
            <span className="relative">View Project →</span>
          </a>
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="py-2.5 px-3 sm:px-4 rounded-xl text-xs sm:text-sm font-semibold text-blue-400 border border-blue-500/20 hover:border-blue-500/50 hover:bg-blue-500/5 transition-all duration-300"
          >
            ↗
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Portfolio() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="portfolio" ref={ref} className="relative py-20 sm:py-28 bg-[#050508] text-white px-5 sm:px-6 overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(29,78,216,0.07) 0%, transparent 70%)" }} />

      <div className="relative max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}} className="flex items-center gap-3 mb-5">
          <span className="w-8 h-px bg-blue-500"></span>
          <span className="text-blue-400 text-[10px] sm:text-xs tracking-[0.3em] uppercase font-semibold">Featured Work</span>
        </motion.div>

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-5 sm:mb-6">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight"
          >
            Client<br /><span className="text-blue-500">Projects</span>
          </motion.h2>
        </div>

        {/* Collab notice */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="inline-flex items-start sm:items-center gap-3 mb-10 sm:mb-14 px-4 sm:px-5 py-3 rounded-xl border border-blue-500/15"
          style={{ background: "rgba(59,130,246,0.04)" }}
        >
          <span className="w-2 h-2 rounded-full bg-blue-500 pulse-glow mt-1 sm:mt-0 flex-shrink-0"></span>
          <p className="text-white/50 text-xs sm:text-sm">
            Several client solutions below were developed in collaboration with{" "}
            <a href="https://webieapp.com" target="_blank" rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 font-semibold underline underline-offset-2 decoration-blue-500/30 transition-colors">
              WebieApp Solutions
            </a>
          </p>
        </motion.div>

        {/* Grid - 1 col mobile, 2 col sm, 3 col lg */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}