import { useEffect, useState } from 'react';
import { Link } from 'wouter';
import { useAuth } from '../context/AuthContext';
import { clearRecentViews, clearRemoteRecentViews, loadRemoteRecentViews, readRecentViews, recentViewsEvent, type RecentView } from '../lib/recent-views';

export function RecentlyViewed() {
  const [items, setItems] = useState<RecentView[]>([]);
  const { user } = useAuth();

  useEffect(() => {
    const update = () => setItems(readRecentViews());
    update();
    window.addEventListener(recentViewsEvent, update);
    window.addEventListener('storage', update);
    return () => { window.removeEventListener(recentViewsEvent, update); window.removeEventListener('storage', update); };
  }, []);

  useEffect(() => { if (user) void loadRemoteRecentViews(user); }, [user]);

  if (!items.length) return null;
  const clear = () => {
    clearRecentViews();
    if (user) void clearRemoteRecentViews(user);
  };

  return <section className="recent-section" id="recent"><div className="section-wrap"><div className="section-heading"><div><span className="eyebrow eyebrow--dark">ИСТОРИЯ</span><h2>Вы недавно <em>смотрели.</em></h2></div><button className="text-button" type="button" onClick={clear}>Очистить историю</button></div><div className="recent-list">{items.map((item, index) => <Link className="recent-card" href={item.path} key={item.id}><span>0{index + 1}</span><small>{item.label}</small><h3>{item.title}</h3><p>{item.description}</p><b>Открыть →</b></Link>)}</div></div></section>;
}
