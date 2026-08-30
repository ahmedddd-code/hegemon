import { useState } from 'react';

const zones = [
  ['Усы', '4 500 ₸'], ['Борода (контур)', '4 500 ₸'], ['Виски', '4 500 ₸'], ['Щёки', '4 500 ₸'],
  ['Лоб', '4 500 ₸'], ['Лицо полностью', '9 000 ₸'], ['Шея — передняя часть', '4 500 ₸'], ['Шея — задняя часть', '4 500 ₸'],
  ['Ареолы', '4 500 ₸'], ['Подмышечные впадины', '5 500 ₸'], ['Кисти и пальцы рук', '4 500 ₸'], ['Плечи', '5 500 ₸'],
  ['Грудь', '6 500 ₸'], ['Спина', '10 000 ₸'], ['Поясница', '5 500 ₸'], ['Живот', '5 500 ₸'],
  ['Ягодицы', '6 500 ₸'], ['Глубокое бикини', '12 000 ₸'], ['Паховые складки +2 см', '4 500 ₸'], ['Линия живота', '4 500 ₸'],
  ['Бёдра', '11 000 ₸'], ['Голени — до колена', '11 000 ₸'], ['Ноги полностью', '19 000 ₸'], ['Руки до локтя', '9 000 ₸'],
  ['Руки выше локтя', '9 000 ₸'], ['Руки полностью', '15 000 ₸'], ['Стопы и верхняя часть пальцев', '4 500 ₸'],
];

const sets = [
  ['Сет 1', 'Глубокое бикини + подмышечные впадины', '17 000 ₸'],
  ['Сет 2', 'Подмышечные впадины + лицо + шея', '19 000 ₸'],
  ['Сет 3', 'Спина + грудь + живот + подмышечные впадины', '30 000 ₸'],
  ['Сет 4', 'Глубокое бикини + подмышечные впадины + ноги до колен', '28 000 ₸'],
  ['Сет 5', 'Глубокое бикини + подмышечные впадины + ноги полностью', '34 000 ₸'],
  ['Сет 6', 'Глубокое бикини + подмышечные впадины + ноги до колен + руки до локтей', '40 000 ₸'],
];

export function PricingSection() {
  const [tab, setTab] = useState<'zones' | 'sets'>('zones');
  return (
    <section className="pricing" id="prices">
      <div className="section-wrap">
        <div className="pricing__heading">
          <div><span className="eyebrow">МУЖСКОЙ ПРАЙС</span><h2>Понятные цены.<br /><em>Без сюрпризов.</em></h2></div>
          <div className="pricing__tabs" role="tablist" aria-label="Разделы прайса">
            <button className={tab === 'zones' ? 'active' : ''} onClick={() => setTab('zones')} role="tab" aria-selected={tab === 'zones'}>Отдельные зоны</button>
            <button className={tab === 'sets' ? 'active' : ''} onClick={() => setTab('sets')} role="tab" aria-selected={tab === 'sets'}>Выгодные сеты</button>
          </div>
        </div>
        {tab === 'zones' ? (
          <div className="pricing__zones">{zones.map(([name, price], index) => <div key={name}><span><i>{String(index + 1).padStart(2, '0')}</i>{name}</span><strong>{price}</strong></div>)}</div>
        ) : (
          <div className="pricing__sets">{sets.map(([name, description, price], index) => <article key={name}><span>0{index + 1}</span><div><h3>{name}</h3><p>{description}</p></div><strong>{price}</strong></article>)}</div>
        )}
        <div className="pricing__gift"><span>✦</span><p><strong>2 мини-зоны в подарок</strong><small>{tab === 'zones' ? 'при курсе от 6 процедур' : 'при выборе 6-го сета'}</small></p><a href="#booking">Записаться <b>↗</b></a></div>
      </div>
    </section>
  );
}
