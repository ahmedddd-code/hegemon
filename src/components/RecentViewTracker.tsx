import { useEffect } from 'react';
import { useLocation } from 'wouter';
import { useAuth } from '../context/AuthContext';
import { saveRecentView, syncRecentView } from '../lib/recent-views';
import { findSiteItem } from '../lib/site-content';

export function RecentViewTracker() {
  const [location] = useLocation();
  const { user } = useAuth();

  useEffect(() => {
    const item = findSiteItem(location);
    if (!item) return;
    saveRecentView(item);
    if (user) void syncRecentView(user, item);
  }, [location, user]);

  return null;
}
