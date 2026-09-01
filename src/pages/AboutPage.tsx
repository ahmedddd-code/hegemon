import { BookingCta } from '../components/BookingCta';
import { AboutStory, BrandPhilosophy } from '../components/AboutStory';
import { HygieneSection } from '../components/HygieneSection';
import { PageIntro } from '../components/PageIntro';
import { PageLayout } from '../components/PageLayout';

export function AboutPage() {
  return <PageLayout title="О центре"><PageIntro eyebrow="О ЦЕНТРЕ" title="Создан для мужчин." accent="Продуман до деталей." text="HEGEMON — современное пространство мужской гигиены, ухода и деликатного здоровья." /><AboutStory /><HygieneSection /><BrandPhilosophy /><BookingCta /></PageLayout>;
}
