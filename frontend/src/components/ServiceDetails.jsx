import { motion } from "framer-motion";
import { CheckCircle2, ArrowUpRight } from "lucide-react";
import { SERVICE_DETAILS } from "../i18n";

export default function ServiceDetails({ t, lang }) {
  return (
    <section className="pb-20 md:pb-28 px-4 sm:px-8 max-w-7xl mx-auto" data-testid="service-details-section">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-2xl mb-12"
      >
        <h3 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl tracking-tight text-[#0f382c]">
          {t.services.detailTitle}
        </h3>
        <p className="mt-3 text-[#4b5852] text-base sm:text-lg">{t.services.detailSub}</p>
      </motion.div>

      <div className="space-y-14 md:space-y-20">
        {SERVICE_DETAILS.map((s, i) => {
          const flip = i % 2 === 1;
          return (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, x: flip ? 48 : -48 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center ${flip ? "lg:[&>*:first-child]:order-2" : ""}`}
              data-testid={`service-detail-${s.id}`}
            >
              <div className="group relative rounded-3xl overflow-hidden h-64 sm:h-80 lg:h-96">
                <img
                  src={s.image}
                  alt={lang === "en" ? s.title_en : s.title_hi}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f382c]/60 to-transparent" />
                <span className="absolute bottom-4 left-5 font-num text-6xl text-[#fbf9f5]/85 leading-none select-none">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              <div>
                <h4 className="font-display font-bold text-2xl sm:text-3xl text-[#0f382c] leading-tight">
                  {lang === "en" ? s.title_en : s.title_hi}
                </h4>
                <p className="mt-4 text-[#4b5852] text-base sm:text-lg leading-relaxed">
                  {lang === "en" ? s.desc_en : s.desc_hi}
                </p>
                <ul className="mt-6 space-y-3">
                  {(lang === "en" ? s.points_en : s.points_hi).map((p, j) => (
                    <motion.li
                      key={j}
                      initial={{ opacity: 0, x: -16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.15 + j * 0.1 }}
                      className="flex items-start gap-3 text-sm sm:text-base text-[#131c18] font-medium"
                    >
                      <CheckCircle2 size={19} className="text-[#15803d] mt-0.5 shrink-0" />
                      {p}
                    </motion.li>
                  ))}
                </ul>
                <a
                  href="#apply"
                  data-testid={`service-detail-apply-${s.id}`}
                  className="mt-7 inline-flex items-center gap-1.5 bg-[#0f382c] text-[#fbf9f5] font-semibold rounded-full px-6 py-3 text-sm hover:bg-[#1b5e4b] transition-colors"
                >
                  {t.nav.apply} <ArrowUpRight size={16} />
                </a>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
