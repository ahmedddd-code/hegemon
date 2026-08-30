-- Personal HEGEMON data. Apply with: npm run db:push
create table if not exists public.recent_views (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null default auth.uid() references auth.users(id) on delete cascade,
  item_id text not null,
  path text not null,
  title text not null,
  description text not null default '',
  viewed_at timestamptz not null default now(),
  unique(user_id, item_id)
);

create table if not exists public.favorites (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null default auth.uid() references auth.users(id) on delete cascade,
  item_id text not null,
  path text not null,
  title text not null,
  description text not null default '',
  created_at timestamptz not null default now(),
  unique(user_id, item_id)
);

create table if not exists public.notifications (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  title text not null,
  body text not null,
  path text not null default '/',
  read boolean not null default false,
  created_at timestamptz not null default now()
);

create table if not exists public.reviews (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null default auth.uid() references auth.users(id) on delete cascade,
  body text not null check (char_length(body) between 2 and 1000),
  rating smallint not null check (rating between 1 and 5),
  created_at timestamptz not null default now()
);

alter table public.recent_views enable row level security;
alter table public.favorites enable row level security;
alter table public.notifications enable row level security;
alter table public.reviews enable row level security;

create policy "manage own recent views" on public.recent_views for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "manage own favorites" on public.favorites for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "read own notifications" on public.notifications for select using (auth.uid() = user_id);
create policy "update own notifications" on public.notifications for update using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "delete own notifications" on public.notifications for delete using (auth.uid() = user_id);
create policy "manage own reviews" on public.reviews for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

create index if not exists recent_views_user_date_idx on public.recent_views(user_id, viewed_at desc);
create index if not exists notifications_user_date_idx on public.notifications(user_id, created_at desc);

create or replace function public.create_welcome_notification()
returns trigger language plpgsql security definer set search_path = public as $$
begin
  insert into public.notifications(user_id, title, body, path)
  values(new.id, 'Добро пожаловать в HEGEMON', 'Узнайте, как проходит первый визит в наш мужской центр.', '/visit');
  return new;
end;
$$;

drop trigger if exists create_welcome_notification_on_signup on auth.users;
create trigger create_welcome_notification_on_signup after insert on auth.users
for each row execute function public.create_welcome_notification();

create or replace function public.get_admin_dashboard()
returns jsonb language plpgsql security definer set search_path = public, auth as $$
declare result jsonb;
begin
  if coalesce(auth.jwt()->'app_metadata'->>'role', '') <> 'admin' then
    raise exception 'admin access required';
  end if;
  select jsonb_build_object(
    'users_total', (select count(*) from auth.users),
    'users_today', (select count(*) from auth.users where created_at >= current_date),
    'users_week', (select count(*) from auth.users where created_at >= now() - interval '7 days'),
    'users_month', (select count(*) from auth.users where created_at >= now() - interval '30 days'),
    'active_users', (select count(distinct user_id) from public.recent_views where viewed_at >= now() - interval '30 days'),
    'content_total', (select count(*) from public.entries),
    'reviews_total', (select count(*) from public.reviews),
    'views_total', (select count(*) from public.recent_views),
    'registrations', coalesce((select jsonb_agg(row_data order by day) from (
      select to_char(days.day, 'YYYY-MM-DD') day, count(users.id)::int count
      from generate_series(current_date - 13, current_date, interval '1 day') days(day)
      left join auth.users users on users.created_at::date = days.day::date group by days.day
    ) row_data), '[]'::jsonb),
    'popular', coalesce((select jsonb_agg(row_data order by count desc) from (
      select title, count(*)::int count from public.recent_views group by title order by count(*) desc limit 5
    ) row_data), '[]'::jsonb)
  ) into result;
  return result;
end;
$$;

revoke all on function public.get_admin_dashboard() from public;
grant execute on function public.get_admin_dashboard() to authenticated;

create or replace function public.get_admin_users(search_text text default '', page_number int default 1, page_size int default 10)
returns jsonb language plpgsql security definer set search_path = public, auth as $$
declare result jsonb; total_count bigint;
begin
  if coalesce(auth.jwt()->'app_metadata'->>'role', '') <> 'admin' then raise exception 'admin access required'; end if;
  select count(*) into total_count from auth.users where email ilike '%' || coalesce(search_text, '') || '%';
  select jsonb_build_object(
    'total', total_count,
    'items', coalesce(jsonb_agg(jsonb_build_object('id', id, 'email', email, 'created_at', created_at, 'last_sign_in_at', last_sign_in_at)), '[]'::jsonb)
  ) into result from (
    select id, email, created_at, last_sign_in_at from auth.users
    where email ilike '%' || coalesce(search_text, '') || '%'
    order by created_at desc limit greatest(1, least(page_size, 50))
    offset greatest(0, page_number - 1) * greatest(1, least(page_size, 50))
  ) users;
  return coalesce(result, jsonb_build_object('total', 0, 'items', '[]'::jsonb));
end;
$$;

revoke all on function public.get_admin_users(text, int, int) from public;
grant execute on function public.get_admin_users(text, int, int) to authenticated;
