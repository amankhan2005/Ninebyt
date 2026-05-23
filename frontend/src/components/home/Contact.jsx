import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = e => setForm(p => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("https://ninebyt.onrender.com/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed to send");
      setSent(true);
    } catch (err) {
      setError("Something went wrong. Please try WhatsApp or Email directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" ref={ref} className="relative py-20 sm:py-28 bg-[#050508] text-white px-5 sm:px-6 overflow-hidden">
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(29,78,216,0.08) 0%, transparent 70%)" }} />

      <div className="relative max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}} className="flex items-center gap-3 mb-5">
          <span className="w-8 h-px bg-blue-500"></span>
          <span className="text-blue-400 text-[10px] sm:text-xs tracking-[0.3em] uppercase font-semibold">Contact</span>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 sm:gap-16 items-start">
          {/* Left */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6 sm:mb-8 tracking-tight"
            >
              Let's build<br />
              <span className="text-blue-500">something</span><br />
              <span className="text-white/20">great</span>
            </motion.h2>

            <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.3 }}
              className="text-white/40 text-sm sm:text-base leading-relaxed mb-8 sm:mb-10">
              Have a project in mind? Let's discuss your vision, timeline, and budget. I reply within 24 hours.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.4 }} className="space-y-3">
              <a href="https://wa.me/919044563414" target="_blank" rel="noopener noreferrer"
                className="group flex items-center gap-3 sm:gap-4 p-3.5 sm:p-4 rounded-xl border border-white/[0.07] hover:border-green-500/30 transition-all duration-300"
                style={{ background: "rgba(255,255,255,0.02)" }}>
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-400 flex-shrink-0">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                </div>
                <div className="min-w-0">
                  <p className="text-white/70 text-sm font-semibold">WhatsApp</p>
                  <p className="text-white/30 text-xs">Quick reply, project discussion</p>
                </div>
                <span className="ml-auto text-white/20 group-hover:text-white/40 transition-colors flex-shrink-0">→</span>
              </a>

              <a href="mailto:ninebytteam@gmail.com"
                className="group flex items-center gap-3 sm:gap-4 p-3.5 sm:p-4 rounded-xl border border-white/[0.07] hover:border-blue-500/30 transition-all duration-300"
                style={{ background: "rgba(255,255,255,0.02)" }}>
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 flex-shrink-0">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                </div>
                <div className="min-w-0">
                  <p className="text-white/70 text-sm font-semibold">Email</p>
                  <p className="text-white/30 text-xs truncate">ninebytteam@gmail.com</p>
                </div>
                <span className="ml-auto text-white/20 group-hover:text-white/40 transition-colors flex-shrink-0">→</span>
              </a>
            </motion.div>
          </div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative rounded-2xl sm:rounded-3xl p-5 sm:p-8 border border-white/[0.07]"
            style={{ background: "rgba(255,255,255,0.02)" }}
          >
            {sent ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center mb-5 text-xl sm:text-2xl">✓</div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3">Message Sent!</h3>
                <p className="text-white/40 text-sm">I'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                <div>
                  <label className="block text-white/40 text-[10px] uppercase tracking-widest mb-2">Your Name</label>
                  <input name="name" value={form.name} onChange={handleChange} required placeholder="John Smith"
                    className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3 text-white placeholder-white/20 text-sm focus:outline-none focus:border-blue-500/50 transition-colors duration-300" />
                </div>
                <div>
                  <label className="block text-white/40 text-[10px] uppercase tracking-widest mb-2">Email Address</label>
                  <input name="email" value={form.email} onChange={handleChange} type="email" required placeholder="john@company.com"
                    className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3 text-white placeholder-white/20 text-sm focus:outline-none focus:border-blue-500/50 transition-colors duration-300" />
                </div>
                <div>
                  <label className="block text-white/40 text-[10px] uppercase tracking-widest mb-2">Your Project</label>
                  <textarea name="message" value={form.message} onChange={handleChange} required rows={4} placeholder="Tell me about your project, timeline, and budget..."
                    className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3 text-white placeholder-white/20 text-sm focus:outline-none focus:border-blue-500/50 transition-colors duration-300 resize-none" />
                </div>

                {/* Error message */}
                {error && (
                  <p className="text-red-400/80 text-xs border border-red-500/20 rounded-lg px-3 py-2 bg-red-500/5">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-xl font-semibold text-white transition-all duration-300 active:scale-[0.98] hover:scale-[1.02] disabled:opacity-60 disabled:scale-100 disabled:cursor-not-allowed relative overflow-hidden group"
                  style={{ background: "linear-gradient(135deg, #1d4ed8, #3b82f6)", boxShadow: "0 0 30px rgba(59,130,246,0.25)" }}
                >
                  <span className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors duration-300" />
                  <span className="relative flex items-center justify-center gap-2 text-sm sm:text-base">
                    {loading ? (
                      <>
                        <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8h4z"/>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>Send Message <span className="group-hover:translate-x-1 transition-transform">→</span></>
                    )}
                  </span>
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}