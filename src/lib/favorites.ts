import { supabase } from './supabase';
import type { SiteItem } from './site-content';

export async function loadFavorites(userId: string) {
  const { data, error } = await supabase.from('favorites').select('item_id').eq('user_id', userId);
  if (error) throw error;
  return new Set((data ?? []).map((row) => row.item_id as string));
}

export async function toggleFavorite(userId: string, item: SiteItem, active: boolean) {
  if (active) return supabase.from('favorites').delete().eq('user_id', userId).eq('item_id', item.id);
  return supabase.from('favorites').upsert({ user_id: userId, item_id: item.id, path: item.path, title: item.title, description: item.description }, { onConflict: 'user_id,item_id' });
}
