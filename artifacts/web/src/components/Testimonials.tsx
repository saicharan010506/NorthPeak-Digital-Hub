import { m } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  { initials: 'AM', name: 'Avery Morgan', role: 'VP Marketing', company: 'Luma Health', review: 'NorthPeak gave us the clarity to say what we do, and the confidence to say it loudly. In six weeks, the site felt like our best salesperson.', tone: 'from-[#7659d9] to-[#b29eff]' },
  { initials: 'JK', name: 'Jules Kim', role: 'Founder', company: 'Field Notes Studio', review: 'They bring strategic thinking without the theater. Every decision was considered, every detail shipped, and our enquiries doubled after launch.', tone: 'from-[#2f667e] to-[#9bc7d0]' },
  { initials: 'RS', name: 'Rowan Shah', role: 'CEO', company: 'Orbit Commerce', review: 'The rare team that can talk conversion rates in the morning and kerning in the afternoon. We felt understood from day one.', tone: 'from-[#75435f] to-[#d79ab0]' },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="np-lazy-section np-section bg-[var(--np-surface)] text-[var(--np-white)]">
      <div className="np-container">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <p className="np-eyebrow mb-4">Client notes</p>
            <h2 className="np-display text-5xl font-extrabold leading-[.96] tracking-[-.07em] md:text-7xl">Proof, not <span className="np-gradient-text">promises.</span></h2>
          </div>
          <Quote aria-hidden="true" className="hidden h-14 w-14 stroke-[1] text-[var(--np-purple)]/40 md:block" />
        </div>
        <div className="flex snap-x gap-4 overflow-x-auto pb-3 lg:grid lg:grid-cols-3 lg:overflow-visible">
          {testimonials.map((item, i) => (
            <m.figure
              key={item.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * .1 }}
              className="np-glass flex min-h-[365px] min-w-[calc(100vw-3rem)] snap-start flex-col justify-between rounded-3xl p-7 md:min-w-[370px] md:p-8 lg:min-w-0"
            >
              <div>
                <div className="mb-7 flex gap-1" aria-label="5 out of 5 stars">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star aria-hidden="true" key={star} className="h-3.5 w-3.5 fill-[var(--np-purple)] text-[var(--np-purple)]" />
                  ))}
                </div>
                <blockquote className="np-display text-xl font-semibold leading-[1.15] tracking-[-.035em]">"{item.review}"</blockquote>
              </div>
              <figcaption className="mt-10 flex items-center gap-3">
                <div role="img" aria-label={`${item.name} profile placeholder`} className={`grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br ${item.tone} text-xs font-bold text-white`}>{item.initials}</div>
                <div>
                  <div className="text-sm font-bold" data-testid={`text-testimonial-${i}`}>{item.name}</div>
                  <div className="mt-0.5 text-xs text-[var(--np-slate)]">{item.role} · {item.company}</div>
                </div>
              </figcaption>
            </m.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
