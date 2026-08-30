import { useEffect, useRef, useState } from 'react';
import { uiEvents, showToast } from '../lib/ui-events';
import { Skeleton } from './Skeleton';

export function QrModal() {
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState('');
  const closeButton = useRef<HTMLButtonElement>(null);
  const url = typeof window === 'undefined' ? '' : window.location.href;
  useEffect(() => { const show = () => setOpen(true); window.addEventListener(uiEvents.qr, show); return () => window.removeEventListener(uiEvents.qr, show); }, []);
  useEffect(() => {
    if (!open) return;
    setImage('');
    void import('qrcode').then(({ default: QRCode }) => QRCode.toDataURL(window.location.href, { width: 280, margin: 2, color: { dark: '#081519', light: '#fbf8f2' } })).then(setImage);
    closeButton.current?.focus();
    const escape = (event: KeyboardEvent) => { if (event.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', escape);
    return () => window.removeEventListener('keydown', escape);
  }, [open]);
  if (!open) return null;
  const copy = async () => { await navigator.clipboard.writeText(url); showToast('Ссылка скопирована'); };
  return <div className="modal-layer" role="dialog" aria-modal="true" aria-labelledby="qr-title"><button className="overlay" aria-label="Закрыть" onClick={() => setOpen(false)}/><div className="modal qr-modal"><button ref={closeButton} className="modal__close" onClick={() => setOpen(false)} aria-label="Закрыть">×</button><span className="eyebrow eyebrow--dark">ПРОДОЛЖИТЬ НА ТЕЛЕФОНЕ</span><h2 id="qr-title">Откройте эту страницу</h2>{image ? <img src={image} alt="QR-код текущей страницы"/> : <Skeleton className="qr-skeleton"/>}<p>{url}</p><button className="button" type="button" onClick={() => void copy()}>Копировать ссылку <span>⧉</span></button></div></div>;
}
