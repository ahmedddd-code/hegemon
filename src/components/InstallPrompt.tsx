import { useEffect, useState } from 'react';

interface InstallEvent extends Event { prompt: () => Promise<void>; userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }> }
const KEY = 'hegemon-install-dismissed';

export function InstallPrompt() {
  const [event, setEvent] = useState<InstallEvent | null>(null);
  const [visible, setVisible] = useState(false);
  const [ios, setIos] = useState(false);
  useEffect(() => {
    const standalone = window.matchMedia('(display-mode: standalone)').matches;
    if (standalone || localStorage.getItem(KEY)) return;
    const visits = Number(localStorage.getItem('hegemon-visits') ?? 0) + 1;
    localStorage.setItem('hegemon-visits', String(visits));
    const handler = (next: Event) => { next.preventDefault(); setEvent(next as InstallEvent); if (visits > 1) window.setTimeout(() => setVisible(true), 6000); };
    window.addEventListener('beforeinstallprompt', handler);
    const isIos = /iphone|ipad|ipod/i.test(navigator.userAgent);
    if (isIos && visits > 1) { setIos(true); window.setTimeout(() => setVisible(true), 9000); }
    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);
  if (!visible || (!event && !ios)) return null;
  const dismiss = () => { localStorage.setItem(KEY, new Date().toISOString()); setVisible(false); };
  const install = async () => { if (!event) return; await event.prompt(); const choice = await event.userChoice; if (choice.outcome === 'accepted') setVisible(false); else dismiss(); };
  return <aside className="install-prompt"><img src="/images/hegemon-mark-transparent.png" alt=""/><div><strong>HEGEMON на вашем экране</strong><p>{ios ? 'Нажмите «Поделиться», затем «На экран Домой».' : 'Установите сайт как удобное приложение.'}</p></div>{event && <button className="button" onClick={() => void install()}>Установить</button>}<button className="install-prompt__close" onClick={dismiss} aria-label="Не показывать">×</button></aside>;
}
