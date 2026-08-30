import type { User } from '@supabase/supabase-js';
import { supabase } from './supabase';
import type { SiteItem } from './site-content';
import { findSiteItem } from './site-content';

export type RecentView = SiteItem & { viewedAt: string };
const KEY = 'hegemon-recent-views';
const EVENT = 'hegemon:recent-views';

export function readRecentViews(): RecentView[] {
  try {
    const stored: unknown = JSON.parse(localStorage.getItem(KEY) ?? '[]');
    return Array.isArray(stored) ? stored as RecentView[] : [];
  }
  catch { return []; }
}

export function saveRecentView(item: SiteItem) {
  const next = [{ ...item, viewedAt: new Date().toISOString() }, ...readRecentViews().filter((view) => view.id !== item.id)].slice(0, 8);
  localStorage.setItem(KEY, JSON.stringify(next));
  window.dispatchEvent(new Event(EVENT));
  return next;
}

export function clearRecentViews() {
  localStorage.removeItem(KEY);
  window.dispatchEvent(new Event(EVENT));
}

export async function syncRecentView(user: User, item: SiteItem) {
  await supabase.from('recent_views').upsert({ user_id: user.id, item_id: item.id, path: item.path, title: item.title, description: item.description, viewed_at: new Date().toISOString() }, { onConflict: 'user_id,item_id' });
}

export async function loadRemoteRecentViews(user: User) {
  const { data } = await supabase.from('recent_views').select('item_id,path,title,description,viewed_at').eq('user_id', user.id).order('viewed_at', { ascending: false }).limit(8);
  if (!data?.length) return;
  const remote = data.map((row) => ({ id: row.item_id, path: row.path, title: row.title, description: row.description, label: findSiteItem(row.path)?.label ?? 'HEGEMON', viewedAt: row.viewed_at })) as RecentView[];
  const merged = [...remote, ...readRecentViews().filter((local) => !remote.some((item) => item.id === local.id))].slice(0, 8);
  localStorage.setItem(KEY, JSON.stringify(merged));
  window.dispatchEvent(new Event(EVENT));
}

export async function clearRemoteRecentViews(user: User) {
  await supabase.from('recent_views').delete().eq('user_id', user.id);
}

export const recentViewsEvent = EVENT;
