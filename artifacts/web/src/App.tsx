import { lazy, Suspense, useEffect, useState } from 'react';
import { LazyMotion, domAnimation } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { Hero } from '@/components/Hero';

// Below-the-fold sections: code-split so they don't block the initial JS parse
const TrustedWork = lazy(() => import('@/components/TrustedWork').then((m) => ({ default: m.TrustedWork })));
const Services = lazy(() => import('@/components/Services').then((m) => ({ default: m.Services })));
const WhyChooseUs = lazy(() => import('@/components/WhyChooseUs').then((m) => ({ default: m.WhyChooseUs })));
const Testimonials = lazy(() => import('@/components/Testimonials').then((m) => ({ default: m.Testimonials })));
const Pricing = lazy(() => import('@/components/Pricing').then((m) => ({ default: m.Pricing })));
const FAQ = lazy(() => import('@/components/FAQ').then((m) => ({ default: m.FAQ })));
const Contact = lazy(() => import('@/components/Contact').then((m) => ({ default: m.Contact })));
const Footer = lazy(() => import('@/components/Footer').then((m) => ({ default: m.Footer })));
const NotFound = lazy(() => import('@/pages/not-found'));

function BackToTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 700);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <button
      type="button"
      data-testid="button-back-to-top"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`np-outline-focus fixed bottom-5 right-5 z-40 grid h-11 w-11 place-items-center rounded-full border border-[var(--np-line)] bg-[var(--np-surface)] text-[var(--np-white)] shadow-xl transition-all duration-300 hover:border-[var(--np-purple)] ${visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'}`}
    >
      <ArrowUp className="h-4 w-4" />
    </button>
  );
}

function Home() {
  return (
    <LazyMotion features={domAnimation}>
      <div className="np-noise min-h-[100dvh] bg-[var(--np-bg)]">
        <Hero />
        <main>
          <Suspense fallback={null}>
            <TrustedWork />
            <Services />
            <WhyChooseUs />
            <Testimonials />
            <Pricing />
            <FAQ />
            <Contact />
          </Suspense>
        </main>
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
        <BackToTop />
      </div>
    </LazyMotion>
  );
}

function Router() {
  const path = window.location.pathname.replace(/\/+$/, '') || '/';
  return path === '/' ? (
    <Home />
  ) : (
    <Suspense fallback={null}>
      <NotFound />
    </Suspense>
  );
}

function App() {
  return <Router />;
}

export default App;
