import { useEffect, useMemo, useRef, useState } from 'react';
import { useLocation } from 'wouter';
import { useAuth } from '../context/AuthContext';
import { useNotifications } from '../context/NotificationsContext';
import { uiEvents } from '../lib/ui-events';
import { Icon } from './Icon';

type Command = { label: string; hint: string; icon: 'home'|'search'|'user'|'heart'|'bell'|'settings'|'help'|'chart'; action: () => void };

export function CommandPalette() {
  const [, navigate] = useLocation();
  const { isAdmin } = useAuth();
  const { setOpen: setNotificationsOpen } = useNotifications();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [active, setActive] = useState(0);
  const input = useRef<HTMLInputElement>(null);
  const previousFocus = useRef<HTMLElement | null>(null);
  const close = () => { setOpen(false); setQuery(''); previousFocus.current?.focus(); };
  const go = (path: string) => { navigate(path); close(); };
  const commands = useMemo<Command[]>(() => [
    { label: 'Перейти на главную', hint: '/', icon: 'home', action: () => go('/') },
    { label: 'Поиск', hint: '/search', icon: 'search', action: () => go('/search') },
    { label: 'Открыть профиль', hint: '/profile', icon: 'user', action: () => go('/profile') },
    { label: 'Избранное', hint: '/favorites', icon: 'heart', action: () => go('/favorites') },
    { label: 'Недавно просмотренные', hint: 'Главная', icon: 'home', action: () => { go('/'); setTimeout(() => document.querySelector('#recent')?.scrollIntoView(), 80); } },
    { label: 'Уведомления', hint: 'Панель', icon: 'bell', action: () => { close(); setNotificationsOpen(true); } },
    { label: 'Настройки профиля', hint: '/profile', icon: 'settings', action: () => go('/profile') },
    { label: 'Помощь и FAQ', hint: '/faq', icon: 'help', action: () => go('/faq') },
    ...(isAdmin ? [{ label: 'Админ-панель', hint: '/admin', icon: 'chart' as const, action: () => go('/admin') }] : []),
  ], [isAdmin]);
  const filtered = commands.filter((command) => command.label.toLowerCase().includes(query.toLowerCase()));

  useEffect(() => {
    const show = () => { previousFocus.current = document.activeElement as HTMLElement; setOpen(true); };
    const keys = (event: KeyboardEvent) => { if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') { event.preventDefault(); show(); } };
    window.addEventListener(uiEvents.command, show); window.addEventListener('keydown', keys);
    return () => { window.removeEventListener(uiEvents.command, show); window.removeEventListener('keydown', keys); };
  }, []);
  useEffect(() => { if (open) { setActive(0); requestAnimationFrame(() => input.current?.focus()); } }, [open, query]);
  if (!open) return null;
  const keydown = (event: React.KeyboardEvent) => {
    if (event.key === 'Escape') close();
    if (event.key === 'ArrowDown') { event.preventDefault(); setActive((value) => Math.min(filtered.length - 1, value + 1)); }
    if (event.key === 'ArrowUp') { event.preventDefault(); setActive((value) => Math.max(0, value - 1)); }
    if (event.key === 'Enter' && filtered[active]) { event.preventDefault(); filtered[active].action(); }
    if (event.key === 'Tab') { event.preventDefault(); input.current?.focus(); }
  };
  return <div className="modal-layer command-layer" role="dialog" aria-modal="true" aria-label="Командная панель" onKeyDown={keydown}><button className="overlay" aria-label="Закрыть" onClick={close}/><div className="command-palette"><label><Icon name="search"/><input ref={input} value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Найти команду…"/><kbd>ESC</kbd></label><div role="listbox">{filtered.map((command, index) => <button role="option" aria-selected={index === active} className={index === active ? 'active' : ''} key={command.label} onMouseEnter={() => setActive(index)} onClick={command.action}><Icon name={command.icon}/><span>{command.label}</span><small>{command.hint}</small></button>)}{!filtered.length && <p>Команда не найдена</p>}</div><footer><span>↑↓ выбрать</span><span>↵ открыть</span><span>Esc закрыть</span></footer></div></div>;
}
