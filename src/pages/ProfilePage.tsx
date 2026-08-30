import { Auth } from '../components/Auth';
import { PageLayout } from '../components/PageLayout';
import { Skeleton } from '../components/Skeleton';
import { useAuth } from '../context/AuthContext';

export function ProfilePage() {
  const { user, loading, isAdmin, signOut } = useAuth();
  if (loading) return <PageLayout title="Профиль"><section className="utility-page"><div className="section-wrap"><Skeleton className="skeleton--hero" lines={3}/></div></section></PageLayout>;
  if (!user) return <PageLayout title="Профиль"><section className="utility-page auth-page"><div className="section-wrap"><div className="utility-intro"><span className="eyebrow eyebrow--dark">ЛИЧНЫЙ КАБИНЕТ</span><h1>Ваш HEGEMON <em>рядом.</em></h1><p>Войдите, чтобы синхронизировать избранное, просмотры и уведомления.</p></div><Auth /></div></section></PageLayout>;
  return <PageLayout title="Профиль"><section className="utility-page"><div className="section-wrap"><span className="eyebrow eyebrow--dark">ЛИЧНЫЙ КАБИНЕТ</span><h1>Добро пожаловать</h1><div className="profile-card"><div className="profile-avatar">{user.email?.slice(0, 1).toUpperCase()}</div><div><small>EMAIL</small><h2>{user.email}</h2><span className="status-badge">Аккаунт активен</span>{isAdmin && <span className="status-badge status-badge--gold">Администратор</span>}</div><button className="button button--outline" type="button" onClick={() => void signOut()}>Выйти</button></div></div></section></PageLayout>;
}
