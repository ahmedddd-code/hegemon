const principles = [
  ['01', 'Мужские специалисты', 'Спокойно работаем с деликатными зонами — без неловкости и лишних разговоров.'],
  ['02', 'Полная приватность', 'Индивидуальный приём в отдельном кабинете. Всё остаётся между нами.'],
  ['03', 'Чистота и безопасность', 'Соблюдаем протоколы обработки оборудования и поддерживаем безупречную чистоту.'],
  ['04', 'Профессиональный подход', 'Объясняем каждый этап и подбираем параметры процедуры индивидуально.'],
];
export function Principles() {
  return (
    <section className="principles" id="about">
      <div className="principles__content">
        <div className="section-heading"><span className="eyebrow eyebrow--dark">О ЦЕНТРЕ</span><h2>Забота о себе —<br /><em>это нормально.</em></h2></div>
        <div className="principles__intro"><p className="lead">HEGEMON — приватное пространство для спокойного и уверенного ухода.</p><p>Здесь уход за телом — нормальная часть жизни. Без стеснения, оценок и ненужной суеты.</p></div>
        <div className="principles__grid">{principles.map(([number, title, text]) => <article className="principle" key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
      </div>
      <div className="principles__visual" role="img" aria-label="Интерьер мужского центра HEGEMON"><div><i>H</i><strong>HEGEMON</strong><span>PRIVATE MEN'S SPACE</span></div></div>
    </section>
  );
}
