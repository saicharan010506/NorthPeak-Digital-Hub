import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import { Route, Switch, Router as WouterRouter } from 'wouter';
import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { WhyChooseUs } from '@/components/WhyChooseUs';
import { TrustedWork } from '@/components/TrustedWork';
import { Testimonials } from '@/components/Testimonials';
import { Pricing } from '@/components/Pricing';
import { FAQ } from '@/components/FAQ';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

const queryClient = new QueryClient();

function BackToTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 700);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return <button type="button" data-testid="button-back-to-top" aria-label="Back to top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className={`np-outline-focus fixed bottom-5 right-5 z-40 grid h-11 w-11 place-items-center rounded-full border border-[var(--np-line)] bg-[var(--np-surface)] text-[var(--np-white)] shadow-xl transition-all duration-300 hover:border-[var(--np-purple)] ${visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'}`}><ArrowUp className="h-4 w-4" /></button>;
}

function Home() {
  return <div className="np-noise min-h-[100dvh] bg-[var(--np-bg)]"><Hero /><main><TrustedWork /><Services /><WhyChooseUs /><Testimonials /><Pricing /><FAQ /><Contact /></main><Footer /><BackToTop /></div>;
}

function Router() {
  return <Switch><Route path="/" component={Home} /><Route component={NotFound} /></Switch>;
}

function App() {
  return <QueryClientProvider client={queryClient}><TooltipProvider><WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}><Router /></WouterRouter><Toaster /></TooltipProvider></QueryClientProvider>;
}

export default App;