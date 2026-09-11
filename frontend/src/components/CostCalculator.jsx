import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, ArrowDownRight, AlertCircle } from "lucide-react";

const MIN_AREA = 4000;
const RATE_LOW = 1000;
const RATE_HIGH = 2000;
const SUBSIDY = 0.35;

const inr = (n) => "₹" + Math.round(n).toLocaleString("en-IN");

export default function CostCalculator({ t, lang }) {
  const [area, setArea] = useState("");
  const num = parseFloat(area);
  const valid = !isNaN(num) && num >= MIN_AREA;
  const showError = area !== "" && !isNaN(num) && num < MIN_AREA;

  const low = valid ? num * RATE_LOW : 0;
  const high = valid ? num * RATE_HIGH : 0;

  const applyWithEstimate = () => {
    const detail =
      lang === "en"
        ? `Polyhouse estimate: ${num.toLocaleString("en-IN")} sq. meter, cost ${inr(low)}–${inr(high)}, subsidy saving (35%) ${inr(low * SUBSIDY)}–${inr(high * SUBSIDY)}`
        : `पॉलीहाउस अनुमान: ${num.toLocaleString("en-IN")} वर्ग मीटर, लागत ${inr(low)}–${inr(high)}, सब्सिडी बचत (35%) ${inr(low * SUBSIDY)}–${inr(high * SUBSIDY)}`;
    window.dispatchEvent(new CustomEvent("prefill-estimate", { detail }));
    document.querySelector("#apply")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="calculator" data-testid="calculator-section" className="py-20 md:py-28 bg-white border-y border-[#0f382c]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mb-12"
        >
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#d97706] mb-4 flex items-center gap-2">
            <Calculator size={16} /> {t.calc.eyebrow}
          </p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-[#0f382c] leading-tight">
            {t.calc.title}
          </h2>
          <p className="mt-4 text-[#4b5852] text-base sm:text-lg">{t.calc.sub}</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7 }}
            className="bg-[#fbf9f5] rounded-3xl border border-[#0f382c]/12 p-7 sm:p-10 flex flex-col justify-center"
          >
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#0f382c]/70 mb-2">
              {t.calc.landLabel}
            </label>
            <input
              type="number"
              min={MIN_AREA}
              value={area}
              onChange={(e) => setArea(e.target.value)}
              placeholder={t.calc.landPh}
              data-testid="input-land-area"
              className="w-full rounded-xl border border-[#0f382c]/20 bg-white px-5 py-4 text-2xl font-num text-[#131c18] placeholder:text-[#4b5852]/40 focus:outline-none focus:ring-2 focus:ring-[#d97706]/60 focus:border-[#d97706] transition"
            />
            <p className="mt-3 text-sm text-[#4b5852]">{t.calc.minNote}</p>
            {showError && (
              <p data-testid="calc-error" className="mt-3 flex items-center gap-2 text-sm font-medium text-[#c85a32]">
                <AlertCircle size={16} /> {t.calc.belowMin}
              </p>
            )}
            <p className="mt-6 text-xs sm:text-sm text-[#4b5852]/80 italic">{t.calc.disclaimer}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="bg-[#0f382c] rounded-3xl p-7 sm:p-10 text-[#fbf9f5] flex flex-col justify-center"
            data-testid="calc-results"
          >
            <div className="space-y-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#fbf9f5]/55">{t.calc.estCost}</p>
                <p className="font-num text-4xl sm:text-5xl text-[#e09f3e] leading-tight mt-1" data-testid="calc-cost-range">
                  {valid ? `${inr(low)} – ${inr(high)}` : "—"}
                </p>
              </div>
              <div className="border-t border-[#fbf9f5]/15 pt-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#fbf9f5]/55">{t.calc.subsidy}</p>
                <p className="font-num text-3xl sm:text-4xl text-[#4ade80] leading-tight mt-1" data-testid="calc-subsidy-range">
                  {valid ? `${inr(low * SUBSIDY)} – ${inr(high * SUBSIDY)}` : "—"}
                </p>
              </div>
              <div className="border-t border-[#fbf9f5]/15 pt-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#fbf9f5]/55">{t.calc.net}</p>
                <p className="font-num text-3xl sm:text-4xl text-[#fbf9f5] leading-tight mt-1" data-testid="calc-net-range">
                  {valid ? `${inr(low * (1 - SUBSIDY))} – ${inr(high * (1 - SUBSIDY))}` : "—"}
                </p>
              </div>
            </div>
            <button
              onClick={applyWithEstimate}
              disabled={!valid}
              data-testid="calc-apply-btn"
              className="group mt-8 inline-flex items-center justify-center gap-2 bg-[#d97706] hover:bg-[#e09f3e] disabled:opacity-40 disabled:cursor-not-allowed text-[#131c18] font-bold rounded-full px-7 py-4 text-sm sm:text-base transition-colors"
            >
              {t.calc.cta}
              <ArrowDownRight size={18} className="transition-transform duration-300 group-hover:rotate-45" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
