import { Link } from 'wouter';

export function Footer() {
  return (
    <footer className="footer">
      <div className="section-wrap footer__top">
        <Link className="brand brand--footer" href="/"><i>H</i><span><strong>HEGEMON</strong><small>ТЕРРИТОРИЯ МУЖСКОГО КОМФОРТА</small></span></Link>
        <div><span>НАВИГАЦИЯ</span><Link href="/services">Услуги</Link><Link href="/prices">Цены</Link><Link href="/about">О центре</Link><Link href="/faq">FAQ</Link></div>
        <div><span>НАПРАВЛЕНИЯ</span><p>Лазерная эпиляция</p><p>Удаление папиллом</p><p>Трон Кегеля</p></div>
        <div><span>СВЯЗЬ</span><a href="https://wa.me/?text=Здравствуйте!%20Хочу%20записаться%20в%20HEGEMON" target="_blank" rel="noreferrer">WhatsApp ↗</a><p>Только по записи</p></div>
      </div>
      <div className="section-wrap footer__bottom"><span>© {new Date().getFullYear()} HEGEMON</span><Link href="/">На главную ↑</Link></div>
    </footer>
  );
}
