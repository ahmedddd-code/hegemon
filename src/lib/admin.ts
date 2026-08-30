import { supabase } from './supabase';

export type AdminStats = {
  users_total: number;
  users_today: number;
  users_week: number;
  users_month: number;
  active_users: number;
  content_total: number;
  reviews_total: number;
  views_total: number;
  registrations: { day: string; count: number }[];
  popular: { title: string; count: number }[];
};

export async function loadAdminStats() {
  const { data, error } = await supabase.rpc('get_admin_dashboard');
  if (error) throw error;
  return data as AdminStats;
}

export type AdminUser = { id: string; email: string; created_at: string; last_sign_in_at: string | null };
export async function loadAdminUsers(search: string, page: number) {
  const { data, error } = await supabase.rpc('get_admin_users', { search_text: search, page_number: page, page_size: 10 });
  if (error) throw error;
  return data as { total: number; items: AdminUser[] };
}
