import { Route, Switch, useLocation } from 'wouter';
import { AboutPage } from './pages/AboutPage';
import { FaqPage } from './pages/FaqPage';
import { HomePage } from './pages/HomePage';
import { NotFoundPage } from './pages/NotFoundPage';
import { PricesPage } from './pages/PricesPage';
import { ServicesPage } from './pages/ServicesPage';
import { VisitPage } from './pages/VisitPage';
import { ScrollToTop } from './components/ScrollToTop';
import { SearchPage } from './pages/SearchPage';
import { FavoritesPage } from './pages/FavoritesPage';
import { ProfilePage } from './pages/ProfilePage';
import { AdminPage } from './pages/AdminPage';
import { GlobalUi } from './components/GlobalUi';
import { RecentViewTracker } from './components/RecentViewTracker';

export default function App() {
  const [location] = useLocation();
  return (
    <><ScrollToTop /><RecentViewTracker/><div className="route-transition" key={location}><Switch>
        <Route path="/" component={HomePage} />
        <Route path="/services" component={ServicesPage} />
        <Route path="/prices" component={PricesPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/visit" component={VisitPage} />
        <Route path="/faq" component={FaqPage} />
        <Route path="/search" component={SearchPage} />
        <Route path="/favorites" component={FavoritesPage} />
        <Route path="/profile" component={ProfilePage} />
        <Route path="/admin" component={AdminPage} />
        <Route component={NotFoundPage} />
      </Switch></div><GlobalUi/></>
  );
}
