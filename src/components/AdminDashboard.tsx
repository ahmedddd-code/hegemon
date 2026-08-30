import type { AdminStats } from '../lib/admin';

const cards = (stats: AdminStats) => [
  ['Пользователи', stats.users_total, `+${stats.users_week} за неделю`],
  ['Активные', stats.active_users, 'за последние 30 дней'],
  ['Материалы', stats.content_total, 'опубликовано'],
  ['Отзывы', stats.reviews_total, 'всего'],
  ['Просмотры', stats.views_total, 'основных страниц'],
];

export function AdminDashboard({ stats }: { stats: AdminStats }) {
  const max = Math.max(1, ...stats.registrations.map((item) => item.count));
  return <div className="admin-dashboard"><div className="admin-stats">{cards(stats).map(([label, value, note]) => <article key={label}><small>{label}</small><strong>{value}</strong><span>{note}</span></article>)}</div><div className="admin-panels"><section><header><h2>Регистрации</h2><span>Последние 14 дней</span></header><div className="mini-chart" aria-label="График регистраций">{stats.registrations.map((item) => <div key={item.day} title={`${item.day}: ${item.count}`}><i style={{ height: `${Math.max(6, item.count / max * 100)}%` }}/><span>{item.day.slice(5)}</span></div>)}</div></section><section><header><h2>Популярные разделы</h2><span>По просмотрам</span></header><ol className="popular-list">{stats.popular.length ? stats.popular.map((item) => <li key={item.title}><span>{item.title}</span><strong>{item.count}</strong></li>) : <li><span>Данных пока нет</span><strong>—</strong></li>}</ol></section></div></div>;
}
