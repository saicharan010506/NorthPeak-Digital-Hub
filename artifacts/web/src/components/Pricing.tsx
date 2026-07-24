import { ArrowUpRight, Check } from 'lucide-react';

const plans = [
  { name: 'Starter', price: '$4,800', note: 'For a focused first impression.', features: ['Conversion-led landing page', 'Responsive UI design', 'Technical SEO setup', '2 weeks post-launch support'], tone: 'paper' },
  { name: 'Professional', price: '$9,600', note: 'For teams ready to grow with intent.', features: ['Multi-page marketing website', 'Custom design system', 'CMS implementation', 'Analytics & conversion tracking', '4 weeks post-launch support'], tone: 'lime', popular: true },
  { name: 'Enterprise', price: 'Let’s talk', note: 'For complex products and bigger peaks.', features: ['Full digital experience strategy', 'Advanced integrations', 'E-commerce or web application', 'Dedicated senior team', 'Ongoing optimization partner'], tone: 'ink' },
];

export function Pricing() {
  return (
    <section id="pricing" className="np-section bg-[var(--np-ink)] text-[var(--np-paper)]">
      <div className="mx-auto max-w-[1280px]">
        <div className="mb-16"><p className="np-mono mb-4 text-xs uppercase tracking-[.25em] text-[var(--np-lime)]">Investment</p><h2 className="np-display max-w-2xl text-5xl font-semibold leading-[.93] tracking-[-.05em] md:text-7xl">A better website pays for itself.</h2></div>
        <div className="grid gap-4 lg:grid-cols-3">
          {plans.map((plan) => <article key={plan.name} className={`relative flex min-h-[500px] flex-col p-7 md:p-9 ${plan.tone === 'lime' ? 'bg-[var(--np-lime)] text-[var(--np-ink)]' : plan.tone === 'ink' ? 'border border-[var(--np-paper)]/25' : 'bg-[var(--np-paper)] text-[var(--np-ink)]'}`}>
            {plan.popular && <span className="np-mono absolute right-5 top-5 rounded-full bg-[var(--np-coral)] px-3 py-1 text-[9px] font-bold uppercase tracking-widest text-[var(--np-ink)]">Most Popular</span>}
            <p className="np-mono text-xs uppercase tracking-[.2em] opacity-60">{plan.name}</p><p className="mt-8 text-sm opacity-65">{plan.note}</p><div className="np-display mt-3 text-5xl font-semibold tracking-[-.06em]">{plan.price}</div>
            <ul className="mt-10 space-y-4 border-t border-current/15 pt-7">{plan.features.map((feature) => <li key={feature} className="flex items-start gap-3 text-sm"><Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--np-coral)]" />{feature}</li>)}</ul>
            <a data-testid={`button-plan-${plan.name.toLowerCase()}`} href="#contact" className="np-outline-focus group mt-auto flex items-center justify-between border-b border-current/30 pb-3 text-sm font-bold">Start a conversation <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" /></a>
          </article>)}
        </div>
      </div>
    </section>
  );
}