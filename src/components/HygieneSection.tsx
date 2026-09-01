import { WHATSAPP_BOOKING_URL } from '../lib/contact';

const benefits = [
  ['01', 'Меньше раздражения', 'Минимум постоянного контакта кожи с бритвой.'],
  ['02', 'Ощущение свежести', 'Ежедневный комфорт в деликатных зонах.'],
  ['03', 'Ухоженное тело', 'Внимание к себе без лишней демонстративности.'],
];

export function HygieneSection() {
  return (
    <section className="hygiene" id="hygiene">
      <div className="hygiene__content section-wrap">
        <div className="hygiene__copy">
          <span className="eyebrow">БОЛЬШЕ, ЧЕМ ПРОЦЕДУРА</span>
          <h2>Интимная гигиена —<br /><em>часть мужского ухода.</em></h2>
          <p>Так же естественно, как стрижка или уход за бородой. В HEGEMON для этого есть спокойная атмосфера, мужские специалисты и полная приватность.</p>
          <a className="text-link" href={WHATSAPP_BOOKING_URL} target="_blank" rel="noreferrer">Выбрать процедуру <span>↗</span></a>
        </div>
        <div className="hygiene__benefits">
          {benefits.map(([number, title, text]) => <article key={number}><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}
        </div>
      </div>
    </section>
  );
}
