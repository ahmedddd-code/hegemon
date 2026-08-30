import { useEffect, useState } from 'react';
import { loadAdminUsers, type AdminUser } from '../lib/admin';
import { Skeleton } from './Skeleton';

export function AdminUsers() {
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [users, setUsers] = useState<AdminUser[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  useEffect(() => {
    const timer = window.setTimeout(() => {
      setLoading(true);
      void loadAdminUsers(search, page).then((data) => { setUsers(data.items); setTotal(data.total); setError(''); }).catch(() => setError('Не удалось загрузить пользователей.')).finally(() => setLoading(false));
    }, 250);
    return () => window.clearTimeout(timer);
  }, [page, search]);
  return <section className="admin-table-card"><header><div><h2>Пользователи</h2><span>{total} аккаунтов</span></div><input value={search} onChange={(event) => { setSearch(event.target.value); setPage(1); }} placeholder="Поиск по email…"/></header>{error && <p className="form-message form-message--error">{error}</p>}{loading ? <Skeleton lines={5}/> : <div className="admin-table-scroll"><table><thead><tr><th>Email</th><th>Регистрация</th><th>Последний вход</th><th>Статус</th></tr></thead><tbody>{users.map((user) => <tr key={user.id}><td>{user.email}</td><td>{new Date(user.created_at).toLocaleDateString('ru-RU')}</td><td>{user.last_sign_in_at ? new Date(user.last_sign_in_at).toLocaleDateString('ru-RU') : '—'}</td><td><span className="status-badge">Активен</span></td></tr>)}</tbody></table>{!users.length && <div className="empty-state"><h3>Ничего не найдено</h3></div>}</div>}<footer><button disabled={page === 1} onClick={() => setPage((value) => value - 1)}>← Назад</button><span>Страница {page} из {Math.max(1, Math.ceil(total / 10))}</span><button disabled={page * 10 >= total} onClick={() => setPage((value) => value + 1)}>Далее →</button></footer></section>;
}
