import { useEffect, useState } from "react";
import Lenis from "lenis";
import { Toaster } from "sonner";
import { T } from "./i18n";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Services from "./components/Services";
import Polyhouse from "./components/Polyhouse";
import CostCalculator from "./components/CostCalculator";
import Gallery from "./components/Gallery";
import RegisterForm from "./components/RegisterForm";
import Contact from "./components/Contact";

function App() {
  const [lang, setLang] = useState("en");
  const t = T[lang];

  useEffect(() => {
    document.documentElement.classList.toggle("lang-hi", lang === "hi");
    document.documentElement.lang = lang;
  }, [lang]);

  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.09 });
    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    const id = requestAnimationFrame(raf);
    const anchorHandler = (e) => {
      const a = e.target.closest("a[href^='#']");
      if (a) {
        e.preventDefault();
        lenis.scrollTo(a.getAttribute("href"), { offset: -70 });
      }
    };
    document.addEventListener("click", anchorHandler);
    return () => {
      cancelAnimationFrame(id);
      lenis.destroy();
      document.removeEventListener("click", anchorHandler);
    };
  }, []);

  return (
    <div className="grain">
      <Toaster position="top-center" richColors />
      <Navbar t={t} lang={lang} toggleLang={() => setLang(lang === "en" ? "hi" : "en")} />
      <main>
        <Hero t={t} />
        <Marquee items={t.marquee} />
        <Services t={t} lang={lang} />
        <Polyhouse t={t} lang={lang} />
        <CostCalculator t={t} lang={lang} />
        <Gallery t={t} lang={lang} />
        <RegisterForm t={t} lang={lang} />
        <Contact t={t} />
      </main>
    </div>
  );
}

export default App;
