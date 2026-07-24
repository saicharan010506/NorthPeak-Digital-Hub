import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  ['How long does a typical project take?', 'Most focused website engagements take 4–8 weeks from kickoff to launch. We set a clear cadence at the start and keep momentum visible throughout.'],
  ['Do you work with existing brand systems?', 'Absolutely. We can work within your current identity or help sharpen it where the system is no longer serving the business.'],
  ['What happens after launch?', 'Our Ongoing Support plans keep your team moving with iteration, performance checks, and a senior partner who already knows the context.'],
  ['Can you help with strategy before design?', 'That is often the best place to begin. We map your audience, offer, and conversion moments before a single screen is designed.'],
];

export function FAQ() {
  const [active, setActive] = useState<number | null>(0);
  return <section id="faq" className="np-section bg-[var(--np-surface)] text-[var(--np-white)]"><div className="np-container grid gap-12 lg:grid-cols-[.75fr_1.25fr]"><div><p className="np-eyebrow mb-4">Questions, answered</p><h2 className="np-display text-5xl font-extrabold leading-[.96] tracking-[-.07em] md:text-6xl">No mystery, <span className="text-[var(--np-purple)]">just clarity.</span></h2></div><div className="divide-y divide-[var(--np-line)] border-y border-[var(--np-line)]">{faqs.map(([question, answer], i) => <div key={question}><button data-testid={`button-faq-${i}`} type="button" aria-expanded={active === i} onClick={() => setActive(active === i ? null : i)} className="np-outline-focus flex w-full items-center justify-between gap-6 rounded py-6 text-left text-base font-semibold"><span>{question}</span><ChevronDown className={`h-5 w-5 shrink-0 text-[var(--np-purple)] transition-transform duration-300 ${active === i ? 'rotate-180' : ''}`} /></button><div className={`grid transition-[grid-template-rows,opacity] duration-300 ${active === i ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}><p className="overflow-hidden pb-6 pr-10 text-sm leading-relaxed text-[var(--np-slate)]">{answer}</p></div></div>)}</div></div></section>;
}