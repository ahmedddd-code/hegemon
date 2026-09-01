import { Link } from 'wouter';
import { WHATSAPP_BOOKING_URL } from '../lib/contact';

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__shade" />
      <div className="hero__content section-wrap">
        <div className="hero__copy">
          <span className="eyebrow">HEGEMON · ТЕРРИТОРИЯ МУЖСКОГО КОМФОРТА</span>
          <h1>Мужская гигиена.<br /><em>Комфорт.</em><br />Уверенность.</h1>
          <p>Деликатный уход за мужским телом в приватной и спокойной обстановке.</p>
          <div className="hero__actions">
            <a className="button" href={WHATSAPP_BOOKING_URL} target="_blank" rel="noreferrer">Записаться <span>↗</span></a>
            <Link className="text-link" href="/services">Выбрать услугу <span>→</span></Link>
          </div>
        </div>
        <div className="hero__note"><span>ПРИВАТНЫЙ ФОРМАТ</span><p>Только для мужчин<br />Специалисты-мужчины<br />Строго конфиденциально</p></div>
      </div>
      <div className="hero__services"><span><b>01</b> Лазерная эпиляция</span><span><b>02</b> Удаление папиллом</span><span><b>03</b> Трон Кегеля</span></div>
    </section>
  );
}
