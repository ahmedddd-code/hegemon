import type { ReactNode } from 'react';
import { Link } from 'wouter';
import { BackButton } from './BackButton';
import { Footer } from './Footer';
import { Header } from './Header';

export function PageLayout({ children, title }: { children: ReactNode; title: string }) {
  return <div className="site-shell"><Header /><div className="page-toolbar"><div className="page-toolbar__inner"><BackButton /><span className="page-toolbar__title">{title}</span><Link className="page-toolbar__home" href="/" aria-label="Перейти на главную"><span aria-hidden="true">⌂</span> Главная</Link></div></div><main className="inner-page">{children}</main><Footer /><a className="mobile-book" href="#booking">Записаться</a></div>;
}
