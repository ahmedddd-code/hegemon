import { useEffect } from 'react';
import { useLocation } from 'wouter';

const HISTORY_KEY = 'hegemon-route-history';

export function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    try {
      const stored = JSON.parse(sessionStorage.getItem(HISTORY_KEY) ?? '[]') as string[];
      if (stored[stored.length - 1] !== location) {
        sessionStorage.setItem(HISTORY_KEY, JSON.stringify([...stored.slice(-19), location]));
      }
    } catch {
      sessionStorage.setItem(HISTORY_KEY, JSON.stringify([location]));
    }
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location]);
  return null;
}
