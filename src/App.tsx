import { Route, Switch } from 'wouter';
import { AboutPage } from './pages/AboutPage';
import { FaqPage } from './pages/FaqPage';
import { HomePage } from './pages/HomePage';
import { NotFoundPage } from './pages/NotFoundPage';
import { PricesPage } from './pages/PricesPage';
import { ServicesPage } from './pages/ServicesPage';
import { VisitPage } from './pages/VisitPage';
import { ScrollToTop } from './components/ScrollToTop';

export default function App() {
  return (
    <><ScrollToTop /><Switch>
        <Route path="/" component={HomePage} />
        <Route path="/services" component={ServicesPage} />
        <Route path="/prices" component={PricesPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/visit" component={VisitPage} />
        <Route path="/faq" component={FaqPage} />
        <Route component={NotFoundPage} />
      </Switch></>
  );
}
