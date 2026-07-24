import { FormEvent, ChangeEvent, useState } from 'react';
import { ArrowUpRight, CheckCircle2, Mail, MapPin } from 'lucide-react';

type FormState = { name: string; email: string; company: string; phone: string; message: string };

export function Contact() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', company: '', phone: '', message: '' });
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitted, setSubmitted] = useState(false);
  const update = (field: keyof FormState) => (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setForm((current) => ({ ...current, [field]: event.target.value }));
  const submit = (event: FormEvent) => {
    event.preventDefault();
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) next.name = 'Please tell us your name.';
    if (!form.email.trim()) next.email = 'Email is required.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'Enter a valid email address.';
    if (!form.company.trim()) next.company = 'Company is required.';
    if (!form.message.trim()) next.message = 'A little context helps us prepare.';
    setErrors(next);
    if (!Object.keys(next).length) setSubmitted(true);
  };
  const field = (key: keyof FormState, label: string, type = 'text', required = false) => <label className="block" htmlFor={`contact-${key}`}><span className="mb-2 block text-xs font-bold">{label}{required && <span className="text-[var(--np-coral)]"> *</span>}</span><input id={`contact-${key}`} data-testid={`input-${key}`} type={type} value={form[key]} onChange={update(key)} aria-invalid={Boolean(errors[key])} aria-describedby={errors[key] ? `error-${key}` : undefined} className="w-full border-b border-[var(--np-paper)]/25 bg-transparent px-0 py-3 text-sm outline-none transition-colors placeholder:text-[var(--np-paper)]/30 focus:border-[var(--np-lime)]" placeholder={label === 'Phone' ? 'Optional' : `Your ${label.toLowerCase()}`} />{errors[key] && <span id={`error-${key}`} className="mt-2 block text-xs text-[var(--np-coral)]">{errors[key]}</span>}</label>;
  return <section id="contact" className="np-section bg-[var(--np-coral)] text-[var(--np-ink)]">
    <div className="mx-auto grid max-w-[1280px] gap-16 lg:grid-cols-[.9fr_1.1fr] lg:gap-24">
      <div><p className="np-mono mb-4 text-xs uppercase tracking-[.25em] text-[var(--np-ink)]/60">Make a move</p><h2 className="np-display max-w-lg text-6xl font-semibold leading-[.88] tracking-[-.06em] md:text-8xl">Let&apos;s make your next peak visible.</h2><p className="mt-8 max-w-sm leading-relaxed text-[var(--np-ink)]/70">Tell us where you&apos;re headed. We&apos;ll bring the map, the tools, and a point of view.</p><div className="mt-12 space-y-4 text-sm"><a data-testid="link-email" href="mailto:hello@northpeak.digital" className="np-outline-focus flex w-fit items-center gap-3 rounded"><Mail className="h-4 w-4" /> hello@northpeak.digital</a><div className="flex items-center gap-3"><MapPin className="h-4 w-4" /> Portland · Remote everywhere</div></div></div>
      <div className="bg-[var(--np-ink)] p-7 text-[var(--np-paper)] md:p-10">{submitted ? <div className="flex min-h-[530px] flex-col items-start justify-center"><CheckCircle2 className="mb-7 h-12 w-12 text-[var(--np-lime)]" /><h3 className="np-display text-4xl font-semibold leading-none">Message received.</h3><p className="mt-4 max-w-sm text-sm leading-relaxed text-[var(--np-paper)]/65">Thanks for reaching out. We&apos;ll be in touch within two business days.</p><button data-testid="button-send-another" type="button" onClick={() => { setSubmitted(false); setForm({ name: '', email: '', company: '', phone: '', message: '' }); }} className="np-outline-focus mt-9 border-b border-[var(--np-lime)] pb-2 text-sm font-bold text-[var(--np-lime)]">Send another message</button></div> : <form onSubmit={submit} noValidate className="space-y-7"><div className="grid gap-7 sm:grid-cols-2">{field('name', 'Name', 'text', true)}{field('email', 'Email', 'email', true)}{field('company', 'Company', 'text', true)}{field('phone', 'Phone')}</div><label htmlFor="contact-message" className="block"><span className="mb-2 block text-xs font-bold">Message <span className="text-[var(--np-coral)]">*</span></span><textarea id="contact-message" data-testid="input-message" value={form.message} onChange={update('message')} aria-invalid={Boolean(errors.message)} className="min-h-[125px] w-full resize-y border-b border-[var(--np-paper)]/25 bg-transparent px-0 py-3 text-sm outline-none transition-colors placeholder:text-[var(--np-paper)]/30 focus:border-[var(--np-lime)]" placeholder="What are you building?" />{errors.message && <span className="mt-2 block text-xs text-[var(--np-coral)]">{errors.message}</span>}</label><button data-testid="button-submit-contact" type="submit" className="np-outline-focus group flex w-full items-center justify-between rounded-full bg-[var(--np-lime)] px-5 py-4 text-left text-sm font-bold text-[var(--np-ink)] transition-transform hover:-translate-y-1">Send your note <ArrowUpRight className="h-5 w-5 transition-transform group-hover:rotate-45" /></button><p className="np-mono text-[9px] uppercase tracking-widest text-[var(--np-paper)]/40">No pitch deck required.</p></form>}</div>
    </div>
  </section>;
}