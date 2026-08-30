const steps = [
  ['Запись', 'Вы выбираете услугу и удобное время.'],
  ['Консультация', 'Обсуждаем пожелания, ограничения и этапы процедуры.'],
  ['Процедура', 'Работаем в отдельном кабинете — спокойно и конфиденциально.'],
  ['Рекомендации', 'Рассказываем об уходе и, если нужно, планируем следующий визит.'],
];
export function VisitSteps() {
  return (
    <section className="visit section-wrap" id="visit">
      <div className="section-heading"><span className="eyebrow eyebrow--dark">КАК ПРОХОДИТ ВИЗИТ</span><h2>Всё просто.<br /><em>И понятно.</em></h2></div>
      <div className="visit__steps">{steps.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
      <aside className="intimate-note"><span>ДЕЛИКАТНЫЙ ПОДХОД</span><blockquote>«Открывается только та зона, с которой работает специалист. Остальное — закрыто.»</blockquote></aside>
    </section>
  );
}
