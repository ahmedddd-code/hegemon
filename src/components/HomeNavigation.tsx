import { Link } from 'wouter';

const secondary = [
  ['03', 'О центре', 'Приватность, специалисты и интерьер', '/about'],
  ['04', 'Как проходит визит', 'Пять понятных шагов без неожиданностей', '/visit'],
  ['05', 'Вопросы и ответы', 'Подготовка, ощущения и ограничения', '/faq'],
];

export function HomeNavigation() {
  return (
    <section className="home-navigation">
      <div className="section-wrap">
        <div className="home-navigation__heading"><span className="eyebrow eyebrow--dark">ВЫБЕРИТЕ РАЗДЕЛ</span><h2>Что вас<br /><em>интересует?</em></h2><p>Вся информация разложена по отдельным коротким страницам.</p></div>
        <div className="home-navigation__primary">
          <Link className="home-card home-card--services" href="/services"><span>01</span><div><small>ЛАЗЕР • ПАПИЛЛОМЫ • ТРОН КЕГЕЛЯ</small><h3>Выбрать услугу</h3><p>Описание процедур и важные ограничения.</p></div><b>→</b></Link>
          <Link className="home-card home-card--prices" href="/prices"><span>02</span><div><small>27 ЗОН • 6 СЕТОВ</small><h3>Посмотреть цены</h3><p>Полный мужской прайс без скрытых условий.</p></div><b>→</b></Link>
        </div>
        <div className="home-navigation__secondary">{secondary.map(([number, title, text, path]) => <Link href={path} key={path}><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div><b>→</b></Link>)}</div>
      </div>
    </section>
  );
}
