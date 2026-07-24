import { motion } from 'framer-motion';
import { ArrowUpRight, Code2, Gauge, LayoutTemplate, Search, ShoppingBag, Wrench } from 'lucide-react';

const services = [
  ['01', 'Website Development', 'Fast, flexible builds that turn your sharpest ideas into a digital home that performs.', Code2],
  ['02', 'UI/UX Design', 'Clear journeys and distinctive interfaces that make every click feel like the right one.', LayoutTemplate],
  ['03', 'SEO Optimization', 'A technical and content foundation that gets your best work in front of the right people.', Search],
  ['04', 'E-Commerce Development', 'Storefronts built to make browsing beautiful and buying remarkably easy.', ShoppingBag],
  ['05', 'Performance Optimization', 'We remove the drag, so your site feels as quick as your team thinks.', Gauge],
  ['06', 'Website Maintenance', 'Ongoing care, thoughtful improvements, and someone who has your back after launch.', Wrench],
] as const;

export function Services() {
  return (
    <section id="services" className="np-section bg-[var(--np-paper)] text-[var(--np-ink)]">
      <div className="mx-auto max-w-[1280px]">
        <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="np-mono mb-4 text-xs uppercase tracking-[.25em] text-[var(--np-coral)]">What we do</p>
            <h2 className="np-display max-w-2xl text-5xl font-semibold leading-[.93] tracking-[-.05em] md:text-7xl">The work behind the wow.</h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-[var(--np-ink)]/60">Every engagement is shaped around a business goal, not a trend. We build the right thing beautifully.</p>
        </div>
        <div className="grid border-l border-t border-[var(--np-line)] sm:grid-cols-2 lg:grid-cols-3">
          {services.map(([number, title, description, Icon], i) => (
            <motion.article key={title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ delay: i * .05 }} className="group relative min-h-[285px] border-b border-r border-[var(--np-line)] p-7 transition-colors hover:bg-[var(--np-ink)] hover:text-[var(--np-paper)] md:p-9">
              <div className="mb-14 flex items-start justify-between"><span className="np-mono text-[10px] text-[var(--np-coral)]">{number}</span><Icon className="h-6 w-6 stroke-[1.5] text-[var(--np-ink)]/60 transition-transform group-hover:rotate-12 group-hover:text-[var(--np-lime)]" /></div>
              <h3 className="np-display text-2xl font-semibold tracking-[-.03em]">{title}</h3>
              <p className="mt-3 max-w-xs text-sm leading-relaxed text-[var(--np-ink)]/60 transition-colors group-hover:text-[var(--np-paper)]/60">{description}</p>
              <ArrowUpRight className="absolute bottom-7 right-7 h-5 w-5 opacity-0 transition-all group-hover:rotate-45 group-hover:opacity-100" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}