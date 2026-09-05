import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Sun } from "lucide-react";
import { MEDIA } from "../i18n";

export default function Contact({ t }) {
  return (
    <>
      <section id="contact" className="py-20 md:py-28 px-4 sm:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mb-14"
        >
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#d97706] mb-4">{t.contact.chapter}</p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-[#0f382c] leading-tight">
            {t.contact.title}
          </h2>
          <p className="mt-4 text-[#4b5852] text-base sm:text-lg">{t.contact.sub}</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="flex flex-col gap-5">
            <motion.a
              href="tel:+917400855738"
              data-testid="contact-phone-link"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lift bg-[#0f382c] rounded-2xl p-6 sm:p-8 flex items-center gap-5"
            >
              <span className="w-12 h-12 rounded-xl bg-[#e09f3e]/20 text-[#e09f3e] grid place-items-center shrink-0">
                <Phone size={22} />
              </span>
              <span>
                <span className="block text-xs font-semibold uppercase tracking-wider text-[#fbf9f5]/60">{t.contact.phoneLabel}</span>
                <span className="block font-display font-bold text-[#fbf9f5] text-xl sm:text-2xl mt-1">74008 55738</span>
              </span>
            </motion.a>

            <motion.a
              href="mailto:adityaassociates2025@gmail.com"
              data-testid="contact-email-link"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="lift bg-white border border-[#0f382c]/12 rounded-2xl p-6 sm:p-8 flex items-center gap-5"
            >
              <span className="w-12 h-12 rounded-xl bg-[#0f382c]/8 text-[#1b5e4b] grid place-items-center shrink-0">
                <Mail size={22} />
              </span>
              <span className="min-w-0">
                <span className="block text-xs font-semibold uppercase tracking-wider text-[#0f382c]/60">{t.contact.emailLabel}</span>
                <span className="block font-semibold text-[#0f382c] text-base sm:text-lg mt-1 break-all">adityaassociates2025@gmail.com</span>
              </span>
            </motion.a>

            <motion.div
              data-testid="contact-address-text"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.16 }}
              className="lift bg-white border border-[#0f382c]/12 rounded-2xl p-6 sm:p-8 flex items-start gap-5"
            >
              <span className="w-12 h-12 rounded-xl bg-[#0f382c]/8 text-[#1b5e4b] grid place-items-center shrink-0">
                <MapPin size={22} />
              </span>
              <span>
                <span className="block text-xs font-semibold uppercase tracking-wider text-[#0f382c]/60">{t.contact.addressLabel}</span>
                <span className="block font-semibold text-[#0f382c] text-base sm:text-lg mt-1 leading-relaxed">{t.contact.address}</span>
              </span>
            </motion.div>
          </div>

          <motion.figure
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lift bg-white border border-[#0f382c]/12 rounded-3xl p-5 sm:p-6"
            data-testid="business-card-image"
          >
            <img
              src={MEDIA.businessCard}
              alt="Aditya Associate visiting card"
              className="w-full rounded-2xl object-cover"
              loading="lazy"
            />
            <figcaption className="mt-3 text-center text-sm text-[#4b5852]">{t.contact.cardCaption}</figcaption>
          </motion.figure>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7 }}
          className="mt-6 rounded-3xl overflow-hidden border border-[#0f382c]/12 bg-white"
          data-testid="office-map-card"
        >
          <div className="p-5 sm:p-6 flex items-center gap-3">
            <span className="w-10 h-10 rounded-xl bg-[#0f382c]/8 text-[#1b5e4b] grid place-items-center shrink-0">
              <MapPin size={20} />
            </span>
            <div>
              <h3 className="font-display font-bold text-[#0f382c] text-lg sm:text-xl">{t.contact.mapTitle}</h3>
              <p className="text-sm text-[#4b5852]">{t.contact.mapNote}</p>
            </div>
          </div>
          <iframe
            title="Aditya Associate Office Map — Mansarovar Complex, Bhopal"
            src="https://maps.google.com/maps?q=Mansarovar%20Complex%2C%20Near%20BJP%20Office%2C%20Bhopal%2C%20Madhya%20Pradesh&t=&z=15&ie=UTF8&iwloc=&output=embed"
            className="w-full h-80 sm:h-96 border-0"
            loading="lazy"
            data-testid="office-map-iframe"
          />
        </motion.div>
      </section>

      <footer className="bg-[#0f382c] text-[#fbf9f5] py-12 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <span className="w-9 h-9 rounded-full bg-[#e09f3e]/20 text-[#e09f3e] grid place-items-center">
              <Sun size={18} strokeWidth={2.4} />
            </span>
            <span className="font-display font-extrabold text-lg">Aditya <span className="text-[#e09f3e]">Associate</span></span>
          </div>
          <p className="text-[#fbf9f5]/60 text-sm text-center max-w-md">{t.footer.tagline}</p>
          <p className="text-[#fbf9f5]/40 text-xs">© {new Date().getFullYear()} Aditya Associate, Bhopal. {t.footer.rights}</p>
        </div>
      </footer>
    </>
  );
}
