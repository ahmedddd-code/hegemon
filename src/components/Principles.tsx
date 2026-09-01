const principles = [
  ['01', 'Полная приватность', 'Индивидуальный приём в отдельном кабинете. Всё, что обсуждается в центре, остаётся между нами.'],
  ['02', 'Профессиональный подход', 'Специалист объясняет каждый этап и подбирает процедуру с учётом ваших задач.'],
  ['03', 'Деликатное общение', 'Спокойно и уважительно говорим даже о самых личных вопросах — без оценок и неловкости.'],
  ['04', 'Продуманный комфорт', 'Чистота, спокойная атмосфера и внимание к деталям сопровождают весь визит.'],
];
export function Principles() {
  return (
    <section className="principles" id="about">
      <div className="principles__content">
        <div className="section-heading"><span className="eyebrow eyebrow--dark">НАШ ПОДХОД</span><h2>Комфорт начинается<br /><em>с доверия.</em></h2></div>
        <div className="principles__intro">
          <p>Мы создали пространство, где мужчина может спокойно и без неловкости позаботиться о себе — от лазерной эпиляции и эстетической гигиены до решения деликатных вопросов мужского здоровья.</p>
          <p>Здесь важны приватность, профессиональный подход и комфорт.</p>
          <p>Без лишних разговоров. Без стеснения. По-мужски просто.</p>
          <p className="principles__tagline">HEGEMON — забота о себе как часть современного мужского образа жизни.</p>
        </div>
        <div className="principles__grid">{principles.map(([number, title, text]) => <article className="principle" key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
      </div>
      <div className="principles__visual" role="img" aria-label="Интерьер мужского центра HEGEMON"><div><i>H</i><strong>HEGEMON</strong><span>PRIVATE MEN'S SPACE</span></div></div>
    </section>
  );
}
