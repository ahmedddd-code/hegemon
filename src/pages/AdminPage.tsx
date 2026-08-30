import { useEffect, useState } from 'react';
import { Link } from 'wouter';
import { AdminDashboard } from '../components/AdminDashboard';
import { AdminUsers } from '../components/AdminUsers';
import { PageLayout } from '../components/PageLayout';
import { Skeleton } from '../components/Skeleton';
import { useAuth } from '../context/AuthContext';
import { loadAdminStats, type AdminStats } from '../lib/admin';

const sections = ['Dashboard', 'Пользователи', 'Контент', 'Отзывы', 'Аналитика', 'Уведомления', 'Настройки'];

export function AdminPage() {
  const { user, isAdmin, loading: authLoading } = useAuth();
  const [active, setActive] = useState('Dashboard');
  const [stats, setStats] = useState<AdminStats | null>(null);
  const [error, setError] = useState('');
  useEffect(() => { if (isAdmin) void loadAdminStats().then(setStats).catch(() => setError('Не удалось загрузить аналитику. Проверьте, применена ли миграция Supabase.')); }, [isAdmin]);
  if (authLoading) return <PageLayout title="Админ-панель"><section className="utility-page"><div className="section-wrap"><Skeleton className="skeleton--hero" lines={4}/></div></section></PageLayout>;
  if (!user || !isAdmin) return <PageLayout title="Доступ закрыт"><section className="utility-page"><div className="section-wrap"><div className="access-denied"><span>403</span><h1>Раздел доступен только администратору</h1><p>Права проверяются через защищённые метаданные аккаунта.</p><Link className="button" href="/">На главную →</Link></div></div></section></PageLayout>;
  return <PageLayout title="Админ-панель"><section className="admin-page"><aside><strong>HEGEMON</strong><small>CONTROL CENTER</small>{sections.map((section) => <button className={active === section ? 'active' : ''} key={section} onClick={() => setActive(section)}>{section}</button>)}</aside><main><header><div><span>АДМИНИСТРИРОВАНИЕ</span><h1>{active}</h1></div><span className="status-badge">Система работает</span></header>{error && <p className="form-message form-message--error">{error}</p>}{active === 'Dashboard' ? stats ? <AdminDashboard stats={stats}/> : !error && <div className="admin-stats"><Skeleton lines={3}/><Skeleton lines={3}/><Skeleton lines={3}/></div> : active === 'Пользователи' ? <AdminUsers/> : <AdminPlaceholder section={active}/>}</main></section></PageLayout>;
}

function AdminPlaceholder({ section }: { section: string }) {
  return <div className="admin-placeholder"><h2>{section}</h2><p>Раздел подготовлен для данных проекта. Поиск, фильтры и действия появятся вместе с соответствующим контентом, без создания фиктивных записей.</p><label><span>Поиск</span><input placeholder={`Найти в разделе «${section}»`}/></label></div>;
}
