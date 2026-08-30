import { useEffect, useRef } from 'react';
import { useNotifications } from '../context/NotificationsContext';
import { Icon } from './Icon';
import { Skeleton } from './Skeleton';

export function NotificationBell() {
  const { unread, open, setOpen } = useNotifications();
  return <button className="icon-button notification-button" type="button" onClick={() => setOpen(!open)} aria-label={`Уведомления${unread ? `, новых: ${unread}` : ''}`} aria-expanded={open}><Icon name="bell" />{unread > 0 && <span>{unread > 9 ? '9+' : unread}</span>}</button>;
}

export function NotificationCenter() {
  const { items, loading, open, setOpen, markAll, remove, visit } = useNotifications();
  const panel = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!open) return;
    const close = (event: KeyboardEvent) => { if (event.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', close);
    panel.current?.focus();
    return () => window.removeEventListener('keydown', close);
  }, [open, setOpen]);
  if (!open) return null;
  return <><button className="overlay" aria-label="Закрыть уведомления" onClick={() => setOpen(false)} /><aside className="notification-panel" ref={panel} tabIndex={-1} aria-label="Центр уведомлений"><header><div><span>ЦЕНТР HEGEMON</span><h2>Уведомления</h2></div><button className="icon-button" onClick={() => setOpen(false)} aria-label="Закрыть">×</button></header>{items.some((item) => !item.read) && <button className="text-button" onClick={markAll}>Отметить все как прочитанные</button>}<div className="notification-list">{loading ? <><Skeleton lines={2}/><Skeleton lines={2}/></> : items.length ? items.map((item) => <article className={item.read ? '' : 'notification--new'} key={item.id}><button className="notification__main" onClick={() => visit(item)}><span>{item.read ? '' : 'Новое'}</span><strong>{item.title}</strong><p>{item.body}</p></button><button className="notification__remove" onClick={() => remove(item.id)} aria-label={`Удалить: ${item.title}`}>×</button></article>) : <div className="empty-state"><Icon name="bell" size={28}/><h3>Уведомлений пока нет</h3><p>Здесь появятся важные сообщения HEGEMON.</p></div>}</div></aside></>;
}
