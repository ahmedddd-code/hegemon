import { useEffect, useState } from 'react';
import { Auth } from '../components/Auth';
import { ContentCard } from '../components/ContentCard';
import { PageLayout } from '../components/PageLayout';
import { Skeleton } from '../components/Skeleton';
import { useAuth } from '../context/AuthContext';
import { loadFavorites, toggleFavorite } from '../lib/favorites';
import { siteItems } from '../lib/site-content';

export function FavoritesPage() {
  const { user, loading: authLoading } = useAuth();
  const [ids, setIds] = useState<Set<string>>(new Set());
  const [loading, setLoading] = useState(true);
  useEffect(() => { if (user) void loadFavorites(user.id).then(setIds).catch(() => setIds(new Set())).finally(() => setLoading(false)); else setLoading(false); }, [user]);
  if (authLoading) return <PageLayout title="Избранное"><section className="utility-page"><div className="section-wrap"><Skeleton className="skeleton--hero" lines={3}/></div></section></PageLayout>;
  if (!user) return <PageLayout title="Избранное"><section className="utility-page auth-page"><div className="section-wrap"><div className="utility-intro"><span className="eyebrow eyebrow--dark">ЛИЧНОЕ</span><h1>Сохраните важное <em>для себя.</em></h1><p>Войдите, чтобы избранное было доступно на всех устройствах.</p></div><Auth /></div></section></PageLayout>;
  const items = siteItems.filter((item) => ids.has(item.id));
  const remove = async (id: string) => { const item = siteItems.find((entry) => entry.id === id); if (!item) return; await toggleFavorite(user.id, item, true); setIds(new Set([...ids].filter((entry) => entry !== id))); };
  return <PageLayout title="Избранное"><section className="utility-page"><div className="section-wrap"><span className="eyebrow eyebrow--dark">ВАШ ВЫБОР</span><h1>Избранное</h1>{loading ? <div className="content-grid"><Skeleton lines={3}/><Skeleton lines={3}/></div> : items.length ? <div className="content-grid">{items.map((item) => <ContentCard key={item.id} item={item} favorite onFavorite={() => void remove(item.id)}/>)}</div> : <div className="empty-state empty-state--page"><h3>Здесь пока пусто</h3><p>Добавляйте нужные страницы через поиск.</p></div>}</div></section></PageLayout>;
}
