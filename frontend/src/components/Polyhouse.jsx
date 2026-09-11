import { motion } from "framer-motion";
import { BadgePercent, Quote, Leaf, CheckCircle2, IndianRupee, ListChecks, Wrench, Target } from "lucide-react";
import { CROPS, BENEFITS, COMPARISON, NET_CROPS, NET_BENEFITS, POLY_COMPONENTS, NET_COMPONENTS, POLY_SYSTEMS, INVESTMENT, BEST_FOR, MEDIA } from "../i18n";

const fade = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
};

export default function Polyhouse({ t, lang }) {
  return (
    <section id="polyhouse" data-testid="polyhouse-deepdive-section" className="py-20 md:py-28 bg-[#f3f0e6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <motion.div {...fade} className="max-w-3xl mb-14">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#d97706] mb-4">{t.poly.chapter}</p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-[#0f382c] leading-tight">
            {t.poly.title}
          </h2>
        </motion.div>

        {/* what is polyhouse */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6">
          <motion.div {...fade} className="lg:col-span-7 bg-[#0f382c] rounded-3xl p-8 sm:p-10 text-[#fbf9f5] relative overflow-hidden">
            <Leaf className="absolute -right-8 -bottom-8 text-[#1b5e4b] opacity-40" size={180} />
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#e09f3e] mb-4">{t.poly.whatTitle}</h3>
            <p className="text-[#fbf9f5]/85 text-base sm:text-lg leading-relaxed max-w-xl" data-testid="polyhouse-what-text">
              {t.poly.what}
            </p>
            <div className="mt-8 inline-flex items-center gap-2 bg-[#15803d] text-white text-xs sm:text-sm font-semibold rounded-full px-4 py-2" data-testid="subsidy-badge">
              <BadgePercent size={16} /> {t.poly.subsidyBadge}
            </div>
            <p className="mt-3 text-[#fbf9f5]/55 text-xs sm:text-sm max-w-lg">{t.poly.subsidyNote}</p>
          </motion.div>

          <motion.div {...fade} transition={{ ...fade.transition, delay: 0.12 }} className="lg:col-span-5 rounded-3xl overflow-hidden relative min-h-[280px]">
            <img src={MEDIA.cropsPhoto} alt="polyhouse crops" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f382c]/85 to-transparent" />
            <div className="absolute bottom-0 p-6">
              <h4 className="font-display font-bold text-[#fbf9f5] text-xl mb-3">{t.poly.cropsTitle}</h4>
              <div className="flex flex-wrap gap-2" data-testid="polyhouse-crops-list">
                {CROPS.map((c, i) => (
                  <span key={i} className="bg-[#fbf9f5]/15 backdrop-blur border border-[#fbf9f5]/25 text-[#fbf9f5] text-xs font-medium rounded-full px-3 py-1.5">
                    {lang === "en" ? c.name_en : c.name_hi}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* benefits */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16" data-testid="polyhouse-benefits">
          {BENEFITS.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="lift bg-white rounded-2xl border border-[#0f382c]/12 p-6"
            >
              <div className="font-num text-4xl text-[#d97706] leading-none mb-3">0{i + 1}</div>
              <h4 className="font-display font-bold text-[#0f382c] text-lg leading-snug">
                {lang === "en" ? b.title_en : b.title_hi}
              </h4>
              <p className="mt-2 text-sm text-[#4b5852] leading-relaxed">
                {lang === "en" ? b.desc_en : b.desc_hi}
              </p>
            </motion.div>
          ))}
        </div>

        {/* comparison */}
        <motion.div {...fade}>
          <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#0f382c]">{t.poly.compareTitle}</h3>
          <p className="mt-2 text-[#4b5852] text-sm sm:text-base max-w-2xl">{t.poly.compareSub}</p>
          <div className="mt-8 overflow-x-auto rounded-2xl border border-[#0f382c]/12 bg-white" data-testid="comparison-table">
            <table className="w-full text-sm sm:text-base min-w-[560px]">
              <thead>
                <tr className="bg-[#0f382c] text-[#fbf9f5]">
                  <th className="text-left font-semibold px-5 py-4">{t.poly.colFeature}</th>
                  <th className="text-left font-semibold px-5 py-4 text-[#e09f3e]">{t.poly.colPoly}</th>
                  <th className="text-left font-semibold px-5 py-4">{t.poly.colNet}</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((r, i) => (
                  <tr key={i} className={i % 2 ? "bg-[#fbf9f5]" : "bg-white"}>
                    <td className="px-5 py-4 font-semibold text-[#0f382c]">{lang === "en" ? r.f_en : r.f_hi}</td>
                    <td className="px-5 py-4 text-[#131c18]">{lang === "en" ? r.p_en : r.p_hi}</td>
                    <td className="px-5 py-4 text-[#4b5852]">{lang === "en" ? r.n_en : r.n_hi}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* net house explainer */}
        <motion.div {...fade} className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-6" data-testid="nethouse-block">
          <div className="lg:col-span-7 bg-white rounded-3xl border border-[#0f382c]/12 p-8 sm:p-10">
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#0f382c]">{t.poly.netTitle}</h3>
            <p className="mt-4 text-[#4b5852] text-base sm:text-lg leading-relaxed">{t.poly.netWhat}</p>
            <h4 className="mt-8 font-display font-bold text-lg text-[#0f382c] flex items-center gap-2">
              <CheckCircle2 size={20} className="text-[#d97706]" /> {t.poly.netBenefitsTitle}
            </h4>
            <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
              {NET_BENEFITS.map((b, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm sm:text-base text-[#131c18]">
                  <CheckCircle2 size={17} className="text-[#15803d] mt-0.5 shrink-0" />
                  {lang === "en" ? b.en : b.hi}
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-5 bg-[#1b5e4b] rounded-3xl p-8 sm:p-10 text-[#fbf9f5] relative overflow-hidden">
            <img src={MEDIA.netHousePhoto} alt="net house" className="absolute inset-0 w-full h-full object-cover opacity-25" loading="lazy" />
            <div className="relative">
              <h4 className="font-display font-bold text-xl sm:text-2xl text-[#e09f3e]">{t.poly.netCropsTitle}</h4>
              <div className="mt-5 flex flex-wrap gap-2" data-testid="nethouse-crops-list">
                {NET_CROPS.map((c, i) => (
                  <span key={i} className="bg-[#fbf9f5]/15 backdrop-blur border border-[#fbf9f5]/25 text-[#fbf9f5] text-xs sm:text-sm font-medium rounded-full px-3 py-1.5">
                    {lang === "en" ? c.en : c.hi}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* components */}
        <motion.div {...fade} className="mt-16" data-testid="components-block">
          <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#0f382c] flex items-center gap-3">
            <Wrench size={26} className="text-[#d97706]" /> {t.poly.componentsTitle}
          </h3>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="bg-white rounded-3xl border border-[#0f382c]/12 p-7 sm:p-8">
              <h4 className="font-display font-bold text-lg text-[#0f382c] mb-5">{t.poly.polyCompLabel}</h4>
              <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                {POLY_COMPONENTS.map((c, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm sm:text-base text-[#131c18]">
                    <span className="font-num text-xl text-[#d97706] leading-none mt-0.5 shrink-0">{String(i + 1).padStart(2, "0")}</span>
                    {lang === "en" ? c.en : c.hi}
                  </li>
                ))}
              </ol>
            </div>
            <div className="bg-white rounded-3xl border border-[#0f382c]/12 p-7 sm:p-8">
              <h4 className="font-display font-bold text-lg text-[#0f382c] mb-5">{t.poly.netCompLabel}</h4>
              <ol className="space-y-3">
                {NET_COMPONENTS.map((c, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm sm:text-base text-[#131c18]">
                    <span className="font-num text-xl text-[#d97706] leading-none mt-0.5 shrink-0">{String(i + 1).padStart(2, "0")}</span>
                    {lang === "en" ? c.en : c.hi}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </motion.div>

        {/* systems */}
        <motion.div {...fade} className="mt-16 bg-[#0f382c] rounded-3xl p-8 sm:p-10" data-testid="systems-block">
          <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#fbf9f5] flex items-center gap-3">
            <ListChecks size={26} className="text-[#e09f3e]" /> {t.poly.systemsTitle}
          </h3>
          <div className="mt-6 flex flex-wrap gap-2.5">
            {POLY_SYSTEMS.map((s, i) => (
              <span key={i} className="bg-[#fbf9f5]/10 border border-[#e09f3e]/30 text-[#fbf9f5] text-xs sm:text-sm font-medium rounded-full px-4 py-2">
                {lang === "en" ? s.en : s.hi}
              </span>
            ))}
          </div>
        </motion.div>

        {/* investment */}
        <motion.div {...fade} className="mt-16" data-testid="investment-block">
          <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#0f382c] flex items-center gap-3">
            <IndianRupee size={26} className="text-[#d97706]" /> {t.poly.investTitle}
          </h3>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {INVESTMENT.map((inv, i) => (
              <div key={i} className="lift bg-white rounded-3xl border border-[#0f382c]/12 p-7 sm:p-8">
                <h4 className="font-display font-bold text-lg text-[#0f382c]">{lang === "en" ? inv.label_en : inv.label_hi}</h4>
                <div className="mt-3 font-num text-5xl sm:text-6xl text-[#d97706] leading-none">{inv.range}</div>
                <div className="text-sm font-semibold text-[#0f382c]/70 mt-1">{lang === "en" ? inv.unit_en : inv.unit_hi}</div>
                <p className="mt-3 text-sm text-[#4b5852]">{lang === "en" ? inv.note_en : inv.note_hi}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm font-semibold text-[#0f382c]" data-testid="min-land-note">{t.poly.minLand}</p>
          <p className="mt-2 text-xs sm:text-sm text-[#4b5852]/80 italic">{t.poly.investNote}</p>
        </motion.div>

        {/* best for */}
        <motion.div {...fade} className="mt-16" data-testid="best-for-block">
          <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#0f382c] flex items-center gap-3">
            <Target size={26} className="text-[#d97706]" /> {t.poly.bestForTitle}
          </h3>
          <div className="mt-6 flex flex-wrap gap-2.5">
            {BEST_FOR.map((b, i) => (
              <span key={i} className="bg-[#0f382c] text-[#fbf9f5] text-xs sm:text-sm font-semibold rounded-full px-4 py-2.5">
                {lang === "en" ? b.en : b.hi}
              </span>
            ))}
          </div>
        </motion.div>

        {/* 30-second pitch */}
        <motion.div {...fade} className="mt-16 bg-[#0f382c] rounded-3xl p-8 sm:p-12 relative overflow-hidden" data-testid="pitch-block">
          <Quote className="absolute top-6 left-6 text-[#e09f3e]/25" size={72} />
          <div className="relative max-w-3xl mx-auto text-center">
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#e09f3e] mb-5">{t.poly.pitchTitle}</p>
            <p className="font-display text-[#fbf9f5] text-lg sm:text-2xl leading-relaxed font-medium">
              “{t.poly.pitch}”
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
