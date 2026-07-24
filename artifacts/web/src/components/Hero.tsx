import { motion } from 'framer-motion';
import { ArrowDownRight, ArrowUpRight } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="relative min-h-[760px] overflow-hidden bg-[var(--np-ink)] text-[var(--np-paper)]">
      <div className="absolute inset-0 opacity-20 np-grid" />
      <div className="absolute -right-40 top-24 h-[520px] w-[520px] rounded-full bg-[var(--np-sky)]/20 blur-3xl" />
      <div className="mx-auto flex min-h-[760px] max-w-[1440px] flex-col justify-between px-5 pb-14 pt-7 md:px-10 lg:px-16">
        <nav className="relative z-10 flex items-center justify-between" aria-label="Main navigation">
          <a href="#home" data-testid="link-logo" className="np-outline-focus flex items-center gap-3 rounded text-sm font-bold tracking-tight">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-[var(--np-lime)] text-[var(--np-ink)]">N</span>
            <span>NorthPeak<span className="text-[var(--np-lime)]">.</span></span>
          </a>
          <div className="hidden items-center gap-8 text-sm text-[var(--np-paper)]/70 md:flex">
            <a data-testid="link-services" className="np-outline-focus rounded hover:text-[var(--np-lime)]" href="#services">Services</a>
            <a data-testid="link-work" className="np-outline-focus rounded hover:text-[var(--np-lime)]" href="#work">Why us</a>
            <a data-testid="link-pricing" className="np-outline-focus rounded hover:text-[var(--np-lime)]" href="#pricing">Pricing</a>
            <a data-testid="link-contact" className="np-outline-focus rounded hover:text-[var(--np-lime)]" href="#contact">Contact</a>
          </div>
          <a href="#contact" data-testid="link-nav-cta" className="np-outline-focus rounded-full border border-[var(--np-paper)]/30 px-4 py-2 text-xs font-bold hover:border-[var(--np-lime)] hover:text-[var(--np-lime)]">Let&apos;s talk <ArrowUpRight className="ml-1 inline h-3.5 w-3.5" /></a>
        </nav>

        <div className="relative z-10 grid items-end gap-12 pb-8 pt-24 lg:grid-cols-[1.1fr_.9fr] lg:gap-20">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }}>
            <p className="np-mono mb-7 flex items-center gap-3 text-[10px] uppercase tracking-[.28em] text-[var(--np-lime)]">
              <span className="h-2 w-2 rounded-full bg-[var(--np-lime)]" /> Digital partners for the next chapter
            </p>
            <h1 className="np-display max-w-4xl text-[clamp(3.7rem,8.2vw,8.1rem)] font-semibold leading-[.88] tracking-[-.065em]">
              We Build High-Converting Websites That Grow Your Business
            </h1>
            <div className="mt-9 flex flex-col gap-6 sm:flex-row sm:items-center">
              <p className="max-w-sm text-base leading-relaxed text-[var(--np-paper)]/65">Strategy, design, and engineering for ambitious founders who are ready to be impossible to ignore.</p>
              <a data-testid="button-consultation" href="#contact" className="np-outline-focus group inline-flex w-fit items-center gap-3 rounded-full bg-[var(--np-lime)] px-5 py-3 text-sm font-bold text-[var(--np-ink)] transition-transform hover:-translate-y-1">Book a Free Consultation <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" /></a>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: .9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: .25, duration: 1 }} className="relative mx-auto aspect-square w-full max-w-[470px]">
            <div className="absolute inset-[12%] rounded-[38%_62%_54%_46%/42%_39%_61%_58%] bg-[var(--np-sky)] mix-blend-screen motion-safe:animate-[morph_10s_ease-in-out_infinite]" />
            <div className="absolute inset-[22%] rounded-[45%_55%_40%_60%/56%_45%_55%_44%] bg-[var(--np-coral)] mix-blend-multiply motion-safe:animate-[morph_8s_ease-in-out_infinite_reverse]" />
            <div className="absolute inset-[32%] rounded-full border-[1.5px] border-[var(--np-paper)]/70 motion-safe:animate-[spin_18s_linear_infinite]" />
            <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--np-lime)] shadow-[0_0_0_12px_rgba(215,239,100,.18)]" />
            <span className="np-mono absolute right-0 top-[18%] text-[10px] text-[var(--np-paper)]/60">01 / 04</span>
            <span className="np-mono absolute bottom-[15%] left-0 -rotate-90 text-[10px] uppercase tracking-[.28em] text-[var(--np-paper)]/60">Make it matter</span>
          </motion.div>
        </div>
        <a data-testid="link-scroll" href="#services" className="np-outline-focus relative z-10 flex w-fit items-center gap-2 text-xs text-[var(--np-paper)]/50 hover:text-[var(--np-lime)]"><ArrowDownRight className="h-4 w-4" /> Scroll to explore</a>
      </div>
      <style>{`@keyframes morph { 0%,100%{transform:rotate(0deg) scale(1)} 50%{transform:rotate(18deg) scale(1.08)} }`}</style>
    </section>
  );
}