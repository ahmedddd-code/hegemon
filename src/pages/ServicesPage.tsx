import { BookingCta } from '../components/BookingCta';
import { PageIntro } from '../components/PageIntro';
import { PageLayout } from '../components/PageLayout';
import { Services } from '../components/Services';

export function ServicesPage() {
  return <PageLayout title="Услуги"><PageIntro eyebrow="НАПРАВЛЕНИЯ HEGEMON" title="Мужской уход" accent="без компромиссов." text="Выберите направление — перед процедурой специалист спокойно объяснит детали и ограничения." /><Services /><BookingCta /></PageLayout>;
}
