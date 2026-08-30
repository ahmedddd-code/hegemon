import { useLocation } from 'wouter';

const HISTORY_KEY = 'hegemon-route-history';

export function BackButton() {
  const [location, navigate] = useLocation();

  const goBack = () => {
    try {
      const stored = JSON.parse(sessionStorage.getItem(HISTORY_KEY) ?? '[]') as string[];
      if (stored[stored.length - 1] === location) stored.pop();
      const previous = stored[stored.length - 1] ?? '/';
      sessionStorage.setItem(HISTORY_KEY, JSON.stringify(stored));
      navigate(previous);
    } catch {
      navigate('/');
    }
  };

  return <button className="back-button" type="button" onClick={goBack}><span aria-hidden="true">←</span> Назад</button>;
}
