import { useEffect, useState } from 'react';
import { Link, useLocation } from 'wouter';
import { NotificationBell } from './NotificationCenter';
import { Icon } from './Icon';
import { openCommandPalette, openQrCode } from '../lib/ui-events';

export function Header() {
  const [open, setOpen] = useState(false);
  const [location] = useLocation();
  const isHome = location === '/';
  useEffect(() => {
    document.body.classList.toggle('menu-open', open);
    return () => document.body.classList.remove('menu-open');
  }, [open]);
  const close = () => setOpen(false);
  const current = (path: string) => location === path ? 'nav__active' : undefined;
  return (
    <header className={isHome ? 'topbar' : 'topbar topbar--inner'}>
      <Link className="brand" href="/" aria-label="HEGEMON — на главную"><img src="/images/hegemon-mark-transparent.png" alt="" /><span><strong>HEGEMON</strong><small>МУЖСКОЙ ЦЕНТР</small></span></Link>
      <nav className={open ? 'nav nav--open' : 'nav'} aria-label="Главное меню">
        <Link className="nav__home" href="/" onClick={close}>Главная</Link>
        <Link className={current('/services')} href="/services" onClick={close}>Услуги</Link><Link className={current('/prices')} href="/prices" onClick={close}>Цены</Link><Link className={current('/about')} href="/about" onClick={close}>О центре</Link>
        <Link className={current('/visit')} href="/visit" onClick={close}>Как проходит визит</Link><Link className={current('/faq')} href="/faq" onClick={close}>FAQ</Link>
        <a className="nav__book" href="https://wa.me/?text=Здравствуйте!%20Хочу%20записаться%20в%20HEGEMON" target="_blank" rel="noreferrer">Записаться в WhatsApp ↗</a>
      </nav>
      <div className="topbar__tools"><button className="topbar__tool topbar__search" type="button" onClick={openCommandPalette} aria-label="Открыть поиск"><Icon name="search"/><kbd>Ctrl K</kbd></button><button className="topbar__tool topbar__phone" type="button" onClick={openQrCode} aria-label="Открыть на телефоне"><Icon name="phone"/></button><NotificationBell/></div>
      {isHome ? <a className="topbar__cta" href="#booking">Записаться <span>↗</span></a> : <Link className="topbar__home" href="/">← На главную</Link>}
      <button className={open ? 'menu-button menu-button--open' : 'menu-button'} onClick={() => setOpen((value) => !value)} aria-label={open ? 'Закрыть меню' : 'Открыть меню'} aria-expanded={open}><b>{open ? 'Закрыть' : 'Меню'}</b><span><i /><i /></span></button>
    </header>
  );
}
