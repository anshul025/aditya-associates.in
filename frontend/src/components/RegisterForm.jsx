import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { Send, Loader2 } from "lucide-react";
import { SERVICES } from "../i18n";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

export default function RegisterForm({ t, lang }) {
  const [form, setForm] = useState({ name: "", phone: "", service: "", district: "", message: "" });
  const [busy, setBusy] = useState(false);

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    if (!/^[0-9+\s-]{10,15}$/.test(form.phone.trim())) {
      toast.error(t.form.invalidPhone);
      return;
    }
    setBusy(true);
    try {
      await axios.post(`${API}/register`, { ...form, language: lang });
      toast.success(t.form.successTitle, { description: t.form.successMsg });
      setForm({ name: "", phone: "", service: "", district: "", message: "" });
    } catch {
      toast.error(t.form.errorMsg);
    } finally {
      setBusy(false);
    }
  };

  const inputCls =
    "w-full rounded-xl border border-[#0f382c]/20 bg-white px-4 py-3.5 text-sm sm:text-base text-[#131c18] placeholder:text-[#4b5852]/50 focus:outline-none focus:ring-2 focus:ring-[#d97706]/60 focus:border-[#d97706] transition";

  return (
    <section id="apply" className="py-20 md:py-28 bg-[#0f382c] relative overflow-hidden">
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#1b5e4b] opacity-40 blur-3xl" />
      <div className="max-w-7xl mx-auto px-4 sm:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative">
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#e09f3e] mb-4">{t.form.chapter}</p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-[#fbf9f5] leading-tight">
            {t.form.title}
          </h2>
          <p className="mt-4 text-[#fbf9f5]/70 text-base sm:text-lg max-w-md">{t.form.sub}</p>
        </motion.div>

        <motion.form
          onSubmit={submit}
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="bg-[#fbf9f5] rounded-3xl p-6 sm:p-8 shadow-2xl"
          data-testid="registration-form"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#0f382c]/70 mb-1.5">{t.form.name} *</label>
              <input required data-testid="input-full-name" className={inputCls} placeholder={t.form.namePh} value={form.name} onChange={set("name")} />
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#0f382c]/70 mb-1.5">{t.form.phone} *</label>
              <input required data-testid="input-phone-number" type="tel" className={inputCls} placeholder={t.form.phonePh} value={form.phone} onChange={set("phone")} />
            </div>
          </div>

          <div className="mt-4">
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#0f382c]/70 mb-1.5">{t.form.service} *</label>
            <select required data-testid="select-service-required" className={inputCls} value={form.service} onChange={set("service")}>
              <option value="" disabled>{t.form.servicePh}</option>
              {SERVICES.map((s) => (
                <option key={s.id} value={s.title_en}>
                  {lang === "en" ? s.title_en : s.title_hi}
                </option>
              ))}
            </select>
          </div>

          <div className="mt-4">
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#0f382c]/70 mb-1.5">{t.form.district} *</label>
            <input required data-testid="input-district-city" className={inputCls} placeholder={t.form.districtPh} value={form.district} onChange={set("district")} />
          </div>

          <div className="mt-4">
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#0f382c]/70 mb-1.5">{t.form.message}</label>
            <textarea data-testid="input-message" rows={3} className={`${inputCls} resize-none`} placeholder={t.form.messagePh} value={form.message} onChange={set("message")} />
          </div>

          <button
            type="submit"
            disabled={busy}
            data-testid="registration-form-submit-btn"
            className="mt-6 w-full inline-flex items-center justify-center gap-2 bg-[#d97706] hover:bg-[#e09f3e] disabled:opacity-60 text-[#131c18] font-bold rounded-full px-7 py-4 text-sm sm:text-base transition-colors"
          >
            {busy ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
            {busy ? t.form.submitting : t.form.submit}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
