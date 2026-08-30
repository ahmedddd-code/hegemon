import { BookingCta } from '../components/BookingCta';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { HomeNavigation } from '../components/HomeNavigation';
import { TrustStrip } from '../components/TrustStrip';
import { RecentlyViewed } from '../components/RecentlyViewed';

export function HomePage() {
  return (
    <div className="site-shell">
      <Header />
      <main>
        <Hero /><HomeNavigation /><RecentlyViewed/><TrustStrip /><BookingCta />
      </main>
      <Footer /><a className="mobile-book" href="#booking">Записаться</a>
    </div>
  );
}
