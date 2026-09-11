import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDownRight, Phone } from "lucide-react";
import { MEDIA } from "../i18n";

export default function Hero({ t }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const videoY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);

  return (
    <section id="top" ref={ref} className="relative min-h-[100svh] flex flex-col justify-end overflow-hidden bg-[#0f382c]">
      <motion.div style={{ y: videoY }} className="absolute inset-0">
        <video
          className="w-full h-full object-cover opacity-45"
          src={MEDIA.videos[2].url}
          autoPlay
          muted
          loop
          playsInline
          data-testid="hero-bg-video"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f382c] via-[#0f382c]/55 to-[#0f382c]/30" />
      </motion.div>

      <motion.div style={{ y: textY }} className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-8 pt-32 pb-10 sm:pb-16">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          data-testid="hero-eyebrow"
          className="text-[#e09f3e] text-xs sm:text-sm font-semibold tracking-[0.22em] uppercase mb-6"
        >
          {t.hero.eyebrow}
        </motion.p>

        <h1 className="font-display font-extrabold text-[#fbf9f5] text-4xl sm:text-6xl lg:text-7xl leading-[1.02] tracking-tight max-w-4xl">
          {t.hero.lines.map((line, i) => (
            <span key={i} className="mask-line">
              <motion.span
                className="block"
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ delay: 0.45 + i * 0.14, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              >
                {i === 1 ? <span className="text-[#e09f3e]">{line}</span> : line}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.05, duration: 0.8 }}
          data-testid="hero-subtext"
          className="mt-6 max-w-xl text-[#fbf9f5]/75 text-base sm:text-lg leading-relaxed"
        >
          {t.hero.sub}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4"
        >
          <a
            href="#apply"
            data-testid="hero-apply-register-btn"
            className="group inline-flex items-center gap-2 bg-[#d97706] hover:bg-[#e09f3e] text-[#131c18] font-bold rounded-full px-7 py-4 text-sm sm:text-base transition-colors"
          >
            {t.hero.ctaApply}
            <ArrowDownRight size={18} className="transition-transform duration-300 group-hover:rotate-45" />
          </a>
          <a
            href="#work"
            data-testid="hero-see-work-btn"
            className="inline-flex items-center gap-2 border border-[#fbf9f5]/30 text-[#fbf9f5] hover:bg-[#fbf9f5]/10 font-semibold rounded-full px-7 py-4 text-sm sm:text-base transition-colors"
          >
            {t.hero.ctaWork}
          </a>
          <a
            href="tel:+916266353292"
            data-testid="hero-call-btn"
            className="inline-flex items-center gap-2 text-[#fbf9f5]/85 hover:text-[#e09f3e] font-semibold text-sm sm:text-base transition-colors"
          >
            <Phone size={16} /> {t.hero.call}
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="mt-12 grid grid-cols-3 gap-3 sm:gap-6 max-w-2xl"
          data-testid="hero-stats"
        >
          {t.hero.stats.map((s, i) => (
            <div key={i} className="border-l-2 border-[#e09f3e]/60 pl-3 sm:pl-5">
              <div className="font-num text-4xl sm:text-5xl text-[#e09f3e] leading-none">{s.k}</div>
              <div className="text-[#fbf9f5]/65 text-xs sm:text-sm mt-1.5">{s.v}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
