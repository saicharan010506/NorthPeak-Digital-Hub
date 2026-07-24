import { motion } from 'framer-motion';
import { ArrowUpRight, Gauge, Laptop, SearchCheck, UsersRound } from 'lucide-react';

const reasons = [
  ['01', 'Fast Delivery', 'Momentum matters. Our focused process gets ambitious work into the world without the usual waiting.', Gauge],
  ['02', 'Experienced Team', 'Senior thinkers and makers, close to the work from first sketch to final handoff.', UsersRound],
  ['03', 'SEO Friendly', 'Strong foundations, clear structure, and details that help search engines understand your value.', SearchCheck],
  ['04', 'Mobile Responsive', 'A first-class experience wherever your next customer happens to be browsing.', Laptop],
] as const;

export function WhyChooseUs() {
  return (
    <section id="work" className="np-section bg-[var(--np-sky)] text-[var(--np-ink)]">
      <div className="mx-auto grid max-w-[1280px] gap-16 lg:grid-cols-[.8fr_1.2fr] lg:gap-24">
        <div>
          <p className="np-mono mb-4 text-xs uppercase tracking-[.25em] text-[var(--np-ink)]/60">Why NorthPeak</p>
          <h2 className="np-display text-5xl font-semibold leading-[.9] tracking-[-.055em] md:text-7xl">Good work is a growth lever.</h2>
          <p className="mt-8 max-w-sm text-base leading-relaxed text-[var(--np-ink)]/70">You don&apos;t need another vendor. You need a partner who can see the mountain, map the route, and make the climb worth it.</p>
          <a data-testid="link-approach" href="#contact" className="np-outline-focus mt-9 inline-flex items-center gap-2 rounded-full border border-[var(--np-ink)]/30 px-5 py-3 text-sm font-bold hover:bg-[var(--np-ink)] hover:text-[var(--np-paper)]">Our approach <ArrowUpRight className="h-4 w-4" /></a>
        </div>
        <div className="grid border-l border-t border-[var(--np-ink)]/20 sm:grid-cols-2">
          {reasons.map(([number, title, description, Icon]) => (
            <motion.article key={title} whileHover={{ y: -5 }} className="min-h-[220px] border-b border-r border-[var(--np-ink)]/20 p-7 md:p-9">
              <div className="flex items-center justify-between"><span className="np-mono text-[10px] text-[var(--np-ink)]/50">{number}</span><Icon className="h-5 w-5 stroke-[1.5]" /></div>
              <h3 className="np-display mt-14 text-2xl font-semibold tracking-[-.03em]">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--np-ink)]/65">{description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}