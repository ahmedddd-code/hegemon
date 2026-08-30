import { useEffect } from 'react';
type HeaderProps = { open: boolean; onToggle: () => void };

export function Header({ open, onToggle }: HeaderProps) {
  useEffect(() => {
    document.body.classList.toggle('menu-open', open);
    return () => document.body.classList.remove('menu-open');
  }, [open]);
  const close = () => { if (open) onToggle(); };
  return (
    <header className="topbar">
      <a className="brand" href="#top" aria-label="HEGEMON — на главную"><i>H</i><span><strong>HEGEMON</strong><small>МУЖСКОЙ ЦЕНТР</small></span></a>
      <nav className={open ? 'nav nav--open' : 'nav'} aria-label="Главное меню">
        <a href="#services" onClick={close}>Услуги</a><a href="#prices" onClick={close}>Цены</a><a href="#about" onClick={close}>О центре</a>
        <a href="#hygiene" onClick={close}>Гигиена</a><a href="#visit" onClick={close}>Как проходит визит</a><a href="#faq" onClick={close}>FAQ</a>
      </nav>
      <a className="topbar__cta" href="#booking">Записаться <span>↗</span></a>
      <button className="menu-button" onClick={onToggle} aria-label="Открыть меню" aria-expanded={open}><span /><span /></button>
    </header>
  );
}
