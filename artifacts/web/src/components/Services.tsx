import { motion } from 'framer-motion';
import { ArrowUpRight, Code2, Gauge, Layers3, Palette, Search, Wrench } from 'lucide-react';

const services = [
  ['01', 'Website Development', 'High-performing digital homes built around your sharpest business goals.', Code2],
  ['02', 'Brand Identity', 'A distinct visual language that makes your next chapter unmistakably yours.', Palette],
  ['03', 'UI/UX Design', 'Clear, confident journeys that make every interaction feel considered.', Layers3],
  ['04', 'SEO', 'Technical clarity and content structure that puts your best work in the right places.', Search],
  ['05', 'Performance Optimization', 'We remove the drag, so your site feels as quick as your team thinks.', Gauge],
  ['06', 'Ongoing Support', 'Thoughtful improvements and a senior partner still close after launch.', Wrench],
] as const;

export function Services() {
  return <section id="services" className="np-lazy-section np-section bg-[var(--np-bg)] text-[var(--np-white)]">
    <div className="np-container">
      <div className="mb-14 grid gap-6 md:grid-cols-[1fr_340px] md:items-end">
        <div><p className="np-eyebrow mb-4">Capabilities</p><h2 className="np-display max-w-2xl text-5xl font-extrabold leading-[.96] tracking-[-.065em] md:text-7xl">Everything your <span className="text-[var(--np-purple)]">next move</span> needs.</h2></div>
        <p className="text-sm leading-relaxed text-[var(--np-slate)]">One senior team across strategy, design, and engineering. No handoffs into the void. No work that looks like everyone else.</p>
      </div>
      <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
        {services.map(([number, title, description, Icon], i) => <motion.article key={title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-70px' }} transition={{ delay: i * .06 }} className="group relative min-h-[270px] overflow-hidden rounded-3xl border border-[var(--np-soft-line)] bg-[var(--np-surface)] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--np-violet)]/60 hover:shadow-[0_18px_60px_rgba(109,93,254,.11)] md:p-8">
          <div className="absolute -right-16 -top-16 h-36 w-36 rounded-full bg-[var(--np-violet)]/10 opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-100" />
          <div className="relative flex items-start justify-between"><span className="text-xs font-semibold text-[var(--np-purple)]">{number}</span><Icon aria-hidden="true" className="h-8 w-8 stroke-[1.3] text-[var(--np-purple)] transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110" /></div>
          <h3 className="np-display relative mt-16 text-2xl font-bold tracking-[-.04em]">{title}</h3>
          <p className="relative mt-3 max-w-xs text-sm leading-relaxed text-[var(--np-slate)]">{description}</p>
          <ArrowUpRight aria-hidden="true" className="absolute bottom-7 right-7 h-5 w-5 text-[var(--np-slate)] transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[var(--np-white)]" />
        </motion.article>)}
      </div>
    </div>
  </section>;
}