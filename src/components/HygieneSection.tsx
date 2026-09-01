const benefits = [
  ['01', 'Лазерная эпиляция', 'Уход за лицом, телом и интимными зонами с длительным результатом.'],
  ['02', 'Эстетическая гигиена', 'Процедуры для ощущения свежести, комфорта и уверенности каждый день.'],
  ['03', 'Деликатное здоровье', 'Спокойный профессиональный подход к вопросам, о которых не всегда удобно говорить.'],
];

import { WHATSAPP_BOOKING_URL } from '../lib/contact';

export function HygieneSection() {
  return (
    <section className="hygiene" id="hygiene">
      <div className="hygiene__content section-wrap">
        <div className="hygiene__copy">
          <span className="eyebrow">НАПРАВЛЕНИЯ HEGEMON</span>
          <h2>Всё для уверенности<br /><em>и комфорта.</em></h2>
          <p>От лазерной эпиляции и эстетической гигиены до решения деликатных вопросов мужского здоровья — спокойно, профессионально и без стеснения.</p>
          <a className="text-link" href={WHATSAPP_BOOKING_URL} target="_blank" rel="noreferrer">Выбрать процедуру <span>↗</span></a>
        </div>
        <div className="hygiene__benefits">
          {benefits.map(([number, title, text]) => <article key={number}><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}
        </div>
      </div>
    </section>
  );
}
