const values = [
  ['01', 'Понятный процесс', 'До начала процедуры специалист объясняет каждый этап и отвечает на вопросы.'],
  ['02', 'Личное пространство', 'Только индивидуальный приём и отдельный кабинет без посторонних.'],
  ['03', 'Деликатное общение', 'Спокойно, уважительно и по делу — даже когда речь об интимных зонах.'],
];

export function Testimonials() {
  return (
    <section className="testimonials section-wrap">
      <div className="testimonials__heading"><span className="eyebrow eyebrow--dark">ЧТО ЦЕНЯТ МУЖЧИНЫ</span><h2>Спокойно.<br /><em>Честно. По делу.</em></h2></div>
      <div className="testimonials__grid">{values.map(([number, title, text]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
    </section>
  );
}
