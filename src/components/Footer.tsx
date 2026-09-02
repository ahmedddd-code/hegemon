import { Link } from 'wouter';
import { TWO_GIS_URL, WHATSAPP_BOOKING_URL, WHATSAPP_PHONE_LABEL } from '../lib/contact';

export function Footer() {
  return (
    <footer className="footer">
      <div className="section-wrap footer__top">
        <Link className="brand brand--footer" href="/"><img src="/images/hegemon-mark-transparent.png" alt="" /><span><strong>HEGEMON</strong><small>ТЕРРИТОРИЯ МУЖСКОГО КОМФОРТА</small></span></Link>
        <div><span>НАВИГАЦИЯ</span><Link href="/services">Услуги</Link><Link href="/prices">Цены</Link><Link href="/about">О центре</Link><Link href="/faq">FAQ</Link></div>
        <div><span>НАПРАВЛЕНИЯ</span><p>Лазерная эпиляция</p><p>Удаление папиллом</p><p>Трон Кегеля</p></div>
        <div><span>СВЯЗЬ</span><a href={WHATSAPP_BOOKING_URL} target="_blank" rel="noreferrer">{WHATSAPP_PHONE_LABEL} ↗</a><p>WhatsApp · только по записи</p><a href={TWO_GIS_URL} target="_blank" rel="noreferrer">Открыть в 2ГИС ↗</a></div>
      </div>
      <div className="section-wrap footer__bottom"><span>© {new Date().getFullYear()} HEGEMON</span><Link href="/">На главную ↑</Link></div>
    </footer>
  );
}
