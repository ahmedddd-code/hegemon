import { Link } from 'wouter';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

export function NotFoundPage() {
  return (
    <div className="site-shell"><Header /><main className="not-found"><span>404</span><h1>Такой страницы нет</h1><p>Возможно, адрес изменился или в нём есть ошибка.</p><Link className="button" href="/">← На главную</Link></main><Footer /></div>
  );
}
