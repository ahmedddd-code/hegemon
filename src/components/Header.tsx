import { useEffect, useState } from 'react';
import { Link, useLocation } from 'wouter';

export function Header() {
  const [open, setOpen] = useState(false);
  const [location] = useLocation();
  const isHome = location === '/';
  useEffect(() => {
    document.body.classList.toggle('menu-open', open);
    return () => document.body.classList.remove('menu-open');
  }, [open]);
  const close = () => setOpen(false);
  return (
    <header className={isHome ? 'topbar' : 'topbar topbar--inner'}>
      <Link className="brand" href="/" aria-label="HEGEMON — на главную"><img src="/images/hegemon-mark-transparent.png" alt="" /><span><strong>HEGEMON</strong><small>МУЖСКОЙ ЦЕНТР</small></span></Link>
      <nav className={open ? 'nav nav--open' : 'nav'} aria-label="Главное меню">
        <Link href="/services" onClick={close}>Услуги</Link><Link href="/prices" onClick={close}>Цены</Link><Link href="/about" onClick={close}>О центре</Link>
        <Link href="/visit" onClick={close}>Как проходит визит</Link><Link href="/faq" onClick={close}>FAQ</Link>
      </nav>
      {isHome ? <a className="topbar__cta" href="#booking">Записаться <span>↗</span></a> : <Link className="topbar__home" href="/">← На главную</Link>}
      <button className="menu-button" onClick={() => setOpen((value) => !value)} aria-label="Открыть меню" aria-expanded={open}><span /><span /></button>
    </header>
  );
}
