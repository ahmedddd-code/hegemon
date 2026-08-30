import { BookingCta } from '../components/BookingCta';
import { PageIntro } from '../components/PageIntro';
import { PageLayout } from '../components/PageLayout';
import { PricingSection } from '../components/PricingSection';

export function PricesPage() {
  return <PageLayout title="Цены"><PageIntro eyebrow="ПРАЙС HEGEMON" title="Цена известна" accent="заранее." text="Все зоны и выгодные комплексы собраны на одной странице и адаптированы для любого экрана." /><PricingSection /><BookingCta /></PageLayout>;
}
