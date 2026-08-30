import { BookingCta } from '../components/BookingCta';
import { FaqSection } from '../components/FaqSection';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { HygieneSection } from '../components/HygieneSection';
import { PricingSection } from '../components/PricingSection';
import { Principles } from '../components/Principles';
import { Services } from '../components/Services';
import { Testimonials } from '../components/Testimonials';
import { TrustStrip } from '../components/TrustStrip';
import { VisitSteps } from '../components/VisitSteps';

export function HomePage() {
  return (
    <div className="site-shell">
      <Header />
      <main>
        <Hero /><Principles /><Services /><PricingSection /><HygieneSection />
        <TrustStrip /><Testimonials /><VisitSteps /><FaqSection /><BookingCta />
      </main>
      <Footer /><a className="mobile-book" href="#booking">Записаться</a>
    </div>
  );
}
