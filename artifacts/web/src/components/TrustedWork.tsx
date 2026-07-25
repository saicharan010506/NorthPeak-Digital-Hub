import { m } from 'framer-motion';
import { ArrowUpRight, ExternalLink } from 'lucide-react';

const logos = ['ORBIT', 'Morrow', 'KIN / CO', 'Aster', 'LUMEN', 'NORTHLINE'];
const projects = [
  { name: 'Morrow Health', category: 'Brand platform · Web design', className: 'from-[#251d52] via-[#5e4ec4] to-[#b69cff]' },
  { name: 'Aster Finance', category: 'Product marketing · Development', className: 'from-[#142d3e] via-[#316e8b] to-[#a3d4dd]' },
  { name: 'Northline Objects', category: 'E-commerce · Brand identity', className: 'from-[#3b2538] via-[#8a4e75] to-[#efb8c7]' },
];

export function TrustedWork() {
  return <>
    <section id="trusted" className="np-lazy-section border-y border-[var(--np-soft-line)] bg-[var(--np-bg)] px-5 py-9 md:px-10">
      <div className="np-container flex flex-col items-center gap-7 md:flex-row md:justify-between">
        <span className="text-[10px] font-semibold uppercase tracking-[.2em] text-[var(--np-slate)]">Trusted by teams building forward</span>
        {/* Logo row is purely decorative branding — hidden from assistive tech */}
        <div aria-hidden="true" className="flex w-full items-center justify-between gap-6 overflow-hidden md:w-auto md:gap-10">
          {logos.map((logo) => (
            <span key={logo} className="shrink-0 text-sm font-bold tracking-[.12em] text-white/25 grayscale transition-colors hover:text-white/80">{logo}</span>
          ))}
        </div>
      </div>
    </section>
    <section id="work" className="np-lazy-section np-section bg-[var(--np-bg)] text-[var(--np-white)]">
      <div className="np-container">
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="np-eyebrow mb-4">Selected work</p>
            <h2 className="np-display text-5xl font-extrabold leading-[.96] tracking-[-.07em] md:text-7xl">Built to make an <span className="text-[var(--np-purple)]">impression.</span></h2>
          </div>
          <a data-testid="link-all-work" href="#contact" className="np-arrow-link np-outline-focus w-fit rounded">Start your project <ArrowUpRight className="h-4 w-4" /></a>
        </div>
        <div className="grid gap-5 lg:grid-cols-3">
          {projects.map((project, i) => (
            <m.article
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * .1 }}
              className="group"
            >
              <div className={`relative aspect-[1.15] overflow-hidden rounded-3xl bg-gradient-to-br ${project.className}`}>
                <div className="absolute inset-5 rounded-2xl border border-white/25 bg-black/10 p-5 transition-transform duration-500 group-hover:scale-105">
                  <div className="flex justify-between text-[9px] uppercase tracking-[.2em] text-white/70">
                    <span>{project.name}</span>
                    <ExternalLink aria-hidden="true" className="h-3.5 w-3.5" />
                  </div>
                  <div className="absolute bottom-8 left-8 right-8">
                    <div className="h-2 w-2/3 rounded-full bg-white/70" />
                    <div className="mt-3 h-2 w-1/2 rounded-full bg-white/30" />
                    <div className="mt-10 grid grid-cols-3 gap-2">
                      <span className="h-16 rounded-lg bg-white/15" />
                      <span className="h-16 rounded-lg bg-white/10" />
                      <span className="h-16 rounded-lg bg-white/20" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-5 flex items-end justify-between gap-4">
                <div>
                  <h3 className="np-display text-xl font-bold tracking-[-.03em]">{project.name}</h3>
                  <p className="mt-1 text-xs text-[var(--np-slate)]">{project.category}</p>
                </div>
                <a
                  data-testid={`link-case-study-${i}`}
                  href="#contact"
                  aria-label={`View ${project.name} case study`}
                  className="np-outline-focus rounded-full border border-[var(--np-line)] p-2.5 transition-colors hover:border-[var(--np-purple)]"
                >
                  <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
                </a>
              </div>
            </m.article>
          ))}
        </div>
      </div>
    </section>
  </>;
}
