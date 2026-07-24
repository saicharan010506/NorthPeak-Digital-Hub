import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from 'framer-motion';
import { ArrowDown, ArrowRight, Menu, X, Play, Sparkles, TrendingUp, MousePointer2 } from 'lucide-react';
import { useState } from 'react';

const links = [
  ['Services', '#services'],
  ['Work', '#work'],
  ['About', '#why'],
  ['Pricing', '#pricing'],
  ['Contact', '#contact'],
];

export function Hero() {
  const [open, setOpen] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const px = useSpring(useTransform(x, [-800, 800], [-12, 12]), { stiffness: 80, damping: 25 });
  const py = useSpring(useTransform(y, [-600, 600], [-10, 10]), { stiffness: 80, damping: 25 });
  const handleMove = (event: React.MouseEvent<HTMLElement>) => {
    if (prefersReducedMotion) return;
    x.set(event.clientX - window.innerWidth / 2);
    y.set(event.clientY - window.innerHeight / 2);
  };

  return (
    <section id="home" onMouseMove={handleMove} className="relative min-h-[760px] overflow-hidden bg-[var(--np-bg)] text-[var(--np-white)]">
      <div className="absolute inset-0 np-grid opacity-70" />
      <div className="np-pulse pointer-events-none absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-[var(--np-violet)]/20 blur-[110px]" />
      <div className="np-pulse pointer-events-none absolute -right-24 top-44 h-[360px] w-[360px] rounded-full bg-[var(--np-purple)]/15 blur-[110px]" style={{ animationDelay: '1.5s' }} />
      <div className="relative z-10 mx-auto flex min-h-[760px] max-w-[1240px] flex-col px-5 pb-8 pt-5 md:px-10 md:pt-7 lg:px-14">
        <nav className="flex items-center justify-between" aria-label="Main navigation">
          <a href="#home" data-testid="link-logo" className="np-outline-focus flex items-center gap-2.5 rounded-lg text-sm font-bold tracking-[-.02em]">
            <span className="np-logo-mark">N</span><span>NorthPeak <span className="text-[var(--np-purple)]">Digital</span></span>
          </a>
          <div className="hidden items-center gap-7 text-xs text-[var(--np-slate)] lg:flex">
            {links.map(([label, href]) => <a key={href} data-testid={`link-nav-${label.toLowerCase()}`} className="np-outline-focus rounded-md transition-colors hover:text-[var(--np-white)]" href={href}>{label}</a>)}
          </div>
          <div className="flex items-center gap-3">
            <a href="#contact" data-testid="link-nav-cta" className="np-outline-focus hidden rounded-full bg-[var(--np-white)] px-4 py-2.5 text-xs font-bold text-[var(--np-bg)] transition-transform hover:-translate-y-0.5 sm:block">Let&apos;s talk <ArrowRight className="ml-1 inline h-3.5 w-3.5" /></a>
            <button type="button" data-testid="button-mobile-menu" aria-label={open ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={open} onClick={() => setOpen(!open)} className="np-outline-focus rounded-lg border border-[var(--np-line)] p-2.5 lg:hidden">{open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}</button>
          </div>
        </nav>
        <div className={`absolute left-5 right-5 top-20 z-20 origin-top rounded-2xl border border-[var(--np-line)] bg-[var(--np-surface)]/95 p-4 shadow-2xl backdrop-blur-xl transition-all duration-300 lg:hidden ${open ? 'scale-y-100 opacity-100' : 'pointer-events-none scale-y-95 opacity-0'}`}>
          {links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)} data-testid={`link-mobile-${label.toLowerCase()}`} className="block border-b border-[var(--np-soft-line)] px-3 py-3.5 text-sm text-[var(--np-slate)] last:border-0 hover:text-[var(--np-white)]">{label}</a>)}
        </div>

        <div className="grid flex-1 items-center gap-12 pb-14 pt-24 lg:grid-cols-[1.04fr_.96fr] lg:gap-10 lg:pt-28">
          <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }}>
            <p className="np-eyebrow mb-6 flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[var(--np-violet)]" /> Independent digital studio</p>
            <h1 className="np-display max-w-3xl text-[clamp(3.25rem,7vw,6.9rem)] font-extrabold leading-[.93] tracking-[-.075em]">Websites That Feel <span className="np-gradient-text">Premium.</span><br />Performance That <span className="np-gradient-text">Converts.</span></h1>
            <p className="mt-8 max-w-lg text-base leading-relaxed text-[var(--np-slate)] md:text-lg">We design and build high-performing digital experiences for ambitious brands ready to move with clarity.</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a data-testid="button-book-call" href="#contact" className="np-outline-focus group inline-flex items-center justify-center gap-3 rounded-full bg-[var(--np-violet)] px-5 py-3.5 text-sm font-bold text-[var(--np-white)] shadow-[0_10px_30px_rgba(109,93,254,.25)] transition-transform hover:-translate-y-1">Book Strategy Call <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></a>
              <a data-testid="button-view-work" href="#work" className="np-outline-focus group inline-flex items-center justify-center gap-3 rounded-full border border-[var(--np-line)] px-5 py-3.5 text-sm font-bold text-[var(--np-white)] transition-colors hover:border-[var(--np-purple)] hover:bg-white/[.04]">View Our Work <Play className="h-3.5 w-3.5 fill-current" /></a>
            </div>
          </motion.div>
           <motion.div style={prefersReducedMotion ? undefined : { x: px, y: py }} initial={{ opacity: 0, scale: .92 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: .25, duration: .9 }} className="relative mx-auto aspect-square w-full max-w-[490px]">
            <div className="absolute inset-[12%] rounded-full border border-[var(--np-purple)]/25" />
            <div className="absolute inset-[20%] rounded-full border border-dashed border-[var(--np-violet)]/30 motion-safe:animate-[spin_30s_linear_infinite]" />
            <div className="absolute inset-[27%] rounded-[42%_58%_54%_46%/45%_38%_62%_55%] bg-gradient-to-br from-[var(--np-violet)]/80 via-[var(--np-purple)]/35 to-transparent blur-[2px] motion-safe:animate-[np-float_8s_ease-in-out_infinite]" />
            <div className="absolute left-1/2 top-1/2 grid h-24 w-24 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-3xl border border-white/15 bg-white/[.08] shadow-[0_20px_60px_rgba(109,93,254,.4)] backdrop-blur-xl"><Sparkles className="h-8 w-8 text-[var(--np-white)]" /></div>
            <div className="np-float absolute left-[2%] top-[20%] w-44 rounded-2xl border border-white/10 bg-[var(--np-surface)]/90 p-4 shadow-2xl backdrop-blur-xl" style={{ animationDelay: '-2s' }}><div className="flex items-center justify-between text-[10px] text-[var(--np-slate)]"><span>Conversion rate</span><TrendingUp className="h-3.5 w-3.5 text-[var(--np-purple)]" /></div><strong className="np-display mt-2 block text-2xl">+38.4%</strong><div className="mt-3 h-1 overflow-hidden rounded-full bg-white/10"><div className="h-full w-[78%] rounded-full bg-[var(--np-purple)]" /></div></div>
            <div className="np-float absolute bottom-[14%] right-[-2%] flex items-center gap-3 rounded-2xl border border-white/10 bg-[var(--np-surface)]/90 px-4 py-3 shadow-2xl backdrop-blur-xl" style={{ animationDelay: '-4s' }}><span className="grid h-8 w-8 place-items-center rounded-xl bg-[var(--np-violet)]/20"><MousePointer2 className="h-4 w-4 text-[var(--np-purple)]" /></span><span><strong className="block text-xs">Experience, refined</strong><small className="text-[10px] text-[var(--np-slate)]">Built to be remembered</small></span></div>
          </motion.div>
        </div>
        <a data-testid="link-scroll-indicator" href="#trusted" className="np-outline-focus flex w-fit items-center gap-3 rounded text-[10px] uppercase tracking-[.2em] text-[var(--np-slate)]"><span className="grid h-8 w-5 place-items-center rounded-full border border-[var(--np-line)]"><ArrowDown className="h-3 w-3 motion-safe:animate-bounce" /></span> Scroll to explore</a>
      </div>
    </section>
  );
}