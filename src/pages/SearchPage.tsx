import { useEffect, useState } from 'react';
import { ContentCard } from '../components/ContentCard';
import { PageLayout } from '../components/PageLayout';
import { siteItems } from '../lib/site-content';
import { useAuth } from '../context/AuthContext';
import { loadFavorites, toggleFavorite } from '../lib/favorites';

export function SearchPage() {
  const [query, setQuery] = useState('');
  const [favorites, setFavorites] = useState<Set<string>>(new Set());
  const { user } = useAuth();
  useEffect(() => { if (user) void loadFavorites(user.id).then(setFavorites).catch(() => setFavorites(new Set())); }, [user]);
  const normalized = query.trim().toLowerCase();
  const results = siteItems.filter((item) => `${item.title} ${item.description} ${item.label}`.toLowerCase().includes(normalized));
  const changeFavorite = async (id: string) => { if (!user) return; const item = siteItems.find((entry) => entry.id === id); if (!item) return; const active = favorites.has(id); await toggleFavorite(user.id, item, active); const next = new Set(favorites); active ? next.delete(id) : next.add(id); setFavorites(next); };
  return <PageLayout title="Поиск"><section className="utility-page"><div className="section-wrap"><span className="eyebrow eyebrow--dark">ПОИСК ПО САЙТУ</span><h1>Что вы хотите <em>найти?</em></h1><label className="search-field"><span className="sr-only">Поиск</span><input autoFocus value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Услуга, цена или вопрос…"/><kbd>Esc</kbd></label><p className="result-count">{results.length} {results.length === 1 ? 'результат' : 'результатов'}</p><div className="content-grid">{results.map((item) => <ContentCard item={item} key={item.id} favorite={favorites.has(item.id)} onFavorite={user ? () => void changeFavorite(item.id) : undefined}/>)}</div></div></section></PageLayout>;
}
