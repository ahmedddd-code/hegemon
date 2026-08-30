import type { ReactNode } from 'react';
import { Footer } from './Footer';
import { Header } from './Header';

export function PageLayout({ children }: { children: ReactNode }) {
  return <div className="site-shell"><Header /><main className="inner-page">{children}</main><Footer /><a className="mobile-book" href="#booking">Записаться</a></div>;
}
