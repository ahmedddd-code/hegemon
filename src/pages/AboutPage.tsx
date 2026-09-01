import { BookingCta } from '../components/BookingCta';
import { HygieneSection } from '../components/HygieneSection';
import { PageIntro } from '../components/PageIntro';
import { PageLayout } from '../components/PageLayout';
import { Principles } from '../components/Principles';

export function AboutPage() {
  return <PageLayout title="О центре"><PageIntro eyebrow="О ЦЕНТРЕ" title="Создан для мужчин." accent="Продуман до деталей." text="HEGEMON — современный мужской центр гигиены, ухода и деликатного здоровья." /><Principles /><HygieneSection /><BookingCta /></PageLayout>;
}
