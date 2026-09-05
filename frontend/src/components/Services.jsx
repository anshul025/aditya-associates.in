import { motion } from "framer-motion";
import {
  Sprout, Tent, Landmark, FileText, Factory, PackageCheck, MapPinned,
  FileCheck, Rocket, Receipt, BadgeCheck, Award, Snowflake, ArrowUpRight, Star,
} from "lucide-react";
import { SERVICES } from "../i18n";

const ICONS = { Sprout, Tent, Landmark, FileText, Factory, PackageCheck, MapPinned, FileCheck, Rocket, Receipt, BadgeCheck, Award, Snowflake };

export default function Services({ t, lang }) {
  return (
    <section id="services" className="py-20 md:py-28 px-4 sm:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-3xl mb-14"
      >
        <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#d97706] mb-4">{t.services.chapter}</p>
        <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-[#0f382c] leading-tight">
          {t.services.title}
        </h2>
        <p className="mt-4 text-[#4b5852] text-base sm:text-lg">{t.services.sub}</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6" data-testid="services-grid-container">
        {SERVICES.map((s, i) => {
          const Icon = ICONS[s.icon] || Sprout;
          return (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
              data-testid={`service-card-${s.id}`}
              className={`lift relative rounded-2xl p-6 sm:p-7 border ${
                s.featured
                  ? "bg-[#0f382c] text-[#fbf9f5] border-[#0f382c] lg:row-span-1"
                  : "bg-white border-[#0f382c]/12"
              }`}
            >
              {s.featured && (
                <span className="absolute top-4 right-4 inline-flex items-center gap-1 bg-[#d97706] text-[#131c18] text-[10px] font-bold uppercase tracking-wider rounded-full px-2.5 py-1">
                  <Star size={10} fill="currentColor" /> {lang === "en" ? "Flagship" : "मुख्य"}
                </span>
              )}
              <div className={`w-11 h-11 rounded-xl grid place-items-center mb-5 ${s.featured ? "bg-[#e09f3e]/20 text-[#e09f3e]" : "bg-[#0f382c]/8 text-[#1b5e4b]"}`}>
                <Icon size={22} strokeWidth={2} />
              </div>
              <h3 className={`font-display font-bold text-lg sm:text-xl leading-snug ${s.featured ? "text-[#fbf9f5]" : "text-[#0f382c]"}`}>
                {lang === "en" ? s.title_en : s.title_hi}
              </h3>
              <p className={`mt-2.5 text-sm leading-relaxed ${s.featured ? "text-[#fbf9f5]/70" : "text-[#4b5852]"}`}>
                {lang === "en" ? s.desc_en : s.desc_hi}
              </p>
              <a
                href="#apply"
                className={`mt-5 inline-flex items-center gap-1 text-sm font-semibold ${s.featured ? "text-[#e09f3e]" : "text-[#d97706]"}`}
              >
                {t.nav.apply} <ArrowUpRight size={15} />
              </a>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
