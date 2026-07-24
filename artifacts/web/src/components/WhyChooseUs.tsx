import { motion } from 'framer-motion';
import { ArrowUpRight, Clock3, MessagesSquare, Sparkles, Zap } from 'lucide-react';

const reasons = [
  ['01', 'Fast Delivery', 'Focused sprints get ambitious work into the world without the usual waiting.', Zap],
  ['02', 'Senior Designers', 'The people shaping the strategy are the people making the details sing.', Sparkles],
  ['03', 'Performance Focused', 'Speed, accessibility, and clean foundations are designed in from day one.', Clock3],
  ['04', 'Transparent Communication', 'Clear milestones, honest thinking, and no black-box agency theater.', MessagesSquare],
] as const;

export function WhyChooseUs() {
  return <section id="why" className="np-lazy-section np-section bg-[var(--np-surface)] text-[var(--np-white)]">
    <div className="np-container grid gap-14 lg:grid-cols-[.78fr_1.22fr] lg:gap-24">
      <div><p className="np-eyebrow mb-4">Why NorthPeak</p><h2 className="np-display max-w-lg text-5xl font-extrabold leading-[.94] tracking-[-.07em] md:text-7xl">Good work is a <span className="np-gradient-text">growth lever.</span></h2><p className="mt-7 max-w-sm text-base leading-relaxed text-[var(--np-slate)]">You don&apos;t need another vendor. You need a partner who can see the mountain, map the route, and make the climb worth it.</p><a data-testid="link-approach" href="#contact" className="np-arrow-link np-outline-focus mt-8 rounded">Our approach <ArrowUpRight className="h-4 w-4" /></a></div>
      <div className="grid gap-3 sm:grid-cols-2">
        {reasons.map(([number, title, description, Icon], i) => <motion.article key={title} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .08 }} className="rounded-3xl border border-[var(--np-soft-line)] bg-[var(--np-bg)] p-7 transition-colors hover:border-[var(--np-violet)]/50 md:p-8"><div className="flex items-center justify-between"><span className="text-xs font-semibold text-[var(--np-purple)]">{number}</span><Icon className="h-6 w-6 stroke-[1.3] text-[var(--np-purple)]" /></div><h3 className="np-display mt-16 text-xl font-bold tracking-[-.035em]">{title}</h3><p className="mt-3 text-sm leading-relaxed text-[var(--np-slate)]">{description}</p></motion.article>)}
      </div>
    </div>
  </section>;
}