import { BookingCta } from '../components/BookingCta';
import { FaqSection } from '../components/FaqSection';
import { PageIntro } from '../components/PageIntro';
import { PageLayout } from '../components/PageLayout';

export function FaqPage() {
  return <PageLayout title="Вопросы и ответы"><PageIntro eyebrow="ВОПРОСЫ И ОТВЕТЫ" title="Важное" accent="до визита." text="Короткие ответы о приватности, ощущениях, интимных зонах и подготовке." /><FaqSection /><BookingCta /></PageLayout>;
}
