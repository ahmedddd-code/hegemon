import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { useLocation } from 'wouter';
import { useAuth } from './AuthContext';
import { supabase } from '../lib/supabase';

export type NotificationItem = { id: string; title: string; body: string; path: string; read: boolean; created_at: string };
type Value = { items: NotificationItem[]; loading: boolean; open: boolean; unread: number; setOpen: (open: boolean) => void; markAll: () => void; remove: (id: string) => void; visit: (item: NotificationItem) => void };
const Context = createContext<Value | null>(null);
const KEY = 'hegemon-notifications';
const welcome: NotificationItem = { id: 'welcome', title: 'Добро пожаловать в HEGEMON', body: 'Узнайте, как проходит первый визит в наш мужской центр.', path: '/visit', read: false, created_at: new Date().toISOString() };

export function NotificationsProvider({ children }: { children: React.ReactNode }) {
  const { user } = useAuth();
  const [, navigate] = useLocation();
  const [items, setItems] = useState<NotificationItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (user) {
      void supabase.from('notifications').select('id,title,body,path,read,created_at').order('created_at', { ascending: false }).limit(30).then(({ data }) => { setItems(data ?? []); setLoading(false); });
    } else {
      try {
        const stored = localStorage.getItem(KEY);
        const parsed: unknown = stored ? JSON.parse(stored) : [welcome];
        const next = Array.isArray(parsed) ? parsed as NotificationItem[] : [welcome];
        setItems(next);
        if (!stored) localStorage.setItem(KEY, JSON.stringify(next));
      } catch { setItems([]); }
      setLoading(false);
    }
  }, [user]);

  const save = (next: NotificationItem[]) => { setItems(next); if (!user) localStorage.setItem(KEY, JSON.stringify(next)); };
  const markAll = () => { const next = items.map((item) => ({ ...item, read: true })); save(next); if (user) void supabase.from('notifications').update({ read: true }).eq('user_id', user.id); };
  const remove = (id: string) => { save(items.filter((item) => item.id !== id)); if (user) void supabase.from('notifications').delete().eq('id', id); };
  const visit = (item: NotificationItem) => { save(items.map((entry) => entry.id === item.id ? { ...entry, read: true } : entry)); if (user) void supabase.from('notifications').update({ read: true }).eq('id', item.id); setOpen(false); navigate(item.path); };
  const value = useMemo(() => ({ items, loading, open, unread: items.filter((item) => !item.read).length, setOpen, markAll, remove, visit }), [items, loading, open]);
  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export function useNotifications() {
  const value = useContext(Context);
  if (!value) throw new Error('useNotifications must be used inside NotificationsProvider');
  return value;
}
