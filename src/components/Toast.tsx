import { useEffect, useState } from 'react';
import { uiEvents } from '../lib/ui-events';

export function Toast() {
  const [message, setMessage] = useState('');
  useEffect(() => {
    let timer = 0;
    const show = (event: Event) => { setMessage((event as CustomEvent<string>).detail); window.clearTimeout(timer); timer = window.setTimeout(() => setMessage(''), 2600); };
    window.addEventListener(uiEvents.toast, show);
    return () => { window.removeEventListener(uiEvents.toast, show); window.clearTimeout(timer); };
  }, []);
  return message ? <div className="toast" role="status">✓ {message}</div> : null;
}
