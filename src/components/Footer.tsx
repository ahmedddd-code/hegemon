export function Footer() {
  return (
    <footer className="footer">
      <div className="section-wrap footer__top">
        <div className="brand brand--footer"><i>H</i><span><strong>HEGEMON</strong><small>ТЕРРИТОРИЯ МУЖСКОГО КОМФОРТА</small></span></div>
        <div><span>НАВИГАЦИЯ</span><a href="#services">Услуги</a><a href="#prices">Цены</a><a href="#about">О центре</a><a href="#faq">FAQ</a></div>
        <div><span>НАПРАВЛЕНИЯ</span><p>Лазерная эпиляция</p><p>Трон Кегеля</p><p>Мужская гигиена</p></div>
        <div><span>СВЯЗЬ</span><a href="https://wa.me/?text=Здравствуйте!%20Хочу%20записаться%20в%20HEGEMON" target="_blank" rel="noreferrer">WhatsApp ↗</a><p>Только по записи</p></div>
      </div>
      <div className="section-wrap footer__bottom"><span>© {new Date().getFullYear()} HEGEMON</span><span>Мужской центр</span></div>
    </footer>
  );
}
