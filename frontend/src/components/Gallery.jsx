import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { MEDIA } from "../i18n";

export default function Gallery({ t, lang }) {
  return (
    <section id="work" data-testid="work-gallery-section" className="py-20 md:py-28 px-4 sm:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-3xl mb-14"
      >
        <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#d97706] mb-4">{t.work.chapter}</p>
        <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-[#0f382c] leading-tight">
          {t.work.title}
        </h2>
        <p className="mt-4 text-[#4b5852] text-base sm:text-lg">{t.work.sub}</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
        {MEDIA.videos.map((v, i) => (
          <motion.figure
            key={v.id}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className={`video-frame group relative rounded-3xl overflow-hidden bg-[#0f382c] ${i === 0 ? "md:col-span-2 md:row-span-2" : ""}`}
            data-testid={`gallery-video-${v.id}`}
          >
            <video
              src={v.url}
              controls
              preload="metadata"
              playsInline
              className={`w-full object-cover ${i === 0 ? "h-72 md:h-full md:min-h-[480px]" : "h-64"}`}
            />
            <figcaption className="absolute top-0 left-0 right-0 p-5 bg-gradient-to-b from-[#0f382c]/80 to-transparent pointer-events-none">
              <span className="inline-block bg-[#d97706] text-[#131c18] text-[10px] font-bold uppercase tracking-wider rounded-full px-2.5 py-1 mb-2">
                {lang === "en" ? v.tag_en : v.tag_hi}
              </span>
              <p className="text-[#fbf9f5] font-display font-semibold text-sm sm:text-base flex items-center gap-2">
                <Play size={14} className="text-[#e09f3e]" /> {lang === "en" ? v.title_en : v.title_hi}
              </p>
            </figcaption>
          </motion.figure>
        ))}
      </div>

      <motion.figure
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.7 }}
        className="mt-6 rounded-3xl overflow-hidden relative"
        data-testid="gallery-nethouse-photo"
      >
        <img src={MEDIA.netHousePhoto} alt="net house project" className="w-full h-72 sm:h-96 object-cover" loading="lazy" />
        <figcaption className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#0f382c]/85 to-transparent">
          <p className="text-[#fbf9f5] text-sm sm:text-base font-medium max-w-2xl">{t.work.netCaption}</p>
        </figcaption>
      </motion.figure>
    </section>
  );
}
