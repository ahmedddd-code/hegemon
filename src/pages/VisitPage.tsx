import { BookingCta } from '../components/BookingCta';
import { PageIntro } from '../components/PageIntro';
import { PageLayout } from '../components/PageLayout';
import { VisitSteps } from '../components/VisitSteps';

export function VisitPage() {
  return <PageLayout title="Как проходит визит"><PageIntro eyebrow="ПЕРВЫЙ ВИЗИТ" title="Спокойно с первого" accent="шага." text="Показываем весь путь заранее: от записи до рекомендаций после процедуры." /><VisitSteps /><BookingCta /></PageLayout>;
}
