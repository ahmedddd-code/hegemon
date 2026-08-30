const services = [
  { number: '01', title: ['Лазерная', 'эпиляция'], subtitle: 'Гладкость • комфорт • уход', description: 'Меньше бритья, раздражения и ежедневной рутины. Лицо, тело и интимные зоны.', price: 'от 4 500 ₸', className: 'service--laser' },
  { number: '02', title: ['Трон', 'Кегеля'], subtitle: 'Тонус мышц тазового дна', description: 'Электромагнитная стимуляция без переодевания, инвазивных манипуляций и паузы в делах.', price: '6 000 ₸ / сеанс', className: 'service--kegel' },
  { number: '03', title: ['Комплексный', 'уход'], subtitle: 'Индивидуальная программа', description: 'Подбираем сочетание процедур под ваш комфорт, образ жизни и задачи.', price: 'Рассчитать стоимость', className: 'service--care' },
];
export function Services() {
  return (
    <section className="services" id="services"><div className="section-wrap">
      <div className="services__heading"><div><span className="eyebrow">НАШИ ПРОЦЕДУРЫ</span><h2>Всё необходимое.<br /><em>В одном месте.</em></h2></div><p>Три направления, объединённые одной идеей — мужской комфорт без компромиссов.</p></div>
      <div className="services__grid">{services.map((service) => (
        <article className={`service ${service.className}`} key={service.number}>
          <span className="service__number">{service.number}</span>
          <div className="service__body"><p>{service.subtitle}</p><h3>{service.title.map((line) => <span key={line}>{line}</span>)}</h3></div>
          <p className="service__description">{service.description}</p>
          <a href="#booking"><strong>{service.price}</strong><span aria-hidden="true">↗</span></a>
        </article>
      ))}</div>
      <p className="services__medical">Перед процедурами специалист расскажет о противопоказаниях и поможет выбрать подходящий формат.</p>
    </div></section>
  );
}
