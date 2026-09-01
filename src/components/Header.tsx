import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'wouter';
import { NotificationBell } from './NotificationCenter';
import { Icon } from './Icon';
import { openCommandPalette, openQrCode } from '../lib/ui-events';
import { WHATSAPP_BOOKING_URL } from '../lib/contact';

export function Header() {
  const [open, setOpen] = useState(false);
  const [location] = useLocation();
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const isHome = location === '/';

  useEffect(() => {
    setOpen(false);
  }, [location]);

  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 1121px)');
    const closeOnDesktop = (event: MediaQueryListEvent) => event.matches && setOpen(false);
    desktop.addEventListener('change', closeOnDesktop);
    return () => desktop.removeEventListener('change', closeOnDesktop);
  }, []);

  useEffect(() => {
    if (!open) return;
    const body = document.body;
    const previousPadding = body.style.paddingRight;
    const scrollbarGap = window.innerWidth - document.documentElement.clientWidth;
    body.classList.add('menu-open');
    if (scrollbarGap > 0) body.style.paddingRight = `${scrollbarGap}px`;

    const focusable = () => [
      ...Array.from(navRef.current?.querySelectorAll<HTMLElement>('a[href],button:not([disabled])') ?? []),
      menuButtonRef.current,
    ].filter((item): item is HTMLElement => Boolean(item));
    const firstLink = navRef.current?.querySelector<HTMLElement>('a[href]');
    const focusFrame = window.requestAnimationFrame(() => firstLink?.focus());
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
        window.requestAnimationFrame(() => menuButtonRef.current?.focus());
        return;
      }
      if (event.key !== 'Tab') return;
      const items = focusable();
      const first = items[0];
      const last = items[items.length - 1];
      if (!first || !last) return;
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      window.cancelAnimationFrame(focusFrame);
      document.removeEventListener('keydown', handleKeyDown);
      body.classList.remove('menu-open');
      body.style.paddingRight = previousPadding;
    };
  }, [open]);

  const close = () => setOpen(false);
  const runMenuAction = (action: () => void) => {
    close();
    window.setTimeout(action, 0);
  };
  const current = (path: string) => location === path ? 'nav__active' : undefined;
  const currentPage = (path: string) => location === path ? 'page' as const : undefined;
  return (
    <header className={`${isHome ? 'topbar' : 'topbar topbar--inner'}${open ? ' topbar--menu-open' : ''}`}>
      <Link className="brand" href="/" aria-label="HEGEMON — на главную" onClick={close}><img src="/images/hegemon-mark-transparent.png" alt="" /><span><strong>HEGEMON</strong><small>МУЖСКОЙ ЦЕНТР</small></span></Link>
      <nav ref={navRef} id="main-navigation" className={open ? 'nav nav--open' : 'nav'} aria-label="Главное меню">
        <div className="nav__intro"><span>НАВИГАЦИЯ</span><small>HEGEMON</small></div>
        <Link className={current('/services')} href="/services" onClick={close} aria-current={currentPage('/services')}>Услуги</Link><Link className={current('/prices')} href="/prices" onClick={close} aria-current={currentPage('/prices')}>Цены</Link><Link className={current('/about')} href="/about" onClick={close} aria-current={currentPage('/about')}>О центре</Link>
        <Link className={current('/visit')} href="/visit" onClick={close} aria-current={currentPage('/visit')}>Как проходит визит</Link><Link className={current('/faq')} href="/faq" onClick={close} aria-current={currentPage('/faq')}>FAQ</Link>
        <Link className="nav__home" href="/" onClick={close} aria-current={currentPage('/')}>Главная</Link>
        <div className="nav__mobile-tools">
          <button type="button" onClick={() => runMenuAction(openCommandPalette)}><Icon name="search"/><span>Поиск</span></button>
          <button type="button" onClick={() => runMenuAction(openQrCode)}><Icon name="phone"/><span>Открыть на телефоне</span></button>
        </div>
        <a className="nav__book" href={WHATSAPP_BOOKING_URL} target="_blank" rel="noreferrer" onClick={close}>Записаться в WhatsApp <span aria-hidden="true">↗</span></a>
      </nav>
      <div className="topbar__tools"><button className="topbar__tool topbar__search" type="button" onClick={openCommandPalette} aria-label="Открыть поиск"><Icon name="search"/><kbd>Ctrl K</kbd></button><button className="topbar__tool topbar__phone" type="button" onClick={openQrCode} aria-label="Открыть на телефоне"><Icon name="phone"/></button><NotificationBell/></div>
      {isHome ? <a className="topbar__cta" href={WHATSAPP_BOOKING_URL} target="_blank" rel="noreferrer">Записаться <span>↗</span></a> : <Link className="topbar__home" href="/">← На главную</Link>}
      <button ref={menuButtonRef} className={open ? 'menu-button menu-button--open' : 'menu-button'} type="button" onClick={() => setOpen((value) => !value)} aria-label={open ? 'Закрыть меню' : 'Открыть меню'} aria-expanded={open} aria-controls="main-navigation"><b>{open ? 'Закрыть' : 'Меню'}</b><span aria-hidden="true"><i /><i /></span></button>
    </header>
  );
}
