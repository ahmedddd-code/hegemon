import { BookingCta } from '../components/BookingCta';
import { HygieneSection } from '../components/HygieneSection';
import { PageIntro } from '../components/PageIntro';
import { PageLayout } from '../components/PageLayout';
import { Principles } from '../components/Principles';
import { Testimonials } from '../components/Testimonials';
import { TrustStrip } from '../components/TrustStrip';

export function AboutPage() {
  return <PageLayout><PageIntro eyebrow="О ЦЕНТРЕ" title="Создан мужчинами" accent="для мужчин." text="Приватное пространство, где забота о теле становится простой и естественной частью жизни." /><Principles /><HygieneSection /><TrustStrip /><Testimonials /><BookingCta /></PageLayout>;
}
