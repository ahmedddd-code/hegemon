import { Link, useLocation } from 'wouter';
import { useAuth } from '../context/AuthContext';
import { Icon } from './Icon';

const items = [
  { path: '/', label: 'Главная', icon: 'home' as const },
  { path: '/search', label: 'Поиск', icon: 'search' as const },
  { path: '/favorites', label: 'Избранное', icon: 'heart' as const },
  { path: '/profile', label: 'Профиль', icon: 'user' as const },
];

export function MobileNavigation() {
  const [location] = useLocation();
  const { user } = useAuth();
  return <nav className="mobile-nav" aria-label="Мобильная навигация">{items.map((item) => <Link key={item.path} href={item.path} className={location === item.path ? 'mobile-nav__active' : ''} aria-current={location === item.path ? 'page' : undefined}><Icon name={item.icon}/><span>{item.label}</span>{!user && (item.path === '/profile' || item.path === '/favorites') && <i aria-hidden="true" />}</Link>)}</nav>;
}
