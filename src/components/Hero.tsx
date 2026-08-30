export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__shade" />
      <div className="hero__content section-wrap">
        <div className="hero__copy">
          <span className="eyebrow">ТЕРРИТОРИЯ МУЖСКОГО КОМФОРТА</span>
          <h1>Уход за собой.<br /><em>По-мужски.</em></h1>
          <p>Приватное пространство для мужской гигиены, комфорта и уверенности.</p>
          <div className="hero__actions">
            <a className="button" href="#booking">Записаться <span>↗</span></a>
            <a className="text-link" href="#services">Выбрать услугу <span>↓</span></a>
          </div>
        </div>
        <div className="hero__note"><span>01 / 03</span><p>Только для мужчин<br />Специалисты-мужчины<br />Конфиденциально</p></div>
      </div>
      <div className="hero__services"><span>Лазерная эпиляция</span><span>Трон Кегеля</span><span>Мужская гигиена</span></div>
    </section>
  );
}
