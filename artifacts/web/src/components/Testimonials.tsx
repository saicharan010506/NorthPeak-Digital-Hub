import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  { initials: 'AM', name: 'Avery Morgan', company: 'Luma Health', review: 'NorthPeak gave us the clarity to say what we do, and the confidence to say it loudly. In six weeks, the site felt like our best salesperson.', color: 'bg-[var(--np-coral)]' },
  { initials: 'JK', name: 'Jules Kim', company: 'Field Notes Studio', review: 'They bring strategic thinking without the theater. Every decision was considered, every detail shipped, and our enquiries doubled after launch.', color: 'bg-[var(--np-lime)]' },
  { initials: 'RS', name: 'Rowan Shah', company: 'Orbit Commerce', review: 'The rare team that can talk conversion rates in the morning and kerning in the afternoon. We felt understood from day one.', color: 'bg-[var(--np-sky)]' },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="np-section bg-[var(--np-paper)] text-[var(--np-ink)]">
      <div className="mx-auto max-w-[1280px]">
        <div className="mb-16 flex items-end justify-between gap-6">
          <div><p className="np-mono mb-4 text-xs uppercase tracking-[.25em] text-[var(--np-coral)]">In their words</p><h2 className="np-display text-5xl font-semibold leading-[.93] tracking-[-.05em] md:text-7xl">Proof, not promises.</h2></div>
          <Quote className="hidden h-16 w-16 stroke-[1] text-[var(--np-ink)]/20 md:block" />
        </div>
        <div className="grid gap-5 lg:grid-cols-3">
          {testimonials.map((item, i) => (
            <motion.figure key={item.name} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .1 }} className="flex min-h-[350px] flex-col justify-between border border-[var(--np-line)] p-7 md:p-9">
              <div><div className="mb-7 flex gap-1" aria-label="5 out of 5 stars">{[1, 2, 3, 4, 5].map((star) => <Star key={star} className="h-4 w-4 fill-[var(--np-coral)] text-[var(--np-coral)]" />)}</div><blockquote className="np-display text-2xl font-medium leading-tight tracking-[-.03em]">“{item.review}”</blockquote></div>
              <figcaption className="mt-10 flex items-center gap-3"><div aria-hidden="true" className={`grid h-11 w-11 place-items-center rounded-full text-xs font-bold ${item.color}`}>{item.initials}</div><div><div className="text-sm font-bold" data-testid={`text-testimonial-${i}`}>{item.name}</div><div className="np-mono text-[10px] uppercase tracking-wider text-[var(--np-ink)]/50">{item.company}</div></div></figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}