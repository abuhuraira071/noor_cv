import { useState, useEffect, useRef, createContext, useContext } from "react";
import { motion, useScroll, useSpring, useTransform, AnimatePresence } from "framer-motion";
import {
  Mail, Phone, MapPin, Award, GraduationCap,
  Cpu, Brain, Activity, Zap, Layers, Database, Microscope,
  ChevronRight, ExternalLink, Sparkles, ArrowUpRight, Menu, X,
  HeartPulse, Waves, CircuitBoard, FileText, Users, Camera,
  Trophy, Beaker, Stethoscope, Workflow, BarChart3, Fingerprint, Globe,
  Sun, Moon
} from "lucide-react";

// ---------- Theme ----------
const ThemeContext = createContext(null);
function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be inside ThemeProvider");
  return ctx;
}

function ThemeToggle({ variant = "nav" }) {
  const { theme, setTheme } = useTheme();
  const isLight = theme === "light";
  if (variant === "mobile") {
    return (
      <button
        onClick={() => setTheme(isLight ? "dark" : "light")}
        className={`flex w-full items-center justify-between rounded-xl px-3 py-3 text-sm font-medium transition-colors ${isLight ? "bg-[#F5F1E8] text-[#3A2E1F] hover:bg-[#E8DDD0] border border-[#E8DDD0]" : "bg-white/5 text-[#E8E6E1] hover:bg-white/10 border border-white/10"}`}
        aria-label="Toggle theme"
      >
        <span className="flex items-center gap-2">{isLight ? <Sun size={16} /> : <Moon size={16} />} {isLight ? "Light Mode" : "Dark Mode"}</span>
        <span className={`relative inline-flex h-6 w-11 items-center rounded-full p-1 transition-colors ${isLight ? "bg-[#1A1E1C]" : "bg-[#E8E6E1]"}`}>
          <motion.span
            layout
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
            className={`inline-block h-4 w-4 rounded-full ${isLight ? "bg-[#FDFBF7] ml-auto" : "bg-[#0F0F0E]"}`}
          />
        </span>
      </button>
    );
  }
  return (
    <button
      onClick={() => setTheme(isLight ? "dark" : "light")}
      aria-label={`Switch to ${isLight ? "dark" : "light"} mode`}
      className={`relative inline-flex h-9 w-[68px] items-center rounded-full p-1 transition-colors duration-300 cursor-pointer ${isLight ? "bg-[#E8DDD0] border border-[#D4C5B0]" : "bg-[#1A1E1C] border border-white/10"}`}
    >
      <span className="sr-only">Toggle theme</span>
      <span className="absolute inset-0 flex items-center justify-between px-1.5 text-[10px]">
        <Sun size={12} className={`${isLight ? "text-[#8B5E34]" : "text-[#6B6B6B]"}`} />
        <Moon size={12} className={`${!isLight ? "text-[#D4B896]" : "text-[#6B6B6B]"}`} />
      </span>
      <motion.span
        layout
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        className={`relative z-10 grid h-7 w-7 place-items-center rounded-full shadow-md ${isLight ? "bg-white text-[#8B5E34] translate-x-[30px]" : "bg-[#E8E6E1] text-[#0F0F0E]"}`}
      >
        <AnimatePresence mode="wait" initial={false}>
          {isLight ? (
            <motion.span key="sun" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
              <Sun size={14} />
            </motion.span>
          ) : (
            <motion.span key="moon" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
              <Moon size={14} />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.span>
    </button>
  );
}

function LinkedinIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}

// ---------- helpers ----------
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  })
};
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } }
};

function Section({ id, kicker, title, desc, children }) {
  const { theme } = useTheme();
  const isLight = theme === "light";
  return (
    <section id={id} className="relative py-16 md:py-20 lg:py-28 scroll-mt-20">
      <div className="mx-auto max-w-[1160px] px-4 sm:px-6">
        {(kicker || title) && (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="mb-8 md:mb-12"
          >
            {kicker && (
              <motion.div variants={fadeUp} className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[11px] font-semibold tracking-[0.16em] uppercase ${isLight ? "border-[#C9A67A]/30 bg-[#C9A67A]/10 text-[#8B5E34]" : "border-[#D4B896]/20 bg-[#D4B896]/10 text-[#D4B896]"}`}>
                <span className="h-1.5 w-1.5 rounded-full bg-[#8B5E34] dark:bg-[#D4B896] animate-pulse" style={{ background: isLight ? "#8B5E34" : "#D4B896" }} /> {kicker}
              </motion.div>
            )}
            {title && (
              <motion.h2 variants={fadeUp} className={`mt-4 font-display text-[26px] sm:text-[30px] md:text-[42px] font-semibold leading-[0.95] tracking-[-0.03em] ${isLight ? "text-[#1A1E1C]" : "text-[#E8E6E1]"}`}>
                {title}
              </motion.h2>
            )}
            {desc && (
              <motion.p variants={fadeUp} className={`mt-3 md:mt-4 max-w-2xl text-[14px] md:text-[15px] leading-6 ${isLight ? "text-[#5A5A5A]" : "text-[#9AA0A6]"}`}>
                {desc}
              </motion.p>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}

// ---------- NAV ----------
function Navbar() {
  const { theme } = useTheme();
  const isLight = theme === "light";
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  const links = [
    { href: "#research", label: "Research" },
    { href: "#publications", label: "Publications" },
    { href: "#experience", label: "Experience" },
    { href: "#skills", label: "Skills" },
    { href: "#education", label: "Education" },
  ];
  return (
    <>
      <motion.div style={{ scaleX }} className="fixed left-0 right-0 top-0 z-[60] h-[2px] origin-left bg-gradient-to-r from-[#D4B896] via-[#C2A27A] to-[#8B5E34]" />
      <header className={`fixed inset-x-0 z-50 mx-auto flex max-w-[1160px] items-center justify-between px-4 sm:px-6 transition-all ${scrolled ? "top-0" : "top-2 md:top-2"}`}>
        <motion.div
          initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
          className={`flex w-full items-center justify-between rounded-2xl border px-3 sm:px-4 py-2.5 sm:py-3 backdrop-blur-xl transition-colors ${scrolled ? (isLight ? "border-[#E8DDD0] bg-[#FDFBF7]/90 shadow-[0_8px_32px_rgba(26,30,28,0.08)]" : "border-white/10 bg-[#1A1E1C]/80 shadow-[0_8px_32px_rgba(0,0,0,0.4)]") : (isLight ? "border-[#E8DDD0]/60 bg-white/60" : "border-white/[0.07] bg-white/[0.04]")}`}
        >
          <a href="#" className="flex items-center gap-2 sm:gap-3 shrink-0">
            <div className="grid h-8 w-8 sm:h-9 sm:w-9 place-items-center rounded-xl bg-gradient-to-br from-[#D4B896] to-[#8B5E34] text-white shadow-lg shadow-[#8B5E34]/20">
              <HeartPulse size={16} className="sm:w-[18px] sm:h-[18px]" />
            </div>
            <div className="leading-tight hidden xs:block sm:block">
              <div className={`text-[12px] sm:text-[13px] font-bold tracking-[-0.02em] ${isLight ? "text-[#1A1E1C]" : "text-[#E8E6E1]"}`}>R. NOOR</div>
              <div className={`text-[9px] sm:text-[10px] tracking-[0.14em] uppercase ${isLight ? "text-[#8B7355]" : "text-[#9AA0A6]"}`}>Biomedical AI • RUET</div>
            </div>
          </a>

          <nav className="hidden items-center gap-1 lg:flex">
            {links.map(l => (
              <a key={l.href} href={l.href} className={`rounded-full px-3.5 py-1.5 text-[13px] font-medium transition-colors ${isLight ? "text-[#5A5A5A] hover:bg-[#F5F1E8] hover:text-[#1A1E1C]" : "text-[#9AA0A6] hover:bg-white/10 hover:text-[#E8E6E1]"}`}>{l.label}</a>
            ))}
          </nav>

          <div className="hidden items-center gap-2 md:flex">
            <ThemeToggle />
            <a href="mailto:rznoor07@gmail.com" className={`hidden lg:inline-flex items-center gap-2 rounded-full px-4 py-2 text-[13px] font-semibold transition-colors ${isLight ? "bg-[#1A1E1C] text-[#FDFBF7] hover:bg-black" : "bg-[#E8E6E1] text-[#0F0F0E] hover:bg-white"}`}>
              <Mail size={14} /> Contact
            </a>
            <a href="#publications" className={`inline-flex h-9 w-9 items-center justify-center rounded-full border transition-colors ${isLight ? "border-[#E8DDD0] bg-white text-[#5A5A5A] hover:bg-[#F5F1E8]" : "border-white/10 bg-white/5 text-[#E8E6E1] hover:bg-white/10"}`}>
              <ArrowUpRight size={16} />
            </a>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button onClick={() => setOpen(!open)} className={`grid h-9 w-9 place-items-center rounded-full border transition-colors ${isLight ? "border-[#E8DDD0] bg-white text-[#5A5A5A]" : "border-white/10 bg-white/5 text-[#E8E6E1]"}`} aria-label="Toggle menu" aria-expanded={open}>
              {open ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </motion.div>
      </header>

      <AnimatePresence>
        {open && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm md:hidden" onClick={() => setOpen(false)} />
            <motion.div initial={{ opacity: 0, y: -10, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -10, scale: 0.98 }} transition={{ duration: 0.2 }} className={`fixed inset-x-4 top-[64px] sm:top-[68px] z-40 rounded-2xl border p-4 shadow-2xl md:hidden ${isLight ? "border-[#E8DDD0] bg-[#FDFBF7]" : "border-white/10 bg-[#1A1E1C]"}`}>
              <nav className="grid gap-1">
                {links.map(l => (
                  <a key={l.href} onClick={() => setOpen(false)} href={l.href} className={`rounded-xl px-3 py-2.5 text-sm font-medium transition-colors ${isLight ? "text-[#3A2E1F] hover:bg-[#F5F1E8]" : "text-[#E8E6E1] hover:bg-white/5"}`}>{l.label}</a>
                ))}
                <div className="my-2 h-px" style={{ background: isLight ? "#E8DDD0" : "rgba(255,255,255,0.1)" }} />
                <ThemeToggle variant="mobile" />
                <a href="mailto:rznoor07@gmail.com" className={`mt-2 inline-flex items-center justify-center gap-2 rounded-xl py-3 text-sm font-semibold transition-colors ${isLight ? "bg-[#1A1E1C] text-[#FDFBF7]" : "bg-[#E8E6E1] text-[#0F0F0E]"}`}> <Mail size={16} /> rznoor07@gmail.com</a>
                <a href="tel:+8801973837411" className={`inline-flex items-center justify-center gap-2 rounded-xl border py-3 text-sm font-semibold ${isLight ? "border-[#E8DDD0] bg-white text-[#5A5A5A]" : "border-white/10 bg-white/5 text-[#E8E6E1]"}`}><Phone size={16} /> +8801973837411</a>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

// ---------- HERO ----------
function Hero() {
  const { theme } = useTheme();
  const isLight = theme === "light";
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  return (
    <section ref={ref} className="relative overflow-hidden pt-20 sm:pt-28 md:pt-36 pb-6">
      <div className="pointer-events-none absolute inset-0">
        <div className={`absolute inset-0 ${isLight ? "bg-[#FDFBF7]" : "bg-[#0F0F0E]"}`} />
        <div className={`absolute inset-0 ${isLight ? "bg-[radial-gradient(ellipse_800px_600px_at_20%_-10%,rgba(139,94,52,0.07),transparent),radial-gradient(ellipse_600px_400px_at_90%_20%,rgba(107,127,115,0.06),transparent)]" : "bg-[radial-gradient(ellipse_800px_600px_at_20%_-10%,rgba(212,184,150,0.08),transparent),radial-gradient(ellipse_600px_400px_at_90%_20%,rgba(107,127,115,0.08),transparent),radial-gradient(ellipse_500px_500px_at_50%_120%,rgba(139,94,52,0.05),transparent)]"}`} />
        <div className={`absolute inset-0 ${isLight ? "opacity-[0.03]" : "opacity-[0.02]"}`} style={{ backgroundImage: `linear-gradient(${isLight ? "black" : "white"} 1px, transparent 1px), linear-gradient(90deg, ${isLight ? "black" : "white"} 1px, transparent 1px)`, backgroundSize: `72px 72px` }} />
      </div>

      <div className="relative mx-auto max-w-[1160px] px-4 sm:px-6">
        <div className="grid gap-8 lg:gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <motion.div style={{ opacity }} className="relative min-w-0">
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className={`inline-flex max-w-full flex-wrap items-center gap-2 rounded-full border px-3 py-1.5 text-[11px] sm:text-xs font-medium ${isLight ? "border-[#6B7F73]/20 bg-[#6B7F73]/10 text-[#3A4A3E]" : "border-[#A8B5A2]/20 bg-[#A8B5A2]/10 text-[#A8B5A2]"}`}>
              <span className="relative flex h-2 w-2 shrink-0"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#6B7F73] opacity-75"></span><span className="relative inline-flex h-2 w-2 rounded-full bg-[#6B7F73]" style={{ background: isLight ? "#6B7F73" : "#A8B5A2" }}></span></span>
              <span className="leading-tight">Open to Research Collaborations • BECITHCON 2026 Author</span>
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }} className={`mt-5 sm:mt-6 font-display text-[32px] xs:text-[36px] sm:text-[48px] md:text-[56px] lg:text-[62px] font-semibold leading-[0.9] tracking-[-0.04em] ${isLight ? "text-[#1A1E1C]" : "text-[#E8E6E1]"}`}>
              MD <span className="bg-gradient-to-r from-[#8B5E34] via-[#C2A27A] to-[#5C4033] bg-clip-text text-transparent">RASHEDUZZAMAN</span> <br /> NOOR
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.18 }} className={`mt-4 max-w-[620px] text-[14px] sm:text-[15px] md:text-[17px] leading-6 sm:leading-7 ${isLight ? "text-[#5A5A5A]" : "text-[#9AA0A6]"}`}>
              Biomedical signal processing • Deep learning for <span className={`font-medium ${isLight ? "text-[#1A1E1C]" : "text-[#E8E6E1]"}`}>ECG / EEG</span> • Embedded & Edge AI • Real-time patient monitoring systems
              <span className={isLight ? "text-[#8B7355]" : "text-[#6B6B6B]"}> — B.Sc. Electrical & Electronic Engineering, RUET</span>
            </motion.p>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.28 }} className="mt-5 sm:mt-6 flex flex-wrap gap-2 sm:gap-2.5">
              {[
                { icon: MapPin, text: "Ramchandrapur, Rajshahi, Bangladesh" },
                { icon: Mail, text: "rznoor07@gmail.com", href: "mailto:rznoor07@gmail.com" },
                { icon: Phone, text: "+8801973837411", href: "tel:+8801973837411" },
              ].map((p, i) => (
                <a key={i} href={p.href} className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 sm:px-3 py-1.5 text-[11px] sm:text-xs font-medium backdrop-blur transition-colors ${isLight ? "border-[#E8DDD0] bg-white text-[#3A2E1F] hover:bg-[#F5F1E8] shadow-sm" : "border-white/10 bg-white/[0.06] text-[#E8E6E1] hover:bg-white/10"}`}>
                  <p.icon size={12} className={isLight ? "text-[#8B5E34]" : "text-[#D4B896]"} /> <span className="truncate max-w-[200px] sm:max-w-none">{p.text}</span>
                </a>
              ))}
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.36 }} className="mt-6 sm:mt-8 flex flex-wrap gap-2.5 sm:gap-3">
              <a href="mailto:rznoor07@gmail.com" className={`group inline-flex items-center gap-2 rounded-full px-5 sm:px-6 py-2.5 sm:py-3 text-[13px] sm:text-sm font-semibold transition-colors ${isLight ? "bg-[#1A1E1C] text-[#FDFBF7] hover:bg-black shadow-lg" : "bg-[#E8E6E1] text-[#0F0F0E] shadow-[0_8px_24px_rgba(0,0,0,0.2)] hover:bg-white"}`}>
                Hire / Collaborate <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a href="#research" className={`inline-flex items-center gap-2 rounded-full border px-5 sm:px-6 py-2.5 sm:py-3 text-[13px] sm:text-sm font-semibold backdrop-blur transition-colors ${isLight ? "border-[#E8DDD0] bg-white text-[#3A2E1F] hover:bg-[#F5F1E8]" : "border-white/15 bg-white/5 text-[#E8E6E1] hover:bg-white/10"}`}>
                <Microscope size={16} /> Explore Research
              </a>
              <div className="flex items-center gap-2">
                <a href="https://linkedin.com/in/rasheduzzaman-noor-" target="_blank" rel="noopener noreferrer" className={`grid h-9 w-9 sm:h-10 sm:w-10 place-items-center rounded-full border transition-colors ${isLight ? "border-[#E8DDD0] bg-white text-[#3A2E1F] hover:bg-[#F5F1E8] shadow-sm" : "border-white/10 bg-white/5 text-[#E8E6E1] hover:bg-white/10"}`} aria-label="LinkedIn"><LinkedinIcon size={14} /></a>
                <a href="https://kaggle.com/rasheduzzamannoor" target="_blank" rel="noopener noreferrer" className={`grid h-9 w-9 sm:h-10 sm:w-10 place-items-center rounded-full border transition-colors ${isLight ? "border-[#E8DDD0] bg-white text-[#3A2E1F] hover:bg-[#F5F1E8] shadow-sm" : "border-white/10 bg-white/5 text-[#E8E6E1] hover:bg-white/10"}`} aria-label="Kaggle"><span className="text-[11px] font-bold tracking-widest">K</span></a>
                <a href="https://shutterstock.com/g/RZ+Noor" target="_blank" rel="noopener noreferrer" className={`grid h-9 w-9 sm:h-10 sm:w-10 place-items-center rounded-full border transition-colors ${isLight ? "border-[#E8DDD0] bg-white text-[#3A2E1F] hover:bg-[#F5F1E8] shadow-sm" : "border-white/10 bg-white/5 text-[#E8E6E1] hover:bg-white/10"}`} aria-label="Shutterstock"><Camera size={16} /></a>
              </div>
            </motion.div>

            <motion.div initial="hidden" animate="visible" variants={stagger} className="mt-8 sm:mt-10 grid grid-cols-3 gap-2 sm:gap-3 max-w-[520px]">
              {[
                { value: "3.65", sub: "/4.00 CGPA", label: "B.Sc. EEE RUET" },
                { value: "89.45%", sub: "0.8725 F1", label: "MSFT-Net accuracy" },
                { value: "167K", sub: "11.6K tiny", label: "Params • Edge AI" },
              ].map((s, i) => (
                <motion.div key={i} variants={fadeUp} custom={i} className={`rounded-2xl border p-3 sm:p-4 backdrop-blur ${isLight ? "border-[#E8DDD0] bg-white shadow-sm" : "border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.03]"}`}>
                  <div className={`text-[16px] sm:text-[22px] font-bold tracking-[-0.03em] ${isLight ? "text-[#1A1E1C]" : "text-[#E8E6E1]"}`}>{s.value} <span className={`text-[10px] sm:text-xs font-medium ${isLight ? "text-[#8B5E34]" : "text-[#D4B896]"}`}>{s.sub}</span></div>
                  <div className={`mt-1 text-[9px] sm:text-[11px] font-semibold tracking-[0.08em] uppercase ${isLight ? "text-[#8B7355]" : "text-[#9AA0A6]"}`}>{s.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div style={{ y }} className="relative lg:pl-6 min-w-0">
            <motion.div initial={{ opacity: 0, scale: 0.96, y: 16 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ delay: 0.25, duration: 0.7 }} className={`relative overflow-hidden rounded-[20px] sm:rounded-[28px] border p-4 sm:p-6 backdrop-blur ${isLight ? "border-[#E8DDD0] bg-white shadow-[0_24px_64px_rgba(26,30,28,0.08)]" : "border-white/10 bg-gradient-to-b from-[#1A1E1C] to-[#1A1E1C]/60 shadow-[0_24px_64px_rgba(0,0,0,0.3)]"}`}>
              <div className="flex items-center justify-between gap-2">
                <div className={`flex items-center gap-2 text-[10px] sm:text-xs font-semibold tracking-[0.08em] sm:tracking-[0.14em] uppercase ${isLight ? "text-[#8B7355]" : "text-[#9AA0A6]"}`}><Activity size={14} className={isLight ? "text-[#8B5E34]" : "text-[#D4B896]"} /> <span className="truncate">Live ECG • Edge Inference</span></div>
                <div className="flex gap-1.5 shrink-0"><span className="h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-[#C17C60]/80" /><span className="h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-[#C9A67A]/80" /><span className="h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-[#6B7F73]/80" /></div>
              </div>

              <div className={`mt-4 sm:mt-5 rounded-xl sm:rounded-2xl p-3 sm:p-4 border ${isLight ? "bg-[#FDFBF7] border-[#E8DDD0]" : "bg-[#0F0F0E] border-white/5"}`}>
                <div className={`flex items-center justify-between text-[10px] sm:text-[11px] font-mono ${isLight ? "text-[#8B7355]" : "text-[#9AA0A6]"}`}><span>LEAD II • 250 Hz</span><span className={isLight ? "text-[#6B7F73]" : "text-[#A8B5A2]"}>● Explainable</span></div>
                <svg viewBox="0 0 600 120" className="mt-3 h-[90px] sm:h-[110px] w-full">
                  <defs>
                    <linearGradient id="ecgGrad" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor={isLight ? "#8B5E34" : "#D4B896"} />
                      <stop offset="100%" stopColor={isLight ? "#6B7F73" : "#A8B5A2"} />
                    </linearGradient>
                  </defs>
                  <g opacity={isLight ? "0.06" : "0.07"} stroke={isLight ? "#3A2E1F" : "#E8E6E1"} strokeWidth="0.5">
                    {Array.from({ length: 12 }).map((_, i) => (<line key={`h${i}`} x1="0" x2="600" y1={i * 10} y2={i * 10} />))}
                    {Array.from({ length: 30 }).map((_, i) => (<line key={`v${i}`} x1={i * 20} x2={i * 20} y1="0" y2="120" />))}
                  </g>
                  <motion.path
                    d="M 0 60 L 40 60 L 55 60 L 65 20 L 75 100 L 85 60 L 105 60 L 130 60 L 145 35 L 150 60 L 165 60 L 190 60 L 205 15 L 215 95 L 225 60 L 250 60 L 270 60 L 285 25 L 295 85 L 305 60 L 330 60 L 350 60 L 365 20 L 375 100 L 385 60 L 410 60 L 430 60 L 445 30 L 450 60 L 470 60 L 490 60 L 505 10 L 515 105 L 525 60 L 560 60 L 600 60"
                    fill="none" stroke="url(#ecgGrad)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"
                    initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }} transition={{ duration: 2.2, ease: "easeInOut" }}
                  />
                  <motion.circle r="4" fill={isLight ? "#8B5E34" : "#D4B896"} initial={{ offsetDistance: "0%" }} animate={{ offsetDistance: "100%" }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }} style={{ offsetPath: `path("M 0 60 L 40 60 L 55 60 L 65 20 L 75 100 L 85 60 L 105 60 L 130 60 L 145 35 L 150 60 L 165 60 L 190 60 L 205 15 L 215 95 L 225 60 L 250 60 L 270 60 L 285 25 L 295 85 L 305 60 L 330 60 L 350 60 L 365 20 L 375 100 L 385 60 L 410 60 L 430 60 L 445 30 L 450 60 L 470 60 L 490 60 L 505 10 L 515 105 L 525 60 L 560 60 L 600 60")` }} />
                </svg>
                <div className="mt-3 grid grid-cols-3 gap-1.5 sm:gap-2">
                  {[
                    { l: "N", v: "98.2%", c: isLight ? "text-[#6B7F73]" : "text-[#A8B5A2]" },
                    { l: "S", v: "84.1%", c: isLight ? "text-[#8B5E34]" : "text-[#D4B896]" },
                    { l: "V", v: "92.7%", c: isLight ? "text-[#5C4033]" : "text-[#C2A27A]" },
                  ].map(x => (
                    <div key={x.l} className={`rounded-xl border px-2 sm:px-3 py-2 text-center ${isLight ? "bg-white border-[#E8DDD0]" : "bg-white/[0.06] border-white/5"}`}>
                      <div className={`text-[10px] sm:text-[11px] tracking-[0.14em] ${isLight ? "text-[#8B7355]" : "text-[#9AA0A6]"}`}>{x.l}</div>
                      <div className={`text-xs sm:text-sm font-bold ${x.c}`}>{x.v}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-2 sm:gap-3">
                <div className={`rounded-2xl border p-2.5 sm:p-3 ${isLight ? "border-[#D4B896]/30 bg-[#FDFBF7]" : "border-[#D4B896]/20 bg-[#D4B896]/10"}`}>
                  <div className={`flex items-center gap-1.5 text-[10px] sm:text-[11px] font-semibold tracking-[0.1em] uppercase ${isLight ? "text-[#8B5E34]" : "text-[#D4B896]"}`}><Zap size={12} /> 20–100 ms/beat</div>
                  <div className={`mt-1 text-[11px] sm:text-xs ${isLight ? "text-[#5A5A5A]" : "text-[#9AA0A6]"}`}>INT8 quantized • ~30KB flash / ~6KB RAM</div>
                  <div className={`mt-2 h-1.5 rounded-full overflow-hidden ${isLight ? "bg-[#E8DDD0]" : "bg-[#1A1A1C]"}`}><motion.div initial={{ width: 0 }} animate={{ width: "92%" }} transition={{ delay: 1, duration: 1 }} className="h-full bg-gradient-to-r from-[#D4B896] to-[#8B5E34]" /></div>
                </div>
                <div className={`rounded-2xl border p-2.5 sm:p-3 ${isLight ? "border-[#A8B5A2]/30 bg-[#F5F7F5]" : "border-[#A8B5A2]/20 bg-[#A8B5A2]/10"}`}>
                  <div className={`flex items-center gap-1.5 text-[10px] sm:text-[11px] font-semibold tracking-[0.1em] uppercase ${isLight ? "text-[#3A4A3E]" : "text-[#A8B5A2]"}`}><Cpu size={12} /> STM32 • ESP32</div>
                  <div className={`mt-1 text-[11px] sm:text-xs ${isLight ? "text-[#5A5A5A]" : "text-[#9AA0A6]"}`}>Cross-platform edge validation</div>
                  <div className="mt-2 flex gap-1 sm:gap-1.5 flex-wrap">
                    {["STM32H743ZI", "F446RE", "ESP32"].map(t => (<span key={t} className={`rounded-full px-2 py-0.5 text-[9px] sm:text-[10px] font-mono ${isLight ? "bg-white border border-[#E8DDD0] text-[#3A2E1F]" : "bg-white/10 text-[#E8E6E1]"}`}>{t}</span>))}
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className={`absolute -bottom-6 -left-4 hidden md:flex items-center gap-3 rounded-2xl border px-4 py-3 backdrop-blur-xl shadow-xl ${isLight ? "border-[#E8DDD0] bg-white" : "border-white/10 bg-[#1A1E1C]/90"}`}>
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-[#8B5E34] to-[#5C4033] text-white"><Brain size={18} /></div>
              <div>
                <div className={`text-xs font-semibold ${isLight ? "text-[#1A1E1C]" : "text-[#E8E6E1]"}`}>MSFT-Net • 167K params</div>
                <div className={`text-[11px] ${isLight ? "text-[#8B7355]" : "text-[#9AA0A6]"}`}>Multi-Scale + SE + FiLM + Temporal Pooling</div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="mt-8 sm:mt-12 grid gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: HeartPulse, title: "Biomedical Signal Processing", desc: "ECG / EEG preprocessing, CWT, RR-interval & morphology" },
            { icon: Brain, title: "Deep Learning", desc: "CNN • Transformer • BiLSTM • Diffusion models" },
            { icon: Cpu, title: "Embedded & Edge AI", desc: "INT8 quantization • TFLite Micro • STM32 / ESP32" },
            { icon: Stethoscope, title: "Medical Devices", desc: "Artemis monitor • Real-time arrhythmia detection" },
          ].map((c, i) => (
            <motion.div key={c.title} variants={fadeUp} custom={i} className={`group rounded-2xl border p-4 backdrop-blur transition-colors ${isLight ? "border-[#E8DDD0] bg-white hover:bg-[#FDFBF7] hover:border-[#C9A67A]/30 shadow-sm" : "border-white/10 bg-white/[0.04] hover:bg-white/[0.06] hover:border-[#D4B896]/20"}`}>
              <div className={`flex h-9 w-9 items-center justify-center rounded-xl border ${isLight ? "bg-[#F5F1E8] border-[#E8DDD0] text-[#8B5E34]" : "bg-[#D4B896]/10 border-white/5 text-[#D4B896]"}`}>
                <c.icon size={18} />
              </div>
              <div className={`mt-3 text-sm font-semibold ${isLight ? "text-[#1A1E1C]" : "text-[#E8E6E1]"}`}>{c.title}</div>
              <div className={`mt-1 text-xs leading-5 ${isLight ? "text-[#5A5A5A]" : "text-[#9AA0A6]"}`}>{c.desc}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Publications() {
  const { theme } = useTheme();
  const isLight = theme === "light";
  const pubs = [
    {
      badge: "BECITHCON 2026 • Published",
      title: "CNN-SE-Transformer Based Lightweight and SHAP-Explainable Architecture for Five-Class Arrhythmia Classification",
      venue: "5th IEEE International Conference on Biomedical Engineering, Computer and Information Technology for Health",
      authors: "Noor, M. R., et al.",
      meta: "Lightweight • SHAP • 5-class AAMI • MIT-BIH",
      accent: "from-[#8B5E34] to-[#C2A27A]",
      icon: FileText
    },
    {
      badge: "Journal • In Preparation",
      title: "MSFT-Net journal manuscript — Biomedical Signal Processing and Control (Target)",
      venue: "Extended journal version of BECITHCON work • Multi-Scale + SE + FiLM",
      authors: "Noor, M. R., et al.",
      meta: "167K params • 89.45% acc • 0.8725 macro-F1",
      accent: "from-[#6B705C] to-[#A8B5A2]",
      icon: Beaker
    },
    {
      badge: "Manuscript • In Preparation",
      title: "ECG Classification with CWT Scalograms using ResNet-34 & Grad-CAM",
      venue: "Continuous Wavelet Transform scalograms • Optuna HPO • Explainability",
      authors: "Collaborative manuscript",
      meta: "CWT • ResNet-34 • Grad-CAM",
      accent: "from-[#9C6644] to-[#C9A67A]",
      icon: Waves
    },
    {
      badge: "Planned • EMBC",
      title: "Bonn EEG Seizure Detection — Conference Paper (Planned)",
      venue: "Target: IEEE EMBC • Bonn University EEG dataset • Feature + RF pipeline",
      authors: "Noor, M. R.",
      meta: "EEG • Bonn • Seizure",
      accent: "from-[#5C6B5A] to-[#8A9A8B]",
      icon: Activity
    },
  ];
  return (
    <Section id="publications" kicker="Publications" title="Peer-reviewed & in-preparation" desc="From lightweight explainable ECG classifiers to diffusion-based balancing and EEG seizure detection.">
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
        {pubs.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06, duration: 0.5 }}
            whileHover={{ y: -4 }}
            className={`group relative overflow-hidden rounded-[20px] border p-5 sm:p-6 backdrop-blur transition-all ${isLight ? "border-[#E8DDD0] bg-white shadow-sm hover:shadow-md hover:border-[#D4C5B0]" : "border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.02]"}`}
          >
            <div className={`absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r ${p.accent} opacity-60`} />
            <div className="flex items-start justify-between gap-3">
              <div className={`grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br ${p.accent} text-white shadow-lg shrink-0`}>
                <p.icon size={16} />
              </div>
              <span className={`shrink-0 rounded-full border px-2.5 py-1 text-[10px] font-bold tracking-[0.08em] sm:tracking-[0.1em] uppercase text-center leading-tight ${isLight ? "border-[#E8DDD0] bg-[#F5F1E8] text-[#5A5A5A]" : "border-white/10 bg-white/5 text-[#9AA0A6]"}`}>{p.badge}</span>
            </div>
            <h3 className={`mt-4 text-[14px] sm:text-[15px] font-semibold leading-6 transition-colors line-clamp-3 ${isLight ? "text-[#1A1E1C] group-hover:text-[#8B5E34]" : "text-[#E8E6E1] group-hover:text-[#D4B896]"}`}>{p.title}</h3>
            <p className={`mt-2 text-xs leading-5 ${isLight ? "text-[#5A5A5A]" : "text-[#9AA0A6]"}`}>{p.venue}</p>
            <div className="mt-3 flex flex-wrap items-center gap-2 text-[11px]">
              <span className={`rounded-full px-2 py-1 font-mono ${isLight ? "bg-[#F5F1E8] border border-[#E8DDD0] text-[#3A2E1F]" : "bg-white/10 text-[#E8E6E1]"}`}>{p.authors}</span>
              <span className={`rounded-full border px-2 py-1 font-medium ${isLight ? "border-[#E8DDD0] bg-white text-[#5A5A5A]" : "border-white/10 text-[#9AA0A6]"}`}>{p.meta}</span>
            </div>
          </motion.div>
        ))}
      </div>
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className={`mt-6 flex items-center gap-2 text-xs ${isLight ? "text-[#8B7355]" : "text-[#9AA0A6]"}`}>
        <Sparkles size={14} className={isLight ? "text-[#8B5E34]" : "text-[#D4B896]"} /> Add page numbers / DOI once available for BECITHCON 2026.
      </motion.div>
    </Section>
  );
}

function Experience() {
  const { theme } = useTheme();
  const isLight = theme === "light";
  const [open, setOpen] = useState(0);
  const items = [
    {
      title: "ECG Arrhythmia Classification Research — MSFT-Net",
      org: "Independent research, RUET • Inter-patient DS1/DS2 (de Chazal) • MIT-BIH Arrhythmia + NSR + BIDMC-CHF",
      period: "Nov 2018 – Present",
      highlight: "89.45% acc / 0.8725 macro-F1 • 167K params",
      bullets: [
        "Proposed MSFT-Net (Multi-Scale + Squeeze-Excitation + FiLM-conditioned + Temporal Pooling) vs CNN-BiLSTM-Attention hybrid (572K params). Strict record-disjoint protocol.",
        "Engineered 54-feature auxiliary morphology set (fiducial, P/T-wave, beat-to-beat diff) targeting Supraventricular & Fusion minority classes; staged, validation-gated ablations (threshold calibration, hard-negative mining, auxiliary loss heads).",
        "Deployed quantized models to STM32 (NUCLEO-F446RE) & ESP32; micro-model 11,685 params (29.9 KB) validated cross-platform.",
        "Published at BECITHCON 2026; extended journal manuscript in preparation for Biomedical Signal Processing and Control.",
      ],
      tags: ["MIT-BIH", "MSFT-Net", "SHAP", "INT8", "FiLM"],
    },
    {
      title: "Undergraduate Capstone — Artemis Multi-Parameter Patient Monitor",
      org: "RUET • Supervisor: Md. Nuhi-Alamin, Asst. Professor, EEE • EEE 4202 Capstone Project Design II",
      period: "Capstone",
      highlight: "STM32H743ZI Nucleo-144 • ADS1298 • SpO₂/HR • NIBP • GPS • 4G LTE",
      bullets: [
        "Designed Artemis patient monitor integrating ECG (ADS1298), SpO₂/HR, NIBP, GPS & 4G LTE with full system wiring diagram.",
        "Companion real-time arrhythmia detection on STM32 + AD8232 with INT8-quantized beat classification (20–100 ms/beat, ~30 KB flash / ~6 KB RAM) & web front-end.",
      ],
      tags: ["STM32H743ZI", "ADS1298", "AD8232", "4G LTE", "Edge AI"],
    },
    {
      title: "MSCT-SEGFNet: Diffusion-Based Class Balancing for ECG",
      org: "Independent research, RUET • Ongoing",
      period: "Ongoing",
      highlight: "Diffusion synthesis replaces SMOTE • Discriminator QC",
      bullets: [
        "Designing record-wise-split 5-class classifier: Multi-Scale CNN + SE + Transformer branch + Gated Fusion + Attention Pooling; BIDMC-CHF kept as separate task (no label merging).",
        "Implementing class-conditioned 1D diffusion model to synthesize minority-class beats; discriminator-based quality control (real-vs-synthetic AUC).",
        "Planned ablation suite: component-wise & augmentation-wise with Macro-F1, MCC, balanced accuracy, per-class sensitivity/specificity, ROC/PR-AUC.",
      ],
      tags: ["Diffusion", "Gated Fusion", "Attention Pooling", "1D UNet"],
    },
    {
      title: "EEG-Based Seizure Detection",
      org: "CHB-MIT Scalp EEG Database • Bonn University EEG • Kaggle compute-optimized",
      period: "Research",
      highlight: "Bandpass/Notch • CAR • Windowed segmentation • float16",
      bullets: [
        "Full preprocessing & classification pipeline on CHB-MIT (bandpass/notch, Common Average Reference, windowed segmentation) with memory/disk optimization for Kaggle (float16, immediate cleanup).",
        "Bonn dataset notebook + lab report: feature extraction & Random Forest with IEEE EMBC conference targeting.",
      ],
      tags: ["CHB-MIT", "Bonn", "Random Forest", "Kaggle"],
    },
    {
      title: "EEG-Based ADHD Classification & CWT Scalograms",
      org: "Subject-wise pipelines • ResNet-34 + Optuna",
      period: "Research",
      highlight: "StratifiedGroupKFold • Grad-CAM explainability",
      bullets: [
        "ADHD: CatBoost + custom MLP ensemble with StratifiedGroupKFold to prevent subject leakage.",
        "ECG CWT: Continuous Wavelet Transform scalograms → ResNet-34 with Optuna HPO & Grad-CAM explainability (manuscript in preparation).",
      ],
      tags: ["CatBoost", "MLP Ensemble", "CWT", "ResNet-34", "Grad-CAM"],
    },
  ];

  return (
    <Section id="experience" kicker="Research Experience" title="Building reliable, explainable & deployable biomedical AI" desc="From hospital-grade monitors to 30KB micro-models — rigorously evaluated under inter-patient protocols.">
      <div className="grid gap-4">
        {items.map((it, idx) => {
          const isOpen = open === idx;
          return (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className={`overflow-hidden rounded-[20px] border backdrop-blur transition-colors ${isOpen ? (isLight ? "border-[#D4B896]/40 bg-white shadow-md" : "border-[#D4B896]/30 bg-white/[0.06]") : (isLight ? "border-[#E8DDD0] bg-white hover:bg-[#FDFBF7] shadow-sm hover:shadow" : "border-white/10 bg-white/[0.03] hover:bg-white/[0.05]")}`}
            >
              <button onClick={() => setOpen(isOpen ? -1 : idx)} className="flex w-full items-start justify-between gap-3 sm:gap-4 p-4 sm:p-5 md:p-6 text-left">
                <div className="flex gap-3 sm:gap-4 min-w-0 flex-1">
                  <div className={`hidden md:grid h-10 w-10 shrink-0 place-items-center rounded-xl border ${isOpen ? "bg-gradient-to-br from-[#8B5E34] to-[#5C4033] border-white/10 text-white" : (isLight ? "bg-[#F5F1E8] border-[#E8DDD0] text-[#8B5E34]" : "bg-white/5 border-white/10 text-[#D4B896]")}`}>
                    {idx === 0 ? <Workflow size={18} /> : idx === 1 ? <CircuitBoard size={18} /> : idx === 2 ? <Layers size={18} /> : <Brain size={18} />}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className={`text-[13px] sm:text-[14px] md:text-[16px] font-semibold leading-5 sm:leading-6 ${isLight ? "text-[#1A1E1C]" : "text-[#E8E6E1]"}`}>{it.title}</div>
                    <div className={`mt-1 text-[11px] sm:text-xs leading-4 sm:leading-5 line-clamp-2 ${isLight ? "text-[#5A5A5A]" : "text-[#9AA0A6]"}`}>{it.org}</div>
                    <div className={`mt-2 inline-flex items-center gap-1.5 sm:gap-2 rounded-full border px-2 sm:px-2.5 py-1 text-[10px] sm:text-[11px] font-semibold ${isLight ? "bg-[#F5F1E8] border-[#D4B896]/30 text-[#8B5E34]" : "bg-[#D4B896]/10 border-[#D4B896]/20 text-[#D4B896]"}`}>
                      <Zap size={12} className="shrink-0" /> <span className="truncate">{it.highlight}</span>
                    </div>
                  </div>
                </div>
                <div className="flex shrink-0 items-center gap-2 sm:gap-3">
                  <span className={`hidden lg:inline-flex rounded-full border px-2.5 py-1 text-[11px] font-medium ${isLight ? "border-[#E8DDD0] bg-[#F5F1E8] text-[#5A5A5A]" : "border-white/10 bg-white/5 text-[#9AA0A6]"}`}>{it.period}</span>
                  <span className={`grid h-7 w-7 sm:h-8 sm:w-8 place-items-center rounded-full border transition-transform shrink-0 ${isOpen ? (isLight ? "bg-[#1A1E1C] text-[#FDFBF7] rotate-90" : "bg-[#E8E6E1] text-[#0F0F0E] rotate-90") : (isLight ? "bg-white border-[#E8DDD0] text-[#8B7355]" : "bg-white/5 border-white/10 text-[#E8E6E1]")}`}><ChevronRight size={16} /></span>
                </div>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}>
                    <div className="px-4 pb-4 sm:px-5 sm:pb-6 md:px-6">
                      <div className={`rounded-2xl border p-4 md:p-5 ${isLight ? "bg-[#FDFBF7] border-[#E8DDD0]" : "bg-[#0F0F0E]/60 border-white/5"}`}>
                        <ul className="grid gap-2.5">
                          {it.bullets.map(b => (
                            <li key={b} className={`flex gap-2.5 text-[12px] sm:text-[13px] leading-5 sm:leading-6 ${isLight ? "text-[#3A2E1F]" : "text-[#C9C9C9]"}`}>
                              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#8B5E34]" style={{ background: isLight ? "#8B5E34" : "#D4B896" }} /> <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="mt-4 flex flex-wrap gap-1.5">
                          {it.tags.map(t => (<span key={t} className={`rounded-full border px-2.5 py-1 text-[11px] font-mono ${isLight ? "bg-white border-[#E8DDD0] text-[#5A5A5A]" : "bg-white/5 border-white/10 text-[#9AA0A6]"}`}>{t}</span>))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}

function Skills() {
  const { theme } = useTheme();
  const isLight = theme === "light";
  const groups = [
    { title: "Languages / Frameworks", icon: Fingerprint, items: ["Python", "TensorFlow / Keras", "Embedded C (STM32 HAL)"] },
    { title: "ML / DL", icon: Brain, items: ["CNNs, Transformers, BiLSTM", "Attention / Gated Fusion / FiLM", "Diffusion Models", "SMOTE & Augmentation", "INT8 / TFLite Micro Quantization", "SHAP Explainability"] },
    { title: "Signal Processing", icon: Waves, items: ["ECG / EEG Preprocessing", "CWT Scalograms", "RR-interval & Morphology Features", "Bandpass / Notch / CAR"] },
    { title: "Hardware", icon: Cpu, items: ["STM32H743ZI Nucleo-144", "STM32 NUCLEO-F446RE", "ESP32", "ADS1298 • AD8232", "GPS / 4G LTE Integration"] },
    { title: "Tools & Platforms", icon: Database, items: ["Kaggle / Colab GPU", "Grad-CAM / Integrated Gradients", "PptxGenJS (A0 Poster)", "MS Office"] },
    { title: "Languages", icon: Users, items: ["Bangla (Native)", "English (Fluent)", "Hindi (Fluent, Spoken)"] },
  ];
  return (
    <Section id="skills" kicker="Technical Arsenal" title="From model to microcontroller" desc="Full-stack biomedical AI — training, explaining, quantizing and flashing to silicon.">
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {groups.map((g, i) => (
          <motion.div key={g.title} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} whileHover={{ y: -3 }} className={`rounded-[20px] border p-5 backdrop-blur transition-all ${isLight ? "border-[#E8DDD0] bg-white shadow-sm hover:shadow-md hover:border-[#D4C5B0]" : "border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.02]"}`}>
            <div className="flex items-center gap-2.5">
              <div className={`grid h-8 w-8 place-items-center rounded-xl border ${isLight ? "bg-[#F5F1E8] border-[#E8DDD0] text-[#8B5E34]" : "bg-white/5 border-white/10 text-[#D4B896]"}`}><g.icon size={16} /></div>
              <div className={`text-sm font-semibold ${isLight ? "text-[#1A1E1C]" : "text-[#E8E6E1]"}`}>{g.title}</div>
            </div>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {g.items.map(it => (<span key={it} className={`rounded-full border px-2.5 py-1 text-xs font-medium ${isLight ? "border-[#E8DDD0] bg-[#F5F1E8] text-[#3A2E1F]" : "border-white/10 bg-[#1A1E1C]/60 text-[#9AA0A6]"}`}>{it}</span>))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function Education() {
  const { theme } = useTheme();
  const isLight = theme === "light";
  const edu = [
    { degree: "B.Sc. in Electrical and Electronic Engineering", school: "Rajshahi University of Engineering & Technology (RUET)", meta: "CGPA 3.65 / 4.00 • Roll: 2001142 • Certificate of Leadership, 2022", period: "2020 — 2025", highlight: true },
    { degree: "Higher Secondary Certificate (HSC)", school: "MEH Arif College, Gazipur", meta: "Result: 5.00 / 5.00", period: "2018 — 2020" },
    { degree: "Secondary School Certificate (SSC)", school: "Bangladesh", meta: "Result: 5.00 / 5.00", period: "2016 — 2018" },
  ];
  return (
    <Section id="education" kicker="Education" title="Academic foundation" desc="Consistent academic excellence with leadership recognition.">
      <div className="relative">
        <div className={`absolute left-4 top-2 bottom-2 hidden w-px md:block ${isLight ? "bg-gradient-to-b from-[#C9A67A]/40 via-[#E8DDD0] to-transparent" : "bg-gradient-to-b from-[#D4B896]/40 via-white/10 to-transparent"}`} />
        <div className="grid gap-4">
          {edu.map((e, i) => (
            <motion.div key={e.degree} initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }} className={`relative flex flex-col sm:flex-row gap-3 sm:gap-4 rounded-[20px] border p-4 sm:p-5 md:ml-8 md:p-6 ${e.highlight ? (isLight ? "border-[#D4B896]/40 bg-gradient-to-br from-[#FDFBF7] via-[#F5F1E8] to-white shadow-sm" : "border-[#D4B896]/20 bg-gradient-to-br from-[#D4B896]/10 via-[#C2A27A]/5 to-transparent") : (isLight ? "border-[#E8DDD0] bg-white shadow-sm" : "border-white/10 bg-white/[0.04]")}`}>
              <div className={`absolute -left-[38px] top-6 hidden h-3 w-3 rounded-full border-2 shadow-[0_0_0_6px_rgba(212,184,150,0.15)] md:block ${isLight ? "border-[#8B5E34] bg-white" : "border-[#D4B896] bg-[#1A1E1C]"}`} />
              <div className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl ${isLight ? "bg-[#1A1E1C] text-[#FDFBF7]" : "bg-[#E8E6E1] text-[#0F0F0E]"}`}><GraduationCap size={18} /></div>
              <div className="min-w-0 flex-1">
                <div className={`text-sm md:text-[15px] font-semibold ${isLight ? "text-[#1A1E1C]" : "text-[#E8E6E1]"}`}>{e.degree}</div>
                <div className={`mt-1 text-xs font-medium italic ${isLight ? "text-[#8B5E34]" : "text-[#D4B896]"}`}>{e.school}</div>
                <div className={`mt-2 inline-flex rounded-full border px-2.5 py-1 text-[11px] sm:text-xs font-medium ${isLight ? "bg-[#F5F1E8] border-[#E8DDD0] text-[#5A5A5A]" : "bg-[#0F0F0E]/70 border-white/10 text-[#9AA0A6]"}`}>{e.meta}</div>
              </div>
              <div className={`hidden sm:block shrink-0 text-xs font-mono ${isLight ? "text-[#8B7355]" : "text-[#9AA0A6]"}`}>{e.period}</div>
              <div className={`sm:hidden text-xs font-mono ${isLight ? "text-[#8B7355]" : "text-[#9AA0A6]"}`}>{e.period}</div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-8 grid gap-4 grid-cols-1 md:grid-cols-3">
        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className={`rounded-[20px] border p-5 ${isLight ? "border-[#D4B896]/30 bg-gradient-to-br from-[#FDFBF7] to-[#F5F1E8]" : "border-[#D4B896]/20 bg-gradient-to-br from-[#D4B896]/10 to-[#C2A27A]/5"}`}>
          <div className={`flex items-center gap-2 text-sm font-semibold ${isLight ? "text-[#1A1E1C]" : "text-[#E8E6E1]"}`}><Trophy size={16} className={isLight ? "text-[#8B5E34]" : "text-[#D4B896]"} /> Leadership & Service</div>
          <p className={`mt-2 text-sm leading-6 ${isLight ? "text-[#5A5A5A]" : "text-[#9AA0A6]"}`}>Certificate of Leadership, RUET — Academic Year 2022</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.07 }} className={`rounded-[20px] border p-5 ${isLight ? "border-[#E8DDD0] bg-white shadow-sm" : "border-white/10 bg-white/[0.04]"}`}>
          <div className={`flex items-center gap-2 text-sm font-semibold ${isLight ? "text-[#1A1E1C]" : "text-[#E8E6E1]"}`}><BarChart3 size={16} className={isLight ? "text-[#8B5E34]" : "text-[#D4B896]"} /> Kaggle & Open Science</div>
          <p className={`mt-2 text-sm leading-6 ${isLight ? "text-[#5A5A5A]" : "text-[#9AA0A6]"}`}>Active Kaggle contributor <a href="https://kaggle.com/rasheduzzamannoor" target="_blank" rel="noopener noreferrer" className={`${isLight ? "text-[#8B5E34]" : "text-[#D4B896]"} hover:underline inline-flex items-center gap-1`}>kaggle.com/rasheduzzamannoor <ExternalLink size={12} /></a></p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.14 }} className={`rounded-[20px] border p-5 ${isLight ? "border-[#E8DDD0] bg-white shadow-sm" : "border-white/10 bg-white/[0.04]"}`}>
          <div className={`flex items-center gap-2 text-sm font-semibold ${isLight ? "text-[#1A1E1C]" : "text-[#E8E6E1]"}`}><Camera size={16} className={isLight ? "text-[#6B7F73]" : "text-[#A8B5A2]"} /> Other Outputs</div>
          <p className={`mt-2 text-sm leading-6 ${isLight ? "text-[#5A5A5A]" : "text-[#9AA0A6]"}`}>A0 academic poster (PptxGenJS) • Photography contributor at <a href="https://shutterstock.com/g/RZ+Noor" target="_blank" rel="noopener noreferrer" className={`${isLight ? "text-[#8B5E34]" : "text-[#D4B896]"} hover:underline`}>Shutterstock</a></p>
        </motion.div>
      </div>
    </Section>
  );
}

function Contact() {
  const { theme } = useTheme();
  const isLight = theme === "light";
  return (
    <section id="contact" className="relative py-12 md:py-16">
      <div className="mx-auto max-w-[1160px] px-4 sm:px-6">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className={`relative overflow-hidden rounded-[24px] sm:rounded-[28px] border p-6 sm:p-8 md:p-10 ${isLight ? "border-[#E8DDD0] bg-white shadow-lg" : "border-white/10 bg-gradient-to-br from-[#1A1E1C] via-[#1A1E1C] to-[#1A1E1C]"}`}>
          <div className={`absolute inset-0 ${isLight ? "bg-[radial-gradient(ellipse_600px_300px_at_80%_0%,rgba(139,94,52,0.06),transparent)]" : "bg-[radial-gradient(ellipse_600px_300px_at_80%_0%,rgba(212,184,150,0.08),transparent)]"}`} />
          <div className={`absolute inset-0 opacity-10 ${isLight ? "opacity-[0.04]" : "opacity-10"}`} style={{ backgroundImage: `linear-gradient(${isLight ? "black" : "white"} 1px, transparent 1px), linear-gradient(90deg, ${isLight ? "black" : "white"} 1px, transparent 1px)`, backgroundSize: `32px 32px` }} />
          <div className="relative grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div className="min-w-0">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#8B5E34] px-3 py-1 text-xs font-bold tracking-[0.12em] text-white uppercase"><Sparkles size={12} /> Available for collaborations</div>
              <h2 className={`mt-4 font-display text-[28px] sm:text-[30px] md:text-[40px] font-semibold leading-[0.95] tracking-[-0.03em] ${isLight ? "text-[#1A1E1C]" : "text-[#E8E6E1]"}`}>Let’s build <span className="bg-gradient-to-r from-[#8B5E34] to-[#5C4033] bg-clip-text text-transparent">life-saving</span> edge AI together.</h2>
              <p className={`mt-3 max-w-xl text-[13px] sm:text-[14px] leading-6 ${isLight ? "text-[#5A5A5A]" : "text-[#9AA0A6]"}`}>Interested in biomedical AI, inter-patient ECG classification, diffusion-based augmentation, or flashing models to STM32/ESP32? I’m open to research collaborations, internships and device R&D.</p>
              <div className="mt-6 flex flex-col sm:flex-row flex-wrap gap-3">
                <a href="mailto:rznoor07@gmail.com" className={`inline-flex items-center justify-center gap-2 rounded-full px-5 sm:px-6 py-3 text-sm font-semibold transition-colors ${isLight ? "bg-[#1A1E1C] text-[#FDFBF7] hover:bg-black" : "bg-[#E8E6E1] text-[#0F0F0E] hover:bg-white"}`}><Mail size={16} /> rznoor07@gmail.com</a>
                <a href="tel:+8801973837411" className={`inline-flex items-center justify-center gap-2 rounded-full border px-5 sm:px-6 py-3 text-sm font-semibold backdrop-blur transition-colors ${isLight ? "border-[#E8DDD0] bg-white text-[#3A2E1F] hover:bg-[#F5F1E8]" : "border-white/15 bg-white/5 text-[#E8E6E1] hover:bg-white/10"}`}><Phone size={16} /> +8801973837411</a>
              </div>
            </div>
            <div className="grid gap-3 min-w-0">
              {[
                { icon: Mail, label: "Email", value: "rznoor07@gmail.com", href: "mailto:rznoor07@gmail.com" },
                { icon: Globe, label: "LinkedIn", value: "linkedin.com/in/rasheduzzaman-noor-", href: "https://linkedin.com/in/rasheduzzaman-noor-" },
                { icon: Database, label: "Kaggle", value: "kaggle.com/rasheduzzamannoor", href: "https://kaggle.com/rasheduzzamannoor" },
                { icon: MapPin, label: "Location", value: "Ramchandrapur, Rajshahi, Bangladesh" },
              ].map(c => (
                <a key={c.label} href={c.href} target={c.href?.startsWith("http") ? "_blank" : undefined} rel={c.href?.startsWith("http") ? "noopener noreferrer" : undefined} className={`flex items-center gap-3 rounded-2xl border p-3 sm:p-4 backdrop-blur transition-colors min-w-0 ${isLight ? "border-[#E8DDD0] bg-[#FDFBF7] hover:bg-white" : "border-white/10 bg-white/[0.06] hover:bg-white/[0.09]"}`}>
                  <div className={`grid h-9 w-9 place-items-center rounded-xl shrink-0 ${isLight ? "bg-[#1A1E1C] text-[#FDFBF7]" : "bg-[#E8E6E1] text-[#0F0F0E]"}`}><c.icon size={16} /></div>
                  <div className="min-w-0 flex-1">
                    <div className={`text-[11px] font-semibold tracking-[0.1em] uppercase ${isLight ? "text-[#8B7355]" : "text-[#9AA0A6]"}`}>{c.label}</div>
                    <div className={`truncate text-sm font-medium ${isLight ? "text-[#1A1E1C]" : "text-[#E8E6E1]"}`}>{c.value}</div>
                  </div>
                  <ArrowUpRight size={16} className={`ml-auto shrink-0 ${isLight ? "text-[#8B7355]" : "text-[#9AA0A6]"}`} />
                </a>
              ))}
            </div>
          </div>
        </motion.div>
        <div className={`mt-8 sm:mt-10 flex flex-col items-center justify-between gap-4 border-t pt-6 text-xs text-center sm:text-left ${isLight ? "border-[#E8DDD0] text-[#8B7355]" : "border-white/5 text-[#9AA0A6]"}`}>
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-0">
            <span>© {new Date().getFullYear()} MD Rashed-Uzzaman Noor • Dept. of EEE, RUET</span>
            <span className="hidden sm:inline mx-2">•</span>
            <span>Built with React + Framer Motion + Tailwind CSS</span>
          </div>
          <div className="flex items-center gap-4 shrink-0">
            <span className="inline-flex items-center gap-1.5"><Award size={12} /> BECITHCON 2026</span>
            <span className="inline-flex items-center gap-1.5"><HeartPulse size={12} /> Biomedical AI</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("theme");
      if (stored === "light" || stored === "dark") return stored;
      if (window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches) return "light";
    }
    return "dark";
  });

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
    root.style.colorScheme = theme;
  }, [theme]);

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: light)");
    const handler = (e) => {
      const stored = localStorage.getItem("theme");
      if (!stored) setTheme(e.matches ? "light" : "dark");
    };
    media.addEventListener?.("change", handler);
    return () => media.removeEventListener?.("change", handler);
  }, []);

  const isLight = theme === "light";

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`min-h-screen selection:bg-[#8B5E34]/20 transition-colors duration-300 ${isLight ? "bg-[#FDFBF7] text-[#1A1E1C]" : "bg-[#0F0F0E] text-[#E8E6E1]"}`}>
        <Navbar />
        <Hero />
        <div id="research" className="scroll-mt-20">
          <Experience />
        </div>
        <div className="mx-auto max-w-[1160px] px-4 sm:px-6">
          <div className={`h-px ${isLight ? "bg-gradient-to-r from-transparent via-[#E8DDD0] to-transparent" : "bg-gradient-to-r from-transparent via-white/10 to-transparent"}`} />
        </div>
        <Publications />
        <Skills />
        <Education />
        <Contact />
        <div className="pointer-events-none fixed inset-0 opacity-[0.015]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />
      </div>
    </ThemeContext.Provider>
  );
}
